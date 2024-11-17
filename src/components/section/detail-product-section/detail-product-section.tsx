import React, { FC } from "react";
import Image from "next/image";
import "./detail-product-section.css";
import QuantityButton from "../../button/quantity-btn";
import DateSelector from "../../date-picker/DatePicker";
import ItemCard, { ItemProps } from "@/components/item-card/item-card";

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
  relatedProduct: ItemProps[];
};

type CartItemProps = {
  product: ProductAttribute; // Thay đổi đây
};

const DetailProduct: FC<CartItemProps> = ({ product }) => {
  const {
    imagePath,
    itemName,
    itemPrice,
    toppings,
    itemDescription,
    relatedProduct,
  } = product;

  return (
    <div>
      <div className="detail-product-container">
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
          <div className="description mt-3">
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
              className="ml-[25%] bg-primarycolor"
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
          <div className="mt-3  ml-7 flex justify-between">
            <div>
              <DateSelector></DateSelector>
            </div>
            <span className="mr-[6rem] font-semibold">
              Số lượng còn lại:
              <span className="text-red-500 font-bold"> 1000</span>
            </span>
          </div>
          <button id="btnAddToCart" type="button">
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
      <div className="related-products mt-[100px]">
        <span className="flex items-center justify-center text-[40px] font-bold">
          Sản phẩm liên quan
        </span>
        <div className=" grid grid-cols-3 gap-1 ">
          {relatedProduct &&
            relatedProduct.map((item, index) => (
              <div key={index}>
                <ItemCard
                  imagePath={item.imagePath}
                  itemName={item.itemName}
                  itemPrice={item.itemPrice}
                ></ItemCard>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
