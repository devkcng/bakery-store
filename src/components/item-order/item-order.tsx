import { formatVND } from "@/utils/formatCurrency";
import { FC } from "react";
import { ItemProps } from "../item-card/item-card";
import "./item-order.css";
export interface DetailOrder {
  // itemInfo: ItemProps;
  // itemCount: number;
  // itemTopping: string;
  className?: string;
  productId: string;
  productName: string;
  productQuantity: number;
  productImgPath: string;
  productPrice: number;
  toppings: string[];
  totalPrice: number;
}

const ItemOrder: FC<DetailOrder> = ({
  productId,
  productName,
  productQuantity,
  productImgPath,
  productPrice,
  toppings,
  totalPrice,
  className = "",
}) => {
  const listToppingName = Array.isArray(toppings) ? toppings.join(", ") : "";
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
          {productName ? productName : "Bánh "}
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
          {productQuantity * productPrice < 0
            ? `Tổng: ${formatVND(28000)}`
            : `Tổng: ${formatVND(totalPrice)}`}
        </span>
      </div>
      <div className="pl-4">
        <span className="block text-center font-display text-[14px] font-semibold mt-4">
          {productQuantity < 0 ? "0" : `SL: ${productQuantity}`}
        </span>
      </div>
    </div>
  );
};

export default ItemOrder;
