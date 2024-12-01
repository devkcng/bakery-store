/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import QuantityButton from "../button/quantity-btn";
import { formatVND } from "@/utils/formatCurrency";
export interface CartProps {
  productId: number;
  productName: string;
  productPrice: number;
  productImgPath: string;
  productQuantity: number;
  toppings: Topping[];
  deliveryDate: string;
  total: number;
}

export interface Topping {
  id: number;
  name: string;
  quantity: number;
  price: number;
}
const Cart: FC<CartProps> = ({
  productId,
  productName,
  productQuantity,
  productPrice,
  productImgPath,
  toppings,
  deliveryDate,
  total,
}) => {
  return (
    <div>
      <div className="w-[auto] px-10 h-[auto] pb-1 bg-white border-solid border-gray-500 border-[1px] m-auto mt-2 rounded-3xl flex justify-start items-center mb-2">
        {/* Item picture */}
        <div
          className="item_card w-[250px] ] h-[200px] border-transparent rounded-[30px] flex justify-center items-center flex-col mx-0 mt-2 mb-2 ml-16 "
          style={{
            backgroundImage: "url('/imgs/bakery-images/item-background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img
            className="w-[60%] h-[auto] object-cover"
            id="productImg"
            // src={`${
            //   imagePath === "" ? "/imgs/bakery-images/muffinb.png" : imagePath
            // }`}
            src={productImgPath}
            alt=""
          />
        </div>
        {/* Item info */}
        <div className="ml-[100px] self-start mt-5">
          <div className="flex items-center">
            <div className="w-[230px]">
              <span className="block text-md font-sans font-extrabold w-auto">
                {productName}
              </span>
              <span className="block text-sm font-bold text-[#eb953c]">
                {formatVND(productPrice)}
              </span>
            </div>
            <QuantityButton
              initialQuantity={productQuantity}
              className=" bg-primarycolor ml-5"
              textColor="white"
            ></QuantityButton>
          </div>
          {/* Topping section */}
          <span className="block font-bold text-md">Topping</span>
          {/* List picked topping */}
          {toppings.map((item) => (
            <div className="mb-2" key={item.id}>
              <div className="topptingAttributeContainer flex items-baseline">
                <div className="topptingAttribute text-sm w-[150px]">
                  {/* {`${item.toppingName === "" ? "Nho khô" : item.toppingName}`} */}
                  {item.name}
                </div>
                <div className="topptingAttribute ml-5 text-sm w-20 ">
                  {/* {item.toppingPrice === ""
                  ? "10.000"
                  : `${item.toppingPrice} VNĐ`} */}
                  <span>{formatVND(item.price)}</span>
                </div>
                <div className="topptingAttribute ml-4 text-sm">
                  <QuantityButton
                    className="border border-black "
                    initialQuantity={item.quantity}
                  ></QuantityButton>
                </div>
              </div>
              <hr className="separateLine bg-black w-[100%] h-[1.5px] mt-2" />
            </div>
          ))}
        </div>
        {/* Total and Datetime */}
        <div className="ml-5">
          <span className="text-lg font-bold text-black text-center">
            Tổng:{" "}
          </span>
          <span className="font-bold text-lg text-red-500 text-center">
            {formatVND(total)}
          </span>
          <div className="">Ngày lấy bánh: {deliveryDate}</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
