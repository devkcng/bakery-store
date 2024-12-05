// src/app/api/dashboard/route.ts
import { NextResponse } from "next/server";
import axios from "axios";

const baseUrl = process.env.BACKEND_URL + "dashboard";

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

export const fetchDashboardData = async () => {
    try {
      const response = await fetch("/api/dashboard");
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
}