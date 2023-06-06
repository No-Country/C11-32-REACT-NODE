import { logo } from "@/assets";
import { Button, Form, Input } from "@/components";
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
    <main className="container mx-auto p-4">
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src={logo}
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>
  
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Form methods={methods} onSubmit={handleSubmit}>
          <Input
            name="email"
            label="Email address"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <Input
            name="password"
            label="Password"
            type="password"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <Button
            isLoading={isLoading}
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </Button>
        </Form>
  
        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{' '}
          <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Start for free
          </a>
        </p>
      </div>
    </div>
  </main>
  
    
  );
};

export default Login;
