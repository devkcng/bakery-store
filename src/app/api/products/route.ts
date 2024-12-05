import { NextResponse } from "next/server";
import axios from "axios";

const baseUrl = process.env.BACKEND_URL + "products";

// GET Handler
export async function GET() {
    try {
        const response = await axios.get(baseUrl);
        return NextResponse.json(response.data);
    } catch (error) {
        const errorMessage =
            error instanceof Error ? error.message : "Unknown error";
        return NextResponse.json(
            { message: "Error fetching products", error: errorMessage },
            { status: 500 }
        );
    }
}

// POST Handler
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const response = await axios.post(baseUrl, body);
        return NextResponse.json(response.data, { status: 201 });
    } catch (error) {
        const errorMessage =
            error instanceof Error ? error.message : "Unknown error";
        return NextResponse.json(
            { message: "Error creating product", error: errorMessage },
            { status: 500 }
        );
    }
}

// DELETE Handler
export async function DELETE(req: Request) {
    try {
        const body = await req.json();
        const { id } = body;

        const response = await axios.delete(`${baseUrl}/${id}`);
        return NextResponse.json(response.data);
    } catch (error) {
        const errorMessage =
            error instanceof Error ? error.message : "Unknown error";
        return NextResponse.json(
            { message: "Error deleting product", error: errorMessage },
            { status: 500 }
        );
    }
}

// PATCH Handler
export async function PATCH(req: Request) {
    try {
        const body = await req.json();
        const { id, ...updateData } = body;

        if (!id) {
            return NextResponse.json(
                { message: "Product ID is required" },
                { status: 400 }
            );
        }

        const response = await axios.patch(`${baseUrl}/${id}`, updateData);
        return NextResponse.json(response.data);
    } catch (error) {
        const errorMessage =
            error instanceof Error ? error.message : "Unknown error";
        return NextResponse.json(
            { message: "Error updating product", error: errorMessage },
            { status: 500 }
        );
    }
}

// get the number of products

export async function getNumberOfProducts() {
  try {
    const response = await fetch("/api/products");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    if (Array.isArray(data.products)) {
      return data.products.length;
    }

    throw new Error(
      "Unexpected response structure: 'products' is missing or not an array"
    );
  } catch (error) {
    console.error("Error fetching number of products:", error);
    throw error;
  }
}
