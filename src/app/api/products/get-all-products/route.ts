import prisma from "@/clients/prismaClient";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest) {
  {
    try {
      const products = await prisma.product.findMany({
        include: {
          category: true,
          ProductTopping: true,
          Recipe: true,
          OrderDetail: true,
        },
      });
      return Response.json({ message: "OK", products });
    } catch (error) {
      return NextResponse.json({ message: "error", error }, { status: 500 });
    }
  }
}
