"use client";
import Header from "@/components/header/header";
import ItemCard, {ItemProps} from "@/components/item-card/item-card";
import MenuTabs from "@/components/menu-tabs/menu-tabs";
import SearchBar from "@/components/search-bar/search-bar";
import MenuSection from "@/components/section/menu-section";

import RecipeMainpage from "@/components/recipeMainpage/recipeMainpage";
import { useState } from "react";
import NavBar from "@/components/header/nav-bar";
import Footer from "@/components/Footer/footer";
import HomePage from "./home/page";
import ItemOrder from "@/components/item-order/item-order";
import OrderInfoSection from "@/components/section/orderInfo-section";
export default function Home() {
  // const [selectedOption, setSelectedOption] = useState<string>("HTML");
  // const options: string[] = ["HTML", "React", "Vue", "Angular"];

  // const handleOptionChange = (option: string) => {
  //   setSelectedOption(option);
  // };
  // console.log(selectedOption);
  // const itemInfo: ItemProps = {
  //   imagePath: '', // Đường dẫn đến ảnh
  //   itemName: '', // Tên món
  //   itemPrice: 28000 // Giá món
  // };
  // const count = 2;
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
          itemTotal={itemInfo.itemPrice*count}
      /> */}
      <OrderInfoSection></OrderInfoSection>
    </div>
  );
}
