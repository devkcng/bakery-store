/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import ItemOrder, { DetailOrder } from "../item-order/item-order";
import "./order-card.css";
type Status = "Đã hủy" | "Đang tiến hành" | "Hoàn thành" | "Đã giao";

const getStatusColor = (status: Status): string => {
  switch (status) {
    case "Đã hủy":
      return "text-red-500 border-[2px] border-red-500 font-bold ";
    case "Đang tiến hành":
      return "text-yellow-500 border-[2px] border-yellow-500 font-bold ";
    case "Hoàn thành":
      return "text-green-500 border-[2px] border-green-500 font-bold ";
    case "Đã giao":
      return "text-blue-500 border-[2px] border-blue-500 font-bold ";
    default:
      return "text-black border-[2px] border-black font-bold "; // Màu mặc định nếu trạng thái không khớp
  }
};
export interface DetailOrderAdmin {
  orderID: string;
  timeOrder: string;
  DetailOrders: DetailOrder[];
  status: Status;
  totalAmount?: number;
}
const OrderCard: FC<DetailOrderAdmin> = ({
  orderID,
  timeOrder,
  DetailOrders,
  status,
}) => {
  const dummyDataList = [
    {
      productID: 101,
      productName: "Bánh Cookies",
      productQuantiy: 2,
      productImgPath: "/imgs/bakery-images/cookiesb.png",
      productPrice: 35000,
      toppings: ["Hạnh nhân", "Nho khô"],
      totalPrice: 70000,
    },
    {
      productID: 102,
      productName: "Bánh donut",
      productQuantiy: 1,
      productImgPath: "/imgs/bakery-images/donutb.png",
      productPrice: 25000,
      toppings: ["Sô-cô-la", "Đường bột"],
      totalPrice: 25000,
    },
    {
      productID: 103,
      productName: "Bánh muffin",
      productQuantiy: 3,
      productImgPath: "/imgs/bakery-images/muffinb.png",
      productPrice: 28000,
      toppings: ["Dâu tây", "Socola chip"],
      totalPrice: 84000,
    },
  ];

  return (
    <div>
      <div className="containerDetailcard ">
        <div>
          {/* Phần 1 */}
          <div className="flex flex-row px-3 justify-between">
            <div>
              <span className="block font-display text-[16px] font-semibold mt-1">
                {orderID ? `Order #${orderID}` : "Order #1234"}
              </span>{" "}
              <span className="block font-display text-[15px] font-semibold text-[#797B7E]">
                {timeOrder ? `${timeOrder}` : "05 Feb 2023, 08:28 PM"}
              </span>{" "}
            </div>
            <img
              src="/imgs/logo_project.png"
              alt=""
              className="bg-black rounded-full object-cover w-[50px] h-[50px]"
            />
          </div>
        </div>
        <div className="list-order w-[100%] h-[80%] mt-3 px-0 flex flex-col items-center justify-start">
          {/* Phần 2 */}
          {DetailOrders.map((item, index) => (
            <div key={index} className="mb-1">
              <ItemOrder
                productId={item.productId}
                productName={item.productName}
                productQuantity={item.productQuantity}
                productImgPath={item.productImgPath}
                productPrice={item.productPrice}
                toppings={item.toppings}
                totalPrice={item.totalPrice}
                className=""
              />
            </div>
          ))}
        </div>
        <div className="flex flex-row px-3 py-2 justify-between">
          {/* Phần 3 */}
          <div>
            <span className="block font-display text-[15px] font-semibold text-[#797B7E]">
              {DetailOrders.length === 0 ? `x0 items` : `x${3} items`}
            </span>{" "}
          </div>
          <div className="flex ">
            <div className="mr-2">
              <label
                htmlFor=""
                className={`${
                  status === "PENDING"
                    ? getStatusColor("Đang chờ")
                    : status === "PROCESSING"
                    ? getStatusColor("Đang tiến hành")
                    : status === "COMPLETED"
                    ? getStatusColor("Hoàn thành")
                    : getStatusColor("Đã giao")
                } rounded-md p-1 text-xs`}
              >
                {`${
                  status === "PENDING"
                    ? "Đang chờ"
                    : status === "PROCESSING"
                    ? "Đang tiến hành"
                    : status === "COMPLETED"
                    ? "Hoàn thành"
                    : "Đã giao"
                } `}
              </label>
            </div>
            <a href={`/admin/manage-order-detail/${orderID}`}>
              <svg
                width="30px"
                height="30px"
                viewBox="-0.5 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M12 21.5C17.1086 21.5 21.25 17.3586 21.25 12.25C21.25 7.14137 17.1086 3 12 3C6.89137 3 2.75 7.14137 2.75 12.25C2.75 17.3586 6.89137 21.5 12 21.5Z"
                    stroke="#2aed37"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M12.9309 8.15005C12.9256 8.39231 12.825 8.62272 12.6509 8.79123C12.4767 8.95974 12.2431 9.05271 12.0008 9.05002C11.8242 9.04413 11.6533 8.98641 11.5093 8.884C11.3652 8.7816 11.2546 8.63903 11.1911 8.47415C11.1275 8.30927 11.1139 8.12932 11.152 7.95675C11.19 7.78419 11.278 7.6267 11.405 7.50381C11.532 7.38093 11.6923 7.29814 11.866 7.26578C12.0397 7.23341 12.2192 7.25289 12.3819 7.32181C12.5446 7.39072 12.6834 7.506 12.781 7.65329C12.8787 7.80057 12.9308 7.97335 12.9309 8.15005ZM11.2909 16.5301V11.1501C11.2882 11.0556 11.3046 10.9615 11.3392 10.8736C11.3738 10.7857 11.4258 10.7057 11.4922 10.6385C11.5585 10.5712 11.6378 10.518 11.7252 10.4822C11.8126 10.4464 11.9064 10.4286 12.0008 10.43C12.094 10.4299 12.1863 10.4487 12.272 10.4853C12.3577 10.5218 12.4352 10.5753 12.4997 10.6426C12.5642 10.7099 12.6143 10.7895 12.6472 10.8767C12.6801 10.9639 12.6949 11.0569 12.6908 11.1501V16.5301C12.6908 16.622 12.6727 16.713 12.6376 16.7979C12.6024 16.8828 12.5508 16.96 12.4858 17.025C12.4208 17.09 12.3437 17.1415 12.2588 17.1767C12.1738 17.2119 12.0828 17.23 11.9909 17.23C11.899 17.23 11.8079 17.2119 11.723 17.1767C11.6381 17.1415 11.5609 17.09 11.4959 17.025C11.4309 16.96 11.3793 16.8828 11.3442 16.7979C11.309 16.713 11.2909 16.622 11.2909 16.5301Z"
                    fill="#0bd118"
                  ></path>{" "}
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
