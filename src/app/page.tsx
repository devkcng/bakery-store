"use client";
import LogInSignUp from "@/components/logIn-signUp/logIn-signUp";
export default function Home() {
  return (
    <div>
      {/* <SearchBar className="mt-[50px]" isShow={true}></SearchBar> */}
      {/* <SearchBar className="mt-[50px]" isShow={false}></SearchBar> */}
      {/* <NavBar></NavBar> */}
      {/* <HomePage></HomePage> */}
      {/* <ItemOrder 
          itemInfo={itemInfo}    
          itemCount={count}         
          itemTopping="" 
      /> */}
      {/* <OrderInfoSection
        idOrder="112233"
        addressBuyer="So 1 Vo Van Ngan"
        idStatus="Đã giao"
        nameBuyer="Nguyễn Văn Vũ"
        note="Giao cho bảo vệ"
        phonenumber="0327521953"
        time={time.toString()}
      ></OrderInfoSection> */}
      {/* <AddProduct></AddProduct> */}

      {/* <OrderCard OrderID="" timeOrder="" DetailOrders={listOfOrders} status="Đã hủy"></OrderCard> */}
      {/* <ProductCard productInfo={itemInfo} productTopping=""></ProductCard> */}
      {/* <Admin manageBake={bakeStatusData}/> */}
      {/* <Admin orders={ordersData}/>  */}
      {/* <Admin ovens={ovensData} /> */}
      {/* <Admin toppings={toppingsData} /> */}
      {/* <Admin toppings={toppingsData} /> */}

      {/* <ProductCard productInfo={itemInfo} productTopping=""></ProductCard> */}
      {/* <ManageProduct></ManageProduct> */}
      {/* <BakeStatusOrder manageBake={pseudoBakeStatusData}></BakeStatusOrder> */}
      <LogInSignUp></LogInSignUp>
    </div>
  );
}
