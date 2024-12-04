"use client";
import { ItemProps } from "@/components/item-card/item-card";
import { DetailOrder } from "@/components/item-order/item-order";
import MenuTabs from "@/components/menu-tabs/menu-tabs";
import OrderCard from "@/components/order-card/order-card";
import SidebarAdmin from "@/components/sidebar-admin/sidebarAdmin";
import { useEffect, useState } from "react";
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
  const listOfOrders1: DetailOrder[] = [
    {
      itemInfo: {
        imagePath: "/imgs/bakery-images/applepieb.png",
        itemName: "Bánh táo",
        itemPrice: 150000,
      },
      itemCount: 5,
      itemTopping: "mật ong",
    },
    {
      itemInfo: {
        imagePath: "/imgs/bakery-images/chouxbb.png",
        itemName: "Bánh choux",
        itemPrice: 15000,
      },
      itemCount: 4,
      itemTopping: "socola",
    },
  ];
  const listOfOrders2: DetailOrder[] = [
    {
      itemInfo: {
        imagePath: "/imgs/bakery-images/cupcakeb.png",
        itemName: "Bánh Cupcake",
        itemPrice: 25000,
      },
      itemCount: 10,
      itemTopping: "hạnh nhân",
    },
    {
      itemInfo: {
        imagePath: "/imgs/bakery-images/pizzab.png",
        itemName: "Pizza Hải sản",
        itemPrice: 350000,
      },
      itemCount: 4,
      itemTopping: "",
    },
    {
      itemInfo: {
        imagePath: "/imgs/bakery-images/cupcakeb.png",
        itemName: "Bánh Cupcake",
        itemPrice: 25000,
      },
      itemCount: 20,
      itemTopping: "sô cô la",
    },
  ];
  const listOfOrders3: DetailOrder[] = [
    {
      itemInfo: {
        imagePath: "/imgs/bakery-images/donutb.png",
        itemName: "Bánh donut",
        itemPrice: 12000,
      },
      itemCount: 50,
      itemTopping: "sô cô la",
    },
    {
      itemInfo: {
        imagePath: "/imgs/bakery-images/donutb.png",
        itemName: "Bánh donut",
        itemPrice: 12000,
      },
      itemCount: 50,
      itemTopping: "dâu",
    },
  ];
  const listOfOrders4: DetailOrder[] = [
    {
      itemInfo: {
        imagePath: "/imgs/bakery-images/croissantb.png",
        itemName: "Bánh sừng trâu",
        itemPrice: 25000,
      },
      itemCount: 10,
      itemTopping: "hạnh nhân",
    },
    {
      itemInfo: {
        imagePath: "/imgs/bakery-images/eggtartb.png",
        itemName: "Bánh tart trứng",
        itemPrice: 12000,
      },
      itemCount: 20,
      itemTopping: "phô mai",
    },
    {
      itemInfo: {
        imagePath: "/imgs/bakery-images/macaronb.png",
        itemName: "Bánh macaroon",
        itemPrice: 30000,
      },
      itemCount: 30,
      itemTopping: "",
    },
  ];
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const list = JSON.parse(localStorage.getItem("order") || "[]");
      setOrders(list); // Cập nhật deliveryInfo
    }
  }, []);
  console.log(orders);
  return (
    <div>
      <div className=" ml-[250px] mt-5 pl-[10px]   ">
        <SidebarAdmin></SidebarAdmin>
        <div>
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
          {orders &&
            orders.map((item, index) => (
              <OrderCard
                key={index}
                OrderID={item.orderID}
                timeOrder={item.orderDate}
                DetailOrders={item.orderDetails}
                status={item.orderStatus}
              ></OrderCard>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ManageOrder;
