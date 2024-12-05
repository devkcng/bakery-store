"use client";
import Button from "@/components/button/button";
import ProductCard from "@/components/product-card/product-card";
import { CartItemProps } from "@/components/section/detail-product-section/detail-product-section";
import SidebarAdmin from "@/components/sidebar-admin/sidebarAdmin";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ManageProduct = () => {
  const router = useRouter();
  const [data, setData] = useState<CartItemProps[]>([]);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/products/admin/all-products"
        );
        if (!response.ok) {
          throw new Error("Error fetching data");
        }

        const result = await response.json();
        console.log("API Response: ", result[0].product); // Kiểm tra kết quả trả về
        setData(result); // Hoặc thay result.data bằng kết quả đúng
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Undefined Error");
      }
    };
    fetchData();
  }, []); // Chạy lại khi params.id thay đổi
  return (
    <div className=" ml-[250px] mt-5 pl-[10px] ">
      <SidebarAdmin></SidebarAdmin>
      <div>
        <div className=" mt-3 flex items-center justify-between mr-4 ">
          <div className=" font-bold text-[30px] w-[65%] ">
            Quản lý sản phẩm
          </div>

          <Button
            className="bg-green-400 rounded-[30px] h-10 w-[110px] px-2 text-center"
            type="button"
            onClick={() => (window.location.href = "/admin/add-product")}
          >
            <div className="flex justify-content-center ">
              <svg
                className="mr-2"
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    opacity="0.1"
                    d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    fill="#ffffff"
                  ></path>{" "}
                  <path
                    d="M9 12H15"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M12 9L12 15"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="#ffffff"
                    strokeWidth="2"
                  ></path>{" "}
                </g>
              </svg>
              <span className="ml-1 text-white">Thêm</span>
            </div>
          </Button>
        </div>
      </div>
      <div className="overflow-y-auto max-h-[550px] scrollbar-hidden mt-3 w-full ">
        {data &&
          data.map((item, index) => (
            <ProductCard
              key={index}
              product={item.product}
              toppings={item.toppings}
            />
          ))}

        {/* <ProductCard
          productInfo={{
            imagePath: "/imgs/bakery-images/cookiesb.png",
            itemName: "Bánh cookies",
            itemPrice: 20000,
          }}
          productTopping="sốt socola, nho khô, hạnh nhân lát"
        />
        <ProductCard
          productInfo={{
            imagePath: "/imgs/bakery-images/donutb.png",
            itemName: "Bánh donut",
            itemPrice: 30000,
          }}
          productTopping="Socola đen, mứt trái cây, Bánh oreo, Mứt việt quất"
        />
        <ProductCard
          productInfo={{
            imagePath: "/imgs/bakery-images/cupcakeb.png",
            itemName: "Bánh cupcake",
            itemPrice: 20000,
          }}
          productTopping="Mứt việt quất, Socola đen, Bột cacao"
        />
        <ProductCard
          productInfo={{
            imagePath: "/imgs/bakery-images/pizzab.png",
            itemName: "Pizza hải sản",
            itemPrice: 200000,
          }}
          productTopping="tôm, nghêu, ớt chuông"
        />
        <ProductCard
          productInfo={{
            imagePath: "/imgs/bakery-images/eggtartb.png",
            itemName: "Bánh tart trứng",
            itemPrice: 30000,
          }}
          productTopping="Hạnh nhân khô"
        />
        <ProductCard
          productInfo={{
            imagePath: "/imgs/bakery-images/saltedb.png",
            itemName: "Bông lan trứng muối",
            itemPrice: 150000,
          }}
          productTopping="Thịt nguội, Sốt mayonaise, Hạt vừng"
        />
        <ProductCard
          productInfo={{
            imagePath: "/imgs/bakery-images/browniesb.png",
            itemName: "Bánh brownies",
            itemPrice: 50000,
          }}
          productTopping="Kiwi, Bột matcha, Mứt đào, Mứt việt quất"
        />
        <ProductCard
          productInfo={{
            imagePath: "/imgs/bakery-images/bananapieb.png",
            itemName: "Bánh chuối",
            itemPrice: 80000,
          }}
          productTopping="Hạt vừng, nho khô, Hạnh nhân lát"
        />
        <ProductCard
          productInfo={{
            imagePath: "/imgs/bakery-images/chouxbb.png",
            itemName: "Bánh su kem",
            itemPrice: 10000,
          }}
          productTopping="Kem tươi, Mật ong, Sốt caramel"
        />
        <ProductCard
          productInfo={{
            imagePath: "/imgs/bakery-images/macaronb.png",
            itemName: "Bánh macaron",
            itemPrice: 20000,
          }}
          productTopping="Bơ đậu phộng, Dâu tây tươi, Mâm xôi"
        /> */}
      </div>
    </div>
  );
};

export default ManageProduct;
