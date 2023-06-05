import { personLogin } from "@/assets";
import { Button, Card, Form, Input } from "@/components";
import { initialFormLogin } from "@/constants";
import { useAuth, useToastMessage } from "@/hooks";
import { Login, loginSchema } from "@/schemas";
import { loginUser } from "@/services";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { setAuthToken } = useAuth() ?? {};

  const { mutate, isLoading, isSuccess, error, data } = useMutation({
    mutationFn: (data: Login) => loginUser(data),
  });
  const navigate = useNavigate();
  const location = useLocation();
  const methods = useForm<FieldValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: initialFormLogin,
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
    if (!isSuccess || !setAuthToken) return;
    setAuthToken(data);
    navigate(from, { replace: true });
  }, [isSuccess, data]);

  return (
    <main className=" container mx-auto p-4">
      <h1 className="my-8 text-center text-4xl  font-semibold">
        Log in to your account
      </h1>
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row-reverse md:px-8 lg:px-32">
        <img
          src={personLogin}
          alt="person with glass"
          className="mx-auto w-[40%] md:w-[30%]"
        />
        <Card className=" h-max w-full max-w-2xl pb-8 sm:w-[37.5rem]">
          <Form methods={methods} onSubmit={handleSubmit}>
            <Input name="email" label="Email" />
            <Input name="password" label="Password" type="password" />
            <Button isLoading={isLoading}>Log in</Button>
          </Form>
        </Card>
      </div>
    </main>
  );
};

export default Login;
