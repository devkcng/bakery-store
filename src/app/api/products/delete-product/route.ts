import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "DELETE") {
    try {
      const { id } = req.body;

      if (!id) {
        return res.status(400).json({ message: "Product ID is required" });
      }

      const response = await axios.delete(
        `http://localhost:8080/api/products/${id}`
      );

      res.status(200).json(response.data);
    } catch (error) {
      if (error instanceof Error) {
        res
          .status(500)
          .json({ message: "Error deleting product", error: error.message });
      } else {
        res
          .status(500)
          .json({ message: "Error deleting product", error: "Unknown error" });
      }
    }
  } else {
    res.setHeader("Allow", ["DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
