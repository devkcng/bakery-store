/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import { Table } from "react-bootstrap"; // Import Table từ React Bootstrap
// import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./manage-ingredient-detail.css";

type IngredientDetail = {
  iD: string;
  ingredientName: string;
  quantity: string;
  unit: string;
  ingredientPrice: string;
};

type IngredientDetailProp = {
  detail: IngredientDetail[];
};

const IngredientDetail: FC<IngredientDetailProp> = ({ detail }) => {
  return (
    <div className="ingredient_container">
      <Table striped bordered hover className="table">
        <thead>
          <tr className="table-dark">
            <th>ID</th>
            <th>Tên nguyên liệu</th>
            <th>Số lượng</th>
            <th>Đơn vị</th>
            <th>Giá (VNĐ)</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {detail.map((details, index) => (
            <tr key={index}>
              <td>{details.iD || " "}</td>
              <td>{details.ingredientName || " "}</td>
              <td>{details.quantity || " "}</td>
              <td>{details.unit || " "}</td>
              <td>{details.ingredientPrice || " "}</td>
              <td>
                <div className="actionContainer">
                  <img
                    src="/imgs/iconset/icons8-trash-64.png"
                    alt="Delete"
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
  );
};

export default IngredientDetail;
