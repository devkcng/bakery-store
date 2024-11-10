"use client";
import BakeStatusOrder from "@/components/Admin/manage-bake-status";
import IngredientDetail from "@/components/Admin/manage-ingredient-detail";
import Topping, {
  ToppingDetail,
} from "@/components/Admin/manage-topping-detail";
import Button from "@/components/button/button";
import MenuTabs from "@/components/menu-tabs/menu-tabs";
import ProductCard from "@/components/product-card/product-card";
import SearchBar from "@/components/search-bar/search-bar";
import SidebarAdmin from "@/components/SidebarAdmin/sidebarAdmin";
import React, { useState } from "react";

const ManageProduct = () => {
  const options = ["Bánh", "Topping", "Nguyên liệu"];
  const [selectedOption, setSelectedOption] = useState<string>(options[0]);
  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  const pseudoToppings: ToppingDetail[] = [
    {
      iD: "T001",
      toppingName: "Chocolate Chip",
      toppingPrice: "5000",
    },
    {
      iD: "T002",
      toppingName: "Strawberry Syrup",
      toppingPrice: "7000",
    },
    {
      iD: "T003",
      toppingName: "Whipped Cream",
      toppingPrice: "6000",
    },
    {
      iD: "T004",
      toppingName: "Caramel Drizzle",
      toppingPrice: "8000",
    },
    {
      iD: "T004",
      toppingName: "Caramel Drizzle",
      toppingPrice: "8000",
    },
    {
      iD: "T004",
      toppingName: "Caramel Drizzle",
      toppingPrice: "8000",
    },
    {
      iD: "T004",
      toppingName: "Caramel Drizzle",
      toppingPrice: "8000",
    },
    {
      iD: "T004",
      toppingName: "Caramel Drizzle",
      toppingPrice: "8000",
    },
    {
      iD: "T004",
      toppingName: "Caramel Drizzle",
      toppingPrice: "8000",
    },
    {
      iD: "T004",
      toppingName: "Caramel Drizzle",
      toppingPrice: "8000",
    },
    {
      iD: "T004",
      toppingName: "Caramel Drizzle",
      toppingPrice: "8000",
    },
    {
      iD: "T004",
      toppingName: "Caramel Drizzle",
      toppingPrice: "8000",
    },
    {
      iD: "T004",
      toppingName: "Caramel Drizzle",
      toppingPrice: "8000",
    },
    {
      iD: "T004",
      toppingName: "Caramel Drizzle",
      toppingPrice: "8000",
    },
    {
      iD: "T004",
      toppingName: "Caramel Drizzle",
      toppingPrice: "8000",
    },
    {
      iD: "T004",
      toppingName: "Caramel Drizzle",
      toppingPrice: "8000",
    },
    {
      iD: "T004",
      toppingName: "Caramel Drizzle",
      toppingPrice: "8000",
    },
    {
      iD: "T004",
      toppingName: "Caramel Drizzle",
      toppingPrice: "8000",
    },
    {
      iD: "T004",
      toppingName: "Caramel Drizzle",
      toppingPrice: "8000",
    },
    {
      iD: "T004",
      toppingName: "Caramel Drizzle",
      toppingPrice: "8000",
    },
    {
      iD: "T004",
      toppingName: "Caramel Drizzle",
      toppingPrice: "8000",
    },
    {
      iD: "T004",
      toppingName: "Caramel Drizzle",
      toppingPrice: "8000",
    },
  ];
  const pseudoIngredientData: IngredientDetail[] = [
    {
      iD: "001",
      ingredientName: "Chocolate Chip",
      quantity: "200",
      unit: "g",
      ingredientPrice: "20000",
    },
    {
      iD: "002",
      ingredientName: "Vanilla Extract",
      quantity: "50",
      unit: "ml",
      ingredientPrice: "15000",
    },
    {
      iD: "003",
      ingredientName: "Strawberry Jam",
      quantity: "100",
      unit: "g",
      ingredientPrice: "25000",
    },
    {
      iD: "004",
      ingredientName: "Whipped Cream",
      quantity: "150",
      unit: "g",
      ingredientPrice: "18000",
    },
    {
      iD: "005",
      ingredientName: "Sprinkles",
      quantity: "50",
      unit: "g",
      ingredientPrice: "12000",
    },
    {
      iD: "005",
      ingredientName: "Sprinkles",
      quantity: "50",
      unit: "g",
      ingredientPrice: "12000",
    },
    {
      iD: "005",
      ingredientName: "Sprinkles",
      quantity: "50",
      unit: "g",
      ingredientPrice: "12000",
    },
    {
      iD: "005",
      ingredientName: "Sprinkles",
      quantity: "50",
      unit: "g",
      ingredientPrice: "12000",
    },
    {
      iD: "005",
      ingredientName: "Sprinkles",
      quantity: "50",
      unit: "g",
      ingredientPrice: "12000",
    },
    {
      iD: "005",
      ingredientName: "Sprinkles",
      quantity: "50",
      unit: "g",
      ingredientPrice: "12000",
    },
    {
      iD: "005",
      ingredientName: "Sprinkles",
      quantity: "50",
      unit: "g",
      ingredientPrice: "12000",
    },
    {
      iD: "005",
      ingredientName: "Sprinkles",
      quantity: "50",
      unit: "g",
      ingredientPrice: "12000",
    },
    {
      iD: "005",
      ingredientName: "Sprinkles",
      quantity: "50",
      unit: "g",
      ingredientPrice: "12000",
    },
    {
      iD: "005",
      ingredientName: "Sprinkles",
      quantity: "50",
      unit: "g",
      ingredientPrice: "12000",
    },
    {
      iD: "005",
      ingredientName: "Sprinkles",
      quantity: "50",
      unit: "g",
      ingredientPrice: "12000",
    },
    {
      iD: "005",
      ingredientName: "Sprinkles",
      quantity: "50",
      unit: "g",
      ingredientPrice: "12000",
    },
    {
      iD: "005",
      ingredientName: "Sprinkles",
      quantity: "50",
      unit: "g",
      ingredientPrice: "12000",
    },
  ];
  return (
    <div className=" ml-[250px] mt-5 pl-[10px] ">
      <SidebarAdmin></SidebarAdmin>
      <div>
        <SearchBar isShow={true}></SearchBar>
        <div className=" mt-5 flex items-center ">
          <div className="w-[500px]">
            <MenuTabs
              options={options}
              onOptionChange={handleOptionChange}
              selectedOption={selectedOption}
            ></MenuTabs>
          </div>

          <Button
            className="bg-green-400 rounded-[30px] h-13 ml-5"
            type="button"
          >
            <div className="flex justify-content-center">
              <svg
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
      <div className="overflow-y-auto max-h-[550px] scrollbar-hidden mt-1 ">
        {selectedOption === "Bánh" && <ProductCard />}
        {selectedOption === "Topping" && <Topping toppings={pseudoToppings} />}
        {selectedOption === "Nguyên liệu" && (
          <IngredientDetail detail={pseudoIngredientData}></IngredientDetail>
        )}
      </div>
    </div>
  );
};

export default ManageProduct;
