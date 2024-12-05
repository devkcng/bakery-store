"use client";
import OrderDetail from "@/components/Admin/manage-order";
import SidebarAdmin from "@/components/sidebar-admin/sidebarAdmin";
import { useEffect, useState } from "react";

const ManageOrderDetail = ({ params }: { params: { id: string } }) => {
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
  const [order, setOrder] = useState({});
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const list = JSON.parse(localStorage.getItem("order") || "[]");
      const detail = list.find((item) => item.orderID === params.id); // Tìm object đầu tiên phù hợp
      if (detail) setOrder(detail); // Lưu object vào state
    }
  }, [params.id]);

  console.log(order.orderDetails); // Lấy orderDetails nếu order có dữ liệu

  return (
    <div className=" ml-[250px] mt-3 pl-[10px] ">
      <SidebarAdmin></SidebarAdmin>

      <div className="max-h-[550px] ">
        <OrderDetail
          orderID={order.orderID}
          orders={order.orderDetails}
        ></OrderDetail>
      </div>
    </div>
  );
};

export default ManageOrderDetail;
