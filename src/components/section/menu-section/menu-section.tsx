"use client";
import { useState } from "react";
import ItemCard from "../../item-card/item-card";
import MenuTabs from "../../menu-tabs/menu-tabs";
import SearchBar from "../../search-bar/search-bar";

const MenuSection = () => {
  const options = ["Tất cả", "Bán chạy", "Bánh ngọt", "Bánh mặn"];
  const [selectedOption, setSelectedOption] = useState<string>(options[0]);
  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };
  return (
    <>
      <div id="menu">
        <div className="font-sansita text-[80px] text-center mb-3 ">Menu</div>
        <div className="flex justify-center items-center">
          <div className="max-w-[850px] w-[600px] ">
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
            <ItemCard itemName="" itemPrice={28000} imagePath="" />
            <ItemCard itemName="" itemPrice={28000} imagePath="" />
            <ItemCard itemName="" itemPrice={28000} imagePath="" />
            <ItemCard itemName="" itemPrice={28000} imagePath="" />
            <ItemCard itemName="" itemPrice={28000} imagePath="" />
            <ItemCard itemName="" itemPrice={28000} imagePath="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuSection;
