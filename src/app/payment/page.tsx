"use client";
import NavBar from "@/components/header/nav-bar";
import Payment from "@/components/section/payment-section/payment-section";
import React from "react";

const page = () => {
  return (
    <div>
      <NavBar className="bg-black" />
      <Payment></Payment>
    </div>
  );
};

export default page;
