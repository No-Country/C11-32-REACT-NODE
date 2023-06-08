import { useFormContext } from "react-hook-form";
import { FC, SelectHTMLAttributes } from "react";
import { SelectMemo } from "..";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
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
const Select: FC<SelectProps> = (props) => {
  const methods = useFormContext();
  return <SelectMemo {...props} methods={methods} />;
};

export default Select;
