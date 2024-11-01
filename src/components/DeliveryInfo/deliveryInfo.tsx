import React from 'react';
import "./deliveryInfo.css";

const deliveryInfo = () => {
    return (
        <div >
            <div className='deliveryInfoContainer'>
                <form action="" className='formInfo'>
                <h1>Thông tin đặt hàng</h1>
                    <input className="inputInfo" type="text" placeholder='Họ và tên người nhận'></input><br/>
                    <input className="inputInfo" type="text" placeholder='Tên đường'></input><br/>
                    <input className="inputInfo" type="text" placeholder='Quận' id="txtDistrict"></input>
                    <input className="inputInfo" type="text" placeholder='Phường' id="txtWard"></input><br/>
                    <input className="inputInfo" type="text" placeholder='Số điện thoại nhận hàng'></input><br/>
                    <input className="inputInfo" type="text" placeholder='Ghi chú'></input><br/>
                    <button className='btnNext' type='button'>Tiếp tục</button>
                </form>
            </div>
        </div>
    );
};

export default deliveryInfo;