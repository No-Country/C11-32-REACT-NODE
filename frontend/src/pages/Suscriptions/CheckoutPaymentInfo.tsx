import { Input } from "@/components";

const CheckoutPaymentInfo = () => {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold">Personal Info</h2>
      <div className="flex flex-wrap gap-4">
        <Input label="Name" classNameContainer="sm:flex-1" />
        <Input label="Name" classNameContainer="sm:flex-1" />
        <Input label="Name" classNameContainer="sm:flex-1" />
      </div>
    </div>
  );
};

export default CheckoutPaymentInfo;
