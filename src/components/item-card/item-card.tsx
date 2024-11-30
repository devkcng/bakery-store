import Image from "next/image";
import React, { FC } from "react";
import Button from "../button/button";
import "./item-card.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { formatVND } from "@/utils/formatCurrency";
export interface ItemProps {
  imagePath: string;
  itemName: string;
  itemPrice: number;
  itemID?: number;
}
const ItemCard: FC<ItemProps> = ({
  imagePath,
  itemName,
  itemPrice,
  itemID,
}) => {
  const router = useRouter();
  return (
    <>
      <div
        //set background image
        style={{
          backgroundImage: "url('/imgs/bakery-images/item-background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="item_card w-[350px] h-[400px] border-transparent rounded-[30px] ml-[50px] mt-11  flex flex-col "
      >
        {/* Item image */}
        <img
          src={`${
            imagePath === "" ? "/imgs/bakery-images/croissantb.png" : imagePath
          }`}
          alt=""
          className=" item-image block w-full h-[190px] object-contain mt-2"
        />
        {/* Item name */}
        <span className="block text-white text-center font-display text-[22px] font-semibold">
          {itemName === "" ? "Bánh Sừng Trâu" : itemName}
        </span>{" "}
        {/* Item price */}
        <span className="block text-center font-display text-[25px] font-semibold text-[#EB953C] mt-4">
          {itemPrice ? formatVND(itemPrice) : "30,000 VNĐ "}
        </span>
        {/* Action button : Add to cart and View detail */}
        <div className="flex justify-center items-center mt-10 ">
          <a href={`/product/${itemID}`}>
            <Button
              bgColor="primarycolor"
              className="rounded-[50px] w-[165px] h-[58px] border-primarycolor text-white font-display text-center font-semibold"
              onClick={() => (window.location.href = "/product")}
            >
              Xem chi tiết
            </Button>
          </a>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
