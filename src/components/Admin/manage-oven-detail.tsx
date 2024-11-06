import React, { FC } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import "./manage-oven-detail.css";      
type OvenDetail = {
    iD: string;
    Quantity: string;
    completeTime: string;   
    leftTime: string;
};

const Oven:FC<OvenDetail>  = ({ iD,Quantity, completeTime,leftTime }) => {
    return (
        <div className="container">
            <table className="table">
                <thead >
                    <tr className="table-dark">
                    <th scope="col">Mã đơn</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Thời gian hoàn thành</th>
                    <th scope="col">Thời gian còn lại</th>
                    <th scope="col">&nbsp;</th>

                    </tr>
                </thead>
                <tbody>
                    <tr >
                    <td scope="row">{`${iD ==="" ? " " : iD }`}</td>
                    <td scope="row">{`${Quantity ==="" ? " " : Quantity }`}</td>
                    <td scope="row">{`${completeTime ==="" ? " " : completeTime }`}</td>
                    <td scope="row">{`${leftTime ==="" ? " " : leftTime }`}</td>
                    <td scope="row">
                        <div className="actionContainer" >
                            <div className="actionButton ">
                                <img src="/imgs/iconset/icons8-trash-64.png" alt="Trash" className="h-[30px] w-[30px] mr-7"/>
                            </div>
                            <div className="actionButton">
                                <img src="/imgs/iconset/icons8-edit-64.png" alt="Edit" className="h-[25px] w-[25px]" />
                            </div>
                        </div>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Oven;