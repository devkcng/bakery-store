"use client";
import IngredientDetail from "@/components/admin/manage-ingredient-detail";
import Oven from "@/components/admin/manage-oven-detail";
import Topping, {
  ToppingDetail,
} from "@/components/admin/manage-topping-detail";
import Button from "@/components/button/button";
import SearchBar from "@/components/search-bar/search-bar";
import SidebarAdmin from "@/components/sidebar-admin/sidebarAdmin";

const ManageOvenDetail = () => {
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
        orderID: "ORD001",
        quantity: 2,
        completeTime: "14:30",
        remainingTime: "00:15",
      },
      {
        orderID: "ORD002",
        quantity: 3,
        completeTime: "15:00",
        remainingTime: "00:45",
      },
      {
        orderID: "ORD003",
        quantity: 1,
        completeTime: "16:00",
        remainingTime: "01:30",
      },
      {
        orderID: "ORD003",
        quantity: 1,
        completeTime: "16:00",
        remainingTime: "01:30",
      },
      {
        orderID: "ORD003",
        quantity: 1,
        completeTime: "16:00",
        remainingTime: "01:30",
      },
      {
        orderID: "ORD003",
        quantity: 1,
        completeTime: "16:00",
        remainingTime: "01:30",
      },
      {
        orderID: "ORD003",
        quantity: 1,
        completeTime: "16:00",
        remainingTime: "01:30",
      },
      {
        orderID: "ORD003",
        quantity: 1,
        completeTime: "16:00",
        remainingTime: "01:30",
      },
      {
        orderID: "ORD003",
        quantity: 1,
        completeTime: "16:00",
        remainingTime: "01:30",
      },
      {
        orderID: "ORD003",
        quantity: 1,
        completeTime: "16:00",
        remainingTime: "01:30",
      },
      {
        orderID: "ORD003",
        quantity: 1,
        completeTime: "16:00",
        remainingTime: "01:30",
      },
      {
        orderID: "ORD003",
        quantity: 1,
        completeTime: "16:00",
        remainingTime: "01:30",
      },
      {
        orderID: "ORD003",
        quantity: 1,
        completeTime: "16:00",
        remainingTime: "01:30",
      },
      {
        orderID: "ORD003",
        quantity: 1,
        completeTime: "16:00",
        remainingTime: "01:30",
      },
      {
        orderID: "ORD003",
        quantity: 1,
        completeTime: "16:00",
        remainingTime: "01:30",
      },
      {
        orderID: "ORD003",
        quantity: 1,
        completeTime: "16:00",
        remainingTime: "01:30",
      },
      {
        orderID: "ORD003",
        quantity: 1,
        completeTime: "16:00",
        remainingTime: "01:30",
      },
      {
        orderID: "ORD003",
        quantity: 1,
        completeTime: "16:00",
        remainingTime: "01:30",
      },
      {
        orderID: "ORD003",
        quantity: 1,
        completeTime: "16:00",
        remainingTime: "01:30",
      },
      {
        orderID: "ORD003",
        quantity: 1,
        completeTime: "16:00",
        remainingTime: "01:30",
      },
      {
        orderID: "ORD003",
        quantity: 1,
        completeTime: "16:00",
        remainingTime: "01:30",
      },
    ],
  };

  return (
    <div className=" ml-[250px] mt-3 pl-[10px] ">
      <SidebarAdmin></SidebarAdmin>
      <div>
        <SearchBar isShow={true}></SearchBar>
        <div className=" mt-2 flex items-center justify-end mr-4"></div>
      </div>
      <div className="overflow-y-auto  scrollbar-hidden max-h-[550px] ">
        <Oven oven={pseudoOvenData.oven} orders={pseudoOvenData.orders} />
      </div>
    </div>
  );
};

export default ManageOvenDetail;
