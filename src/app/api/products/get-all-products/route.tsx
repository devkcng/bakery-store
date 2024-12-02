import prisma from "@/clients/prismaClient";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

// Lấy danh sách toàn bộ sản phẩm
export async function GET(req: NextApiRequest) {
  try {
    const products = await prisma.product.findMany({
      include: {
        category: true,
        productToppings: true,
        recipes: true,
        orderDetails: true,
      },
    });
    return NextResponse.json({ message: "OK", products });
  } catch (error) {
    return NextResponse.json(
      { message: "error", error: error.message },
      { status: 500 }
    );
  }
}

// Thêm một sản phẩm mới
export async function POST(req: NextApiRequest) {
  try {
    const {
      name,
      category_id,
      price,
      description,
      img_path,
      max_daily_quantity_limit,
      product_capacity_per_batch,
    } = await req.json();

    // Kiểm tra các trường bắt buộc
    if (!name || !price) {
      return NextResponse.json(
        { message: "Name and price are required" },
        { status: 400 }
      );
    }

    const newProduct = await prisma.product.create({
      data: {
        name,
        category_id,
        price,
        description,
        img_path,
        max_daily_quantity_limit,
        product_capacity_per_batch,
      },
    });

    return NextResponse.json({
      message: "Product created successfully",
      product: newProduct,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "error", error: error.message },
      { status: 500 }
    );
  }
}
