import React, { FC, useEffect, useState } from "react";
import { Minus, Plus } from "lucide-react";
type QuantityButtonProps = {
  initialQuantity?: number;
  minQuantity?: number;
  maxQuantity?: number;
  className?: string;
  onQuantityChange?: (quantity: number) => void;
};
const QuantityButton: FC<QuantityButtonProps> = ({
  initialQuantity = 1,
  minQuantity = 0,
  maxQuantity = 99,
  className = "",
  onQuantityChange,
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);
  const [inputValue, setInputValue] = useState(initialQuantity.toString());
  useEffect(() => {
    onQuantityChange?.(quantity); // Gọi hàm callback khi quantity thay đổi
  }, [quantity, onQuantityChange]);
  const updateQuantity = (newQuantity: number) => {
    const clampedQuantity = Math.min(
      Math.max(newQuantity, minQuantity),
      maxQuantity
    );
    setQuantity(clampedQuantity);
    setInputValue(clampedQuantity.toString());
  };

  const handleDecrement = () => updateQuantity(quantity - 1);
  const handleIncrement = () => updateQuantity(quantity + 1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    // Check the value is numeric or not
    const numericValue = parseInt(value, 10);
    if (!isNaN(numericValue)) {
      updateQuantity(numericValue);
    } else if (value === "") {
      // // If the input field is empty, keep initial value
      updateQuantity(minQuantity);
    } else {
      // // If there are non-numeric characters, restore the previous
      setInputValue(quantity.toString());
    }
  };

  const handleBlur = () => {
    if (inputValue === "" || isNaN(parseInt(inputValue, 10))) {
      setInputValue(quantity.toString());
    }
  };
  return (
    <div
      className={`flex items-center justify-between w-32 h-10 rounded-full p-1 shadow-lg  ${className}`}
    >
      <button
        onClick={handleDecrement}
        className="flex items-center justify-center w-8 h-8 bg-red-500 rounded-full text-white "
        aria-label="Decrease quantity"
      >
        <Minus size={20} />
      </button>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleBlur}
        className="w-8 bg-transparent text-black text-center text-xl font-bold focus:outline-none"
        aria-label="Quantity"
      />
      <button
        onClick={handleIncrement}
        className="flex items-center justify-center w-8 h-8 bg-tertiary rounded-full text-black "
        aria-label="Increase quantity"
      >
        <Plus size={20} />
      </button>
    </div>
  );
};

export default QuantityButton;
