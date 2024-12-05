import React, { FC, useState, useEffect } from "react";
import Button from "../button/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Định nghĩa type cho từng chi tiết lò nướng
type OvenDetailInfo = {
  ovenID: string;
  status: string;
  startTime: string;
  maxCapacity: number;
  usedCapacity: number;
  typeOfBake: string;
};
type OrderDetail = {
  orderID: string;
  quantity: number;
  completeTime: string;
  remainingTime: string;
  status: string; // Thêm thuộc tính status để kiểm tra trạng thái
};

// Định nghĩa type cho props của component
type OvenProps = {
  oven: OvenDetailInfo;
  orders: OrderDetail[];
  id: string;
};

const OvenDetail: FC<OvenProps> = ({ oven, orders, id }) => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    undefined
  );
  const [isModalOpen, setIsModalOpen] = useState(false); // State để quản lý trạng thái của modal
  const [filteredOrders, setFilteredOrders] = useState<OrderDetail[]>([]); // State lưu các đơn hàng lọc từ localStorage

  // Hàm để lấy danh sách đơn hàng từ localStorage và lọc các đơn hàng có trạng thái khác "Hoàn thành"
  const getFilteredOrders = () => {
    const storedOrders = JSON.parse(localStorage.getItem("order") || "[]");
    const ordersNotCompleted = storedOrders.filter(
      (order) => order.status !== "CANCEL" && order.status !== "COMPLETED"
    );
    setFilteredOrders(ordersNotCompleted);
  };

  useEffect(() => {
    getFilteredOrders(); // Lấy dữ liệu khi component được render
  }, []);

  const [ovenInfo, setOvenInfo] = useState({});

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const listOvens = JSON.parse(localStorage.getItem("ovens") || "[]");
      const oven = listOvens.find((item) => item.ovenID === id);
      setOvenInfo(oven); // Cập nhật cartItems
    }
  }, [id]);
  console.log(ovenInfo);
  console.log(id);

  const handleSelectOrder = (orderID: string, quantity: number) => {
    if (!ovenInfo) return;

    // Kiểm tra xem orderID đã tồn tại trong ovenInfo.orderID chưa
    const updatedOrderIDs = ovenInfo.orderID || [];
    const isOrderExists = updatedOrderIDs.some(
      (order: OrderDetail) => order.orderID === orderID
    );

    if (!isOrderExists) {
      // Thêm order mới
      updatedOrderIDs.push({
        orderID,
        quantity,
        completeTime: "90ph", // Bạn có thể thêm giá trị thực tế nếu cần
        remainingTime: "90ph", // Bạn có thể thêm giá trị thực tế nếu cần
        status: "IN_PROGRESS", // Hoặc trạng thái phù hợp
      });

      // Cập nhật ovenInfo
      const updatedOvenInfo = { ...ovenInfo, orderID: updatedOrderIDs };

      // Cập nhật danh sách ovens trong localStorage
      const storedOvens = JSON.parse(localStorage.getItem("ovens") || "[]");
      const updatedOvens = storedOvens.map((oven: any) =>
        oven.ovenID === id ? updatedOvenInfo : oven
      );
      localStorage.setItem("ovens", JSON.stringify(updatedOvens));

      // Cập nhật state ovenInfo
      setOvenInfo(updatedOvenInfo);
    }

    setIsModalOpen(false); // Đóng modal sau khi chọn
  };
  return (
    <div className="ovendetail_container">
      {ovenInfo && (
        <div className="ovendetail_header mb-3 flex justify-between">
          <div>
            <div className="flex justify-between items-baseline w-[300px]">
              <span className="font-semibold text-xl mr-5">ID Oven: </span>
              <span className="text-lg font-normal">{ovenInfo.ovenID}</span>
            </div>
            <div className="flex justify-between items-baseline w-[300px]">
              <span className="font-semibold text-xl mr-5">Trạng thái: </span>
              <span className="text-lg font-normal">{ovenInfo.status}</span>
            </div>
            <div className="flex justify-between items-baseline w-[300px]">
              <span className="font-semibold text-xl mr-5">Sức chứa: </span>
              <span className="text-lg font-normal">{`${100} bánh`}</span>
            </div>
            {/* <div className="flex justify-between items-baseline w-[300px]">
      <span className="font-semibold text-xl mr-5">Đang chứa: </span>
      <span className="text-lg font-normal">{`${oven.usedCapacity} bánh`}</span>
    </div> */}
          </div>
          <Button
            className="bg-green-400 rounded-[30px] h-10 w-[110px] mr-3 px-2 text-center"
            type="button"
            onClick={() => setIsModalOpen(true)} // Mở modal khi nhấn nút
          >
            <div className="flex justify-content-center">
              <svg
                className="mr-2"
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    opacity="0.1"
                    d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    fill="#ffffff"
                  ></path>
                  <path
                    d="M9 12H15"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M12 9L12 15"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="#ffffff"
                    strokeWidth="2"
                  ></path>
                </g>
              </svg>
              <span className="ml-1 text-white">Thêm</span>
            </div>
          </Button>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 z-10">
          <div className="modal-content bg-white rounded-lg p-4 w-[800px] max-h-[900px] h- mx-auto mt-20 z-20 ">
            <h2 className="text-xl font-semibold">Chọn đơn hàng</h2>
            <div className="overflow-y-auto max-h-[450px]">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px] font-bold text-primarycolor text-lg">
                      Mã đơn
                    </TableHead>
                    <TableHead className="w-[200px] font-bold text-primarycolor text-lg">
                      Tên bánh
                    </TableHead>
                    <TableHead className="w-[200px] font-bold text-primarycolor text-lg">
                      Số lượng
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredOrders.map((order) =>
                    order.orderDetails.map((item, index2) => (
                      <TableRow
                        key={index2}
                        onClick={() =>
                          handleSelectOrder(order.orderID, item.productQuantity)
                        } // Truyền thông tin orderID và quantity
                        className="cursor-pointer"
                      >
                        <TableCell>{order.orderID}</TableCell>
                        <TableCell>{item.productName}</TableCell>
                        <TableCell>{item.productQuantity}</TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
            <Button
              onClick={() => setIsModalOpen(false)}
              className="mt-10 font-bold text-lg text-red-500"
            >
              Đóng
            </Button>
          </div>
        </div>
      )}

      <div className="overflow-y-auto scrollbar-hidden max-h-[380px]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px] font-bold text-primarycolor text-lg">
                Mã đơn
              </TableHead>
              <TableHead className="w-[200px] font-bold text-primarycolor text-lg">
                Số lượng
              </TableHead>
              <TableHead className="font-bold w-[350px] text-primarycolor text-lg">
                Thời gian hoàn thành
              </TableHead>
              <TableHead className="font-bold w-[350px] text-primarycolor text-lg">
                Thời gian còn lại
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ovenInfo.orderID &&
              ovenInfo.orderID.map((order, index) => (
                <TableRow key={index}>
                  <TableCell className="w-[150px]">
                    {order.orderID || " "}
                  </TableCell>
                  <TableCell className="w-[150px]">
                    {order.quantity || " "}
                  </TableCell>
                  <TableCell className="w-[150px]">
                    {order.completeTime || " "}
                  </TableCell>
                  <TableCell className="w-[150px]">
                    {order.remainingTime || " "}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default OvenDetail;
