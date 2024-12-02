// src/app/api/categories/route.ts
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const baseUrl = process.env.BACKEND_URL + "categories";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const response = await axios.get(baseUrl);
      res.status(200).json(response.data);
    } catch (error) {
      if (error instanceof Error) {
        res
          .status(500)
          .json({ message: "Error fetching categories", error: error.message });
      } else {
        res
          .status(500)
          .json({
            message: "Error fetching categories",
            error: "Unknown error",
          });
      }
    }
  } else if (req.method === "POST") {
    try {
      const { name } = req.body;

      const response = await axios.post(baseUrl, { name });
      res.status(201).json(response.data);
    } catch (error) {
      if (error instanceof Error) {
        res
          .status(500)
          .json({ message: "Error creating category", error: error.message });
      } else {
        res
          .status(500)
          .json({ message: "Error creating category", error: "Unknown error" });
      }
    }
  } else if (req.method === "PATCH") {
    try {
      const { id, ...updateData } = req.body;

      if (!id) {
        return res.status(400).json({ message: "Category ID is required" });
      }

      const response = await axios.patch(`${baseUrl}/${id}`, updateData);
      res.status(200).json(response.data);
    } catch (error) {
      if (error instanceof Error) {
        res
          .status(500)
          .json({ message: "Error updating category", error: error.message });
      } else {
        res
          .status(500)
          .json({ message: "Error updating category", error: "Unknown error" });
      }
    }
  } else if (req.method === "DELETE") {
    try {
      const { id } = req.body;

      if (!id) {
        return res.status(400).json({ message: "Category ID is required" });
      }

      const response = await axios.delete(`${baseUrl}/${id}`);
      res.status(200).json(response.data);
    } catch (error) {
      if (error instanceof Error) {
        res
          .status(500)
          .json({ message: "Error deleting category", error: error.message });
      } else {
        res
          .status(500)
          .json({ message: "Error deleting category", error: "Unknown error" });
      }
    }
  } else {
    res.setHeader("Allow", ["GET", "POST", "PATCH", "DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
