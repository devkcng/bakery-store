import prisma from "@/clients/prismaClient";
import { NextResponse } from "next/server";

// Lấy danh sách sản phẩm theo category
export async function GET(req: Request) {
  try {
    // Lấy query string từ URL
    const { searchParams } = new URL(req.url);
    const category_id = searchParams.get("category_id");

    // Kiểm tra nếu category_id không được cung cấp
    if (!category_id) {
      return NextResponse.json(
        { message: "Category ID is required" },
        { status: 400 }
      );
    }

    // Tìm sản phẩm theo category_id
    const products = await prisma.product.findMany({
      where: {
        category_id: parseInt(category_id, 10), // Chuyển category_id sang số
      },
      include: {
        category: true,
        productToppings: true,
        recipes: true,
        orderDetails: true,
      },
    });

    // Nếu không tìm thấy sản phẩm nào
    if (products.length === 0) {
      return NextResponse.json(
        { message: "No products found for the given category" },
        { status: 404 }
      );
    }

    // Trả về danh sách sản phẩm
    return NextResponse.json({ message: "OK", products });
  } catch (error) {
    return NextResponse.json(
      { message: "Error", error: error.message },
      { status: 500 }
    );
  }
}
