import React from 'react';
import "./CartItem.css";

const CartItem = () => {
    return (
        <div className='container'>
            <div className='productInfor'>
                <div className='imageContainer'>
                    {/* <img src="C:/Users/huong/Downloads/backblack.jpg" alt="background" id="backgoundImg" />
                    <img src="C:/Users/huong/Downloads/setbakery/muffinb.png" alt="muffin" id="muffinImg" /> */}
                    <img id="backgoundImg" src="https://th.bing.com/th/id/R.cd03da1ece7382ba9714054bd9530882?rik=2Wcm%2f0qQ0FNzfw&riu=http%3a%2f%2fiheartbackgrounds.weebly.com%2fuploads%2f1%2f7%2f4%2f2%2f17420453%2f1432492.png&ehk=qXxDwVP89YP3DAdZVWzZ1ztNuUPwMX80q0pxDUEsCcU%3d&risl=&pid=ImgRaw&r=0" alt="" />
                    <img id="muffinImg" src="https://th.bing.com/th/id/R.23807ef143bf74b1f145b67515c863f8?rik=IuIuPSrbBrOyJg&riu=http%3a%2f%2fpngimg.com%2fuploads%2fmuffin%2fmuffin_PNG117.png&ehk=MZyIXaYtldA0%2b4Hhbwufc2GQepAHWoW6SCkV9EoR3dc%3d&risl=&pid=ImgRaw&r=0" alt="" />
                </div>
                <div className='description'>
                    <b id="txtdescription">Mô tả</b><br/>
                    <textarea id="txtareaDescription" defaultValue=""> 
                    
                    </textarea>
                </div>
            </div>
            <div className='actionOnProduct'>   
                <p id="txtName">Bánh Cookies</p>
                <p id="txtPrice">28.000 VND</p>
                <div className='all'>
                    <div className='prtAttributeContainer'>
                        <ul>
                            <li className="productAttribute">Topping</li>
                            <li className="productAttribute">Giá</li>
                            <li className="productAttribute">Số lượng</li>
                        </ul>
                    </div>
                    <div className='topptingAttributeContainer'>
                        <p className='topptingAttribute'>Nho khô</p>
                        <p className='topptingAttribute'>10.000 VNĐ</p>
                    </div>
                    <hr className='separateLine'/>
                    <div className='topptingAttributeContainer'>
                        <p className='topptingAttribute'>Nho khô</p>
                        <p className='topptingAttribute'>10.000 VNĐ</p>
                    </div>
                    <hr className='separateLine'/>
                    <div className='topptingAttributeContainer'>
                        <p className='topptingAttribute'>Nho khô</p>
                        <p className='topptingAttribute'>10.000 VNĐ</p>
                    </div>
                    <hr className='separateLine'/>
                </div>
                <button id="btnAddToCart" type='button' >Thêm vào giỏ hàng</button>
            </div>
        </div>
    );
};

export default CartItem;