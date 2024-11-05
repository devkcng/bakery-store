"use client";
import Footer from "@/components/Footer/footer";
import NavBar from "@/components/header/nav-bar";
import DetailItem from "@/components/section/detail-product-section/detail-product-section";
import { useEffect, useState } from "react";
// // Define type for Topping
interface Topping {
  id: number;
  name: string;
  price: number;
}

// Define type for ProductTopping
interface ProductTopping {
  id: number;
  product_id: number;
  topping_id: number;
  topping: Topping;
}
interface Product {
  id: number;
  name: string;
  category_id: number;
  price: number;
  description: string;
  img_path?: string;
  max_daily_quantity_limit: number;
  product_capacity_per_batch: number;
  category: Category;
  ProductTopping: ProductTopping[];
  Recipe: any[];
}

// Define type for Category
interface Category {
  id: number;
  name: string;
  Product: Product[];
}

// Define type for API Response
interface APIResponse {
  id: number;
  name: string;
  category_id: number;
  price: number;
  description: string;
  img_path: string;
  max_daily_quantity_limit: number;
  product_capacity_per_batch: number;
  category: Category;
  ProductTopping: ProductTopping[];
  Recipe: any[];
}

const ProductDetail = ({ params }: { params: { id: string } }) => {
  const [data, setData] = useState<APIResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/products/get-product-by-id?id=${params.id}`
        );
        if (!response.ok) {
          throw new Error("Error");
        }
        const result = await response.json();
        setData(result.product);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Undefined Error");
      }
    };
    fetchData();
  }, [params.id]);
  console.log(data);
  console.log("Check", data?.category.Product);

  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <NavBar className="bg-black" />
        {data ? (
          <DetailItem
            product={{
              imagePath: data.img_path,
              itemDescription: data.description,
              itemName: data.name,
              itemPrice: data.price,
              toppings: data.ProductTopping.map((pt) => ({
                toppingId: pt.topping.id.toString(),
                toppingName: pt.topping.name,
                toppingPrice: pt.topping.price.toString(),
              })),
              relatedProduct: data.category.Product.map((p) => ({
                itemID: p.id,
                imagePath: p.img_path || "",
                itemName: p.name,
                itemPrice: p.price,
              })),
            }}
          />
        ) : (
          <p>{error || "Loading..."}</p>
        )}
        <div className="mt-[35px]">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
