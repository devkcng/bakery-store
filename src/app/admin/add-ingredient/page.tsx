"use client";
import AddIngredient from "@/components/add-product/add-ingredient";
import SidebarAdmin from "@/components/SidebarAdmin/sidebarAdmin";
import React from "react";

const AddIngredientPage = () => {
  return (
    <div className=" ml-[250px] mt-5 pl-[10px] ">
      <SidebarAdmin></SidebarAdmin>
      <AddIngredient></AddIngredient>
    </div>
  );
};

export default AddIngredientPage;
