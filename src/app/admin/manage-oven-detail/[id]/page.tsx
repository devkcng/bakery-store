"use client";
import Oven from "@/components/Admin/manage-oven";
import OvenDetail from "@/components/Admin/manage-oven-detail";
import SidebarAdmin from "@/components/sidebar-admin/sidebarAdmin";
import { useEffect } from "react";

const ManageOvenDetail = ({ params }: { params: { id: string } }) => {
  const pseudoOvenData = {
    oven: {
      ovenID: "OV001",
      status: "In Use",
      startTime: "12:00",
      maxCapacity: 10,
      usedCapacity: 6,
      typeOfBake: "Bread",
    },
    orders: [
      {
        orderID: "ORD1001",
        quantity: 2,
        completeTime: "14:30",
        remainingTime: "00:15",
      },
      {
        orderID: "ORD1002",
        quantity: 3,
        completeTime: "15:00",
        remainingTime: "00:45",
      },
      {
        orderID: "ORD1003",
        quantity: 1,
        completeTime: "16:00",
        remainingTime: "01:30",
      },
    ],
  };
  console.log(params.id);

  return (
    <div className=" ml-[250px] mt-3 pl-[10px] ">
      <SidebarAdmin></SidebarAdmin>
      <div>
        <div className=" mt-2 flex items-center justify-end mr-4"></div>
      </div>
      <div className="overflow-y-auto  scrollbar-hidden max-h-[550px] ">
        <OvenDetail
          oven={pseudoOvenData.oven}
          orders={pseudoOvenData.orders}
          id={params.id}
        />
      </div>
    </div>
  );
};

export default ManageOvenDetail;
