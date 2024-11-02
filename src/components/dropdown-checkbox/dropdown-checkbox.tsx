import React, { useState, useEffect  } from 'react';
import "./dropdown-checkbox.css";
export interface Option {
  id: number;
  label: string;
}
export interface DrDChBxProp {
    className?: string;
    name: string;
    options: Option[];
    onSelectionChange: (selectedOptions: Option[]) => void; 
  }
  
export const toggleDropdown = (setIsOpen: React.Dispatch<React.SetStateAction<boolean>>) => {
    setIsOpen((prevIsOpen) => !prevIsOpen); // Đảo ngược giá trị của isOpen
  };
  const DropdownCheckbox: React.FC<DrDChBxProp> = ({
    className = "",
    name,
    options,
    onSelectionChange,
  }) => {
const [isOpen, setIsOpen] = useState(false);
const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
const [nameafterChoose, setName] = useState<string>(name);
const handleToggle = () => {
    toggleDropdown(setIsOpen); // Sử dụng hàm toggleDropdown
  };

  useEffect(() => {
    setName(name); // Cập nhật name sau khi props thay đổi
  }, [name]);

  const handleCheckboxChange = (id: number) => {
    setSelectedOptions(prev => {
      const newSelected = prev.some(option => option.id === id)
        ? prev.filter(option => option.id !== id)
        : [...prev, options.find(option => option.id === id)!];

      onSelectionChange(newSelected); // Notify parent component
      return newSelected;
    });
  };
  const handleDone = () => {
    const selectedLabels = selectedOptions
      .map(option => option.label) // Lấy label từ selectedOptions
      .filter(label => label) // Lọc ra các label không rỗng
      .join(", "); // Nối các label thành chuỗi

    // Chỉ cập nhật tên nếu có ít nhất một tùy chọn được chọn
    if (selectedLabels) {
      setName(selectedLabels);
    }

    setIsOpen(false); // Đóng dropdown
  };

  return (
    <div className={`relative inline-block text-left ${className}`}>
      <button
        id='choose'
        type="button"
        onClick={handleToggle}
        className="dropdown-button border-[1.5px] border-black rounded-[20px] w-[250px] max-h-[100px] text-[13px] text-left bg-white font-normal text-black py-[6px] px-[6px] focus:outline-none"
      >
        {nameafterChoose || "Chọn"}
        <i className="fas fa-chevron-down"></i>
      </button>

      {isOpen && (
        <div className="absolute mt-2 bg-white border w-[250px] max-h-[100px] text-[13px] border-black rounded shadow-lg overflow-y-auto scrollbar">
          <ul className="p-2">
            {options.map((option) => (
              <li key={option.id} className="flex items-center h-8">
                <input
                  type="checkbox"
                  id={`${name}-${option.id}`}
                  checked={selectedOptions.some(selected => selected.id === option.id)}
                  onChange={() => handleCheckboxChange(option.id)}
                  className="mr-2"
                />
                <label htmlFor={`${name}-${option.id}`}>{option.label}</label>
              </li>
            ))}
            <button type='submit' className='text-[13px]'  onClick={handleDone}>Done</button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownCheckbox;
