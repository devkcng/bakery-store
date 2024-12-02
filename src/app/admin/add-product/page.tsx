"use client";
import AddBake from "@/components/add-product/add-bake";
import SidebarAdmin from "@/components/sidebar-admin/sidebarAdmin";

const page = () => {
  return (
    <div className=" ml-[250px] mt-5 pl-[10px] ">
      <SidebarAdmin></SidebarAdmin>
      <AddBake></AddBake>
    </div>
  );
};

export default page;
