"use client";
import React, { useEffect, useState } from "react";
import MenuTabs from "../../menu-tabs/menu-tabs";
import SearchBar from "../../search-bar/search-bar";
import ItemCard from "../../item-card/item-card";
import axios from "axios";
import { Product } from "@prisma/client";

const MenuSection = () => {
  const options = ["Tất cả", "Bánh ngọt", "Bánh mặn"];
  const [selectedOption, setSelectedOption] = useState<string>(options[0]);
  const [data, setData] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (selectedOption === "Tất cả") {
          // Call API to get all products
          response = await axios.get("http://localhost:8080/api/products");
        } else {
          // Map category name to corresponding category_id
          const categoryMap = {
            "Bánh ngọt": 1, // Giả sử ID 1 là bánh ngọt
            "Bánh mặn": 2, // Giả sử ID 2 là bánh mặn
          };

          const categoryId = categoryMap[selectedOption];
          response = await axios.get(
            `http://localhost:8080/api/products/category`,
            {
              params: { category_id: categoryId },
            }
          );
        }

        setData(response.data.products);
        setError(null); // Clear any previous errors
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
  }, [selectedOption]); // Rerun when selectedOption changes
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
                <ItemCard key={index} product={item} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuSection;
