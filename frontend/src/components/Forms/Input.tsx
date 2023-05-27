import { FC, InputHTMLAttributes, useId } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isError?: boolean;
  helperText?: string;
  classNameInput?: string;
}

const Input: FC<Props> = ({
  label,
  isError,
  classNameInput,
  helperText = " ",
  ...rest
}) => {
  const id = useId();
  return (
    <div className="mb-4">
      <label
        className="mb-2 block text-sm font-bold text-gray-700"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        className={
          "w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none " +
          classNameInput
        }
        {...rest}
      />
      <p className={`mt-0 pl-1 text-sm ${isError && "text-red-600"}`}>
        {helperText}
      </p>
    </div>
  );
};

export default Input;
