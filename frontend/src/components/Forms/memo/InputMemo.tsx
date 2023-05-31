import { FC, InputHTMLAttributes, memo, useId } from "react";
import { Controller, FieldValues, UseFormReturn } from "react-hook-form";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helperText?: string;
  classNameInput?: string;
  classNameContainer?: string;
  name: string;
  methods: UseFormReturn<FieldValues>;
}

const InputMemo: FC<Props> = memo(
  ({
    label,
    classNameInput,
    classNameContainer,
    helperText = " ",
    methods,
    name,
    ...rest
  }) => {
    const id = useId();
    const error = methods.formState.errors;
    const errorValue = error?.[name]?.message;
    const errorText = typeof errorValue === "string" ? errorValue : "";

    return (
      <Controller
        name={name}
        control={methods.control}
        render={({ field }) => (
          <div className={"mb-4 w-full " + classNameContainer}>
            <label
              className={"mb-2 block text-sm font-bold text-gray-700 "}
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
              {...field}
              {...rest}
            />
            <p
              className={`mt-0 pl-1 text-sm ${!!errorValue && "text-red-600"}`}
            >
              {errorText || helperText || " "}
            </p>
          </div>
        )}
      />
    );
  },
  (prevProps, nextProps) => {
    const prevErrorValue =
      prevProps.methods.formState.errors?.[prevProps.name]?.message;
    const nextErrorValue =
      nextProps.methods.formState.errors?.[nextProps.name]?.message;

    return (
      prevProps.methods.formState.isDirty ===
        nextProps.methods.formState.isDirty &&
      prevErrorValue === nextErrorValue &&
      prevProps.methods.formState.submitCount ===
        nextProps.methods.formState.submitCount
    );
  }
);

export default InputMemo;
