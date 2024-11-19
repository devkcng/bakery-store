"use client";
import { ItemProps } from "@/components/item-card/item-card";
import { DetailOrder } from "@/components/item-order/item-order";
import MenuTabs from "@/components/menu-tabs/menu-tabs";
import OrderCard from "@/components/order-card/order-card";
import SearchBar from "@/components/search-bar/search-bar";
import SidebarAdmin from "@/components/SidebarAdmin/sidebarAdmin";
import { useState } from "react";
const ManageOrder = () => {
  const options = [
    "Tất cả",
    "Đang xử lý",
    "Đã hoàn thành",
    "Đã hủy",
    "Đã giao",
  ];
  const [selectedOption, setSelectedOption] = useState<string>(options[0]);
  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };
  const itemInfo: ItemProps = {
    imagePath: "", // Đường dẫn đến ảnh
    itemName: "", // Tên món
    itemPrice: 28000, // Giá món
  };
  const count = 2;
  const time: string = new Date().toLocaleString("vi-VN", {
    timeZone: "Asia/Ho_Chi_Minh",
  });
  const listOfOrders: DetailOrder[] = [
    {
      itemInfo: { imagePath: "", itemName: "", itemPrice: 28000 },
      itemCount: 2,
      itemTopping: "chân trâu, dậu đỏ",
    },
    {
      itemInfo: { imagePath: "", itemName: "", itemPrice: 28000 },
      itemCount: 4,
      itemTopping: "mè đen",
    },
    {
      itemInfo: { imagePath: "", itemName: "", itemPrice: 28000 },
      itemCount: 5,
      itemTopping: "hạnh nhân",
    },
  ];
  return (
    <div>
      <div className=" ml-[250px] mt-5 pl-[10px]   ">
        <SidebarAdmin></SidebarAdmin>
        <div>
          <SearchBar isShow={true}></SearchBar>
          <div className=" mt-5 flex items-center ">
            <div className="w-[600px]">
              <MenuTabs
                options={options}
                onOptionChange={handleOptionChange}
                selectedOption={selectedOption}
              ></MenuTabs>
            </div>
          </div>
        </div>
        <div className="overflow-y-auto max-h-[550px] scrollbar-hidden mt-4 grid grid-cols-3 gap-2 ">
          <OrderCard
            OrderID=""
            timeOrder=""
            DetailOrders={listOfOrders}
            status="Đang tiến hành"
          ></OrderCard>
          <OrderCard
            OrderID=""
            timeOrder=""
            DetailOrders={listOfOrders}
            status="Đang tiến hành"
          ></OrderCard>
          <OrderCard
            OrderID=""
            timeOrder=""
            DetailOrders={listOfOrders}
            status="Đang tiến hành"
          ></OrderCard>
          <OrderCard
            OrderID=""
            timeOrder=""
            DetailOrders={listOfOrders}
            status="Đang tiến hành"
          ></OrderCard>
          <OrderCard
            OrderID=""
            timeOrder=""
            DetailOrders={listOfOrders}
            status="Đang tiến hành"
          ></OrderCard>
          <OrderCard
            OrderID=""
            timeOrder=""
            DetailOrders={listOfOrders}
            status="Đang tiến hành"
          ></OrderCard>
        </div>
      </div>
    </div>
  );
};

export default ManageOrder;
