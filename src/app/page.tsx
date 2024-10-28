"use client";
import Header from "@/components/header/header";
import ItemCard from "@/components/item-card/item-card";
import MenuTabs from "@/components/menu-tabs/menu-tabs";
import SearchBar from "@/components/search-bar/search-bar";
import RecipeMainpage from "@/components/recipeMainpage/recipeMainpage";
import { useState } from "react";
import NavBar from "@/components/header/nav-bar";
import Footer from "@/components/Footer/footer";

export default function Home() {
  // const [selectedOption, setSelectedOption] = useState<string>("HTML");
  // const options: string[] = ["HTML", "React", "Vue", "Angular"];

  // const handleOptionChange = (option: string) => {
  //   setSelectedOption(option);
  // };
  // console.log(selectedOption);
  return (
    <div>
      {/* <SearchBar className="mt-[50px]" isShow={false}></SearchBar> */}
      <RecipeMainpage></RecipeMainpage>
      {/* <NavBar></NavBar> */}
      {/* <Header></Header> */}
      <Footer></Footer>
    </div>
  );
}
