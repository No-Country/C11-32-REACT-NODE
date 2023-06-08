import { FC, useId } from "react";
import { Controller, FieldValues, UseFormReturn } from "react-hook-form";

interface RadioButton {
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

const RadioButtonMemo: FC<RadioButton> = ({
  name,
  label,
  methods,
  items,
  helperText,
  ...others
}) => {
  const id = useId();
  const error = methods.formState.errors;
  const errorValue = error[name]?.message;
  console.log("TCL: errorValue", errorValue);
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
          {items.map(({ id, name }) => (
            <div className="flex gap-4" key={String(name)}>
              <input
                className=" rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none "
                {...field}
                onChange={(value) => field.onChange(value)}
                value={field.value}
                type="radio"
                id={String(id)}
                {...others}
              />
              <label htmlFor={String(id)} className="text-sm">
                {String(name)}
              </label>
            </div>
          ))}
          <p className={`mt-0 pl-1 text-sm ${!!errorValue && "text-red-600"}`}>
            {errorText || helperText || " "}
          </p>
        </div>
      )}
    />
  );
};

export default RadioButtonMemo;
