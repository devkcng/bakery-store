"use client";
import SearchBar from "@/components/search-bar/search-bar";
import SidebarAdmin from "@/components/sidebar-admin/sidebarAdmin";
import Oven from "@/components/admin/manage-oven";
const ManageOvenDetail = () => {
  const pseudoData = [
    {
      ovenID: "OV001",
      orderID: ["ORD1001", "ORD1002", "ORD1003"],
      status: "Đang xử lý",
    },
    {
      ovenID: "OV002",
      orderID: ["ORD1004"],
      status: "Hoàn thành",
    },
    {
      ovenID: "OV003",
      orderID: [],
      status: "Đang trống",
    },
    {
      ovenID: "OV004",
      orderID: ["ORD1005", "ORD1006"],
      status: "Đang xử lý",
    },
    {
      ovenID: "OV004",
      orderID: ["ORD1005", "ORD1006"],
      status: "Đang xử lý",
    },
    {
      ovenID: "OV004",
      orderID: ["ORD1005", "ORD1006"],
      status: "Đang xử lý",
    },
    {
      ovenID: "OV004",
      orderID: ["ORD1005", "ORD1006"],
      status: "Đang xử lý",
    },
    {
      ovenID: "OV004",
      orderID: ["ORD1005", "ORD1006"],
      status: "Đang xử lý",
    },
    {
      ovenID: "OV004",
      orderID: ["ORD1005", "ORD1006"],
      status: "Đang xử lý",
    },
    {
      ovenID: "OV004",
      orderID: ["ORD1005", "ORD1006"],
      status: "Đang xử lý",
    },
    {
      ovenID: "OV004",
      orderID: ["ORD1005", "ORD1006"],
      status: "Đang xử lý",
    },
    {
      ovenID: "OV004",
      orderID: ["ORD1005", "ORD1006"],
      status: "Đang xử lý",
    },
    {
      ovenID: "OV004",
      orderID: ["ORD1005", "ORD1006"],
      status: "Đang xử lý",
    },
    {
      ovenID: "OV004",
      orderID: ["ORD1005", "ORD1006"],
      status: "Đang xử lý",
    },
    {
      ovenID: "OV004",
      orderID: ["ORD1005", "ORD1006"],
      status: "Đang xử lý",
    },
    {
      ovenID: "OV004",
      orderID: ["ORD1005", "ORD1006"],
      status: "Đang xử lý",
    },
    {
      ovenID: "OV004",
      orderID: ["ORD1005", "ORD1006"],
      status: "Đang xử lý",
    },
  ];
  return (
    <div className=" ml-[250px] mt-3 pl-[10px] ">
      <SidebarAdmin></SidebarAdmin>
      <div>
        <SearchBar isShow={true}></SearchBar>
        <div className=" mt-2 flex items-center justify-end mr-4"></div>
      </div>
      <div className="font-bold text-[22px] w-[60%] ">Quản lý lò nướng</div>
      <div className="overflow-y-auto max-h-[550px] scrollbar-hidden mt-4 ">
        <Oven info={pseudoData}></Oven>
      </div>
    </div>
  );
};

export default ManageOvenDetail;
