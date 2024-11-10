"use client";
import { ItemProps } from "@/components/item-card/item-card";
// import MenuSection from "@/components/section/menu-section";

import { DetailOrder } from "@/components/item-order/item-order";
// import OrderInfoSection from "@/components/section/orderInfo-section";
// import Admin from "@/components/Admin/manage-ingredient-detail";
// import Admin from "@/components/Admin/manage-order";
// import Admin from "@/components/Admin/manage-oven-detail";

import BakeStatusOrder from "@/components/Admin/manage-order-detail";
export default function Home() {
  // const [selectedOption, setSelectedOption] = useState<string>("HTML");
  // const options: string[] = ["HTML", "React", "Vue", "Angular"];

  // const handleOptionChange = (option: string) => {
  //   setSelectedOption(option);
  // };
  // console.log(selectedOption);
  const itemInfo: ItemProps = {
    imagePath: "", // Đường dẫn đến ảnh
    itemName: "", // Tên món
    itemPrice: 28000, // Giá món
  };
  const count = 2;
  const time: string = new Date().toLocaleString("vi-VN", {
    timeZone: "Asia/Ho_Chi_Minh",
  });
  const listOfOrders: DetailOrder[] = [
    {
      itemInfo: { imagePath: "", itemName: "", itemPrice: 28000 },
      itemCount: 2,
      itemTopping: "chân trâu, dậu đỏ",
    },
    {
      itemInfo: { imagePath: "", itemName: "", itemPrice: 28000 },
      itemCount: 4,
      itemTopping: "mè đen",
    },
    {
      itemInfo: { imagePath: "", itemName: "", itemPrice: 28000 },
      itemCount: 5,
      itemTopping: "hạnh nhân",
    },
  ];
  const bakeStatusData = [
    {
      ID: "6",
      orderCode: "ABC123",
      completeTime: "10:00 AM",
      leftTime: "2 hours",
      bakeStatus: "Completed",
      detailView: "View",
    },
    {
      ID: "2",
      orderCode: "DEF456",
      completeTime: "11:00 AM",
      leftTime: "1 hour",
      bakeStatus: "In Progress",
      detailView: "View",
    },
  ];
  // iD: string;
  const ingredientManageData = [
    {
      iD: "3",
      ingredientName: "bot my",
      quantity: "100",
      unit: "kg",
      ingredientPrice: "100.000",
    },
    {
      iD: "3",
      ingredientName: "bot my",
      quantity: "100",
      unit: "kg",
      ingredientPrice: "100.000",
    },
  ];
  const ordersData = [
    {
      ovenID: "1",
      productName: "Bánh mì",
      status: "Đang nướng",
      orderedQuantity: "100",
      processingQuantity: "50",
      processedQuantity: "30",
      startTime: "08:00 AM",
      leftTime: "02:00",
    },
    {
      ovenID: "2",
      productName: "Bánh ngọt",
      status: "Đã hoàn thành",
      orderedQuantity: "200",
      processingQuantity: "0",
      processedQuantity: "200",
      startTime: "07:00 AM",
      leftTime: "00:00",
    },
  ];
  const ovensData = [
    { iD: "001", quantity: "10", completeTime: "09:00 AM", leftTime: "1 giờ" },
    { iD: "002", quantity: "20", completeTime: "10:00 AM", leftTime: "2 giờ" },
    // Thêm các đối tượng khác vào đây
  ];
  const toppingsData = [
    { iD: "1", toppingName: "Phô mai", toppingPrice: "5000" },
    { iD: "2", toppingName: "Xúc xích", toppingPrice: "10000" },
    // Thêm các đối tượng khác vào đây
  ];
  console.log(time);
  const pseudoBakeStatusData: BakeStatusOrder[] = [
    {
      ID: "001",
      orderCode: "ORD123",
      completeTime: "14:30",
      leftTime: "00:45",
      bakeStatus: "In Progress",
      detailView: "View Details",
    },
    {
      ID: "002",
      orderCode: "ORD124",
      completeTime: "15:00",
      leftTime: "01:15",
      bakeStatus: "In Progress",
      detailView: "View Details",
    },
    {
      ID: "003",
      orderCode: "ORD125",
      completeTime: "16:00",
      leftTime: "02:00",
      bakeStatus: "Pending",
      detailView: "View Details",
    },
    {
      ID: "004",
      orderCode: "ORD126",
      completeTime: "14:00",
      leftTime: "00:30",
      bakeStatus: "Completed",
      detailView: "View Details",
    },
    {
      ID: "005",
      orderCode: "ORD127",
      completeTime: "17:30",
      leftTime: "03:00",
      bakeStatus: "Pending",
      detailView: "View Details",
    },
  ];
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

      {/* <ProductCard productInfo={itemInfo} productTopping=""></ProductCard> */}
      {/* <ManageProduct></ManageProduct> */}
      {/* <BakeStatusOrder manageBake={pseudoBakeStatusData}></BakeStatusOrder> */}
    </div>
  );
}
