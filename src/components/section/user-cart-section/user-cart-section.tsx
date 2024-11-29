import Button from "@/components/button/button";
import Cart from "@/components/cart/Cart";
import CheckBox from "@/components/checkbox/checkbox";
import React from "react";
import "./user-cart-section.css";
import { useRouter } from "next/navigation";
import { formatVND } from "@/utils/formatCurrency";

const ShoppingCart = () => {
  const router = useRouter();
  return (
    <div className="mt-5 flex flex-col w-[98%] ">
      <div className=" flex mb-5">
        <div className="text-lg font-medium text-left w-[35%] pl-5 text-primarycolor">
          Đã chọn: <span className="text-lg font-medium text-black">0</span> /{" "}
          <span className="text-lg font-medium text-black">5</span>
        </div>
        <div className=" text-center font-bold text-[38px] mb-1 w-[30%]">
          Thông tin giỏ hàng
        </div>
        <div className="w-[35%] flex text-xs justify-end mr-12">
          <Button
            bgColor="green"
            className="bg-green-400 rounded-xl text-white w-[130px] text-center h-12 mr-2"
          >
            <svg
              className="inline mr-1"
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M4 12.9L7.14286 16.5L15 7.5"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M20 7.5625L11.4283 16.5625L11 16"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
            Chọn tất cả
          </Button>
          <Button
            bgColor="green"
            className="bg-red-600 rounded-xl text-white w-[130px] text-center h-12"
          >
            <svg
              className="inline mr-2"
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M20.5001 6H3.5"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>{" "}
                <path
                  d="M9.5 11L10 16"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>{" "}
                <path
                  d="M14.5 11L14 16"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>{" "}
                <path
                  d="M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6"
                  stroke="#ffffff"
                  stroke-width="1.5"
                ></path>{" "}
                <path
                  d="M18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5M18.8334 8.5L18.6334 11.5"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>{" "}
              </g>
            </svg>
            Xóa tất cả
          </Button>
        </div>
      </div>
      <div className="list-order-cart-detail overflow-y-auto h-screen self-center mx-auto pb-5 ">
        <div className="cart-detail flex items-center justify-center">
          <Cart></Cart>
          <div className="flex items-center p-2">
            <CheckBox></CheckBox>
            <svg
              className="block ml-5 cursor-pointer"
              width="45px"
              height="45px"
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
                  d="M10 12V17"
                  stroke="#ff0000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M14 12V17"
                  stroke="#ff0000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M4 7H20"
                  stroke="#ff0000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
                  stroke="#ff0000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                  stroke="#ff0000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </div>
        </div>
        <div className="cart-detail flex items-center justify-center">
          <Cart></Cart>
          <div className="flex items-center p-2">
            <CheckBox></CheckBox>
            <svg
              className="block ml-5 cursor-pointer"
              width="45px"
              height="45px"
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
                  d="M10 12V17"
                  stroke="#ff0000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M14 12V17"
                  stroke="#ff0000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M4 7H20"
                  stroke="#ff0000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
                  stroke="#ff0000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                  stroke="#ff0000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </div>
        </div>
        <div className="cart-detail flex items-center justify-center">
          <Cart></Cart>
          <div className="flex items-center p-2">
            <CheckBox></CheckBox>
            <svg
              className="block ml-5 cursor-pointer"
              width="45px"
              height="45px"
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
                  d="M10 12V17"
                  stroke="#ff0000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M14 12V17"
                  stroke="#ff0000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M4 7H20"
                  stroke="#ff0000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
                  stroke="#ff0000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                  stroke="#ff0000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </div>
        </div>
        <div className="cart-detail flex items-center justify-center">
          <Cart></Cart>
          <div className="flex items-center p-2">
            <CheckBox></CheckBox>
            <svg
              className="block ml-5 cursor-pointer"
              width="45px"
              height="45px"
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
                  d="M10 12V17"
                  stroke="#ff0000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M14 12V17"
                  stroke="#ff0000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M4 7H20"
                  stroke="#ff0000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
                  stroke="#ff0000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                  stroke="#ff0000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="self-center mt-5 ">
        <Button
          className="bg-primarycolor w-[1024px] h-16 rounded-2xl text-center text-white font-extrabold"
          onClick={() => (window.location.href = "/delivery-info")}
        >
          <div className="flex justify-between">
            <span className="text-white font-bold text-2xl ml-16">
              Thanh toán :
            </span>
            <span className="text-white font-bold text-2xl mr-16">
              {formatVND(849000)}
            </span>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default ShoppingCart;
