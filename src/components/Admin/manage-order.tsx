import React, { FC } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import "./manage-order.css";      
type OrderDetail = {
    ovenID: string;
    productName: string;
    status: string;
    orderedQuantity: string;
    processingQuantity: string;
    processedQuantity: string;
    startTime: string;
    leftTime:string;
};

const Order:FC<OrderDetail>  = ({ ovenID,productName,status,orderedQuantity,processingQuantity,processedQuantity,startTime,leftTime }) => {
    return (
        <div className="container">
            <table className="table table-hover">
                <thead >
                    <tr  className="table-dark">
                    <th scope="col">ID Lò nướng</th>
                    <th scope="col">Tên sản phẩm</th>
                    <th scope="col">Trạng thái bánh</th>
                    <th scope="col">SL đã đặt hàng</th>
                    <th scope="col">SL đang xử lý</th>
                    <th scope="col">SL đã xử lý (VNĐ)</th>
                    <th scope="col">Thời gian bắt đầu</th>
                    <th scope="col">Thời gian kết thúc</th>
                    <th scope="col"></th>

                    </tr>
                </thead>
                <tbody>
                    <tr >
                    <td scope="row">{`${ovenID ==="" ? " " : ovenID }`}</td>
                    <td scope="row">{`${productName ==="" ? " " : productName }`}</td>
                    <td scope="row">{`${status ==="" ? " " : status }`}</td>
                    <td scope="row">{`${orderedQuantity ==="" ? " " : orderedQuantity }`}</td>
                    <td scope="row">{`${processingQuantity ==="" ? " " : processingQuantity }`}</td>
                    <td scope="row">{`${processedQuantity ==="" ? " " : processedQuantity }`}</td>
                    <td scope="row">{`${startTime ==="" ? " " : startTime }`}</td>
                    <td scope="row">{`${leftTime ==="" ? " " : leftTime }`}</td>

                    <td scope="row">
                        <div className="actionContainer" >
                            <div className="actionButton ">
                                <img src="/imgs/iconset/icons8-trash-64.png" alt="Trash" className="h-[30px] w-[30px] mr-7"/>
                            </div>
                            <div className="actionButton">
                                <img src="/imgs/iconset/icons8-edit-64.png" alt="Edit" className="h-[25px] w-[25px] mr-7" />
                            </div>
                        </div>
                    </td>
                    </tr>

                    <tr >
                    <td scope="row">{`${ovenID ==="" ? " " : ovenID }`}</td>
                    <td scope="row">{`${productName ==="" ? " " : productName }`}</td>
                    <td scope="row">{`${status ==="" ? " " : status }`}</td>
                    <td scope="row">{`${orderedQuantity ==="" ? " " : orderedQuantity }`}</td>
                    <td scope="row">{`${processingQuantity ==="" ? " " : processingQuantity }`}</td>
                    <td scope="row">{`${processedQuantity ==="" ? " " : processedQuantity }`}</td>
                    <td scope="row">{`${startTime ==="" ? " " : startTime }`}</td>
                    <td scope="row">{`${leftTime ==="" ? " " : leftTime }`}</td>

                    <td scope="row">
                        <div className="actionContainer" >
                            <div className="actionButton ">
                                <img src="/imgs/iconset/icons8-trash-64.png" alt="Trash" className="h-[30px] w-[30px] mr-7"/>
                            </div>
                            <div className="actionButton">
                                <img src="/imgs/iconset/icons8-edit-64.png" alt="Edit" className="h-[25px] w-[25px] mr-7" />
                            </div>
                        </div>
                    </td>
                    </tr>
                    <tr >
                    <td scope="row">{`${ovenID ==="" ? " " : ovenID }`}</td>
                    <td scope="row">{`${productName ==="" ? " " : productName }`}</td>
                    <td scope="row">{`${status ==="" ? " " : status }`}</td>
                    <td scope="row">{`${orderedQuantity ==="" ? " " : orderedQuantity }`}</td>
                    <td scope="row">{`${processingQuantity ==="" ? " " : processingQuantity }`}</td>
                    <td scope="row">{`${processedQuantity ==="" ? " " : processedQuantity }`}</td>
                    <td scope="row">{`${startTime ==="" ? " " : startTime }`}</td>
                    <td scope="row">{`${leftTime ==="" ? " " : leftTime }`}</td>

                    <td scope="row">
                        <div className="actionContainer" >
                            <div className="actionButton ">
                                <img src="/imgs/iconset/icons8-trash-64.png" alt="Trash" className="h-[30px] w-[30px] mr-7"/>
                            </div>
                            <div className="actionButton">
                                <img src="/imgs/iconset/icons8-edit-64.png" alt="Edit" className="h-[25px] w-[25px] mr-7" />
                            </div>
                        </div>
                    </td>
                    </tr>
                    
                
                </tbody>
            </table>
        </div>
    );
};

export default Order;