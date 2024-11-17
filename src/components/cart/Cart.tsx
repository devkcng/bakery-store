/* eslint-disable @next/next/no-img-element */
import React from "react";
import QuantityButton from "../button/quantity-btn";

const Cart = () => {
  return (
    <div>
      <div className="w-[1024px] h-[auto] pb-3 bg-white border-solid border-gray-500 border-[1px] m-auto mt-2 rounded-3xl flex justify-start items-center mb-10">
        {/* Item picture */}
        <div
          className="item_card w-[180px] h-auto border-transparent rounded-[30px] flex justify-center items-center flex-col mx-0 mt-2 mb-2 ml-16 "
          style={{
            backgroundImage: "url('/imgs/bakery-images/item-background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img
            className="w-[170px] h-[170px]"
            id="productImg"
            // src={`${
            //   imagePath === "" ? "/imgs/bakery-images/muffinb.png" : imagePath
            // }`}
            src="/imgs/bakery-images/muffinb.png"
            alt=""
          />
        </div>
        {/* Item info */}
        <div className="ml-[100px] self-start mt-5">
          <div className="flex items-center">
            <div className="w-[56%]">
              <span className="block text-xl font-sans font-extrabold w-auto">
                Bánh Sừng Trâu
              </span>
              <span className="block text-lg font-bold text-[#eb953c]">
                28,000 VNĐ
              </span>
            </div>
            <QuantityButton
              className=" bg-primarycolor ml-5"
              textColor="white"
            ></QuantityButton>
          </div>
          {/* Topping section */}
          <span className="block font-bold text-lg">Topping</span>
          {/* List picked topping */}
          <div className="mb-2">
            <div className="topptingAttributeContainer flex items-baseline">
              <div className="topptingAttribute ">
                {/* {`${item.toppingName === "" ? "Nho khô" : item.toppingName}`} */}
                Nho khô
              </div>
              <div className="topptingAttribute ml-5">
                {/* {item.toppingPrice === ""
                  ? "10.000"
                  : `${item.toppingPrice} VNĐ`} */}
                10,000 VNĐ
              </div>
              <div className="topptingAttribute ml-4">
                <QuantityButton className="border border-black "></QuantityButton>
              </div>
            </div>
            <hr className="separateLine bg-black w-[100%] h-[1.5px] mt-2" />
          </div>
          <div className="mb-2">
            <div className="topptingAttributeContainer flex items-baseline">
              <div className="topptingAttribute ">
                {/* {`${item.toppingName === "" ? "Nho khô" : item.toppingName}`} */}
                Nho khô
              </div>
              <div className="topptingAttribute ml-5">
                {/* {item.toppingPrice === ""
                  ? "10.000"
                  : `${item.toppingPrice} VNĐ`} */}
                10,000 VNĐ
              </div>
              <div className="topptingAttribute ml-4">
                <QuantityButton className="border border-black "></QuantityButton>
              </div>
            </div>
            <div className=" bg-black w-[100%] h-[1px] mt-2" />
          </div>
        </div>
        {/* Total and Datetime */}
        <div className="ml-5">
          <span className="text-3xl font-bold text-black text-center">
            Tổng:{" "}
          </span>
          <span className="font-bold text-3xl text-red-500 text-center">
            300,000 VNĐ
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
