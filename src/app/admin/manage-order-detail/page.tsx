"use client";
import OrderDetail from "@/components/admin/manage-order";
import SearchBar from "@/components/search-bar/search-bar";
import SidebarAdmin from "@/components/sidebar-admin/sidebarAdmin";

const ManageOrderDetail = () => {
  const pseudoData = [
    {
      ovenID: "OV001",
      productName: "Bánh Cookies",
      status: "Đang nướng",
      orderedQuantity: "2",
      processingQuantity: "2",
      processedQuantity: "0",
      startTime: "08:00",
      leftTime: "00:30",
    },
    {
      ovenID: "OV002",
      productName: "Bánh Donut",
      status: "Đã hoàn thành",
      orderedQuantity: "1",
      processingQuantity: "0",
      processedQuantity: "1",
      startTime: "09:00",
      leftTime: "00:00",
    },
    {
      ovenID: "OV003",
      productName: "Bánh Muffin",
      status: "Đang chuẩn bị",
      orderedQuantity: "3",
      processingQuantity: "0",
      processedQuantity: "0",
      startTime: "10:00",
      leftTime: "00:45",
    },
  ];

  // Truyền pseudoData vào component Order

  return (
    <div className=" ml-[250px] mt-3 pl-[10px] ">
      <SidebarAdmin></SidebarAdmin>

      <div className="max-h-[550px] ">
        <OrderDetail orderID="Dec123" orders={pseudoData}></OrderDetail>
      </div>
    </div>
  );
};

export default ManageOrderDetail;
