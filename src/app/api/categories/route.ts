// src/app/api/categories/route.ts
import { NextResponse } from "next/server";
import axios from "axios";

const baseUrl = process.env.BACKEND_URL + "categories";

// GET Handler
export async function GET() {
  try {
    const response = await axios.get(baseUrl);
    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { message: "Error fetching categories", error: errorMessage },
      { status: 500 }
    );
  }
}

// POST Handler
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name } = body;

    const response = await axios.post(baseUrl, { name });
    return NextResponse.json(response.data, { status: 201 });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { message: "Error creating category", error: errorMessage },
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
        { message: "Category ID is required" },
        { status: 400 }
      );
    }

    const response = await axios.patch(`${baseUrl}/${id}`, updateData);
    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { message: "Error updating category", error: errorMessage },
      { status: 500 }
    );
  }
}

// DELETE Handler
export async function DELETE(req: Request) {
  try {
    const body = await req.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json(
        { message: "Category ID is required" },
        { status: 400 }
      );
    }

    const response = await axios.delete(`${baseUrl}/${id}`);
    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { message: "Error deleting category", error: errorMessage },
      { status: 500 }
    );
  }
}

// Function used in the frontend to fetch category names from the API
export const fetchCategoriesFromAPI = async () => {
  try {
    const response = await fetch("/api/categories");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Categories data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};
