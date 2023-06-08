import { FC, useId } from "react";
import { Controller, FieldValues, UseFormReturn } from "react-hook-form";

interface Select {
  name: string;
  label: string;
  methods: UseFormReturn<FieldValues>;
  items: Item[];
  helperText?: string;
}

interface Item {
  id: unknown;
  name: unknown;
}

const SelectMemo: FC<Select> = ({
  name,
  label,
  methods,
  items,
  helperText,
  ...others
}) => {
  const id = useId();
  const error = methods.formState.errors;
  const errorValue = error[name];
  const errorText = typeof errorValue === "string" ? errorValue : " ";

  return (
    <Controller
      name={name}
      control={methods.control}
      render={({ field }) => (
        <div>
          <label
            id={id}
            className={"mb-2 block text-sm font-bold text-gray-700 "}
          >
            {label}
          </label>
          <select
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none "
            id={id}
            {...field}
            onChange={(value) => field.onChange(value)}
            value={field.value}
            {...others}
          >
            <option value={0}>None</option>
            {items.map((item, index) => {
              const value = Object.values(item);
              return (
                <option key={index} value={value?.[0]}>
                  {value?.[1]}
                </option>
              );
            })}
          </select>
          <p className={`mt-0 pl-1 text-sm ${!!errorValue && "text-red-600"}`}>
            {errorText || helperText || " "}
          </p>
        </div>
      )}
    />
  );
};

export default SelectMemo;
