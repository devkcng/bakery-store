import React, { FC } from "react";
type ButtonProps = {
  onClick?: () => void;
  className?: string;
  type?: "button" | "reset" | "submit";
  bgColor?: string;
  children: React.ReactNode;
};
const Button: FC<ButtonProps> = ({
  onClick,
  className = "",
  type = "button",
  bgColor = "",
  children,
  ...restProps
}) => {
  let bgClassName = "";
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
      className={` capitalize mt-auto  ${bgClassName} ${className}`}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
