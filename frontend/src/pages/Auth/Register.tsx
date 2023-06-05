import { personRegister } from "@/assets";
import { Button, Card, Form } from "@/components";
import { initialFormUser } from "@/constants";
import { useToastMessage } from "@/hooks";
import { User, userSchema } from "@/schemas";
import { signupUser } from "@/services";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import PersonalnfoForm from "../Suscriptions/CheckoutPersonalnfo";

const Register = () => {
  const { mutate, isLoading, isSuccess, error, data } = useMutation({
    mutationFn: (data: User) => signupUser(data),
  });

  const navigate = useNavigate();
  const location = useLocation();

  const methods = useForm<FieldValues>({
    resolver: zodResolver(userSchema),
    defaultValues: initialFormUser,
    mode: "all",
    criteriaMode: "all",
  });

  useToastMessage({
    errors: [error],
  });
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (data) => {
    mutate(data);
  };

  useEffect(() => {
    if (!isSuccess) return;
    navigate(from, { replace: true });
  }, [isSuccess, data]);

  return (
    <main className=" container mx-auto p-4">
      <h1 className="my-8 text-center text-4xl  font-semibold">
        Sign up to SpeakUp
      </h1>
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row-reverse md:px-8 lg:px-32">
        <img
          src={personRegister}
          alt="person with glass"
          className="mx-auto w-[40%] md:w-[30%]"
          loading="lazy"
        />
        <Card className=" h-max w-full max-w-4xl pb-8 sm:w-[45rem]">
          <Form methods={methods} onSubmit={handleSubmit}>
            <PersonalnfoForm />
            <Button isLoading={isLoading} className="mx-auto w-max">
              Sign up
            </Button>
          </Form>
        </Card>
      </div>
    </main>
  );
};

export default Register;
