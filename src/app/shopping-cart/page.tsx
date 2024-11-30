"use client";
import Footer from "@/components/footer/footer";
import NavBar from "@/components/header/nav-bar";
import ShoppingCart from "@/components/section/user-cart-section/user-cart-section";

const page = () => {
  return (
    <div>
      <NavBar className="bg-black" />
      <div className="mb-10">
        <ShoppingCart></ShoppingCart>
      </div>
    </div>
  );
};

export default page;
