import { FC, ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  UseFormReturn,
} from "react-hook-form";

interface FormProps {
  methods: UseFormReturn<FieldValues>;
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
}
const Form: FC<FormProps> = ({ methods, onSubmit, children, ...props }) => {
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} {...props}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
