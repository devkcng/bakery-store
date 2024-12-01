"use client";
import React, { useEffect, useState } from "react";
import Button from "@/components/button/button";
import CheckBox from "@/components/checkbox/checkbox";
import QuantityButton from "@/components/button/quantity-btn";
import { formatVND } from "@/utils/formatCurrency";
import "./user-cart-section.css";

export interface Topping {
  id: number;
  name: string;
  quantity: number;
  price: number;
}
export interface CartProps {
  productId: number;
  productName: string;
  productPrice: number;
  productImgPath: string;
  productQuantity: number;
  toppings: Topping[];
  deliveryDate: {
    date: string;
    month: string;
    year: string;
  };
  isSelected?: boolean;
}

const ShoppingCart = () => {
  const listItems = JSON.parse(localStorage.getItem("cart") || "[]");
  const [cartItems, setCartItems] = useState<CartProps[]>(listItems);
  const countSelected: number = cartItems.reduce((acc, selected) => {
    if (selected.isSelected) return acc + 1;
    return acc;
  }, 0);
  const [selectedCount, setSelectedCount] = useState(countSelected);
  const [isSelectedAll, setSelectedAll] = useState(
    cartItems.filter((item) => item.isSelected).length === cartItems.length
  );
  // update cartItems to localStorage
  const updateCart = (updatedCart: CartProps[]) => {
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  // update product quantity
  const handleProductQuantityChange = (index: number, newQuantity: number) => {
    const updatedCart = [...cartItems];
    updatedCart[index].productQuantity = newQuantity;
    updateCart(updatedCart);
  };
  // update topping quantity
  const handleToppingQuantityChange = (
    productIndex: number,
    toppingId: number,
    newQuantity: number
  ) => {
    const updatedCart = [...cartItems];
    const topping = updatedCart[productIndex].toppings.find(
      (topping) => topping.id === toppingId
    );
    if (topping) {
      topping.quantity = newQuantity;
    }
    updateCart(updatedCart);
  };
  // handle checkbox
  const handleCheckboxChange = (isChecked: boolean, index: number) => {
    // Cập nhật trạng thái isSelected của item tại index
    const updatedItems = cartItems.map((item, i) =>
      i === index ? { ...item, isSelected: isChecked } : item
    );
    updateCart(updatedItems);

    // Cập nhật selectedCount
    const newSelectedCount = updatedItems.filter(
      (item) => item.isSelected
    ).length;
    setSelectedCount(newSelectedCount);

    // Kiểm tra xem nếu tất cả các item đều được chọn, thì cần cập nhật isSelectedAll thành true
    if (newSelectedCount === cartItems.length) {
      setSelectedAll(true);
    } else {
      setSelectedAll(false);
    }
  };
  // handle select all items
  const handleSelectAllChange = () => {
    const newIsSelectedAll = !isSelectedAll; // Đảo ngược trạng thái của select all
    const updatedItems = cartItems.map((item) => ({
      ...item,
      isSelected: newIsSelectedAll,
    }));

    updateCart(updatedItems);

    // Cập nhật lại selectedCount theo trạng thái mới
    const newSelectedCount = newIsSelectedAll ? cartItems.length : 0;
    setSelectedCount(newSelectedCount);
    setSelectedAll(newIsSelectedAll); // Cập nhật trạng thái select all
  };

  // calculate total price for each item
  const calculateTotal = (item: CartProps) => {
    const toppingsTotal = item.toppings.reduce((acc, topping) => {
      return acc + topping.price * topping.quantity;
    }, 0);
    return item.productPrice * item.productQuantity + toppingsTotal;
  };
  const calculateTotalPayment = () => {
    return cartItems.reduce((total, item) => {
      if (item.isSelected) {
        const toppingsTotal = item.toppings.reduce(
          (acc, topping) => acc + topping.price * topping.quantity,
          0
        );
        return total + item.productPrice * item.productQuantity + toppingsTotal;
      }
      return total;
    }, 0);
  };

  const handleDeleteItemCart = (index: number) => {
    // Kiểm tra nếu index hợp lệ
    if (index >= 0 && index < cartItems.length) {
      // Tạo một bản sao của cartItems và xóa phần tử tại index
      const updatedCart = [...cartItems];
      updatedCart.splice(index, 1); // Xóa phần tử tại vị trí index

      // Cập nhật lại mảng vào localStorage
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      // Cập nhật lại state của React
      setCartItems(updatedCart); // Đảm bảo rằng UI được cập nhật
    }
  };
  const handleDeleteAll = () => {
    localStorage.removeItem("cart");
    setCartItems([]);
  };
  useEffect(() => {
    const cartFromLocalStorage = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );
    setCartItems(cartFromLocalStorage);
  }, []);
  console.log("isSelectedAll", isSelectedAll);
  return (
    <div>
      {cartItems.length > 0 ? (
        <div className="mt-5 flex flex-col w-[98%]">
          <div className="flex mb-5">
            <div className="text-lg font-medium text-left w-[35%] pl-5 text-primarycolor">
              Đã chọn:{" "}
              <span className="text-lg font-medium text-black">
                {selectedCount}
              </span>{" "}
              /{" "}
              <span className="text-lg font-medium text-black">
                {listItems.length}
              </span>
            </div>
            <div className="text-center font-bold text-[38px] mb-1 w-[30%]">
              Thông tin giỏ hàng
            </div>
            <div className="w-[35%] flex text-xs justify-end mr-12">
              <Button
                bgColor="green"
                className="bg-green-400 rounded-xl text-white w-[130px] text-center h-12 mr-2 active:scale-95"
                onClick={handleSelectAllChange}
              >
                Chọn tất cả
              </Button>
              <Button
                onClick={handleDeleteAll}
                bgColor="red"
                className="bg-red-600 rounded-xl text-white w-[130px] text-center h-12 active:scale-95"
              >
                Xóa tất cả
              </Button>
            </div>
          </div>
          <div className="list-order-cart-detail overflow-y-auto h-[425px] self-center mx-auto pb-5">
            {listItems.length > 0 &&
              listItems.map((item: CartProps, index: number) => (
                <div
                  className="w-[auto] px-10 h-[auto] pb-1 bg-white border-solid border-gray-500 border-[1px] m-auto mt-2 rounded-3xl flex justify-start items-center mb-10"
                  key={index}
                >
                  {/* Item picture */}
                  <div
                    className="item_card w-[250px] h-[200px] border-transparent rounded-[30px] flex justify-center items-center flex-col mx-0 mt-2 mb-2 ml-16"
                    style={{
                      backgroundImage:
                        "url('/imgs/bakery-images/item-background.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <img
                      className="w-[60%] h-[auto] object-cover"
                      src={item.productImgPath}
                      alt=""
                    />
                  </div>
                  {/* Item info */}
                  <div className="ml-[100px] self-start mt-5">
                    <div className="flex items-center">
                      <div className="w-[250px]">
                        <span className="block text-md font-sans font-extrabold w-auto">
                          {item.productName}
                        </span>
                        <span className="block text-sm font-bold text-[#eb953c]">
                          {formatVND(item.productPrice)}
                        </span>
                      </div>
                      <QuantityButton
                        initialQuantity={item.productQuantity}
                        className="bg-primarycolor ml-5"
                        textColor="white"
                        onQuantityChange={(newQuantity) =>
                          handleProductQuantityChange(index, newQuantity)
                        }
                      />
                    </div>
                    {/* Topping section */}
                    <span className="block font-bold text-md">Topping</span>
                    {item.toppings.map((topping) => (
                      <div className="mb-2" key={topping.id}>
                        <div className="topptingAttributeContainer flex items-baseline">
                          <div className="topptingAttribute text-sm w-[150px]">
                            {topping.name}
                          </div>
                          <div className="topptingAttribute ml-5 text-sm w-20">
                            <span>{formatVND(topping.price)}</span>
                          </div>
                          <div className="topptingAttribute ml-4 text-sm">
                            <QuantityButton
                              className="border border-black"
                              initialQuantity={topping.quantity}
                              onQuantityChange={(newQuantity) =>
                                handleToppingQuantityChange(
                                  index,
                                  topping.id,
                                  newQuantity
                                )
                              }
                            />
                          </div>
                        </div>
                        <hr className="separateLine bg-black w-[100%] h-[1.5px] mt-2" />
                      </div>
                    ))}
                  </div>
                  {/* Total and Datetime */}
                  <div className="ml-5">
                    <span className="text-lg font-bold text-black text-center">
                      Tổng:{" "}
                    </span>
                    <span className="font-bold text-lg text-red-500 text-center">
                      {formatVND(calculateTotal(item))}
                    </span>
                    <div className="">
                      Ngày lấy bánh:{" "}
                      {`${item.deliveryDate.date} ${item.deliveryDate.month} ${item.deliveryDate.year}`}
                    </div>
                  </div>
                  <div className="flex items-center p-2">
                    <CheckBox
                      onChange={(e) =>
                        handleCheckboxChange(e.target.checked, index)
                      }
                      defaultStatus={item.isSelected}
                    />
                    <svg
                      onClick={() => handleDeleteItemCart(index)}
                      className="delete-icon block ml-5 cursor-pointer"
                      width="45px"
                      height="45px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 12V17"
                        stroke="#ff0000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14 12V17"
                        stroke="#ff0000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4 7H20"
                        stroke="#ff0000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
                        stroke="#ff0000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                        stroke="#ff0000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              ))}
          </div>
          <div className="self-center mt-5">
            <Button
              className="bg-primarycolor w-full h-16 rounded-2xl text-center text-white font-extrabold"
              onClick={() => (window.location.href = "/delivery-info")}
            >
              <div className="flex justify-between">
                <span className="text-white font-bold text-2xl ml-16">
                  Thanh toán:
                </span>
                <span className="text-white font-bold text-2xl mr-16 ml-2">
                  {formatVND(calculateTotalPayment())}
                </span>
              </div>
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <div className="text-center text-3xl font-semibold text-red-400 mt-20 flex-col">
            {" "}
            Giỏ hàng của bạn đang trống !
          </div>

          <div className="text-center m-auto inline-flex justify-center w-full mt-5">
            <img className="w-[300px]" src="/imgs/bag-svgrepo-com.png" alt="" />
          </div>

          <div className="w-full  text-center  mt-5">
            <a href="/home#menu">
              <button className="font-bold text-xl h-12 bg-primarycolor border-[3px] border-primarycolor text-white px-5 rounded-lg">
                Đặt hàng ngay
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
