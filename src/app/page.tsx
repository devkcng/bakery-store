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
type Topping = {
  id: string;
  name: string;
  initialQuantity: number;
};
export default function Home() {
  // const [selectedOption, setSelectedOption] = useState<string>("HTML");
  // const options: string[] = ["HTML", "React", "Vue", "Angular"];

  // const handleOptionChange = (option: string) => {
  //   setSelectedOption(option);
  // };
  // console.log(selectedOption);
  // const [quantity, setQuantity] = useState(1);

  // const handleQuantityChange = (newQuantity: number) => {
  //   setQuantity(newQuantity);
  //   // Có thể thực hiện các hành động khác khi quantity thay đổi
  //   console.log("Số lượng mới:", newQuantity);
  const toppings: Topping[] = [
    { id: "1", name: "Cheese", initialQuantity: 1 },
    { id: "2", name: "Pepperoni", initialQuantity: 1 },
    // Add other toppings here...
  ];

  const [toppingQuantities, setToppingQuantities] = useState(
    toppings.reduce((acc, topping) => {
      acc[topping.name] = topping.initialQuantity;
      return acc;
    }, {} as Record<string, number>)
  );

  const handleToppingQuantityChange = useCallback(
    (id: string, quantity: number) => {
      setToppingQuantities((prevQuantities) => ({
        ...prevQuantities,
        [id]: quantity,
      }));
    },
    []
  );

  return (
    <div className="m-[50px]">
      <div>
        <h1>Order Page</h1>
        {toppings.map((topping) => (
          <div key={topping.id}>
            <h2>{topping.name}</h2>
            <QuantityButton
              initialQuantity={toppingQuantities[topping.id]}
              onQuantityChange={(quantity) =>
                handleToppingQuantityChange(topping.name, quantity)
              }
            />
          </div>
        ))}
        <button onClick={() => console.log(toppingQuantities)}>
          Submit Order
        </button>
      </div>
    </div>
  );
}
