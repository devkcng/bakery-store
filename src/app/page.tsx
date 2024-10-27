"use client";
import Header from "@/components/header/header";
import ItemCard from "@/components/item-card/item-card";
import MenuTabs from "@/components/menu-tabs/menu-tabs";
import { useState } from "react";
export default function Home() {
  const [selectedOption, setSelectedOption] = useState<string>("HTML");
  // const options: string[] = ["HTML", "React", "Vue", "Angular"];

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };
  console.log(selectedOption);
  return (
    <div>
      <>
        <Header></Header>

        <div className="flex justify-center ">
          {/* <NavBar></NavBar> */}
          <ItemCard
            itemName="Bánh Cookie"
            itemPrice="28,000"
            imagePath="/imgs/bakery-images/cookiesb.png"
          ></ItemCard>
          <ItemCard
            itemName="Bánh Donut"
            itemPrice="28,000"
            imagePath="/imgs/bakery-images/donutb.png"
          ></ItemCard>
          <ItemCard
            itemName="Bánh Tart"
            itemPrice="28,000"
            imagePath="/imgs/bakery-images/eggtartb.png"
          ></ItemCard>
        </div>
      </>
      {/* <NavBar></NavBar>
      <Header></Header> */}
      <div className="w-[500px]">
        <MenuTabs
          // options={options}
          onOptionChange={handleOptionChange}
          selectedOption={selectedOption}
        ></MenuTabs>
      </div>
    </div>
  );
}
