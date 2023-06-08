import { Input } from "@/components";
import "../Auth/Login.css"
const PersonalnfoForm = () => {
  return (
    <div>
      <div className="grid gap-x-2 sm:grid-cols-2 ">
        <Input label="Name" name="first_name" className="login__input"/>
        <Input label="Last Name" name="last_name" className="login__input" />
        <Input label="Age" name="age" className="login__input" />
        <Input label="Email" type="email" name="email" className="login__input" />
        <Input label="Password" type="password" name="password" className="login__input" />
        <Input label="Repeat password" type="password" name="repeat_password" className="login__input" />
      </div>
    </div>
  );
};

export default PersonalnfoForm;
