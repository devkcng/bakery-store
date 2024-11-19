import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
// Import các component từ ShadCN UI
import "./deliveryInfo.css";

import { Input } from "../ui/input";
import { Button } from "../ui/button";

const DeliveryInfo = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    streetName: "",
    district: "",
    ward: "",
    phoneNumber: "",
    note: "",
  });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault(); // Ngừng hành động mặc định (gửi form)

    // Log form data (hoặc có thể thực hiện hành động khác như gửi API)
    console.log(formData);

    // Sau khi ngừng gửi form, thực hiện điều hướng
    router.push("/payment");
  };

  return (
    <div>
      <div className="deliveryInfoContainer flex flex-col items-center">
        <form className="formInfo" onSubmit={handleSubmit}>
          <h1>Thông tin đặt hàng</h1>

          <div className="formGroup">
            <Input
              name="fullName"
              className="inputInfo"
              type="text"
              onChange={handleChange}
              placeholder="Họ và tên người nhận"
            />
          </div>

          <div className="formGroup">
            <Input
              name="streetName"
              className="inputInfo"
              type="text"
              onChange={handleChange}
              placeholder="Tên đường"
            />
          </div>

          <div className="formGroup">
            <Input
              name="district"
              className="inputInfo"
              type="text"
              onChange={handleChange}
              placeholder="Quận"
            />
          </div>

          <div className="formGroup">
            <Input
              name="ward"
              className="inputInfo"
              type="text"
              onChange={handleChange}
              placeholder="Phường"
            />
          </div>

          <div className="formGroup">
            <Input
              name="phoneNumber"
              className="inputInfo"
              type="text"
              onChange={handleChange}
              placeholder="Số điện thoại nhận hàng"
            />
          </div>

          <div className="formGroup">
            <Input
              name="note"
              className="inputInfo"
              type="text"
              onChange={handleChange}
              placeholder="Ghi chú"
            />
          </div>

          {/* Sử dụng Button của ShadCN UI */}
          <Button className="btnNext" type="submit">
            Tiếp tục
          </Button>
        </form>
      </div>
    </div>
  );
};

export default DeliveryInfo;
