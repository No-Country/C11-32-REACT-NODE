import { Button, Form } from "@/components";
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
import "./Login.css";

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
<main className="container" style={{ marginTop: "50px" }}>
            <div className="login__content">
            <img src="https://i.ibb.co/ChRBkx3/fd23a522d40a7049200c9b6383fa51d2.jpg" alt="login image" className="login__img"/>

     
        
          <Form methods={methods} onSubmit={handleSubmit}>
          <div>
            <div className="login__inputs">
              <PersonalnfoForm />
            </div>

            <div className="login__buttons">
              <Button isLoading={isLoading} className="login__button-ghost">
                Sign up
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </main>
  );
};

export default Register;
