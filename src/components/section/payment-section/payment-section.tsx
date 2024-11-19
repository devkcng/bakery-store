/* eslint-disable @next/next/no-img-element */
import Button from "@/components/button/button";
import { ItemProps } from "@/components/item-card/item-card";
import ItemOrder from "@/components/item-order/item-order";
import "./payment-section.css";
import { formatVND } from "@/utils/formatCurrency";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
const clientId: string | undefined =
  process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID?.toString();
import { ScrollArea } from "@/components/ui/scroll-area";

const Payment = () => {
  // const time = new Date("2022-01-01T12:00:00").toLocaleString("en-GB", {
  //   timeZone: "Asia/Ho_Chi_Minh",
  // });
  const sampleItemInfo: ItemProps = {
    itemName: "Bánh Muffin",
    itemPrice: 28000, // Giá sản phẩm
    imagePath: "/imgs/bakery-images/muffinb.png",
  };

  // Define other props
  const sampleItemCount = 2; // Số lượng sản phẩm
  const sampleItemTopping = "Nho khô, hạnh nhân"; // Các loại topping
  return (
    <div>
      <div className="text-3xl font-extrabold m-auto mb-5 mt-5 text-center">
        Thanh toán
      </div>
      <div className="flex justify-between items-start mt-5">
        <div className="flex flex-col w-[50%] justify-center items-center ">
          <div className="font-semibold text-2xl tracking-[0.2rem] mb-2">
            Thông tin đơn hàng
          </div>
          <div className="">
            <div className="list-order min-h-[360px] self-center flex flex-col p-5">
              <div className="">
                <ItemOrder
                  itemInfo={sampleItemInfo}
                  itemCount={sampleItemCount}
                  itemTopping={sampleItemTopping}
                />
              </div>

              <div className="">
                <ItemOrder
                  itemInfo={sampleItemInfo}
                  itemCount={sampleItemCount}
                  itemTopping={sampleItemTopping}
                />
              </div>

              <div className="">
                <ItemOrder
                  itemInfo={sampleItemInfo}
                  itemCount={sampleItemCount}
                  itemTopping={sampleItemTopping}
                />
              </div>

              <div className="">
                <ItemOrder
                  itemInfo={sampleItemInfo}
                  itemCount={sampleItemCount}
                  itemTopping={sampleItemTopping}
                />
              </div>

              <div className="">
                <ItemOrder
                  itemInfo={sampleItemInfo}
                  itemCount={sampleItemCount}
                  itemTopping={sampleItemTopping}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col mx-auto  ">
          <div className="font-semibold text-2xl tracking-[0.1rem] mb-2 text-center">
            Thông tin giao hàng
          </div>
          <div className="flex flex-col items-start ml-[15%]">
            <div className="">
              <div className="font-normal text-sm  mr-5">Nguyễn Văn Vũ</div>
              <div className="font-normal text-sm ">0327521953</div>
            </div>

            <div className="font-normal text-sm  text-left">
              Số 1 Võ Văn Ngân, Thủ Đức, Hồ Chí Minh
            </div>
          </div>
          <div className="font-semibold text-2xl tracking-[0.2rem] mb-2 mt-2 text-center">
            Chi tiết thanh toán
          </div>
          <div className="font-normal text-sm  ml-[18%]">
            Tổng tiền hàng: <span>{formatVND(789000)}</span>
          </div>
          <div className="font-normal text-sm  ml-[18%]">
            Phí vận chuyển: <span>{formatVND(30000)}</span>
          </div>
          <div className="font-normal text-sm  ml-[18%]">
            Tổng thanh toán: <span>{formatVND(819000)} </span>
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
                                  value: 819, // Tổng thanh toán
                                },
                              },
                            ],
                          });
                        }}
                        onApprove={(data, actions) => {
                          return actions.order.capture().then((details) => {
                            alert(
                              `Transaction completed by ${details.payer.name.given_name}`
                            );
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
