// src/app/api/warehouses/route.ts
import { NextResponse } from "next/server";
import axios from "axios";

const baseUrl = process.env.BACKEND_URL + "warehouses";

// GET Handler
export async function GET() {
  try {
    const response = await axios.get(baseUrl);
    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { message: "Error fetching warehouses", error: errorMessage },
      { status: 500 }
    );
  }
}

// POST Handler
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, quantity, unit } = body;

    console.log("Request body:", body);

    const response = await axios.post(baseUrl, { name, quantity, unit });
    console.log("Response data:", response.data);

    return NextResponse.json(response.data, { status: 201 });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    console.error("Error creating warehouse:", errorMessage);
    return NextResponse.json(
      { message: "Error creating warehouse", error: errorMessage },
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
        { message: "Warehouse ID is required" },
        { status: 400 }
      );
    }

    const response = await axios.patch(`${baseUrl}/${id}`, updateData);
    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { message: "Error updating warehouse", error: errorMessage },
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
        { message: "Warehouse ID is required" },
        { status: 400 }
      );
    }

    const response = await axios.delete(`${baseUrl}/${id}`);
    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { message: "Error deleting warehouse", error: errorMessage },
      { status: 500 }
    );
  }
}

// create fetchIngredientNamesFromAPI function (ingredient names is the same as warehouse names)
export async function fetchIngredientNamesFromAPI() {
 try {
   const response = await fetch("/api/warehouses");
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

// create AddIngredient function to add ingredient to warehouse

type Warehouse = {
  name: string;
  quantity: number;
  unit: string;
};

export async function addIngredient(ingredient: Warehouse) {
  try {
    const response = await fetch("/api/warehouses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ingredient),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding ingredient:", error);
    throw error;
  }
}
