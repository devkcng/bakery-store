import Footer from "@/components/Footer/footer";
import Header from "@/components/header/header";
import RecipeMainpage from "@/components/recipeMainpage/recipeMainpage";
import MenuSection from "@/components/section/menu-section/menu-section";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow mb-16">
        <RecipeMainpage />
      </div>
      <MenuSection />
      <div className="mt-[35px]">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
