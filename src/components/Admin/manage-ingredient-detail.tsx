import React, { FC } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import "./manage-ingredient-detail.css";      
type IngredientDetail = {
    iD: string;
    ingredientName: string;
    quantity: string;
    unit: string;
    ingredientPrice: string;   
};

const Ingredient:FC<IngredientDetail>  = ({ iD,ingredientName,quantity,unit, ingredientPrice }) => {
    return (
        <div className="container">
            <table className="table">
                <thead >
                    <tr className="table-dark">
                    <th scope="col">ID</th>
                    <th scope="col">Tên Topping</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Đơn vị</th>
                    <th scope="col">Giá (VNĐ)</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                    <td scope="row">{`${iD ==="" ? " " : iD }`}</td>
                    <td scope="row">{`${ingredientName ==="" ? " " : ingredientName }`}</td>
                    <td scope="row">{`${quantity ==="" ? " " : quantity }`}</td>
                    <td scope="row">{`${unit ==="" ? " " : unit }`}</td>
                    <td scope="row">{`${ingredientPrice ==="" ? " " : ingredientPrice }`}</td>
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
                    <td scope="row">{`${ingredientName ==="" ? " " : ingredientName }`}</td>
                    <td scope="row">{`${quantity ==="" ? " " : quantity }`}</td>
                    <td scope="row">{`${unit ==="" ? " " : unit }`}</td>
                    <td scope="row">{`${ingredientPrice ==="" ? " " : ingredientPrice }`}</td>
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
                    <td scope="row">{`${ingredientName ==="" ? " " : ingredientName }`}</td>
                    <td scope="row">{`${quantity ==="" ? " " : quantity }`}</td>
                    <td scope="row">{`${unit ==="" ? " " : unit }`}</td>
                    <td scope="row">{`${ingredientPrice ==="" ? " " : ingredientPrice }`}</td>
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

export default Ingredient;
