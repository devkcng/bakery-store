import React from 'react';
import "./recipe.css";
import { posix } from 'path';

const RecipeMainpage = () => {
    return (
        <div id='main'>
            <table id='container'>
                <tbody>
                <tr>
                    <td>
                        <div style={{
                            backgroundImage: "url('/imgs/bakery-images/item-background.png')",
                            backgroundSize: 'cover',  // Giữ tỷ lệ khung hình cho hình nền
                            backgroundPosition: 'center', // Căn giữa hình nền
                            }}
                            className='pictureBg'>
                            <img src="/imgs/bakery-images/muffinb.png"
                            alt="Overlay"
                            style={{
                                paddingTop: '20%',
                                width: '80%', 
                            }} />
                            <span className="block text-white text-center font-display text-[22px] font-semibold">
                            Bánh Muffin </span>
                         </div>
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
                    <td>
                    <div style={{
                            backgroundImage: "url('/imgs/bakery-images/item-background.png')",
                            backgroundSize: 'cover',  // Giữ tỷ lệ khung hình cho hình nền
                            backgroundPosition: 'center', // Căn giữa hình nền
                            }}
                            className='pictureBg'>
                            <img src="/imgs/bakery-images/muffinb.png"
                            alt="Overlay"
                            style={{
                                paddingTop: '20%',
                                width: '80%', 
                            }} />
                            <span className="block text-white text-center font-display text-[22px] font-semibold">
                            Bánh Muffin </span>
                         </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default RecipeMainpage;