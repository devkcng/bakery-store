import React from 'react';
import "./sidebarAdmin.css";

const sidebarAdmin = () => {
    return (
        <div>
            <div className='sidebar'>
                <img src="/imgs/real-logo-removebg-preview.png" className="Logo" alt="Logo"/>
                <div className='btnContainer'>
                    <button type='button' className='btn'><img className="icon" src="/imgs/bakery-images/icon-order.png" alt="icon-order" />Đơn hàng</button>
                    <button type='button' className='btn'><img className="icon" src="/imgs/bakery-images/iconstatistic.png" alt="icon-statistic" />Thống kê</button>
                    <button type='button' className='btn'><img className="icon" src="/imgs/bakery-images/icon-product.png" alt="icon-product" />Sản phẩm</button>
                    <button type='button' className='btn'><img className="icon" src="/imgs/bakery-images/icon-setting.png" alt="icon-setting" />Cài đặt  </button>
                </div>
            </div>
        </div>
    );
};

export default sidebarAdmin;