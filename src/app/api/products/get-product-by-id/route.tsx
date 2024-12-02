import prisma from "@/clients/prismaClient";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest) {
  const { searchParams } = new URL(req.url!);
  const productId = parseInt(searchParams.get("id") || "");

  if (isNaN(productId)) {
    return NextResponse.json(
      { message: "Invalid product ID" },
      { status: 400 }
    );
  }

  try {
    const product = await prisma.product.findUnique({
      where: { id: productId },
      include: {
        category: {
          include: {
            products: {
              where: { NOT: { id: productId } }, // Loại bỏ sản phẩm hiện tại khỏi danh sách sản phẩm liên quan
              take: 3, // Giới hạn số lượng sản phẩm liên quan
            },
          },
        },
        productToppings: {
          include: {
            topping: true, // Lấy topping thông qua quan hệ productToppings
          },
        },
      },
    });

    if (!product) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    // Chuyển đổi dữ liệu thành định dạng mà bạn muốn trả về
    const responseData = {
      product: {
        id: product.id,
        name: product.name,
        category_id: product.category_id,
        price: product.price,
        description: product.description,
        img_path: product.img_path,
        max_daily_quantity_limit: product.max_daily_quantity_limit,
        product_capacity_per_batch: product.product_capacity_per_batch,
      },
      toppings: product.productToppings.map((productTopping) => ({
        id: productTopping.topping.id,
        name: productTopping.topping.name,
        price: productTopping.topping.price,
      })),
      relatedProducts: product.category.products.map((relatedProduct) => ({
        id: relatedProduct.id,
        name: relatedProduct.name,
        price: relatedProduct.price,
        img_path: relatedProduct.img_path,
      })),
    };

    return NextResponse.json({ message: "OK", data: responseData });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
