import ItemCard from "@/components/item-card/item-card";
import { formatVND } from "@/utils/formatCurrency";
import { Product, Topping } from "@prisma/client";
import { FC, useState } from "react";
import QuantityButton from "../../button/quantity-btn";
import DateSelector from "../../date-picker/DatePicker";
import "./detail-product-section.css";

export type CartItemProps = {
  product: Product; // Thay đổi đây
  relatedProduct: Product[];
  toppings: Topping[];
};

const DetailProduct: FC<CartItemProps> = ({
  product,
  relatedProduct,
  toppings,
}) => {
  // State for product quantity
  const [productQuantity, setProductQuantity] = useState(0);
  // State for topping quantities
  const [toppingQuantities, setToppingQuantities] = useState<
    Record<number, number>
  >({});
  const [selectedDate, setSelectedDate] = useState<{
    day: string;
    date: number;
    month: string;
    year: number;
  } | null>(null);

  // Handle quantity change for toppings
  const handleToppingQuantityChange = (toppingId: number, quantity: number) => {
    setToppingQuantities((prev) => ({ ...prev, [toppingId]: quantity }));
  };

  // Handle Add to Cart
  const handleAddToCart = () => {
    if (productQuantity < 1) {
      alert("Vui lòng chọn số lượng bánh cần đặt hàng!");
      return;
    }
    if (!selectedDate) {
      alert("Vui lòng chọn ngày nhận hàng!");
      return;
    }
    // Lọc topping có số lượng lớn hơn 0
    const selectedToppings = toppings
      .map((topping) => ({
        id: topping.id,
        name: topping.name,
        quantity: toppingQuantities[topping.id] || 0,
        price: topping.price,
      }))
      .filter((topping) => topping.quantity > 0);

    // Xây dựng cart item mới
    const cartItem = {
      productId: product.id,
      productName: product.name,
      productPrice: product.price,
      productImgPath: product.img_path,
      productQuantity,
      isSelected: false,
      toppings: selectedToppings,
      deliveryDate: selectedDate,
    };

    // Lấy giỏ hàng hiện tại từ localStorage
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

    // Tìm sản phẩm đã tồn tại trong giỏ hàng
    const existingItemIndex = existingCart.findIndex(
      (item: any) =>
        item.productId === cartItem.productId &&
        item.deliveryDate.day === cartItem.deliveryDate.day &&
        item.deliveryDate.date === cartItem.deliveryDate.date &&
        item.deliveryDate.month === cartItem.deliveryDate.month &&
        item.deliveryDate.year === cartItem.deliveryDate.year
    );
    if (existingItemIndex !== -1) {
      // Nếu sản phẩm đã tồn tại, cộng dồn số lượng và topping
      const existingItem = existingCart[existingItemIndex];

      // Cộng dồn số lượng sản phẩm
      existingItem.productQuantity += cartItem.productQuantity;

      // Cộng dồn topping
      cartItem.toppings.forEach((newTopping: any) => {
        const existingToppingIndex = existingItem.toppings.findIndex(
          (t: any) => t.id === newTopping.id
        );
        if (existingToppingIndex !== -1) {
          // Nếu topping đã tồn tại, cộng số lượng
          existingItem.toppings[existingToppingIndex].quantity +=
            newTopping.quantity;
        } else {
          // Nếu topping chưa tồn tại, thêm vào danh sách
          existingItem.toppings.push(newTopping);
        }
      });

      // Cập nhật lại giỏ hàng
      existingCart[existingItemIndex] = existingItem;
    } else {
      // Nếu sản phẩm chưa tồn tại, thêm vào giỏ hàng
      existingCart.push(cartItem);
    }

    // Lưu lại giỏ hàng vào localStorage
    localStorage.setItem("cart", JSON.stringify(existingCart));

    alert("Sản phẩm đã được thêm vào giỏ hàng!");
  };
  return (
    <div>
      <div className="detail-product-container">
        <div className="productInfor ">
          <div
            style={{
              backgroundImage: "url('/imgs/bakery-images/item-background.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="item_card w-[350px] h-[380x] border-transparent rounded-[30px] flex justify-center items-center flex-col "
          >
            <img
              id="productImg"
              src={`${
                product.img_path === ""
                  ? "/imgs/bakery-images/muffinb.png"
                  : product.img_path
              }`}
              alt=""
            />
          </div>
          <div className="description h-auto mt-3">
            <b>Mô tả</b>
            <br />
            <textarea
              id="txtDescription"
              readOnly
              className="border-none outline-none focus:outline-none focus:border-none "
              defaultValue={`${
                product.description === "" ? "" : product.description
              }`}
            ></textarea>
          </div>
        </div>
        <div className="actionOnProduct">
          <p id="txtName">{`${
            product.name === "" ? "Bánh muffin" : product.name
          }`}</p>
          <div className="flex justify-start items-baseline">
            <p id="txtPrice">
              {product.price === 0
                ? formatVND(28000)
                : formatVND(product.price)}
            </p>
            <QuantityButton
              onQuantityChange={setProductQuantity}
              className="product-quantity-btn ml-[25%] bg-primarycolor"
              textColor="white"
            ></QuantityButton>
          </div>
          <div className="all">
            <div className="prtAttributeContainer">
              <ul className="flex  ">
                <li className="productAttribute">Topping</li>
                <li className="productAttribute ml-5">Giá</li>
                <li className="productAttribute ml-12">Số lượng</li>
              </ul>
            </div>
            <div className="overflow-y-auto h-[250px] w-[full]">
              {toppings &&
                toppings.map((item, index) => (
                  <div key={index}>
                    <div className="topptingAttributeContainer flex items-baseline justify-start">
                      <div className="topptingAttribute">{`${
                        item.name === "" ? "Nho khô" : item.name
                      }`}</div>
                      <div className="topptingAttribute">
                        <span>
                          {item.price === 0
                            ? formatVND(10000)
                            : formatVND(item.price)}
                        </span>
                      </div>
                      <div className="topptingAttribute">
                        <QuantityButton
                          onQuantityChange={(quantity) =>
                            handleToppingQuantityChange(item.id, quantity)
                          }
                          className="topping-quantity-btn border border-black "
                        ></QuantityButton>
                      </div>
                    </div>

                    <hr className="separateLine" />
                  </div>
                ))}
            </div>
          </div>
          <div className="mt-3  ml-7 flex justify-between">
            <div>
              <DateSelector
                onDateSelect={(dateInfo) => setSelectedDate(dateInfo)}
              ></DateSelector>
            </div>
            {/* <span className="mr-[6rem] font-semibold">
              Số lượng còn lại:
              <span className="text-red-500 font-bold"> 1000</span>
            </span> */}
          </div>
          <button id="btnAddToCart" type="button" onClick={handleAddToCart}>
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
      <div className="related-products mt-[100px]">
        <span className="flex items-center justify-center text-[40px] font-bold">
          Sản phẩm liên quan
        </span>
        <div className=" grid grid-cols-3 gap-1 ">
          {relatedProduct &&
            relatedProduct.map((item, index) => (
              <div key={index}>
                <ItemCard product={item}></ItemCard>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
