import { FC, ReactNode } from "react";
import "../../pages/Auth/Login.css"
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  UseFormReturn,
} from "react-hook-form";

interface FormProps {
  methods: UseFormReturn<FieldValues>;
  onSubmit: SubmitHandler<FieldValues>;
  className?: string;
  children: ReactNode;
}
const Form: FC<FormProps> = ({ methods, onSubmit, children,className, ...props }) => {
  return (
    <FormProvider {...methods}>
      <form className={"login__form "+ className} onSubmit={methods.handleSubmit(onSubmit)}  {...props}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
