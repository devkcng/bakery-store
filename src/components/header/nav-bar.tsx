import React, { FC } from "react";
type NavBarProps = {
  className?: string;
};
const NavBar: FC<NavBarProps> = ({ className = "", ...restProps }) => {
  return (
    <div>
      <nav
        className={`navigation flex items-center justify-between w-full h-auto left-0 top-0 transition-all duration-600 ease-linear mt-[0] z-[1]   ${className}`}
        {...restProps}
      >
        <div className="flex justify-start items-center content-start">
          <img
            src="/imgs/real-logo-removebg-preview.png"
            className="logo w-[100px] h-[80px] object-cover"
            alt="Logo"
          />
        </div>
        <div className=" menu-bar flex justify-start items-center mr-[3%] p-3">
          <a
            href="#home"
            className="menu text-[#f5f5f5] font-poppins text-[18px] ml-[30px]"
          >
            Trang chủ
          </a>
          <a
            href="#menu"
            className="menu text-[#f5f5f5] font-poppins text-[18px] ml-[30px]"
          >
            Thực đơn
          </a>
          <a
            href="#footer"
            className="menu text-[#f5f5f5] font-poppins text-[18px] ml-[30px]"
          >
            Liên hệ
          </a>
          <a
            href="#"
            className="menu text-[#f5f5f5] font- text-[18px] ml-[30px]"
          >
            Tra cứu đơn hàng
          </a>
          <img
            src="/imgs/cart-heart-svgrepo-com2.svg"
            className="menu logo w-[50px] h-[35px] p-0 object-cover cursor-pointer ml-[30px]"
            alt="Logo"
          />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
