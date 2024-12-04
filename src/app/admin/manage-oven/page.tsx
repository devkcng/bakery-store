"use client";
import Oven from "@/components/Admin/manage-oven";
import SidebarAdmin from "@/components/sidebar-admin/sidebarAdmin";
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
      ovenID: "OV005",
      orderID: ["ORD1007"],
      status: "Hoàn thành",
    },
    {
      ovenID: "OV006",
      orderID: [],
      status: "Đang trống",
    },
    {
      ovenID: "OV007",
      orderID: ["ORD1008", "ORD1009", "ORD1010"],
      status: "Đang xử lý",
    },
    {
      ovenID: "OV008",
      orderID: ["ORD1011"],
      status: "Hoàn thành",
    },
    {
      ovenID: "OV009",
      orderID: [],
      status: "Đang trống",
    },
    {
      ovenID: "OV010",
      orderID: ["ORD1012", "ORD1013"],
      status: "Đang xử lý",
    },
    {
      ovenID: "OV011",
      orderID: ["ORD1014"],
      status: "Hoàn thành",
    },
    {
      ovenID: "OV012",
      orderID: [],
      status: "Đang trống",
    },
    {
      ovenID: "OV013",
      orderID: ["ORD1015", "ORD1016"],
      status: "Đang xử lý",
    },
    {
      ovenID: "OV014",
      orderID: ["ORD1017"],
      status: "Hoàn thành",
    },
    {
      ovenID: "OV015",
      orderID: [],
      status: "Đang trống",
    },
  ];
  return (
    <div className=" ml-[250px] mt-3 pl-[10px] ">
      <SidebarAdmin></SidebarAdmin>
      <div>
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
