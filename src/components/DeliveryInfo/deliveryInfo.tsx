import React, { FormEvent, useState } from "react";
import "./deliveryInfo.css";

const DeliveryInfo = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    streetName: "",
    district: "",
    ward: "",
    phoneNumber: "",
    note: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e: FormEvent) => {
    // e.preventDefault();
  };
  console.log(formData);
  return (
    <div>
      <div className="deliveryInfoContainer">
        <form action="" className="formInfo" onSubmit={handleSubmit}>
          <h1>Thông tin đặt hàng</h1>
          <input
            name="fullName"
            className="inputInfo"
            type="text"
            onChange={handleChange}
            placeholder="Họ và tên người nhận"
          ></input>
          <br />
          <input
            name="streetName"
            className="inputInfo"
            type="text"
            onChange={handleChange}
            placeholder="Tên đường"
          ></input>
          <br />
          <input
            name="district"
            className="inputInfo"
            type="text"
            onChange={handleChange}
            placeholder="Quận"
            id="txtDistrict"
          ></input>
          <input
            name="ward"
            className="inputInfo"
            type="text"
            onChange={handleChange}
            placeholder="Phường"
            id="txtWard"
          ></input>
          <br />
          <input
            name="phoneNumber"
            className="inputInfo"
            type="text"
            onChange={handleChange}
            placeholder="Số điện thoại nhận hàng"
          ></input>
          <br />
          <input
            name="note"
            className="inputInfo"
            type="text"
            onChange={handleChange}
            placeholder="Ghi chú"
          ></input>
          <br />
          <button className="btnNext" type="submit">
            Tiếp tục
          </button>
        </form>
      </div>
    </div>
  );
};

export default DeliveryInfo;
