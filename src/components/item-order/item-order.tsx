import React, { FC } from "react";
import "./item-order.css";
import ItemCard, { ItemProps } from "../item-card/item-card";
import internal from "stream";
import { formatVND } from "@/utils/formatCurrency";
export interface DetailOrder {
  itemInfo: ItemProps;
  itemCount: number;
  itemTopping: string;
  className?: string;
}

const ItemOrder: FC<DetailOrder> = ({
  itemInfo,
  itemCount,
  itemTopping,
  className = "",
}) => {
  return (
    <div className={`item_order_container ${className}`}>
      <div className="pl-2.5">
        <img
          src={`${itemInfo?.imagePath || "/imgs/bakery-images/muffinb.png"}`}
          alt=""
        />
      </div>
      <div className="pl-2.5">
        <span className="block font-display text-[14px] font-semibold mt-1">
          {itemInfo?.itemName ? itemInfo.itemName : "Bánh Muffin"}
        </span>{" "}
        <span className="block font-display text-[14px] font-semibold text-[#797B7E] mt-2">
          {itemTopping === "" ? "nho khô, hạnh nhân" : itemTopping}
        </span>
        <span className="block font-display text-[11px] font-semibold text-[#797B7E] mt-4">
          {itemInfo?.itemPrice === 0
            ? `Đơn giá: ${formatVND(itemCount * itemInfo.itemPrice)}`
            : `Đơn giá: ${formatVND(28000)}`}
        </span>
        <span className="block font-display text-[16px] font-semibold text-[#F67575] mb-2">
            {itemCount * itemInfo.itemPrice < 0
            ? `Tổng: ${formatVND(28000)}`
            : `Tổng: ${formatVND(itemCount * itemInfo.itemPrice)}`}
        </span>
      </div>
      <div className="pl-4">
        <span className="block text-center font-display text-[14px] font-semibold mt-4">
          {itemCount < 0 ? "0" : `SL: ${itemCount}`}
        </span>
      </div>
    </div>
  );
};

export default ItemOrder;
