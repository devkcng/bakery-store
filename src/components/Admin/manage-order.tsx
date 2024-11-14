import React, { FC } from "react";
import { Table } from "react-bootstrap"; // Import Table từ react-bootstrap
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./manage-order.css";

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

const OrderDetail: FC<OrderProps> = ({ orders, orderID = "" }) => {
  return (
    <div className="orderdetail_header_container mt-4">
      <div className="orderdetail_header mb-3 flex justify-between items-baseline w-[150px]">
        <span className="font-semibold text-2xl">ID Order:</span>
        <span className="font-bold text-xl">{orderID || "123"}</span>
      </div>
      <div className="overflow-y-auto scrollbar-hidden max-h-[550px]">
        <Table striped bordered hover className="table">
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
        </Table>
      </div>
    </div>
  );
};

export default OrderDetail;
