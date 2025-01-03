import { formatVND } from "@/utils/formatCurrency";
import { FC } from "react";
import { ItemProps } from "../item-card/item-card";
import "./item-order.css";
export interface DetailOrder {
  // itemInfo: ItemProps;
  // itemCount: number;
  // itemTopping: string;
  className?: string;
  productID: number;
  productName: string;
  productQuantiy: number;
  productImgPath: string;
  productPrice: number;
  toppings: string[];
  totalPrice: number;
}

const ItemOrder: FC<DetailOrder> = ({
  productID,
  productName,
  productQuantiy,
  productImgPath,
  productPrice,
  toppings,
  totalPrice,
  className = "",
}) => {
  const listToppingName = toppings.join(", ");
  return (
    <div className={`item_order_container ${className}`}>
      <div className="pl-2.5">
        <img
          src={`${productImgPath || "/imgs/bakery-images/muffinb.png"}`}
          alt=""
        />
      </div>
      <div className="pl-2.5">
        <span className="block font-display text-[14px] font-semibold mt-1">
          {productName ? productName : "Bánh Muffin"}
        </span>{" "}
        <span className="block font-display text-sm font-light text-[#797B7E] mt-2 w-[150px] overflow-auto">
          {!listToppingName ? "Không có topping" : listToppingName}
        </span>
        <span className="block font-display text-[11px] font-bold text-[#797B7E] mt-1">
          {productPrice === 0
            ? `Đơn giá bánh: ${formatVND(28000)}`
            : `Đơn giá bánh: ${formatVND(productPrice)}`}
        </span>
        <span className="block font-display text-[16px] font-semibold text-[#F67575] mb-2">
          {productQuantiy * productPrice < 0
            ? `Tổng: ${formatVND(28000)}`
            : `Tổng: ${formatVND(totalPrice)}`}
        </span>
      </div>
      <div className="pl-4">
        <span className="block text-center font-display text-[14px] font-semibold mt-4">
          {productQuantiy < 0 ? "0" : `SL: ${productQuantiy}`}
        </span>
      </div>
    </div>
  );
};

export default ItemOrder;
