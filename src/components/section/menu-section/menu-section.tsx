"use client";
import React, { FC, useEffect, useState } from "react";
import MenuTabs from "../../menu-tabs/menu-tabs";
import SearchBar from "../../search-bar/search-bar";
import ItemCard from "../../item-card/item-card";
import axios from "axios";
interface DataType {
  id: number;
  name: string;
  price: number;
  img_path: string;
}
const MenuSection = () => {
  const options = ["Tất cả", "Bánh ngọt", "Bánh mặn"];
  const [selectedOption, setSelectedOption] = useState<string>(options[0]);
  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };
  const [data, setData] = useState<DataType[]>([]);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/products/get-all-products");
        setData(response.data.products);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.message || "Error fetching data");
        } else if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Undefined Error");
        }
      }
    };

    fetchData();
  }, []);
  console.log(data);
  return (
    <>
      <div id="menu">
        <div className="font-sansita text-[80px] text-center mb-3 ">Menu</div>
        <div className="flex justify-center items-center">
          <div className="max-w-[850px] w-[600px] mr-2 ">
            <MenuTabs
              options={options}
              onOptionChange={handleOptionChange}
              selectedOption={selectedOption}
            ></MenuTabs>
          </div>
          <SearchBar isShow={false}></SearchBar>
        </div>
        <div className="flex justify-center mt-10">
          <div className="grid grid-cols-3 gap-1">
            {data.length > 0 &&
              data.map((item, index) => (
                <ItemCard
                  key={index}
                  itemID={item.id}
                  itemName={item.name}
                  itemPrice={item.price}
                  imagePath={item.img_path}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuSection;
