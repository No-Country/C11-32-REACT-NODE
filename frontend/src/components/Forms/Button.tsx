import { Spin } from "@/assets";
import { FC, ButtonHTMLAttributes, ReactNode } from "react";
import "../../pages/Auth/Login.css"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isLoading?: boolean;
  className?: string;
}

const Button: FC<Props> = ({ children, className, isLoading, ...rest }) => {
  return (
    <button
      className={
        "login__button  " +
        className
      }
      {...rest}
    >
      {isLoading && <Spin />}
      {children}
    </button>
  );
};

export default Button;
