import React, { FC } from "react";
import Image from "next/image";
import "./detail-product-section.css";
import QuantityButton from "../../button/quantity-btn";
import DateSelector from "../../date-picker/DatePicker";
import ItemCard, { ItemProps } from "@/components/item-card/item-card";
import { formatVND } from "@/utils/formatCurrency";
import { Topping } from "@prisma/client";
import { Product } from "@prisma/client";

export type CartItemProps = {
  product: Product; // Thay đổi đây
  relatedProduct: Product[];
  toppings: Topping[];
};

const DetailProduct: FC<CartItemProps> = ({
  product,
  relatedProduct,
  toppings,
}) => {
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
                product.img_path === ""
                  ? "/imgs/bakery-images/muffinb.png"
                  : product.img_path
              }`}
              alt=""
            />
          </div>
          <div className="description h-auto mt-3">
            <b>Mô tả</b>
            <br />
            <textarea
              id="txtDescription"
              readOnly
              className="border-none outline-none focus:outline-none focus:border-none "
            >
              {`${product.description === "" ? "" : product.description}`}
            </textarea>
          </div>
        </div>
        <div className="actionOnProduct">
          <p id="txtName">{`${
            product.name === "" ? "Bánh muffin" : product.name
          }`}</p>
          <div className="flex justify-start items-baseline">
            <p id="txtPrice">
              {product.price === 0
                ? formatVND(28000)
                : formatVND(product.price)}
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
              toppings.map((item, index) => (
                <div key={index}>
                  <div className="topptingAttributeContainer flex items-baseline">
                    <div className="topptingAttribute">{`${
                      item.name === "" ? "Nho khô" : item.name
                    }`}</div>
                    <div className="topptingAttribute">
                      <span>
                        {item.price === 0
                          ? formatVND(10000)
                          : formatVND(item.price)}
                      </span>
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
                <ItemCard product={item}></ItemCard>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
