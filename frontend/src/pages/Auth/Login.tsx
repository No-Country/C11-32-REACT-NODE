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
import "./Login.css"
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
    <main className="container ">
      <div className="login__content">
      <img src="https://i.ibb.co/ChRBkx3/fd23a522d40a7049200c9b6383fa51d2.jpg" alt="login image" className="login__img"/>

       
          <Form methods={methods} onSubmit={handleSubmit} >
             <div>
             <h1 className="login__title"> <span>Welcome</span> Back </h1>
             <p className="login__description">Welcome! Please login to continue. </p>
             </div>
            <div>
                  <div className="login__inputs">
                  <Input
                    name="email"
                    label="Email address"
                    className="login__input"
                  />
                  <Input
                    name="password"
                    label="Password"
                    type="password"
                    className="login__input "                  />
                  </div>
                 <div className="login__buttons">
                 <Button
                    isLoading={isLoading}
                   
                  >
                    Sign in
                  </Button>
                  <Button
                    isLoading={isLoading}
                    className="login__button-ghost " 
                  >
                    Sign Up
                  </Button>
                 </div>
                 <a href="#" className="login__forgot">Forgot Password?</a>
            </div>
          </Form>

       
      </div>
    </main>
  );
};

export default Login;
