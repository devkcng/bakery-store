"use client";
import React, { FC, useState } from "react";
export interface SearchBarProps {
  className?: string;
  isShow: boolean; // "isShow" property is used to determine the search bar has ability to automatically minimize or not
};
const SearchBar: FC<SearchBarProps> = ({ className = "", isShow }) => {
  const [isFocused, setIsFocused] = useState<boolean>(isShow);
  //   const [inputValue, setInputValue] = useState<string>("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <div className={`relative text-white ${className}`}>
      <input
        type="text"
        name="text"
        required
        onChange={handleInputChange}
        placeholder="Tìm kiếm tại đây ..."
        className={`transition-all duration-300 ease-in-out h-10 pl-10 pr-3 text-lg rounded-full bg-white text-black outline-none border-2
            ${isFocused ? "w-52 shadow-inner" : "w-10 cursor-pointer"}
          `}
        onFocus={() => {
          if (isShow === true) setIsFocused(true);
          else {
            setIsFocused(true);
          }
        }}
        onBlur={(e) => {
          if (isShow === false) {
            if (e.target.value === "") setIsFocused(false);
          }
        }}
      />
      <div className="absolute left-0 top-0 w-10 h-10 p-2 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="text-black"
          viewBox="0 0 512 512"
        >
          <title>Search</title>
          <path
            d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
            fill="none"
            stroke="currentColor"
            strokeMiterlimit={10}
            strokeWidth={32}
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={32}
            d="M338.29 338.29L448 448"
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;