// src/app/api/product-toppings/route.ts
import { NextResponse } from "next/server";
import axios from "axios";

const baseUrl = process.env.BACKEND_URL + "product-toppings";

// GET Handler
export async function GET() {
  try {
    const response = await axios.get(baseUrl);
    return NextResponse.json(response.data);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { message: "Error fetching product toppings", error: errorMessage },
      { status: 500 }
    );
  }
}

// POST Handler

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { product_id, topping_id } = body;

    console.log("POST request body:", body); // Log the request body

    const response = await axios.post(baseUrl, { product_id, topping_id });
    console.log("POST response data:", response.data); // Log the response data

    return NextResponse.json(response.data, { status: 201 });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    console.error("Error creating product topping:", errorMessage); // Log the error
    return NextResponse.json(
      { message: "Error creating product topping", error: errorMessage },
      { status: 500 }
    );
  }
}

// DELETE Handler

export async function DELETE(req: Request) {
  try {
    const body = await req.json();
    const { product_id, topping_id } = body;

    const response = await axios.delete(baseUrl, { data: { product_id, topping_id } });
    return NextResponse.json(response.data);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { message: "Error deleting product topping", error: errorMessage },
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
        { message: "Product Topping ID is required" },
        { status: 400 }
      );
    }

    const response = await axios.patch(`${baseUrl}/${id}`, updateData);
    return NextResponse.json(response.data);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { message: "Error updating product topping", error: errorMessage },
      { status: 500 }
    );
  }
}

// create a function for frontend to call, use the POSE above

export async function addProductTopping(productTopping: {
  product_id: number;
  topping_id: number;
}) {
  try {
    console.log("Sending POST request with:", productTopping); // Log the request payload

    const response = await fetch("/api/product-toppings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productTopping),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("Error response from POST request:", error); // Log the error response
      throw new Error(error.message);
    }

    console.log("POST request successful"); // Log success message
  } catch (error) {
    console.error("Error in addProductTopping:", error); // Log the error
    throw error;
  }
}