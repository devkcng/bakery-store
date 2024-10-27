import React from 'react';
import "./recipe.css";
import { posix } from 'path';

const RecipeMainpage = () => {
    return (
        <div>
            <table id='container'>
                <thead></thead>
                <tbody>
                <tr>
                    <td style={{ position: 'relative'}}>
                        <img src="/imgs/bakery-images/item-background.png" 
                        alt="Bakground"
                        style={{ }} />
                        <img src="/imgs/bakery-images/muffinb.png"
                         alt="Overlay"
                         style={{
                            position: 'absolute',
                            top: '5%', 
                            left: '25%',
                            width: '50%', 
                         }} />
                    </td>
                    <td >
                        <label htmlFor="" className='fontRecipe'>Nguyên liệu</label>
                        <br />
                        <table className='recipeTable'>
                            <tbody>
                                <tr>
                                    <td className='nameOfRecipe'>
                                        <label htmlFor="">Trứng gà</label>
                                    </td>
                                    <td className='noOfRecipe'>
                                    <label htmlFor="">3 trứng</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='nameOfRecipe'>
                                    <label htmlFor="" >Bột mì</label>
                                    </td>
                                    <td className='noOfRecipe'>
                                    <label htmlFor="">500 mg</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='nameOfRecipe'>
                                    <label htmlFor="">Đường</label>
                                    </td>
                                    <td className='noOfRecipe'>
                                    <label htmlFor="">50 mg</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='nameOfRecipe'>
                                    <label htmlFor="">Muối</label>
                                    </td>
                                    <td className='noOfRecipe'>
                                    <label htmlFor="">500 mg</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='nameOfRecipe'>
                                    <label htmlFor="">Sữa</label>
                                    </td>
                                    <td className='noOfRecipe'>
                                    <label htmlFor="">500 ml</label>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td >
                        <label htmlFor="" className='fontRecipe'>Nguyên liệu</label>
                        <br />
                        <table className='recipeTable'>
                            <tbody>
                                <tr>
                                    <td className='nameOfRecipe'>
                                        <label htmlFor="">Trứng gà</label>
                                    </td>
                                    <td className='noOfRecipe'>
                                    <label htmlFor="">3 trứng</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='nameOfRecipe'>
                                    <label htmlFor="" >Bột mì</label>
                                    </td>
                                    <td className='noOfRecipe'>
                                    <label htmlFor="">500 mg</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='nameOfRecipe'>
                                    <label htmlFor="">Đường</label>
                                    </td>
                                    <td className='noOfRecipe'>
                                    <label htmlFor="">50 mg</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='nameOfRecipe'>
                                    <label htmlFor="">Muối</label>
                                    </td>
                                    <td className='noOfRecipe'>
                                    <label htmlFor="">500 mg</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='nameOfRecipe'>
                                    <label htmlFor="">Sữa</label>
                                    </td>
                                    <td className='noOfRecipe'>
                                    <label htmlFor="">500 ml</label>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                    <td >
                        <img src="/imgs/bakery-images/item-background.png" alt="" />
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default RecipeMainpage;