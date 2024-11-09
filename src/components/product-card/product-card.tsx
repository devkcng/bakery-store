import React, { FC } from "react";
import ItemCard, { ItemProps } from "../item-card/item-card";
import "./product-card.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
export interface ProductProps {
    productInfo: ItemProps;
    productTopping: string;
};
const ProductCard: FC<ProductProps> = ({ productInfo, productTopping}) => {
    return (
        <div className="containerProductAdmin">
      <div
      style={{
        backgroundImage: "url('/imgs/bakery-images/item-background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      className="item_card border-transparent rounded-[30px] my-2 mx-5 w-auto aspect-square">
        <img
          src={`${productInfo?.imagePath || "/imgs/bakery-images/muffinb.png"}`}
          alt=""
          className="h-[80%] item-image block w-full object-contain"
        />
      </div>
      <div className="pl-10 pt-3">
        <span className="block font-display text-[18px] font-semibold mt-1">
          {productInfo?.itemName ? productInfo.itemName : "Bánh Muffin"}
        </span>{" "}
        <span className="block font-display text-[18px] font-bold text-[#797B7E] mt-2">
          Topping
        </span>
        <span className="block font-display text-[16px] font-semibold text-[#797B7E] mt-2">
          {productTopping === "" ? "nho khô, hạnh nhân" : productTopping}
        </span>
      </div>
      <div className="pl-20 ml-20">
      <span className="block font-display text-[18px] font-semibold text-black mt-4">
          {productInfo?.itemPrice === 0
            ? `Đơn giá: ${productInfo.itemPrice} VNĐ`
            : `Đơn giá: 28000 VNĐ`}
        </span>
        <div className="flex flex-row space-x-2 mt-2">
        <button className="btn btn-outline-danger d-flex align-items-center">
            <i className="bi bi-trash"></i> {/* Bootstrap Icon */}
        </button>
        <button className="btn btn-outline-success d-flex align-items-center">
            <i className="bi bi-pencil"></i> {/* Bootstrap Icon cho biểu tượng chỉnh sửa */}
        </button>
        </div>
      </div>
    </div>
    );
};

export default ProductCard;