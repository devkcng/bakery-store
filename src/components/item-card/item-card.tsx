/* eslint-disable @next/next/no-img-element */
import { formatVND } from "@/utils/formatCurrency";
import { Product } from "@prisma/client";
import { useRouter } from "next/navigation";
import { FC } from "react";
import Button from "../button/button";
import "./item-card.css";
export interface ItemProps {
  product: Product;
}
const ItemCard: FC<ItemProps> = ({ product }) => {
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
            product.img_path === ""
              ? "/imgs/bakery-images/croissantb.png"
              : product.img_path
          }`}
          alt=""
          className=" item-image block w-full h-[190px] object-contain mt-2"
        />
        {/* Item name */}
        <span className="block text-white text-center font-display text-[22px] font-semibold">
          {product.name === "" ? "Bánh Sừng Trâu" : product.name}
        </span>{" "}
        {/* Item price */}
        <span className="block text-center font-display text-[25px] font-semibold text-[#EB953C] mt-4">
          {product.price ? formatVND(product.price) : "30,000 VNĐ "}
        </span>
        {/* Action button : Add to cart and View detail */}
        <div className="flex justify-center items-center mt-10 ">
          <a href={`/product/${product.id}`}>
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
