import React from "react";

interface RadioProps {
  options?: string[];
  selectedOption: string;
  onOptionChange: (option: string) => void;
}

const MenuTabs: React.FC<RadioProps> = ({
  options = [],
  selectedOption,
  onOptionChange,
}) => {
  return (
    <div className="relative flex flex-wrap bg-transparent shadow-sm p-1 w-auto text-sm  border-[2px] rounded-xl">
      {options.map((option) => (
        <label key={option} className="flex-1 text-center mx-1 bg-transparent ">
          <input
            type="radio"
            name="radio"
            value={option}
            checked={selectedOption === option}
            onChange={() => onOptionChange(option)}
            className="hidden"
          />
          <span
            className={` flex cursor-pointer items-center justify-center rounded-md px-2 py-1 transition-all ease-in-out duration-150 ${
              selectedOption === option
                ? "bg-tertiary font-semibold text-gray-800 "
                : "text-gray-800 hover:bg-tertiary hover:font-semibold"
            }`}
          >
            {option}
          </span>
        </label>
      ))}
    </div>
  );
};

export default MenuTabs;
