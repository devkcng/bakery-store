import React, { FC } from "react";
import Image from "next/image";
import "./cartItem.css";
import QuantityButton from "../button/quantity-btn";
import DateSelector from "../date-picker/DatePicker";

type Topping = {
  toppingId: string; // Mã topping
  toppingName: string; // Tên topping
  toppingPrice: string; // Giá topping
};

export type ProductAttribute = {
  imagePath: string;
  itemName: string;
  itemPrice: string;
  toppings: Topping[]; // Mảng các topping
  itemDescription: string;
};

type CartItemProps = {
  product: ProductAttribute; // Thay đổi đây
};

const CartItem: FC<CartItemProps> = ({ product }) => {
  const { imagePath, itemName, itemPrice, toppings, itemDescription } = product;

  return (
    <div className="container">
      <div className="productInfor">
        <div
          style={{
            backgroundImage: "url('/imgs/bakery-images/item-background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="item_card w-[350px] h-[380x] border-transparent rounded-[30px] flex justify-center items-center flex-col "
        >
          <img
            id="productImg"
            src={`${
              imagePath === "" ? "/imgs/bakery-images/muffinb.png" : imagePath
            }`}
            alt=""
          />
        </div>
        <div className="description">
          <b>Mô tả</b>
          <br />
          <p id="txtDescription">
            {`${itemDescription === "" ? "" : itemDescription}`}
          </p>
        </div>
      </div>
      <div className="actionOnProduct">
        <p id="txtName">{`${itemName === "" ? "Bánh muffin" : itemName}`}</p>
        <div className="flex justify-start items-baseline">
          <p id="txtPrice">
            {itemPrice === "" ? "28.000" : `${itemPrice} VNĐ`}
          </p>
          <QuantityButton
            className="ml-[25%] bg-primary"
            textColor="white"
          ></QuantityButton>
        </div>
        <div className="all">
          <div className="prtAttributeContainer">
            <ul className="flex ">
              <li className="productAttribute">Topping</li>
              <li className="productAttribute">Giá</li>
              <li className="productAttribute ml-5">Số lượng</li>
            </ul>
          </div>
          {toppings &&
            toppings.map((item) => (
              <div key={item.toppingId}>
                <div className="topptingAttributeContainer flex items-baseline">
                  <div className="topptingAttribute">{`${
                    item.toppingName === "" ? "Nho khô" : item.toppingName
                  }`}</div>
                  <div className="topptingAttribute">
                    {item.toppingPrice === ""
                      ? "10.000"
                      : `${item.toppingPrice} VNĐ`}
                  </div>
                  <div className="topptingAttribute">
                    <QuantityButton className="border border-black "></QuantityButton>
                  </div>
                </div>

                <hr className="separateLine" />
              </div>
            ))}
        </div>
        <div className="mt-3  ml-7">
          <DateSelector></DateSelector>
        </div>
        <button id="btnAddToCart" type="button">
          Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  );
};

export default CartItem;
