import React, { FC, useState } from "react";
import { Minus, Plus } from "lucide-react";

type QuantityButtonProps = {
  initialQuantity?: number;
  minQuantity?: number;
  maxQuantity?: number;
  className?: string;
  textColor?: string;
  onQuantityChange?: (quantity: number) => void;
};

const QuantityButton: FC<QuantityButtonProps> = ({
  initialQuantity = 0,
  minQuantity = 0,
  maxQuantity = 99,
  className = "",
  textColor = "",
  onQuantityChange,
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);
  const [inputValue, setInputValue] = useState(initialQuantity.toString());

  // Function to update quantity and call onQuantityChange if necessary
  const updateQuantity = (newQuantity: number) => {
    const clampedQuantity = Math.min(
      Math.max(newQuantity, minQuantity),
      maxQuantity
    );
    setQuantity(clampedQuantity);
    setInputValue(clampedQuantity.toString());
    onQuantityChange?.(clampedQuantity); // Call the callback function immediately when there is a change
  };

  const handleDecrement = () => updateQuantity(quantity - 1);
  const handleIncrement = () => updateQuantity(quantity + 1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    // Check if the value is a valid number
    const numericValue = parseInt(value, 10);
    if (!isNaN(numericValue)) {
      updateQuantity(numericValue);
    } else if (value === "") {
      // If input is empty, reset to minimum value
      updateQuantity(minQuantity);
    } else {
      // Restore previous value if non-numeric character is present
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
      className={`flex items-center justify-between w-[105px] h-9 rounded-full p-1 shadow-lg ${className}`}
    >
      <button
        onClick={handleDecrement}
        className="flex items-center justify-center w-7 h-7 bg-red-500 rounded-full text-white"
        aria-label="Decrease quantity"
      >
        <Minus size={15} />
      </button>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleBlur}
        className={`quantity-number w-8 bg-transparent text-${textColor} text-center text-xl font-bold focus:outline-none`}
        aria-label="Quantity"
      />
      <button
        onClick={handleIncrement}
        className="flex items-center justify-center w-7 h-7 bg-tertiary rounded-full text-black"
        aria-label="Increase quantity"
      >
        <Plus size={15} />
      </button>
    </div>
  );
};

export default QuantityButton;
