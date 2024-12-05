import React, { FC } from "react";
// // import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import styled from "styled-components";
// Định nghĩa type cho mỗi chi tiết đơn hàng
type OrderInfo = {
  ovenID: string;
  productName: string;
  status: string;
  orderedQuantity: string;
  processingQuantity: string;
  processedQuantity: string;
  startTime: string;
  leftTime: string;
};

// Định nghĩa type cho props của component
type OrderProps = {
  orderID: string;
  orders: OrderInfo[];
};
const StatusCell = styled.div<{ status: string }>`
  padding: 8px 5px;
  width: auto;
  border-radius: 30px;
  text-align: center;
  font-weight: 700;
  color: white;
  background-color: ${({ status }) =>
    status === "Đang nướng"
      ? "#f6dc49"
      : status === "Đã hoàn thành"
      ? "#5cf061"
      : "#f65c5c"};
`;

const OrderDetail: FC<OrderProps> = ({ orders = [], orderID = "" }) => {
  return (
    <div className="orderdetail_header_container m-0 mt-4 pt-[20px]">
      <div className="orderdetail_header mb-3  justify-start items-baseline w-[auto] flex">
        <div className=" font-semibold text-2xl w-[auto] mr-10">ID Order:</div>
        <div className=" font-bold text-xl">{orderID || "123"}</div>
      </div>
      <div className="overflow-y-auto scrollbar-hidden max-h-[550px]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px] font-bold  text-primarycolor text-sm">
                Lò nướng
              </TableHead>
              <TableHead className="w-[250px] font-bold  text-primarycolor text-sm">
                Tên sản phẩm
              </TableHead>
              <TableHead className=" font-bold w-[350px]  text-primarycolor text-sm">
                Trạng thái bánh
              </TableHead>
              <TableHead className=" font-bold w-[350px] text-primarycolor text-sm">
                SL đã đặt
              </TableHead>
              <TableHead className=" font-bold w-[350px] text-primarycolor text-sm">
                SL đang xử lý
              </TableHead>
              <TableHead className=" font-bold w-[350px] text-primarycolor text-sm">
                SL đã xử lý
              </TableHead>
              <TableHead className=" font-bold w-[350px] text-primarycolor text-sm">
                Thời gian bắt đầu
              </TableHead>
              <TableHead className=" font-bold w-[350px] text-primarycolor text-sm">
                Thời gian kết thúc
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order, index) => (
              <TableRow key={index}>
                <TableCell className="w-[150px]">
                  {order.ovenID || " "}
                </TableCell>
                <TableCell className="w-[150px]">
                  {order.productName || " "}
                </TableCell>
                <TableCell className="w-[250px]">
                  <StatusCell status={order.status}>
                    {order.status || " "}
                  </StatusCell>
                </TableCell>
                <TableCell className="w-[150px]">
                  {order.productQuantity || " "}
                </TableCell>
                <TableCell className="w-[150px]">{order.processing}</TableCell>
                <TableCell className="w-[150px]">{order.processed}</TableCell>
                <TableCell className="w-[150px] text-green-500 font-semibold">
                  {order.startTime || "Trống"}
                </TableCell>
                <TableCell className="w-[150px] text-red-500 font-semibold">
                  {order.leftTime || "Trống"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default OrderDetail;
