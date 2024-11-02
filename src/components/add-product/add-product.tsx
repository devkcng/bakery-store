import React,{ FC, useState } from 'react';
import { DropDownTreeComponent } from '@syncfusion/ej2-react-dropdowns';
import * as ReactDOM from 'react-dom';
import "./add-product.css";
import ingredientList from './dataproduct';
import DropdownCheckbox, {Option} from '../dropdown-checkbox/dropdown-checkbox';
const optionIng = ingredientList.runIngredient().map((ing)=>
({
    id: ing.IngID,
    label: ing.IngName,
}));
const optionTop = ingredientList.runTopping().map((top)=>
    ({
        id: top.TopID,
        label: top.TopName,
    }));
    
const AddProduct = ({}) => {
    const [productPicture, setProductImage] = useState<File | null>(null);
    const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
    const [selectedIngredients, setSelectedIngredients] = useState<Option[]>([]); // State cho dropdown Ingredients
    const [selectedToppings, setSelectedToppings] = useState<Option[]>([]); // State cho dropdown Toppings

    const handleProductImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
        const file = e.target.files[0];
        setProductImage(file);
        const imageUrl = URL.createObjectURL(file); // Tạo URL tạm thời cho ảnh
        setBackgroundImage(imageUrl); // Cập nhật URL vào trạng thái
    }
    };

    const handleIngredientsSelectionChange = (newSelectedOptions: Option[]) => {
        setSelectedIngredients(newSelectedOptions);
      };
    const handleToppingsSelectionChange = (newSelectedOptions: Option[]) => {
        setSelectedToppings(newSelectedOptions);
      };
    return (
        <div>
            <form action="">
                <div id="container">
                <div className='flex flex-row items-center justify-center mt-10 mb-10 '>
                    <div className='flex flex-col items-center w-[25%] px-5'>
                        <span className="block text-center font-display text-[16px] font-bold mt-1 mb-10">
                        THÔNG TIN SẢN PHẨM
                        </span>
                        <div
                         style={{
                            backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
                            backgroundSize: 'cover', // Căn chỉnh kích thước ảnh
                            backgroundPosition: 'center', // Căn giữa ảnh
                          }} className='uploadPic'>
                             {!backgroundImage && (
                            <>
                            <img src="/imgs/uploadPic.png" alt="" className='w-[35%]' />
                            </>
                        )}
                        </div>
                        <div className='uploadbutton'>
                            <span className="block text-center font-display text-[13px] font-bold w-[100%]">
                                <label htmlFor="productPicture" className="cursor-pointer">Tải ảnh lên</label>
                            </span>
                        <input
                            type="file"
                            id="productPicture"
                            name="productPicture"
                            accept="image/*"
                            onChange={handleProductImageChange}
                            className="hidden"
                            required
                        />
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center w-[25%]'>
                        <input type="text" id='productName' name='productName' className='generalinput' placeholder='Tên sản phẩm của bạn là'/>
                        <span className="block text-center font-display text-[13px] font-bold w-[100%] mt-5">Công thức</span>
                        <DropdownCheckbox className='' name="Nguyên liệu" options={optionIng}  onSelectionChange={handleIngredientsSelectionChange}></DropdownCheckbox>
                        <div className='w-[auto] mt-2 flex flex-col justify-start overflow-y-auto scrollbar'>
                                {selectedIngredients.map(option => {
                                    // Tìm đối tượng ingredient tương ứng với option.label
                                    const ingredient = ingredientList.runIngredient().find(
                                        item => item.IngName === option.label
                                    );

                                    return (
                                        <div key={option.id} className='flex flex-row px-1 py-2 justify-stretch'>
                                            <label className='Ingredient'>{option.label}</label>
                                            <input type="text" name='IngNo' />
                                            <label className='Ingredient'>
                                                {ingredient ? ingredient.IngUnit : "Không có đơn vị"}
                                            </label>
                                        </div>
                                    );
                                })}
                            </div>
                    </div>
                    <div className='flex flex-col items-center w-[30%] px-2'>
                     <div className='flex flex-row px-1 py-2 justify-center'>
                        <input type="text" id='noOfaBatch' className='generalinput' placeholder='Số lượng sản phẩm của bạn là'/>
                        <label htmlFor="noOfaBatch'" className='Ingredient'>cái/mẻ</label>
                        </div>
                        <div className='flex flex-row px-1 py-2 justify-center'>
                        <input type="text" id='TimeConduct' className='generalinput' placeholder='Thời gian thực hiện'/>
                        <label htmlFor="TimeConduct'" className='Ingredient'>giờ</label>
                        </div>
                        <span className="block text-center font-display text-[13px] font-bold w-[100%] mt-5">Topping</span>
                        <DropdownCheckbox className='w-[300px]' name="Topping" options={optionTop}  onSelectionChange={handleToppingsSelectionChange}></DropdownCheckbox>
                        <div className='flex flex-row px-1 py-2 mt-3'>
                        <input type="text" id='price' className='generalinput' placeholder='Giá bán'/>
                        <label htmlFor="price'" className='Ingredient'>giá</label>
                        </div>
                    </div>
                </div>
                </div>
                <div>
                    <button type='submit'>Thêm Sản Phẩm</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;