import Image from "next/image";
import React, { FC } from "react";

import "./cartItem.css";

type ProductAttribute = {
    imagePath: string;
    itemName: string;
    itemPrice: string;
    toppingName: string;
    toppingPrice: string;
    itemDescription: string;
    
};

const CartItem: FC<ProductAttribute> = ({ imagePath, itemName, itemPrice, toppingName, toppingPrice, itemDescription }) => {
    return (
        <div className='container'>
            <div className='productInfor'>
                <div className='imageContainer'>
                    <img id="backgoundImg" src="/imgs/bakery-images/item-background.png" alt="" />
                    <img id="productImg" src={`${imagePath === "" ? "/imgs/bakery-images/muffinb.png" : imagePath}`} alt="" />
                </div>
                <div className='description'>
                    <b>Mô tả</b><br/>
                    <p id="txtDescription" > 
                        {`${itemDescription ==="" ? "" : itemDescription }`}
                    </p>
                    
                </div>
            </div>
            <div className='actionOnProduct'>   
                <p id="txtName">{`${itemName ==="" ? "Bánh muffin" : itemName }`}</p>
                <p id="txtPrice">{itemPrice === "" ? "28.000" : `${itemPrice} VNĐ`}</p>
                <div className='all'>
                    <div className='prtAttributeContainer'>
                        <ul>
                            <li className="productAttribute">Topping</li>
                            <li className="productAttribute">Giá</li>
                            <li className="productAttribute">Số lượng</li>
                        </ul>
                    </div>
                    <div className='topptingAttributeContainer'>
                        <div className='topptingAttribute'>{`${ toppingName ==="" ? "Nho khô" : toppingName }`}</div>
                        <div className='topptingAttribute'>{toppingPrice === "" ? "10.000" : `${toppingPrice} VNĐ`}</div>
                        <div className='topptingAttribute'></div>
                    </div>
                    <hr className='separateLine'/>
                    <div className='topptingAttributeContainer'>
                        <div className='topptingAttribute'>{`${ toppingName ==="" ? "Nho khô" : toppingName }`}</div>
                        <div className='topptingAttribute'>{toppingPrice === "" ? "10.000" : `${toppingPrice} VNĐ`}</div>
                        <div className='topptingAttribute'></div>

                    </div>
                    <hr className='separateLine'/>
                    <div className='topptingAttributeContainer'>
                        <div className='topptingAttribute'>{`${ toppingName ==="" ? "Nho khô" : toppingName }`}</div>
                        <div className='topptingAttribute'>{toppingPrice === "" ? "10.000" : `${toppingPrice} VNĐ`}</div>
                        <div className='topptingAttribute'></div>
                    </div>
                    <hr className='separateLine'/>
                </div>
                <button id="btnAddToCart" type='button' >Thêm vào giỏ hàng</button>
            </div>
        </div>
    );
};

export default CartItem;