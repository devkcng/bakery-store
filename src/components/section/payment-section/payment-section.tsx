import { formatUSD, formatVND } from "@/utils/formatCurrency";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import "./payment-section.css";
import ItemOrder from "@/components/item-order/item-order";
import { useEffect, useState } from "react";
import { CartProps } from "../user-cart-section/user-cart-section";

const clientId: string | undefined =
  process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID?.toString();

const Payment = () => {
  const [cartItems, setCartItems] = useState<CartProps[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const listItems = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartItems(listItems); // Cập nhật cartItems
    }
  }, []);

  const selectedOrder = cartItems.filter((product) => product.isSelected);
  const orderData = selectedOrder.map((product) => {
    const toppingTotal = product.toppings.reduce(
      (sum, topping) => sum + topping.price * topping.quantity,
      0
    );
    const productTotal =
      product.productQuantity * product.productPrice + toppingTotal;
    return {
      productId: product.productId,
      productName: product.productName,
      productQuantity: product.productQuantity,
      productPrice: product.productPrice,
      productImgPath: product.productImgPath,
      toppings: product.toppings.map((topping) => topping.name),
      totalPrice: productTotal,
      status: "Đang chờ",
    };
  });

  const totalOrder = orderData.reduce(
    (acc, amout) => acc + amout.totalPrice,
    0
  );
  const shippingCost: number = 30000;

  const [deliveryInfo, setdeliveryInfo] = useState([]);
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const deliveryData = JSON.parse(
        localStorage.getItem("deliveryInfo") || "[]"
      );
      setdeliveryInfo(deliveryData); // Cập nhật deliveryInfo
    }
  }, []);

  // Hàm lấy ngày hiện tại theo định dạng YYYY-MM-DD
  const getCurrentDateTime = () => {
    const today = new Date();

    // Lấy ngày, tháng, năm
    const day = String(today.getDate()).padStart(2, "0"); // Thêm số 0 nếu ngày có 1 chữ số
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Thêm số 0 nếu tháng có 1 chữ số
    const year = today.getFullYear();

    // Lấy giờ, phút, giây
    const hours = String(today.getHours()).padStart(2, "0"); // Thêm số 0 nếu giờ có 1 chữ số
    const minutes = String(today.getMinutes()).padStart(2, "0"); // Thêm số 0 nếu phút có 1 chữ số
    const seconds = String(today.getSeconds()).padStart(2, "0"); // Thêm số 0 nếu giây có 1 chữ số

    // Trả về ngày tháng năm và thời gian theo định dạng dd/mm/yyyy hh:mm:ss
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  };

  // Hàm xử lý khi thanh toán thành công
  const handlePaymentSuccess = (details: any) => {
    if (details.status === "COMPLETED") {
      // Thanh toán thành công
      console.log("Transaction completed:", details);
      alert(
        `Giao dịch thành công, cảm ơn bạn, ${details.payer.name.given_name}!`
      );

      // Thêm thông tin đơn hàng vào localStorage
      const orderID = details.id; // Mã giao dịch PayPal
      const orderDate = getCurrentDateTime(); // Ngày hiện tại
      const totalAmount = totalOrder + shippingCost; // Tổng số tiền (hàng + phí vận chuyển)

      const order = {
        orderID,
        totalAmount,
        orderStatus: "PENDING",
        orderDate,
        processedOrder: 0, // Số lượng hàng đã xử lý
        orderDetails: orderData,
        startTime: "",
        endTime: "",
        deliveryInfo: deliveryInfo,
      };

      // Kiểm tra nếu đơn hàng đã tồn tại trong localStorage
      let existingOrders = JSON.parse(localStorage.getItem("order") || "[]");

      // Nếu không có đơn hàng trong localStorage, khởi tạo mảng mới
      if (!Array.isArray(existingOrders)) {
        existingOrders = [];
      }

      // Thêm đơn hàng mới vào danh sách đơn hàng
      existingOrders.push(order);

      // Lưu lại danh sách đơn hàng vào localStorage
      localStorage.setItem("order", JSON.stringify(existingOrders));

      // Xóa giỏ hàng và thông tin giao hàng sau khi thanh toán
      localStorage.removeItem("cart");
      localStorage.removeItem("deliveryInfo");

      // Điều hướng người dùng đến trang thành công
      window.location.href = "/success";
    } else {
      // Giao dịch không thành công
      console.log("Transaction failed:", details);
      alert("Giao dịch không thành công, vui lòng thử lại.");
    }
  };

  return (
    <div>
      <div className="text-3xl font-extrabold m-auto mb-5 mt-5 text-center">
        Thanh toán
      </div>
      <div className="flex justify-center items-center mt-5">
        <div className="flex flex-col w-[50%] justify-center items-center ">
          <div className="font-semibold text-2xl tracking-[0.2rem] mb-2">
            Thông tin đơn hàng
          </div>
          <div className="">
            <div className="list-order min-h-[360px] self-center flex flex-col p-5">
              {orderData &&
                orderData.map((item, index) => (
                  <div className="" key={index}>
                    <ItemOrder
                      productId={item.productId.toString()}
                      productImgPath={item.productImgPath}
                      productName={item.productName}
                      productPrice={item.productPrice}
                      productQuantity={item.productQuantity}
                      toppings={item.toppings}
                      totalPrice={item.totalPrice}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="flex-col mx-auto   ">
          <div className="font-semibold text-2xl tracking-[0.1rem] mb-2 text-center">
            Thông tin giao hàng
          </div>
          <div className="text-center m-auto  ">
            <div className="">
              <div className="font-normal text-sm overflow-auto">
                {deliveryInfo.fullName}
              </div>
              <div className="font-normal text-sm overflow-auto ">
                {deliveryInfo.phoneNumber}
              </div>
            </div>
            <div className="font-normal text-sm  overflow-auto">
              {`${deliveryInfo.streetName}, ${deliveryInfo.district}, ${deliveryInfo.ward}`}
            </div>
          </div>
          <div className="font-semibold text-2xl tracking-[0.2rem] mb-2 mt-2 text-center">
            Chi tiết thanh toán
          </div>
          <div className="m-auto text-center px-5">
            <div className="font-medium text-sm ">
              <span className="w-[40%] inline-block">Tổng tiền hàng:</span>
              <span className="font-bold text-red-400">
                {formatVND(totalOrder)}
              </span>
            </div>
            <div className="font-medium text-sm">
              <span className="w-[40%] inline-block">Phí vận chuyển:</span>
              <span className="font-bold text-red-400">{formatVND(30000)}</span>
            </div>
            <div className="font-medium text-sm">
              <span className="w-[40%] inline-block">Tổng thanh toán:</span>
              <span className="font-bold text-red-400">
                {formatVND(totalOrder + shippingCost)}{" "}
              </span>
            </div>
            <hr className="w-[full] h-[1.5px] bg-black my-2" />
            <div className="font-medium text-sm">
              <span className="w-[40%] inline-block">Total amount:</span>
              <span className="font-bold text-red-400">
                {formatUSD(totalOrder + shippingCost)}
                {" USD"}
              </span>
            </div>
          </div>
          <div>
            <div className="font-semibold text-2xl tracking-[0.2rem] mb-2 mt-2 text-center">
              Phương thức thanh toán
              <div className="flex justify-center mt-1">
                <div>
                  <div className="w-full flex justify-center mt-3 visible">
                    <PayPalScriptProvider options={{ "client-id": clientId }}>
                      <PayPalButtons
                        style={{ layout: "vertical" }}
                        createOrder={(data, actions) => {
                          return actions.order.create({
                            purchase_units: [
                              {
                                amount: {
                                  value: formatUSD(totalOrder), // Tổng thanh toán
                                },
                              },
                            ],
                          });
                        }}
                        onApprove={(data, actions) => {
                          return actions.order.capture().then((details) => {
                            // Gọi hàm kiểm tra kết quả giao dịch sau khi thanh toán thành công
                            handlePaymentSuccess(details);
                          });
                        }}
                        onError={(err) => {
                          console.error("PayPal Checkout Error:", err);
                          alert("Payment could not be processed.");
                        }}
                      />
                    </PayPalScriptProvider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
