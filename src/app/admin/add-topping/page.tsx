"use client";
import AddTopping from "@/components/add-product/add-topping";
import SidebarAdmin from "@/components/sidebar-admin/sidebarAdmin";

const AddToppingPage = () => {
  return (
    <div className=" ml-[250px] mt-5 pl-[10px] ">
      <SidebarAdmin></SidebarAdmin>
      <AddTopping></AddTopping>
    </div>
  );
};

export default AddToppingPage;
