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
    <div className="oven_container  pt-[20px] flex w-full m-0">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px] font-bold  text-primarycolor text-lg">
              Mã lò
            </TableHead>
            <TableHead className="w-[450px] font-bold  text-primarycolor text-lg">
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
              <TableCell className="w-[150px]">{item.status || " "}</TableCell>
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
