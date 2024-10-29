"use client";
import Header from "@/components/header/header";
import ItemCard from "@/components/item-card/item-card";
import MenuTabs from "@/components/menu-tabs/menu-tabs";
import SearchBar from "@/components/search-bar/search-bar";
import MenuSection from "@/components/section/menu-section";

import RecipeMainpage from "@/components/recipeMainpage/recipeMainpage";
import { useState } from "react";
import NavBar from "@/components/header/nav-bar";
import Footer from "@/components/Footer/footer";
import HomePage from "./home/page";
import QuantityButton from "@/components/button/quantity-btn";

export default function Home() {
  // const [selectedOption, setSelectedOption] = useState<string>("HTML");
  // const options: string[] = ["HTML", "React", "Vue", "Angular"];

  // const handleOptionChange = (option: string) => {
  //   setSelectedOption(option);
  // };
  // console.log(selectedOption);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
    // Có thể thực hiện các hành động khác khi quantity thay đổi
    console.log("Số lượng mới:", newQuantity);
  };

  return (
    <div className="m-[50px]">
      {/* <SearchBar className="mt-[50px]" isShow={true}></SearchBar> */}
      {/* <SearchBar className="mt-[50px]" isShow={false}></SearchBar> */}
      {/* <NavBar></NavBar> */}
      {/* <HomePage></HomePage> */}
      <QuantityButton
        className="bg-primary"
        initialQuantity={quantity}
        onQuantityChange={handleQuantityChange}
      />
      <p>Số lượng hiện tại: {quantity}</p>
    </div>
  );
}
