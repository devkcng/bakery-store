import React, { FC } from "react";
import "./orderInfo.css";
import ItemOrder, { DetailOrder } from "../../item-order/item-order";
import ItemCard, { ItemProps } from "@/components/item-card/item-card";
import SearchBar from "../../search-bar/search-bar";
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
  phonenumber: string;
  note: string;
}

const OrderInfoSection: FC<orderInfo> = ({
  idOrder,
  idStatus,
  time,
  nameBuyer,
  addressBuyer,
  phonenumber,
  note,
}) => {
  const total = items.reduce(
    (acc, item) => acc + item.itemCount * item.itemInfo.itemPrice, //acc là biển ảo để lưu giá trị sau khi tính xong truyền vào trong total
    0
  );
  return (
    <div id="container">
      <div className="flex flex-col items-center mt-10 mb-10 ">
        <SearchBar isShow={true} className="searchBarLarger " />
        <div className="flex flex-row items-end">
          <span className="block font-display text-[14px] font-semibold text-[#797B7E] mt-2">
            {idOrder ? `ID đơn hàng: ${idOrder}` : "ID đơn hàng: 1158041042024"}
          </span>
          <label className="block font-display text-[14px] font-semibold text-[#EA5848] mt-2 ml-5">
            {idStatus ? `| ${idStatus}` : "| Đang cập nhật"}
          </label>
        </div>
      </div>
      <div className="flex flex-row justify-around m-auto h-auto">
        <div>
          <div className="flex flex-col">
            <span className="block text-center font-display text-[16px] font-bold mt-1 mb-5">
              Thông tin đơn hàng
            </span>
            <div className="list-order grid grid-rows-1 h-[450px] w-[500px] ">
              <div className="m-auto w-auto ">
                {items.map((item, index) => (
                  <div key={index} className="mb-2">
                    <ItemOrder
                      itemInfo={item.itemInfo}
                      itemCount={item.itemCount}
                      itemTopping={item.itemTopping}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="font-semibold text-red-600 text-[20px] h-[10px] text-center mt-2">
            {total ? `Đơn hàng: ${total} VND` : "Đơn hàng: 200000 VND"}
          </div>
        </div>

        <div className="bg-black w-[5px] h-[full] text-center"></div>
        <div className="flex flex-col">
          <span className="block text-center font-display text-[16px] font-bold mt-1 mb-10">
            Thông tin người nhận
          </span>
          <span className="block font-display text-[16px] mt-1 mb-5">
            {idOrder ? `Đơn hàng: ${idOrder}` : "Đơn hàng: 1158041042024"}
          </span>
          <span className="block font-display text-[16px] mt-1 mb-5">
            {time ? `Đặt hàng lúc: ${time}` : "Đặt hàng lúc: 13:57 ngày 12/12"}
          </span>
          <span className="block font-display text-[16px] font-semibold mt-10 mb-5">
            {nameBuyer
              ? `Họ và tên người nhận: ${nameBuyer}`
              : "Họ và tên người nhận: Nguyễn Văn Vũ"}
          </span>
          <span className="block font-display text-[16px] font-semibold mt-1 mb-5">
            {addressBuyer
              ? `Địa chỉ người nhận: ${addressBuyer}`
              : "Địa chỉ người nhận: Số 1, Võ Văn Ngân, Tp. Thủ Đức"}
          </span>
          <span className="block font-display text-[16px] font-semibold mt-1 mb-5">
            {phonenumber ? `SĐT: ${phonenumber}` : "SĐT: 0327521953"}
          </span>
          <span className="block font-display text-[16px] font-semibold mt-1 mb-5">
            {note ? `Ghi chú: ${note}` : "Ghi chú: Để hàng ở gốc cây"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderInfoSection;
