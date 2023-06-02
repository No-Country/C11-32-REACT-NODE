import { Input } from "@/components";

const CheckoutPersonalnfo = () => {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold">Personal Information</h2>
      <div className="grid gap-x-4 sm:grid-cols-2">
        <Input label="Name" name="first_name" />
        <Input label="Last Name" name="last_name" />
        <Input label="Age" name="age" />
        <Input label="Email" type="email" name="email" />
        <Input label="Password" type="password" name="password" />
        <Input label="Repeat password" type="password" name="repeat_password" />
      </div>
    </div>
  );
};

export default CheckoutPersonalnfo;
