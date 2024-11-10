import React, { FC } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import "./manage-order.css";

// Định nghĩa type cho mỗi chi tiết đơn hàng
type OrderDetail = {
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
  orders: OrderDetail[]; // Mảng các đối tượng OrderDetail
};

const Order: FC<OrderProps> = ({ orders }) => {
  return (
    <div className="order_container">
      <table className="table table-hover">
        <thead>
          <tr className="table-dark">
            <th scope="col">ID Lò nướng</th>
            <th scope="col">Tên sản phẩm</th>
            <th scope="col">Trạng thái bánh</th>
            <th scope="col">SL đã đặt hàng</th>
            <th scope="col">SL đang xử lý</th>
            <th scope="col">SL đã xử lý (VNĐ)</th>
            <th scope="col">Thời gian bắt đầu</th>
            <th scope="col">Thời gian kết thúc</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td scope="row">{order.ovenID || " "}</td>
              <td scope="row">{order.productName || " "}</td>
              <td scope="row">{order.status || " "}</td>
              <td scope="row">{order.orderedQuantity || " "}</td>
              <td scope="row">{order.processingQuantity || " "}</td>
              <td scope="row">{order.processedQuantity || " "}</td>
              <td scope="row">{order.startTime || " "}</td>
              <td scope="row">{order.leftTime || " "}</td>
              <td scope="row">
                <div className="actionContainer">
                  <div className="actionButton">
                    <img
                      src="/imgs/iconset/icons8-trash-64.png"
                      alt="Trash"
                      className="h-[30px] w-[30px] mr-7"
                    />
                  </div>
                  <div className="actionButton">
                    <img
                      src="/imgs/iconset/icons8-edit-64.png"
                      alt="Edit"
                      className="h-[25px] w-[25px] mr-7"
                    />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Order;
