/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { formatVND } from "@/utils/formatCurrency";

// import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// import "./manage-topping-detail.css";

// Định nghĩa type cho từng chi tiết topping
export type ToppingDetail = {
  iD: string;
  toppingName: string;
  toppingPrice: number;
};

// Định nghĩa type cho props của component
type ToppingProps = {
  toppings: ToppingDetail[]; // Mảng các đối tượng ToppingDetail
};

const Topping: FC<ToppingProps> = ({ toppings }) => {
  return (
    <div className="topping_container pt-[20px] flex w-full m-0">
      {/* <Table striped bordered hover className="table">
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
                    <a href="/admin/add-topping">
                      <img
                        src="/imgs/iconset/icons8-edit-64.png"
                        alt="Edit"
                        className="h-[25px] w-[25px]"
                      />
                    </a>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table> */}

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px] font-bold text-sm text-primarycolor text-lg">
              ID
            </TableHead>
            <TableHead className="font-bold text-primarycolor text-lg">
              Tên Topping
            </TableHead>
            <TableHead className="font-bold w-[350px] text-primarycolor text-lg">
              Giá
            </TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {toppings.map((topping, index) => (
            <TableRow key={index}>
              <TableCell>{topping.iD || " "}</TableCell>
              <TableCell>{topping.toppingName || " "}</TableCell>
              <TableCell>{topping.toppingPrice ? formatVND(topping.toppingPrice) : " "}</TableCell>
              <TableCell>
                <div className="actionContainer flex align-items-center">
                  <div className="actionButton mr-3">
                    <img
                      src="/imgs/iconset/icons8-trash-64.png"
                      alt="Trash"
                      className="h-[30px] w-[30px] cursor-pointer"
                    />
                  </div>
                  <div className="actionButton">
                    <a href="/admin/add-topping">
                      <img
                        src="/imgs/iconset/icons8-edit-64.png"
                        alt="Edit"
                        className="h-[25px] w-[25px] cursor-pointer"
                      />
                    </a>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Topping;
