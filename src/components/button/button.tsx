import React, { FC } from "react";
type ButtonProps = {
  onClick?: () => void;
  className?: string;
  full?: boolean;
  type?: "button" | "reset" | "submit";
  bgColor?: "primary" | "secondary";
  children: React.ReactNode;
};
const Button: FC<ButtonProps> = ({
  onClick,
  className = "",
  full = false,
  type = "button",
  bgColor = "primary",
  children,
  ...restProps
}) => {
  let bgClassName = "bg-primary";
  switch (bgColor) {
    case "primary":
      bgClassName = "bg-primary";
      break;
    case "secondary":
      bgClassName = "bg-secondary";
      break;
    default:
      break;
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-3 px-6 rounded-lg capitalize  ${
        full ? "w-full" : "w-auto"
      } mt-auto ${bgClassName} ${className}`}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
