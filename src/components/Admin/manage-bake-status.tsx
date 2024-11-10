import React, { FC } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import "./manage-bake-status.css";
type BakeStatusOrder = {
  ID: string;
  orderCode: string;
  completeTime: string;
  leftTime: string;
  bakeStatus: string;
};
type BakeStatusProps = {
  manageBake: BakeStatusOrder[]; // Array of BakeStatusOrder objects
};
const BakeStatusOrder: FC<BakeStatusProps> = ({ manageBake }) => {
  return (
    <div className="bake_status_container">
      <table className="table">
        <thead>
          <tr className="table-dark">
            <th scope="col">ID</th>
            <th scope="col">Mã đơn hàng</th>
            <th scope="col">Thời gian hoàn thành</th>
            <th scope="col">Thời gian còn lại</th>
            <th scope="col">Trạng thái </th>
            <th scope="col">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {manageBake.map((manageBaking, index) => (
            <tr key={index}>
              <td scope="row">{manageBaking.ID || " "}</td>
              <td scope="row">{manageBaking.orderCode || " "}</td>
              <td scope="row">{manageBaking.completeTime || " "}</td>
              <td scope="row">{manageBaking.leftTime || " "}</td>
              <td scope="row">{manageBaking.bakeStatus || " "}</td>
              <td scope="row">
                <a href="#">Xem chi tiết</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BakeStatusOrder;
