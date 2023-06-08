import { useFormContext } from "react-hook-form";
import { FC, InputHTMLAttributes } from "react";
import { RadioButtonMemo } from "..";

export interface RadioButtonProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helperText?: string;
  classNameInput?: string;
  classNameContainer?: string;
  name: string;
  items: Item[];
}

interface Item {
  id: unknown;
  name: unknown;
}

const RadioButton: FC<RadioButtonProps> = (props) => {
  const methods = useFormContext();
  return <RadioButtonMemo {...props} methods={methods} />;
};

export default RadioButton;
