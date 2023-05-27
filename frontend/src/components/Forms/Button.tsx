import { Spin } from "@/assets";
import { FC, ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isLoading?: boolean;
  className?: string;
}

const Button: FC<Props> = ({ children, className, isLoading, ...rest }) => {
  return (
    <button
      className={
        "flex w-full items-center justify-center gap-1 rounded-md bg-indigo-500 px-4 py-2 text-sm font-bold text-white transition duration-300 hover:bg-indigo-600 " +
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
