"use client";
import React, { FC, useEffect, useState } from "react";
import "./orderInfo.css";
import ItemOrder, { DetailOrder } from "../../item-order/item-order";
import ItemCard, { ItemProps } from "@/components/item-card/item-card";
import SearchBar from "../../search-bar/search-bar";
import { formatVND } from "@/utils/formatCurrency";

const itemInfo: ItemProps = {
  imagePath: "", // Đường dẫn đến ảnh
  itemName: "", // Tên món
  itemPrice: 28000, // Giá món
};
const items: DetailOrder[] = [
  { itemInfo, itemCount: 2, itemTopping: "chân trâu, dậu đỏ" },
  { itemInfo, itemCount: 3, itemTopping: "mè đen" },
  { itemInfo, itemCount: 4, itemTopping: "mè đen" },
  { itemInfo, itemCount: 5, itemTopping: "hạnh nhân" },
];

export interface orderInfo {
  idOrder: string;
  idStatus: string;
  time: string;
  nameBuyer: string;
  addressBuyer: string;
  phoneNumber: string;
  note: string;
}

const OrderInfoSection = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const handleSearchChange = (value: string) => {
    setSearchValue(value); // Cập nhật giá trị state khi nhập liệu vào SearchBar
  };

  const [listOrder, setListOrder] = useState([]);
  const [orderData, setOrderData] = useState(null); // Khởi tạo với null

  // Load danh sách đơn hàng từ localStorage
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const list = JSON.parse(localStorage.getItem("order") || "[]");
      setListOrder(list);
    }
  }, []);

  // Lọc danh sách đơn hàng khi người dùng nhập số điện thoại
  useEffect(() => {
    if (searchValue) {
      const filteredOrders = listOrder.filter(
        (order) => order.deliveryInfo.phoneNumber.includes(searchValue) // So sánh số điện thoại chứa chuỗi tìm kiếm
      );
      // Nếu có đơn hàng phù hợp, set orderData là đơn hàng đầu tiên
      setOrderData(filteredOrders.length > 0 ? filteredOrders[0] : null);
    } else {
      setOrderData(null); // Nếu không có giá trị tìm kiếm, không có đơn hàng nào được chọn
    }
  }, [searchValue, listOrder]);
  console.log(orderData);

  return (
    <div id="order-info-container">
      <div className="flex flex-col items-center mt-5 mb-5 ">
        <SearchBar
          onSearchChange={handleSearchChange}
          isShow={true}
          className="searchBarLarger "
        />
      </div>

      {/* Information */}
      {orderData ? ( // Chỉ render khi orderData có giá trị
        <div className="flex flex-row items-end m-auto text-center justify-center mb-10">
          <span className="block font-display text-[14px] font-semibold text-[#797B7E] mt-2">
            {orderData.orderID}
          </span>
          <label className="block font-display text-[14px] font-semibold text-[#EA5848] mt-2 ml-2">
            {orderData.orderStatus === "PENDING"
              ? "| Đang chờ xử lý"
              : orderData.orderStatus === "PROCESSING"
              ? "| Đang xử lý"
              : orderData.orderStatus === "COMPLETED"
              ? "| Đang giao"
              : "| Đã giao"}
          </label>
        </div>
      ) : (
        <div className="text-center text-gray-500 mt-10">
          Không có đơn hàng nào phù hợp với số điện thoại này.
        </div>
      )}

      {orderData && ( // Chỉ render khi orderData có giá trị
        <div className="flex flex-row justify-around m-auto h-auto">
          <div>
            <div className="flex flex-col">
              <span className="block text-center font-display text-[16px] font-bold mt-1 mb-5">
                Thông tin đơn hàng
              </span>
              <div className="list-order grid grid-rows-1 h-[450px] w-[500px] ">
                <div className="m-auto w-auto ">
                  {orderData.orderDetails.map((item, index) => (
                    <div key={index} className="mb-2">
                      <ItemOrder
                        productID={item.productId}
                        productImgPath={item.productImgPath}
                        productName={item.productName}
                        productPrice={item.productPrice}
                        productQuantiy={item.productQuantity}
                        toppings={item.toppings}
                        totalPrice={item.totalPrice}
                      ></ItemOrder>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="font-semibold text-red-500 text-[20px] h-[10px] text-center mt-2">
              <span>{`Tổng tiền: ${formatVND(orderData.totalAmount)} `}</span>
            </div>
          </div>

          <div className="bg-black w-[5px] h-[full] text-center"></div>
          <div className="flex flex-col">
            <span className="block text-center font-display text-[16px] font-bold mt-1 mb-10">
              Thông tin người nhận
            </span>
            <span className="block font-display text-[16px] mt-1 mb-5 font-semibold">
              {`Đơn hàng: ${orderData.orderID}`}
            </span>
            <span className="block font-display text-[16px] mt-1 mb-5 font-semibold">
              {`Đặt hàng lúc: ${orderData.orderDate}`}
            </span>
            <span className="block font-display text-[16px] font-semibold mt-1 mb-5">
              {`Họ và tên người nhận: ${orderData.deliveryInfo.fullName}`}
            </span>
            <span className="block font-display text-[16px] font-semibold mt-1 mb-5">
              {`Địa chỉ người nhận: ${orderData.deliveryInfo.streetName}, ${orderData.deliveryInfo.ward}, ${orderData.deliveryInfo.district} `}
            </span>
            <span className="block font-display text-[16px] font-semibold mt-1 mb-5">
              {`SĐT: ${orderData.deliveryInfo.phoneNumber}`}
            </span>
            <span className="block font-display text-[16px] font-semibold mt-1 mb-5">
              {`Ghi chú: ${orderData.deliveryInfo.note}`}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderInfoSection;
