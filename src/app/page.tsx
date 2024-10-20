import Header from "@/components/header/header";
import NavBar from "@/components/header/nav-bar";
import ItemCard from "@/components/item-card/item-card";

export default function Home() {
  return (
    <>
      <Header></Header>

      <div className="flex justify-center ">
        {/* <NavBar></NavBar> */}
        <ItemCard itemName="" itemPrice="28,000" imagePath=""></ItemCard>
        <ItemCard
          itemName=""
          itemPrice="28,000"
          imagePath="/imgs/bakery-images/donutb.png"
        ></ItemCard>
        <ItemCard itemName="" itemPrice="28,000" imagePath=""></ItemCard>
      </div>
    </>
  );
}
