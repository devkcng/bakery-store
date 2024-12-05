"use client";
import NavBar from "@/components/header/nav-bar";
import DetailProduct, {
  CartItemProps,
} from "@/components/section/detail-product-section/detail-product-section";
import { useEffect, useState } from "react";

const ProductDetail = ({ params }: { params: { id: string } }) => {
  const [data, setData] = useState<CartItemProps | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/products/${params.id}`
        );
        if (!response.ok) {
          throw new Error("Error fetching data");
        }

        const result = await response.json();
        console.log("API Response: ", result); // Kiểm tra kết quả trả về
        setData(result); // Hoặc thay result.data bằng kết quả đúng
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Undefined Error");
      }
    };
    fetchData();
  }, [params.id]); // Chạy lại khi params.id thay đổi

  console.log("Data from state: ", data);

  return (
    <div>
      <div className="min-h-screen">
        <NavBar className="bg-black" />
        <div className="mb-14">
          {data ? (
            <DetailProduct
              product={data.product}
              toppings={data.toppings}
              relatedProduct={data.relatedProducts}
            />
          ) : (
            <p>Loading...</p> // Hoặc hiển thị thông báo lỗi nếu không có dữ liệu
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
