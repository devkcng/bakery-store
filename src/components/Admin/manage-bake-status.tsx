import React, { FC } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import "./manage-bake-status.css";      
type BakeStatusOrder = {
    ID: string;
    orderCode: string;
    completeTime: string;
    leftTime: string;
    bakeStatus: string;
    detailView: string;
    
};

const BakeStatus:FC<BakeStatusOrder>  = ({ ID, orderCode, completeTime, leftTime, bakeStatus, detailView }) => {
    return (
        <div className="container">
            <table className="table">
                <thead >
                    <tr className="table-dark">
                    <th scope="col">ID</th>
                    <th scope="col">Mã đơn hàng</th>
                    <th scope="col">Thời gian hoàn thành</th>
                    <th scope="col">Thời gian còn lại</th>
                    <th scope="col">Trạng thái </th>
                    <th scope="col">&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                    <td scope="row">{`${ID ==="" ? " " : ID }`}</td>
                    <td scope="row">{`${orderCode ==="" ? " " : orderCode }`}</td>
                    <td scope="row">{`${completeTime ==="" ? " " : completeTime }`}</td>
                    <td scope="row">{`${leftTime ==="" ? " " : leftTime }`}</td>
                    <td scope="row">{`${bakeStatus ==="" ? " " : bakeStatus }`}</td>
                    <td scope="row">
                    <button type="button" className="btn btn-link">{`${detailView ==="" ? " " : detailView }`}</button>
                    </td>
                    </tr>
                    <tr >
                    <td scope="row">{`${ID ==="" ? " " : ID }`}</td>
                    <td scope="row">{`${orderCode ==="" ? " " : orderCode }`}</td>
                    <td scope="row">{`${completeTime ==="" ? " " : completeTime }`}</td>
                    <td scope="row">{`${leftTime ==="" ? " " : leftTime }`}</td>
                    <td scope="row">{`${bakeStatus ==="" ? " " : bakeStatus }`}</td>
                    <td scope="row">
                    <button type="button" className="btn btn-link">{`${detailView ==="" ? " " : detailView }`}</button>
                    </td>
                    </tr>
                    <tr >
                    <td scope="row">{`${ID ==="" ? " " : ID }`}</td>
                    <td scope="row">{`${orderCode ==="" ? " " : orderCode }`}</td>
                    <td scope="row">{`${completeTime ==="" ? " " : completeTime }`}</td>
                    <td scope="row">{`${leftTime ==="" ? " " : leftTime }`}</td>
                    <td scope="row">{`${bakeStatus ==="" ? " " : bakeStatus }`}</td>
                    <td scope="row">
                    <button type="button" className="btn btn-link">{`${detailView ==="" ? " " : detailView }`}</button>
                    </td>
                    </tr>
                
                </tbody>
            </table>
        </div>
    );
};

export default BakeStatus;