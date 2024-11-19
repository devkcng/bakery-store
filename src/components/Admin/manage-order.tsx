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

const OrderDetail: FC<OrderProps> = ({ orders, orderID = "" }) => {
  return (
    <div className="orderdetail_header_container m-0 mt-4 pt-[20px]">
      <div className="orderdetail_header mb-3 flex justify-between items-baseline w-[150px]">
        <span className="font-semibold text-2xl">ID Order:</span>
        <span className="font-bold text-xl">{orderID || "123"}</span>
      </div>
      <div className="overflow-y-auto scrollbar-hidden max-h-[550px]">
        {/* <Table striped bordered hover className="table">
          <thead>
            <tr className="table-dark">
              <th>ID Lò nướng</th>
              <th>Tên sản phẩm</th>
              <th>Trạng thái bánh</th>
              <th>SL đã đặt hàng</th>
              <th>SL đang xử lý</th>
              <th>SL đã xử lý</th>
              <th>Thời gian bắt đầu</th>
              <th>Thời gian kết thúc</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.ovenID || " "}</td>
                <td>{order.productName || " "}</td>
                <td>{order.status || " "}</td>
                <td>{order.orderedQuantity || " "}</td>
                <td>{order.processingQuantity || " "}</td>
                <td>{order.processedQuantity || " "}</td>
                <td>{order.startTime || " "}</td>
                <td>{order.leftTime || " "}</td>
                <td>
                  <div className="actionContainer">
                    <img
                      src="/imgs/iconset/icons8-trash-64.png"
                      alt="Trash"
                      className="h-[30px] w-[30px] mr-3"
                    />
                    <img
                      src="/imgs/iconset/icons8-edit-64.png"
                      alt="Edit"
                      className="h-[25px] w-[25px]"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table> */}

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
                  <StatusCell status={order.status || "Còn lại"}>
                    {order.status || " "}
                  </StatusCell>
                </TableCell>
                <TableCell className="w-[150px]">
                  {order.orderedQuantity || " "}
                </TableCell>
                <TableCell className="w-[150px]">
                  {order.processingQuantity || " "}
                </TableCell>
                <TableCell className="w-[150px]">
                  {order.processedQuantity || " "}
                </TableCell>
                <TableCell className="w-[150px] text-green-500 font-semibold">
                  {order.startTime || " "}
                </TableCell>
                <TableCell className="w-[150px] text-red-500 font-semibold">
                  {order.leftTime || " "}
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
