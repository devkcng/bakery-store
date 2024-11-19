"use client";
import Footer from "@/components/footer/footer";
import NavBar from "@/components/header/nav-bar";
import ShoppingCart from "@/components/section/user-cart-section/user-cart-section";

const page = () => {
  return (
    <div>
      <NavBar className="bg-black" />
      <ShoppingCart></ShoppingCart>
      <div className="mt-[35px]">
        <Footer />
      </div>
    </div>
  );
};

export default page;
