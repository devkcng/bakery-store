/* eslint-disable @next/next/no-img-element */
// import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { FC } from "react";
// import { Table } from "react-bootstrap"; // Import Table từ React Bootstrap
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import styled from "styled-components";
type OvenProps = {
  ovenID: string;
  orderID: string[];
  status: string;
};

type OvenInfo = {
  info: OvenProps[];
};
const StatusCell = styled.div<{ status: string }>`
  padding: 8px 5px;
  width: auto;
  border-radius: 30px;
  text-align: center;
  font-weight: 700;
  color: white;
  background-color: ${({ status }) =>
    status === "Đang được sử dụng"
      ? "#f6dc49"
      : status === "Đang trống"
      ? "#5cf061"
      : "#f65c5c"};
`;

const Oven: FC<OvenInfo> = ({ info }) => {
  return (
    <div className="oven_container  pt-[20px] flex w-full m-0">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px] font-bold  text-primarycolor text-lg">
              Mã lò
            </TableHead>
            <TableHead className="w-[350px] font-bold  text-primarycolor text-lg">
              Mã đơn hàng đang được xử lý
            </TableHead>
            <TableHead className=" font-bold  text-primarycolor text-lg">
              Trạng thái
            </TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {info.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="w-[150px]">{item.ovenID || " "}</TableCell>
              <TableCell className="w-[150px]">
                {item.orderID.length > 0
                  ? item.orderID.map((order, idx) => (
                      <span key={idx} className="order-id">
                        {order}
                        {idx < item.orderID.length - 1 && ", "}
                      </span>
                    ))
                  : "Không có đơn hàng"}
              </TableCell>
              <TableCell className="w-[100px]">
                <StatusCell status={item.status}>
                  {item.status || " "}
                </StatusCell>
              </TableCell>
              <TableCell className="w-[150px]">
                <a href="/admin/manage-oven-detail" className="underline">
                  Xem chi tiết
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Oven;
