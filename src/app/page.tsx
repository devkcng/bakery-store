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
import CartItem, {
  ProductAttribute,
} from "@/components/section/detail-product-section/detail-product-section";
type Topping = {
  id: string;
  name: string;
  initialQuantity: number;
};
export default function Home() {
  return (
    <div>
      <HomePage></HomePage>
    </div>
  );
}
