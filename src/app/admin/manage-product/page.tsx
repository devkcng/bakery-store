"use client";
import Button from "@/components/button/button";
import ProductCard from "@/components/product-card/product-card";
import SearchBar from "@/components/search-bar/search-bar";
import SidebarAdmin from "@/components/sidebar-admin/sidebarAdmin";
import { useRouter } from "next/navigation";

const ManageProduct = () => {
  const router = useRouter();
  return (
    <div className=" ml-[250px] mt-5 pl-[10px] ">
      <SidebarAdmin></SidebarAdmin>
      <div>
        <SearchBar isShow={true}></SearchBar>
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
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
    </div>
  );
};

export default ManageProduct;
