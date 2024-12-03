// src/app/api/toppings/route.ts
import { NextResponse } from "next/server";
import axios from "axios";

const baseUrl = process.env.BACKEND_URL + "toppings";

// GET Handler
export async function GET() {
  try {
    const response = await axios.get(baseUrl);
    return NextResponse.json(response.data);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { message: "Error fetching toppings", error: errorMessage },
      { status: 500 }
    );
  }
}

// POST Handler
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, price } = body;

    const response = await axios.post(baseUrl, { name, price });
    return NextResponse.json(response.data, { status: 201 });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { message: "Error creating topping", error: errorMessage },
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
        { message: "Topping ID is required" },
        { status: 400 }
      );
    }

    const response = await axios.patch(`${baseUrl}/${id}`, updateData);
    return NextResponse.json(response.data);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { message: "Error updating topping", error: errorMessage },
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
        { message: "Topping ID is required" },
        { status: 400 }
      );
    }

    const response = await axios.delete(`${baseUrl}/${id}`);
    return NextResponse.json(response.data);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { message: "Error deleting topping", error: errorMessage },
      { status: 500 }
    );
  }
}

// function used in the frontend to fetch topping names from the API (used on add-bakery component)
export async function fetchToppingsFromAPI() {
  try {
    const response = await fetch("/api/toppings");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching topping names:", error);
    throw error;
  }
}