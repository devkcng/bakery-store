/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import ItemOrder, { DetailOrder } from "../item-order/item-order";
import "./order-card.css";
import ItemCard from "../item-card/item-card";
type Status = "Đã hủy" | "Đang tiến hành" | "Hoàn thành" | "Đã giao";

interface StatusLabelProps {
  status: Status;
}

const getStatusColor = (status: Status): string => {
  switch (status) {
    case "Đã hủy":
      return "text-red-500 border-[1.5px] border-red-500 font-bold ";
    case "Đang tiến hành":
      return "text-yellow-500 border-[1.5px] border-yellow-500 font-bold ";
    case "Hoàn thành":
      return "text-green-500 border-[1.5px] border-green-500 font-bold ";
    case "Đã giao":
      return "text-blue-500 border-[1.5px] border-blue-500 font-bold ";
    default:
      return "text-black border-[1.5px] border-black-500 font-bold "; // Màu mặc định nếu trạng thái không khớp
  }
};
export interface DetailOrderAdmin {
  OrderID: string;
  timeOrder: string;
  DetailOrders: DetailOrder[];
  status: Status;
}
const OrderCard: FC<DetailOrderAdmin> = ({
  OrderID,
  timeOrder,
  DetailOrders,
  status,
}) => {
  return (
    <div>
      <div className="containerDetailcard">
        <div>
          {/* Phần 1 */}
          <div className="flex flex-row px-3 justify-between">
            <div>
              <span className="block font-display text-[16px] font-semibold mt-1">
                {OrderID ? `Order #${OrderID}` : "Order #1234"}
              </span>{" "}
              <span className="block font-display text-[15px] font-semibold text-[#797B7E]">
                {timeOrder ? `${timeOrder}` : "05 Feb 2023, 08:28 PM"}
              </span>{" "}
            </div>
            <img
              src="/imgs/logo_project.png"
              alt=""
              className="bg-black rounded-full object-cover w-[50px] h-[50px]"
            />
          </div>
        </div>
        <div className="list-order w-[100%] h-[80%] mt-5 px-0">
          {/* Phần 2 */}
          {DetailOrders.map((item, index) => (
            <div key={index} className="mb-1 ">
              <ItemOrder
                itemInfo={item.itemInfo}
                itemCount={item.itemCount}
                itemTopping={item.itemTopping}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-row px-5 py-2 justify-between">
          {/* Phần 3 */}
          <div>
            <span className="block font-display text-[15px] font-semibold text-[#797B7E]">
              {DetailOrders.length === 0
                ? `x0 items`
                : `x${DetailOrders.length} items`}
            </span>{" "}
          </div>
          <div className="flex ">
            <div className="mr-2">
              <label
                htmlFor=""
                className={`${getStatusColor(status)} rounded-md p-1`}
              >
                {status}
              </label>
            </div>
            <a href="#">Xem chi tiết</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
