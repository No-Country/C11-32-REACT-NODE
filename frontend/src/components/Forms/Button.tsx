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
        "flex w-full items-center justify-center gap-1 rounded-md bg-[rgb(42,101,231)] px-4 py-2 text-sm font-bold text-white transition duration-300 hover:bg-[rgb(37,87,194)] disabled:opacity-70 disabled:hover:bg-[rgb(92,140,246)] " +
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
