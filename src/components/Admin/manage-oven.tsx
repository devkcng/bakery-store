/* eslint-disable @next/next/no-img-element */

import React, { FC } from "react";
import { Table } from "react-bootstrap"; // Import Table từ React Bootstrap
import "./manage-oven.css";

type OvenProps = {
  ovenID: string;
  orderID: string[];
  status: string;
};

type OvenInfo = {
  info: OvenProps[];
};

const Oven: FC<OvenInfo> = ({ info }) => {
  return (
    <div className="oven_container">
      <Table striped bordered hover className="table">
        <thead>
          <tr className="table-dark">
            <th>Mã lò</th>
            <th>Mã đơn đang được xử lý</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {info.map((item, index) => (
            <tr key={index}>
              <td>{item.ovenID || " "}</td>
              <td>
                {item.orderID.length > 0
                  ? item.orderID.map((order, idx) => (
                      <span key={idx} className="order-id">
                        {order}
                        {idx < item.orderID.length - 1 && ", "}
                      </span>
                    ))
                  : "Không có đơn hàng"}
              </td>
              <td>{item.status || " "}</td>
              <td scope="row">
                <a href="#" className="underline">
                  Xem chi tiết
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Oven;
