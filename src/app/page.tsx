"use client";
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
