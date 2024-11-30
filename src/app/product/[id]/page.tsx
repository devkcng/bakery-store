"use client";
import Footer from "@/components/footer/footer";
import NavBar from "@/components/header/nav-bar";
import DetailProduct, {
  ProductAttribute,
} from "@/components/section/detail-product-section/detail-product-section";
import { useEffect, useState } from "react";

const ProductDetail = ({ params }: { params: { id: string } }) => {
  // const Item: ProductAttribute = {
  //   imagePath: "",
  //   itemName: "Bánh Pizza Margherita",
  //   itemPrice: "150000",
  //   toppings: [
  //     { toppingId: "topping1", toppingName: "Nấm", toppingPrice: "20000" },
  //     { toppingId: "topping3", toppingName: "Nấm", toppingPrice: "20000" },
  //     {
  //       toppingId: "topping2",
  //       toppingName: "Ớt chuông",
  //       toppingPrice: "15000",
  //     },
  //   ],
  //   itemDescription:
  //     "Pizza truyền thống với sốt cà chua, phô mai và húng quế tươi.",
  //   relatedProduct: [
  //     {
  //       imagePath: "",
  //       itemName: "Bánh Muffin Trái Cây",
  //       itemPrice: 25000,
  //     },
  //     {
  //       imagePath: "",
  //       itemName: "Bánh Quy Bơ",
  //       itemPrice: 25000,
  //     },
  //     {
  //       imagePath: "",
  //       itemName: "Bánh Quy Bơ",
  //       itemPrice: 25000,
  //     },
  //   ],
  // };

  const [data, setData] = useState();
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(` ${params.id}`);
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
  return (
    <div>
      <div className="flex flex-col ">
        <NavBar className="bg-black" />
        {/* <DetailProduct product={}></DetailProduct>  */}
        <div className="mt-[35px]">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
