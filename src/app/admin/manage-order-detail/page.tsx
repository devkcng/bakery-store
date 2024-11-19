"use client";
import OrderDetail from "@/components/admin/manage-order";
import SearchBar from "@/components/search-bar/search-bar";
import SidebarAdmin from "@/components/sidebar-admin/sidebarAdmin";

const ManageOrderDetail = () => {
  const pseudoData = [
    {
      ovenID: "OV001",
      productName: "Bánh mì Pháp",
      status: "Đang nướng",
      orderedQuantity: "100",
      processingQuantity: "50",
      processedQuantity: "25",
      startTime: "08:00",
      leftTime: "00:30",
    },
    {
      ovenID: "OV002",
      productName: "Bánh sừng bò",
      status: "Đã hoàn thành",
      orderedQuantity: "200",
      processingQuantity: "0",
      processedQuantity: "200",
      startTime: "09:00",
      leftTime: "00:00",
    },
    {
      ovenID: "OV003",
      productName: "Pizza",
      status: "Đang chuẩn bị",
      orderedQuantity: "50",
      processingQuantity: "20",
      processedQuantity: "15",
      startTime: "10:00",
      leftTime: "00:45",
    },
    {
      ovenID: "OV004",
      productName: "Bánh kem",
      status: "Đã hoàn thành",
      orderedQuantity: "30",
      processingQuantity: "0",
      processedQuantity: "0",
      startTime: "11:00",
      leftTime: "01:00",
    },
    {
      ovenID: "OV005",
      productName: "Bánh ngọt",
      status: "Đang nướng",
      orderedQuantity: "120",
      processingQuantity: "60",
      processedQuantity: "40",
      startTime: "07:30",
      leftTime: "00:25",
    },
    {
      ovenID: "OV006",
      productName: "Bánh bông lan",
      status: "Đang chuẩn bị",
      orderedQuantity: "75",
      processingQuantity: "30",
      processedQuantity: "35",
      startTime: "10:15",
      leftTime: "00:15",
    },
    {
      ovenID: "OV007",
      productName: "Bánh bao",
      status: "Đang nướng",
      orderedQuantity: "80",
      processingQuantity: "40",
      processedQuantity: "30",
      startTime: "06:45",
      leftTime: "00:20",
    },
    {
      ovenID: "OV008",
      productName: "Bánh gạo",
      status: "Đã hoàn thành",
      orderedQuantity: "90",
      processingQuantity: "0",
      processedQuantity: "90",
      startTime: "08:30",
      leftTime: "00:00",
    },
    {
      ovenID: "OV009",
      productName: "Bánh mochi",
      status: "Đã hoàn thành",
      orderedQuantity: "40",
      processingQuantity: "0",
      processedQuantity: "0",
      startTime: "12:00",
      leftTime: "01:30",
    },
    {
      ovenID: "OV010",
      productName: "Bánh bột lọc",
      status: "Đang nướng",
      orderedQuantity: "60",
      processingQuantity: "30",
      processedQuantity: "20",
      startTime: "09:45",
      leftTime: "00:35",
    },
    {
      ovenID: "OV010",
      productName: "Bánh bột lọc",
      status: "Đang nướng",
      orderedQuantity: "60",
      processingQuantity: "30",
      processedQuantity: "20",
      startTime: "09:45",
      leftTime: "00:35",
    },
    {
      ovenID: "OV010",
      productName: "Bánh bột lọc",
      status: "Đang nướng",
      orderedQuantity: "60",
      processingQuantity: "30",
      processedQuantity: "20",
      startTime: "09:45",
      leftTime: "00:35",
    },
    {
      ovenID: "OV010",
      productName: "Bánh bột lọc",
      status: "Đang nướng",
      orderedQuantity: "60",
      processingQuantity: "30",
      processedQuantity: "20",
      startTime: "09:45",
      leftTime: "00:35",
    },
    {
      ovenID: "OV010",
      productName: "Bánh bột lọc",
      status: "Đang nướng",
      orderedQuantity: "60",
      processingQuantity: "30",
      processedQuantity: "20",
      startTime: "09:45",
      leftTime: "00:35",
    },
    {
      ovenID: "OV010",
      productName: "Bánh bột lọc",
      status: "Đang nướng",
      orderedQuantity: "60",
      processingQuantity: "30",
      processedQuantity: "20",
      startTime: "09:45",
      leftTime: "00:35",
    },
    {
      ovenID: "OV010",
      productName: "Bánh bột lọc",
      status: "Đang nướng",
      orderedQuantity: "60",
      processingQuantity: "30",
      processedQuantity: "20",
      startTime: "09:45",
      leftTime: "00:35",
    },
  ];

  // Truyền pseudoData vào component Order

  return (
    <div className=" ml-[250px] mt-3 pl-[10px] ">
      <SidebarAdmin></SidebarAdmin>
      <div>
        <SearchBar isShow={true}></SearchBar>
      </div>

      <div className="max-h-[550px] ">
        <OrderDetail orders={pseudoData}></OrderDetail>
      </div>
    </div>
  );
};

export default ManageOrderDetail;
