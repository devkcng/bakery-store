/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import { Table } from "react-bootstrap"; // Import Table từ React Bootstrap
// // import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
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
                    className="h-[30px] w-[30px] mr-3 cursor-pointer"
                  />

                  <a href="/admin/add-ingredient">
                    <svg
                      className="h-[30px] w-[30px] ml-3 cursor-pointer"
                      fill="#1283ed"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      // xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 511.999 511.999"
                      // xml:space="preserve"
                      width="30px"
                      height="30px"
                      stroke="#1283ed"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g>
                          {" "}
                          <g>
                            {" "}
                            <path d="M404.27,69.014v42.776h-20.592v30.417h20.592v2.713c0,15.596,6.669,29.659,17.298,39.504l-34.005,28.542v-20.024H284.389 V26.046H0v459.907h284.389V351.882h103.173v-99.203l22.137-18.58v66.555c0,21.396,13.95,39.582,33.227,45.977v108.905h-18.018 v30.417h48.435V346.63c19.277-6.394,33.227-24.581,33.227-45.977v-83.85c0-12.294-4.612-23.526-12.187-32.076 c10.816-9.858,17.617-24.053,17.617-39.807v-2.713V111.79V69.014H404.27z M253.972,192.944h-25.348v158.938h25.348v103.654H30.417 V56.463h223.554V192.944z M357.145,238.498l-43.461,36.479l19.555,23.299l23.906-20.065v43.254h-72.756h-25.348v-98.104h25.348 h8.496v32.059h30.417v-32.059h33.843V238.498z M476.153,300.655c0,9.935-8.084,18.018-18.018,18.018s-18.018-8.083-18.018-18.018 v-83.85c0-9.935,8.084-18.018,18.018-18.018s18.018,8.083,18.018,18.018V300.655z M481.583,144.921 c0,12.928-10.518,23.448-23.448,23.448s-23.448-10.519-23.448-23.448v-2.713h46.895V144.921z M481.583,111.79h-46.895V99.431 h46.895V111.79z"></path>{" "}
                          </g>{" "}
                        </g>{" "}
                        <g>
                          {" "}
                          <g>
                            {" "}
                            <rect
                              x="50.695"
                              y="239.971"
                              width="30.417"
                              height="64.89"
                            ></rect>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </a>
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
