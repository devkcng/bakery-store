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
import QuantityButton from "@/components/button/quantity-btn";
import CartItem, { ProductAttribute } from "@/components/CartItem/cartItem";
type Topping = {
  id: string;
  name: string;
  initialQuantity: number;
};
export default function Home() {
  const Item: ProductAttribute = {
    imagePath: "",
    itemName: "Bánh Pizza Margherita",
    itemPrice: "150000",
    toppings: [
      { toppingId: "topping1", toppingName: "Nấm", toppingPrice: "20000" },
      { toppingId: "topping3", toppingName: "Nấm", toppingPrice: "20000" },
      {
        toppingId: "topping2",
        toppingName: "Ớt chuông",
        toppingPrice: "15000",
      },
    ],
    itemDescription:
      "Pizza truyền thống với sốt cà chua, phô mai và húng quế tươi.",
  };
  return (
    <div className="m-[50px]">
      <CartItem product={Item}></CartItem>
    </div>
  );
}
