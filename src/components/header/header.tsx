"use client";
import React, { useEffect, useState } from "react";
import "./header.css";
import Button from "../button/button";
import NavBar from "./nav-bar";
// import img from "next/image";
const Header = () => {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY > 600) {
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
      <NavBar
        className={`${showHeader === true ? " bg-black opacity-90" : ""}`}
      ></NavBar>

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
          <div className="mt-32 flex items-content-between justify-center -z-[1]  gap-x-3 text-sm w-full">
            <a
              className="text-[#fff] text-xl inline-flex bg-[#933C24] justify-center items-center border border-transparent rounded-[30px] w-auto h-12 px-5 font-display"
              href="#"
            >
              Đặt hàng ngay
            </a>

            <a
              className="text-[#fff] text-xl inline-flex justify-center items-center border border-white rounded-[30px] w-auto h-12 px-5 font-display"
              href="#"
            >
              Về chúng tôi
            </a>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
