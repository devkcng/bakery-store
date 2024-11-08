"use client";
import Header from "@/components/header/header";
import ItemCard, { ItemProps } from "@/components/item-card/item-card";
import MenuTabs from "@/components/menu-tabs/menu-tabs";
import SearchBar from "@/components/search-bar/search-bar";
import MenuSection from "@/components/section/menu-section";

import RecipeMainpage from "@/components/recipeMainpage/recipeMainpage";
import { useCallback, useState } from "react";
import NavBar from "@/components/header/nav-bar";
import Footer from "@/components/Footer/footer";
import HomePage from "./home/page";
import ItemOrder, { DetailOrder } from "@/components/item-order/item-order";
import OrderInfoSection from "@/components/section/orderInfo-section";
import AddProduct from "@/components/add-product/add-product";
import OrderCard from "@/components/order-card/order-card";
export default function Home() {
  // const [selectedOption, setSelectedOption] = useState<string>("HTML");
  // const options: string[] = ["HTML", "React", "Vue", "Angular"];

  // const handleOptionChange = (option: string) => {
  //   setSelectedOption(option);
  // };
  // console.log(selectedOption);
  const itemInfo: ItemProps = {
    imagePath: "", // Đường dẫn đến ảnh
    itemName: "", // Tên món
    itemPrice: 28000, // Giá món
  };
  const count = 2;
  const time: string = new Date().toLocaleString("vi-VN", {
    timeZone: "Asia/Ho_Chi_Minh",
  });
  const listOfOrders: DetailOrder[] = [
    {
      itemInfo: { imagePath: "", itemName: "", itemPrice: 28000 },
      itemCount: 2,
      itemTopping: "chân trâu, dậu đỏ",
    },
    {
      itemInfo: { imagePath: "", itemName: "", itemPrice: 28000 },
      itemCount: 4,
      itemTopping: "mè đen",
    },
    {
      itemInfo: { imagePath: "", itemName: "", itemPrice: 28000 },
      itemCount: 5,
      itemTopping: "hạnh nhân",
    },
  ];
  console.log(time);
  return (
    <div>
      {/* <SearchBar className="mt-[50px]" isShow={true}></SearchBar> */}
      {/* <SearchBar className="mt-[50px]" isShow={false}></SearchBar> */}
      {/* <NavBar></NavBar> */}
      {/* <HomePage></HomePage> */}
      {/* <ItemOrder 
          itemInfo={itemInfo}    
          itemCount={count}         
          itemTopping="" 
      /> */}
      {/* <OrderInfoSection
        idOrder="112233"
        addressBuyer="So 1 Vo Van Ngan"
        idStatus="Đã giao"
        nameBuyer="Nguyễn Văn Vũ"
        note="Giao cho bảo vệ"
        phonenumber="0327521953"
        time={time.toString()}
      ></OrderInfoSection> */}
      {/* <AddProduct></AddProduct> */}

      <OrderCard
        OrderID=""
        timeOrder=""
        DetailOrders={listOfOrders}
        status="Đang tiến hành"
      ></OrderCard>
    </div>
  );
}
