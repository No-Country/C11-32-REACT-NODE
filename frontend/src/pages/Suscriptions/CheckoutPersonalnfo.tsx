import { Input } from "@/components";

const CheckoutPersonalnfo = () => {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold">Personal Info</h2>
      <div className="grid gap-x-4 sm:grid-cols-2">
        <Input label="Name" />
        <Input label="Last Name" />
        <Input label="Email" type="email" />
        <Input label="Age" type="number" />
      </div>
    </div>
  );
};

export default CheckoutPersonalnfo;
