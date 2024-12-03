// src/app/api/products/add-product/route.ts
import { NextResponse } from "next/server";
import axios from "axios";

const baseUrl = process.env.BACKEND_URL + "products";

export async function POST(req: Request) {
  try {
    const {
      name,
      price,
      description,
      category_id,
      img_path,
      max_daily_quantity_limit,
      product_capacity_per_batch,
    } = await req.json();

    const response = await axios.post(baseUrl, {
      name,
      price,
      description,
      category_id,
      img_path,
      max_daily_quantity_limit,
      product_capacity_per_batch,
    });

    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { message: "Error adding product", error: errorMessage },
      { status: 500 }
    );
  }
}

// create a function for frontend to call, use the POSE above 
export async function addProduct(
  product: {
    name: string;
    price: number;
    description: string;
    category_id: number;
    img_path: string;
    max_daily_quantity_limit: number;
    product_capacity_per_batch: number;
  }
) {
  try {
    const response = await fetch("/api/products/add-product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    return await response.json();
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { message: "Error adding product", error: errorMessage },
      { status: 500 }
    );
  }
}
