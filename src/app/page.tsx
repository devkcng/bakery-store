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
import DateSelector from "@/components/date-picker/DatePicker";

export default function Home() {
  // const [selectedOption, setSelectedOption] = useState<string>("HTML");
  // const options: string[] = ["HTML", "React", "Vue", "Angular"];

  // const handleOptionChange = (option: string) => {
  //   setSelectedOption(option);
  // };
  // console.log(selectedOption);
  const [selectedDeliveryDate, setSelectedDeliveryDate] = useState<{
    day: string;
    date: number;
    month: string;
    year: number;
  } | null>(null);

  const handleDateSelect = (dayInfo: {
    day: string;
    date: number;
    month: string;
    year: number;
  }) => {
    setSelectedDeliveryDate(dayInfo);
    console.log("Selected Delivery Date:", dayInfo);
  };
  return (
    <div>
      {/* <SearchBar className="mt-[50px]" isShow={true}></SearchBar> */}
      {/* <SearchBar className="mt-[50px]" isShow={false}></SearchBar> */}
      {/* <NavBar></NavBar> */}
      {/* <HomePage></HomePage> */}
      <div className="flex justify-center items-center mt-10">
        <div>
          <DateSelector onDateSelect={handleDateSelect} />
          <button
            onClick={() =>
              console.log("Đơn hàng với ngày giao:", selectedDeliveryDate)
            }
          >
            Submit Order
          </button>
          {selectedDeliveryDate && (
            <div>
              <h2>Ngày giao hàng đã chọn:</h2>
              <p>
                {selectedDeliveryDate.day}, {selectedDeliveryDate.date}{" "}
                {selectedDeliveryDate.month} {selectedDeliveryDate.year}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
