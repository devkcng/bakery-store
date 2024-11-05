/* eslint-disable @next/next/no-img-element */
import ItemCard, { ItemProps } from "@/components/item-card/item-card";
import { FC } from "react";
import QuantityButton from "../../button/quantity-btn";
import DateSelector from "../../date-picker/DatePicker";
import "./detail-product-section.css";

export type Topping = {
  toppingId?: string;
  toppingName?: string;
  toppingPrice?: string;
};

export interface ProductAttribute<T = any> {
  imagePath?: string;
  itemName?: string;
  itemPrice?: number;
  toppings?: T[];
  itemDescription?: string;
  relatedProduct?: ItemProps[];
}

interface DetailItemProps<T = any> {
  product: ProductAttribute<T>;
}

const DetailItem: FC<DetailItemProps> = ({
  product: {
    imagePath,
    itemName,
    itemPrice,
    toppings,
    itemDescription,
    relatedProduct,
  },
}) => {
  return (
    <div>
      <div className="container">
        <div className="productInfor">
          <div
            style={{
              backgroundImage: "url('/imgs/bakery-images/item-background.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="item_card w-[350px] h-[380px] border-transparent rounded-[30px] flex justify-center items-center flex-col"
          >
            <img
              id="productImg"
              src={imagePath || "/imgs/bakery-images/muffinb.png"}
              alt={itemName || ""}
            />
          </div>
          <div className="description mt-3">
            <b>Mô tả</b>
            <br />
            <p id="txtDescription">{itemDescription || ""}</p>
          </div>
        </div>
        <div className="actionOnProduct">
          <p id="txtName">{itemName || "Bánh muffin"}</p>
          <div className="flex justify-start items-baseline">
            <p id="txtPrice">{itemPrice ? `${itemPrice} VNĐ` : "28.000"}</p>
            <QuantityButton className="ml-[25%] bg-primary" textColor="white" />
          </div>
          <div className="all">
            <div className="prtAttributeContainer">
              <ul className="flex">
                <li className="productAttribute">Topping</li>
                <li className="productAttribute">Giá</li>
                <li className="productAttribute ml-5">Số lượng</li>
              </ul>
            </div>
            {toppings &&
              toppings.map((item, index) => (
                <div key={index}>
                  <div className="topptingAttributeContainer flex items-baseline">
                    <div className="topptingAttribute">
                      {item.toppingName || "Nho khô"}
                    </div>
                    <div className="topptingAttribute">
                      {item.toppingPrice || "10.000"} VNĐ
                    </div>
                    <div className="topptingAttribute">
                      <QuantityButton className="border border-black" />
                    </div>
                  </div>
                  <hr className="separateLine" />
                </div>
              ))}
          </div>
          <div className="mt-3 ml-7 flex justify-between">
            <DateSelector />
            <span className="mr-[6rem] font-semibold">
              Số lượng còn lại:{" "}
              <span className="text-red-500 font-bold">1000</span>
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
        <div className="grid grid-cols-3 gap-1">
          {relatedProduct &&
            relatedProduct.map((item, index) => (
              <ItemCard
                key={index}
                itemID={item.itemID}
                imagePath={item.imagePath}
                itemName={item.itemName}
                itemPrice={item.itemPrice}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default DetailItem;
