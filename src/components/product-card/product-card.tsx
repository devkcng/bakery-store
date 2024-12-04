/* eslint-disable @next/next/no-img-element */
import { formatVND } from "@/utils/formatCurrency";
import { FC } from "react";
import { CartItemProps } from "../section/detail-product-section/detail-product-section";
import "./product-card.css";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";

const ProductCard: FC<CartItemProps> = ({ product, toppings }) => {
  return (
    <div className="containerProductAdmin  ">
      <div
        style={{
          backgroundImage: "url('/imgs/bakery-images/item-background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="item_card border-transparent rounded-[30px] my-2 mx-5 w-auto aspect-square text-center inline-flex justify-center items-center"
      >
        <img
          src={`${product?.img_path || "/imgs/bakery-images/muffinb.png"}`}
          alt=""
          className="h-[80%] item-image block w-full object-contain"
        />
      </div>
      <div className="pl-10 pt-3 w-[400px]">
        <span className="block font-display text-[18px] font-semibold mt-1">
          {product?.name ? product.name : "Bánh Muffin"}
        </span>{" "}
        <span className="block font-display text-[18px] font-bold text-[#797B7E] mt-2"></span>
        <span className="block font-display text-sm font-normal text-black mt-2">
          {Array.isArray(toppings)
            ? `${toppings.map((topping) => topping.name).join(", ")}`
            : "nho khô, hạnh nhân"}
        </span>
      </div>
      <div className="ml-5">
        <span className="block font-display text-[18px] font-semibold text-black mt-4">
          {product?.price
            ? `Đơn giá: ${formatVND(product.price)}`
            : `Đơn giá: ${formatVND(30000)}`}
        </span>
        <div className="flex flex-row justify-end space-x-2 mt-2">
          <svg
            className="cursor-pointer"
            width="30px"
            height="30px"
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
                d="M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M14 10V17M10 10V17"
                stroke="red"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
          <svg
            className="cursor-pointer"
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <title></title>{" "}
              <g id="Complete">
                {" "}
                <g id="edit">
                  {" "}
                  <g>
                    {" "}
                    <path
                      d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8"
                      fill="none"
                      stroke="green"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>{" "}
                    <polygon
                      fill="none"
                      points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8"
                      stroke="green"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></polygon>{" "}
                  </g>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
