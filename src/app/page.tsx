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
import CartItem from "@/components/CartItem/cartItem";
import HomePage from "./home/page";

export default function Home() {
  // const [selectedOption, setSelectedOption] = useState<string>("HTML");
  // const options: string[] = ["HTML", "React", "Vue", "Angular"];

  // const handleOptionChange = (option: string) => {
  //   setSelectedOption(option);
  // };
  // console.log(selectedOption);
  return (
    <div>
      {/* <SearchBar className="mt-[50px]" isShow={true}></SearchBar> */}
      {/* <SearchBar className="mt-[50px]" isShow={false}></SearchBar> */}
      {/* <NavBar></NavBar> */}
      {/* <HomePage></HomePage> */}
      <CartItem
        imagePath ="/imgs/bakery-images/muffinb.png"
        itemName="Bánh muffin"
        itemPrice="28.000"
        toppingName="Hạnh nhân"
        toppingPrice="10.000"
        itemDescription="Bánh cookie là món bánh ngọt giòn tan với hương vị thơm lừng từ bơ sữa và các nguyên liệu tự nhiên hảo hạng. Với lớp vỏ bánh vàng ươm, bên trong mềm mịn, hòa quyện cùng hương vị vani tinh tế và những mẩu chocolate chip tan chảy ngọt ngào, bánh cookie sẽ là lựa chọn hoàn hảo cho bữa ăn nhẹ, tiệc trà hoặc làm quà tặng."
      />
    
      

    </div>
  );
}
