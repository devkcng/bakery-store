import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <footer>
        <div className="Footer">
            <div className="Container">
                <div className="exploreShop">
                     <img src="/imgs/real-logo-removebg-preview.png" className="Logo" alt="Logo"/>
                </div>
                <div className="exploreShop">
                    <p className="titleInfo">Khám phá</p>
                    <ul>
                        <li>Trang chủ</li>
                        <li>Menu</li>
                        <li>Tra cứu</li>
                    </ul>
                </div>
                <div className="exploreShop">
                    <p className="titleInfo">Về chúng tôi</p>
                    <ul>
                        <li>Liên hệ: 0123456789</li>
                        <li>Email: khacbakery@gmail.com</li>
                        <li>Địa chỉ: Số 1, Võ Văn Ngân, Tp.Thủ Đức</li>
                    </ul>
                </div>
            </div>
            <div className='separateLine'></div>
        </div>
        </footer>
    );
};

export default Footer;