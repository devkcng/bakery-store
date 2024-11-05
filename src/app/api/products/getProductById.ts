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
            Product: {
              where: { NOT: { id: productId } },
              take: 3,
            },
          },
        },
        ProductTopping: true,
        Recipe: true,
      },
    });

    if (!product) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "OK", product });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
