"use client";
import DeliveryInfo from "@/components/DeliveryInfo/deliveryInfo";
import NavBar from "@/components/header/nav-bar";
import React from "react";

const page = () => {
  return (
    <div>
      <NavBar className="bg-black" />
      <DeliveryInfo></DeliveryInfo>
    </div>
  );
};

export default page;
