import React, { FC } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import "./manage-topping-detail.css";      
type ToppingDetail = {
    iD: string;
    toppingName: string;
    toppingPrice: string;   
};

const Topping:FC<ToppingDetail>  = ({ iD,toppingName, toppingPrice }) => {
    return (
        <div className="container">
            <table className="table">
                <thead >
                    <tr className="table-dark">
                    <th scope="col">ID</th>
                    <th scope="col">Tên Topping</th>
                    <th scope="col">Giá (VNĐ)</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                    <td scope="row">{`${iD ==="" ? " " : iD }`}</td>
                    <td scope="row">{`${toppingName ==="" ? " " : toppingName }`}</td>
                    <td scope="row">{`${toppingPrice ==="" ? " " : toppingPrice }`}</td>
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


                    <tr >
                    <td scope="row">{`${iD ==="" ? " " : iD }`}</td>
                    <td scope="row">{`${toppingName ==="" ? " " : toppingName }`}</td>
                    <td scope="row">{`${toppingPrice ==="" ? " " : toppingPrice }`}</td>
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
                    <tr >
                    <td scope="row">{`${iD ==="" ? " " : iD }`}</td>
                    <td scope="row">{`${toppingName ==="" ? " " : toppingName }`}</td>
                    <td scope="row">{`${toppingPrice ==="" ? " " : toppingPrice }`}</td>
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

export default Topping;