import { Button, Form, Input } from "@/components";
import { initialFormLogin } from "@/constants";
import { useAuth, useToastMessage } from "@/hooks";
import { Login, loginSchema } from "@/schemas";
import { loginUser } from "@/services";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css"
import { ROUTES } from "@/routes";
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
<main className="container" style={{ marginTop: "50px" }}>
      <div className="login__content">
      <img src="https://i.ibb.co/ChRBkx3/fd23a522d40a7049200c9b6383fa51d2.jpg" alt="login image" className="login__img"/>

       
          <Form methods={methods} onSubmit={handleSubmit} >
             <div>
             <h1 className="login__title"> <span>Welcome</span> Back </h1>
             </div>
            <div>
                  <div className="login__inputs">
                  <Input
                    name="email"
                    label="Email address"
                    className="login__input"
                    placeholder="Enter your email address"
                  />
                  <Input
                    name="password"
                    label="Password"
                    type="password"
                    className="login__input "  
                    placeholder="Enter your password"                />

                    
                  </div>
                 
            </div>
            <div className="login__buttons">
                 <Button
                    isLoading={isLoading}
                   
                  >
                    Sign in
                  </Button>
             </div>
               <p>don't have an account, <Link to={ROUTES.auth.register} className="text-[rgb(42,101,231)]">register</Link></p>
          </Form>

       
      </div>
    </main>
  );
};

export default Login;
