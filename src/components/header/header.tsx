"use client";
import React, { useEffect, useState } from "react";
import "./header.css";
import Button from "../button/button";
// import img from "next/image";
const Header = () => {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      //   console.log(window.scrollY);
      if (window.scrollY > 500) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header>
      <nav
        className={`navigation flex items-center justify-between content-between w-full h-auto fixed left-0 top-0 transition-all duration-600 ease-linear mt-[-2%] ${
          showHeader === true ? "show bg-black opacity-80" : ""
        }`}
      >
        <div className="flex justify-start items-center content-start">
          <img
            src="/imgs/logo_project.png"
            className="logo w-[107px] h-[107px] mt-4 object-cover"
            alt="Logo"
          />
          <a
            href="#"
            className="menu text-[#f5f5f5] font-poppins text-[18px] ml-[30px]"
          >
            Trang chủ
          </a>
          <a
            href="#"
            className="menu text-[#f5f5f5] font-poppins text-[18px] ml-[30px]"
          >
            Thực đơn
          </a>
          <a
            href="#"
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
        </div>
        <div className="flex justify-start items-center mr-[3%] p-3">
          <img
            src="/imgs/cart-heart-svgrepo-com-white.svg"
            className="logo w-[50px] h-[35px] object-cover cursor-pointer"
            alt="Logo"
          />
          <a
            href="#"
            className="menu text-[#f5f5f5] font- text-[18px] ml-[30px] pl-0"
          >
            Login
          </a>
        </div>
      </nav>

      <div>
        <img
          src="/imgs/final_background_header.jpg"
          alt=""
          className="background z-[-1] inset-0 absolute w-full h-full object-cover object-[70%_100%] bg-no-repeat"
        />
      </div>
      <section>
        <div className="wrapper mb-8 absolute bottom-[10%] left-[2%]">
          <span className="quote text-[#f5f5f5] text-[42px] ">
            Life is short <br />
            Eat dessert first
          </span>
          <div className="mt-32 flex items-center justify-center  gap-x-3 text-sm w-full">
            <Button className=" bg-[#933C24] w-[120px] font-semibold text-white border-black-10 rounded-[5px] h-12 p-4 text-center">
              Đặt hàng ngay
            </Button>
            <a className=" text-[#E9BD8C] text-xl w- inline-block " href="#">
              Về chúng tôi
            </a>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
