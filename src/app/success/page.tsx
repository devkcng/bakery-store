"use client";
import NavBar from "@/components/header/nav-bar";
import React from "react";

const SuccessPage = () => {
  return (
    <div>
      <NavBar className="bg-black" />
      <div className=" w-full text-center">
        <div className="m-auto text-center font-extrabold text-green-500 text-3xl mt-5">
          Thanh toán thành công !
        </div>
        <div className="text-center m-auto inline-flex justify-center w-full mt-20">
          <img
            className="block w-auto h-[450px]"
            src="imgs/shopping-bag-svgrepo-com.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
