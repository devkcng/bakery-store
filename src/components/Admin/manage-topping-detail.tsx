/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
// import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import Table from "react-bootstrap/Table"; // Import Table component từ react-bootstrap
import "./manage-topping-detail.css";

// Định nghĩa type cho từng chi tiết topping
export type ToppingDetail = {
  iD: string;
  toppingName: string;
  toppingPrice: string;
};

// Định nghĩa type cho props của component
type ToppingProps = {
  toppings: ToppingDetail[]; // Mảng các đối tượng ToppingDetail
};

const Topping: FC<ToppingProps> = ({ toppings }) => {
  return (
    <div className="topping_container">
      <Table striped bordered hover className="table">
        <thead>
          <tr className="table-dark">
            <th scope="col">ID</th>
            <th scope="col">Tên Topping</th>
            <th scope="col">Giá (VNĐ)</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody className="">
          {toppings.map((topping, index) => (
            <tr key={index}>
              <td>{topping.iD || " "}</td>
              <td>{topping.toppingName || " "}</td>
              <td>{topping.toppingPrice || " "}</td>
              <td>
                <div className="actionContainer d-flex align-items-center">
                  <div className="actionButton mr-3">
                    <img
                      src="/imgs/iconset/icons8-trash-64.png"
                      alt="Trash"
                      className="h-[30px] w-[30px]"
                    />
                  </div>
                  <div className="actionButton">
                    <img
                      src="/imgs/iconset/icons8-edit-64.png"
                      alt="Edit"
                      className="h-[25px] w-[25px]"
                    />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Topping;
