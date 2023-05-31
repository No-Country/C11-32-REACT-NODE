import { useFormContext } from "react-hook-form";
import { InputMemo } from "..";
import { FC, InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helperText?: string;
  classNameInput?: string;
  classNameContainer?: string;
  name: string;
}

const Input: FC<InputProps> = (props) => {
  const methods = useFormContext();
  return <InputMemo {...props} methods={methods} />;
};

export default Input;
