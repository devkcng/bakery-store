"use client";
import IngredientDetail from "@/components/Admin/manage-ingredient-detail";
import Button from "@/components/button/button";
import SidebarAdmin from "@/components/sidebar-admin/sidebarAdmin";
import { WareHouse } from "@prisma/client";
import axios from "axios";
import { useEffect, useState } from "react";

const ManageIngredient = () => {
  const pseudoIngredientData: IngredientDetail[] = [
    {
      iD: "1",
      ingredientName: "Bột mì",
      quantity: "100",
      unit: "kg",
      ingredientPrice: "2000000",
    },
    {
      iD: "2",
      ingredientName: "Đường",
      quantity: "50",
      unit: "kg",
      ingredientPrice: "1500000",
    },
    {
      iD: "3",
      ingredientName: "Sữa tươi",
      quantity: "100",
      unit: "l",
      ingredientPrice: "2500000",
    },
    {
      iD: "4",
      ingredientName: "Bơ thực vật",
      quantity: "20",
      unit: "kg",
      ingredientPrice: "1000000",
    },
    {
      iD: "5",
      ingredientName: "Sữa đặc",
      quantity: "50",
      unit: "l",
      ingredientPrice: "1000000",
    },
    {
      iD: "6",
      ingredientName: "Trứng gà",
      quantity: "1000",
      unit: "quả",
      ingredientPrice: "1200000",
    },
    {
      iD: "7",
      ingredientName: "Bột nở",
      quantity: "50",
      unit: "kg",
      ingredientPrice: "1000000",
    },
    {
      iD: "8",
      ingredientName: "Bơ nhạt",
      quantity: "20",
      unit: "kg",
      ingredientPrice: "1000000",
    },
    {
      iD: "9",
      ingredientName: "Men",
      quantity: "20",
      unit: "kg",
      ingredientPrice: "800000",
    },
    {
      iD: "10",
      ingredientName: "Bột bắp",
      quantity: "30",
      unit: "kg",
      ingredientPrice: "1000000",
    },
    {
      iD: "11",
      ingredientName: "Socola đen",
      quantity: "100",
      unit: "kg",
      ingredientPrice: "2000000",
    },
    {
      iD: "12",
      ingredientName: "Bột cacao",
      quantity: "10",
      unit: "kg",
      ingredientPrice: "1200000",
    },
    {
      iD: "13",
      ingredientName: "Bơ đậu phộng",
      quantity: "10",
      unit: "kg",
      ingredientPrice: "600000",
    },
    {
      iD: "14",
      ingredientName: "Chuối",
      quantity: "20",
      unit: "kg",
      ingredientPrice: "300000",
    },
    {
      iD: "15",
      ingredientName: "Nho khô",
      quantity: "10",
      unit: "kg",
      ingredientPrice: "500000",
    },
    {
      iD: "16",
      ingredientName: "Táo tươi",
      quantity: "20",
      unit: "kg",
      ingredientPrice: "500000",
    },
    {
      iD: "17",
      ingredientName: "Bột baking powder",
      quantity: "10",
      unit: "kg",
      ingredientPrice: "300000",
    },
    {
      iD: "18",
      ingredientName: "Bột mì",
      quantity: "100",
      unit: "kg",
      ingredientPrice: "1000000",
    },
    {
      iD: "19",
      ingredientName: "Cà phê",
      quantity: "5",
      unit: "kg",
      ingredientPrice: "500000",
    },
    {
      iD: "20",
      ingredientName: "Kem tươi",
      quantity: "100",
      unit: "kg",
      ingredientPrice: "500000",
    },
    {
      iD: "21",
      ingredientName: "Mật ong",
      quantity: "100",
      unit: "kg",
      ingredientPrice: "1000000",
    },
    {
      iD: "22",
      ingredientName: "Tinh chất vani",
      quantity: "5",
      unit: "kg",
      ingredientPrice: "200000",
    },
    {
      iD: "23",
      ingredientName: "Muối",
      quantity: "50",
      unit: "kg",
      ingredientPrice: "200000",
    },
    {
      iD: "24",
      ingredientName: "Chanh",
      quantity: "1",
      unit: "kg",
      ingredientPrice: "10000",
    },
    {
      iD: "25",
      ingredientName: "Dầu ăn",
      quantity: "100",
      unit: "l",
      ingredientPrice: "1200000",
    },
    {
      iD: "26",
      ingredientName: "Tôm",
      quantity: "20",
      unit: "kg",
      ingredientPrice: "2000000",
    },
    {
      iD: "27",
      ingredientName: "Nghêu",
      quantity: "10",
      unit: "kg",
      ingredientPrice: "1000000",
    },
    {
      iD: "28",
      ingredientName: "Ớt chuông",
      quantity: "10",
      unit: "kg",
      ingredientPrice: "500000",
    },
    {
      iD: "29",
      ingredientName: "Tỏi",
      quantity: "3",
      unit: "kg",
      ingredientPrice: "12000",
    },
    {
      iD: "30",
      ingredientName: "Hành",
      quantity: "2",
      unit: "kg",
      ingredientPrice: "12000",
    },
    {
      iD: "31",
      ingredientName: "Cà chua",
      quantity: "10",
      unit: "kg",
      ingredientPrice: "100000",
    },
    {
      iD: "32",
      ingredientName: "Tương cà",
      quantity: "3",
      unit: "kg",
      ingredientPrice: "50000",
    },
    {
      iD: "33",
      ingredientName: "Dầu oliu",
      quantity: "3",
      unit: "kg",
      ingredientPrice: "100000",
    },
    {
      iD: "34",
      ingredientName: "Phô mai",
      quantity: "3",
      unit: "kg",
      ingredientPrice: "50000",
    },
  ];
  const [warehouses, setWarehouses] = useState<WareHouse[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/warehouses"
        );
        setWarehouses(response.data);
      } catch (error) {
        console.error("Error fetching warehouses:", error);
      }
    };

    fetchData();
  }, []); // Chỉ chạy một lần khi component được render
  console.log(warehouses);
  return (
    <div className=" ml-[250px] mt-3 pl-[10px] ">
      <SidebarAdmin></SidebarAdmin>
      <div>
        <div className=" mt-2 flex items-center justify-between mr-4 ">
          <div className="font-bold text-[22px] w-[60%] ">
            Quản lý nguyên liệu
          </div>
          <a href="/admin/add-ingredient">
            <Button
              className="bg-green-400 rounded-[30px] h-10 w-[110px] px-2 text-center"
              type="button"
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
          </a>
        </div>
      </div>
      <div className="overflow-y-auto max-h-[520px] scrollbar-hidden ">
        <IngredientDetail detail={warehouses}></IngredientDetail>
      </div>
    </div>
  );
};

export default ManageIngredient;
