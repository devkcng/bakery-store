"use client";
import React, { useEffect, useState } from "react";
import "./header.css";
import Button from "../button/button";
import NavBar from "./nav-bar";

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (lastScrollY - currentScrollY > 8 && currentScrollY > 100) {
        // Show header when scrolling up
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY) {
        // Hide header when scrolling down
        setShowHeader(false);
      }
      if (currentScrollY === 0) setShowHeader(false);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header id="home">
      <NavBar
        className={`${showHeader ? " bg-black fixed" : " absolute"}`}
      ></NavBar>

      <div>
        <img
          src="/imgs/final_background_header.jpg"
          alt=""
          className="background z-[-1] inset-0 relative w-full max-h-[800px] object-cover object-[70%_100%] bg-no-repeat"
        />
      </div>
      <section>
        <div className="wrapper mb-8 absolute bottom-[35%] left-[2%]">
          <span className="quote text-[#f5f5f5] text-[42px] ">
            Life is short <br />
            Eat dessert first
          </span>
          <div className="mt-32 flex items-content-between justify-center -z-[1] gap-x-3 text-sm w-full">
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
