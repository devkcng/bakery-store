"use client";
import NavBar from "@/components/header/nav-bar";
import OrderInfoSection from "@/components/section/order-info-section/orderInfo-section";
import React from "react";
const time = new Date("2022-01-01T12:00:00").toLocaleString("en-GB", {
  timeZone: "Asia/Ho_Chi_Minh",
});
const page = () => {
  return (
    <div>
      <NavBar className="bg-black" />
      <OrderInfoSection></OrderInfoSection>
    </div>
  );
};

export default page;
