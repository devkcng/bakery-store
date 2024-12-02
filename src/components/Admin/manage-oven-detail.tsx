import React, { FC, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import Button from "../button/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// Định nghĩa type cho từng chi tiết lò nướng
type OvenDetailInfo = {
  ovenID: string;
  status: string;
  startTime: string;
  maxCapacity: number;
  usedCapacity: number;
  typeOfBake: string;
};
type OrderDetail = {
  orderID: string;
  quantity: number;
  completeTime: string;
  remainingTime: string;
};

// Định nghĩa type cho props của component
type OvenProps = {
  oven: OvenDetailInfo; // Mảng các đối tượng OvenDetail
  orders: OrderDetail[]; // Mảng các đối tượng OrderDetail
};

const OvenDetail: FC<OvenProps> = ({ oven, orders }) => {
  const options = [
    { value: "Bánh Cookie", label: "Bánh Cookie" },
    { value: "Bánh Tart", label: "Bánh Tart" },
    { value: "Bánh Sừng trâu", label: "Bánh Sừng trâu" },
  ];
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    "option2"
  );
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="ovendetail_container">
      <div className="ovendetail_header mb-3 flex justify-between ">
        <div className=" ">
          <div className="flex justify-between items-baseline w-[300px] ">
            <span className="font-semibold text-xl mr-5">ID Oven: </span>
            <span className="text-lg font-normal">{oven.ovenID}</span>
          </div>
          <div className="flex justify-between items-baseline w-[300px] ">
            <span className="font-semibold text-xl mr-5">Trạng thái: </span>
            <span className="text-lg font-normal">{oven.status}</span>
          </div>
          <div className="flex justify-between items-baseline w-[300px] ">
            <span className="font-semibold text-xl mr-5">Sức chứa: </span>
            <span className="text-lg font-normal">{`${oven.maxCapacity} bánh`}</span>
          </div>
          <div className="flex justify-between items-baseline w-[300px] ">
            <span className="font-semibold text-xl mr-5">Đang chứa: </span>
            <span className="text-lg font-normal">{`${oven.usedCapacity} bánh`}</span>
          </div>
          <div></div>
          <div className="flex justify-between items-baseline w-[300px] ">
            <span className="font-semibold text-xl mr-5">Loại bánh </span>
            <div>
              <select
                className="border-2 border-black rounded-[35px] h-8 text-left pl-3"
                id="dropdown"
                value={selectedOption}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Chọn loại bánh
                </option>
                {options.map((option) => (
                  <option
                    className="font-semibold"
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        {/* Nếu lò nướng đang trống thì nút này mới xuất hiện, còn nếu lò nướng đang chứa bánh thì nút này sẽ bị ẩn */}
        <Button
          className="bg-green-400 rounded-[30px] h-10 w-[110px] mr-3 px-2 text-center"
          type="button"
        >
          <div className="flex justify-content-center ">
            <svg
              className="mr-2"
              width="25px"
              height="25px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  opacity="0.1"
                  d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  fill="#ffffff"
                ></path>{" "}
                <path
                  d="M9 12H15"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M12 9L12 15"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="#ffffff"
                  strokeWidth="2"
                ></path>{" "}
              </g>
            </svg>
            <span className="ml-1 text-white">Thêm</span>
          </div>
        </Button>
      </div>
      <div className="overflow-y-auto scrollbar-hidden max-h-[380px]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px] font-bold  text-primarycolor text-lg">
                Mã đơn
              </TableHead>
              <TableHead className="w-[200px] font-bold  text-primarycolor text-lg">
                Số lượng
              </TableHead>
              <TableHead className=" font-bold w-[350px]  text-primarycolor text-lg">
                Thời gian hoàn thành
              </TableHead>
              <TableHead className=" font-bold w-[350px] text-primarycolor text-lg">
                Thời gian còn lại
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order, index) => (
              <TableRow key={index}>
                <TableCell className="w-[150px]">
                  {order.orderID || " "}
                </TableCell>
                <TableCell className="w-[150px]">
                  {order.quantity || " "}
                </TableCell>
                <TableCell className="w-[150px]">
                  {order.completeTime || " "}
                </TableCell>
                <TableCell className="w-[150px]">
                  {order.remainingTime || " "}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default OvenDetail;
