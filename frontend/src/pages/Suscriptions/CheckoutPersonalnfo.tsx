import { Button, Card, Input } from "@/components";

const CheckoutPersonalnfo = () => {
  return (
    <Card>
      <h2 className="mb-4 text-2xl font-semibold">Personal Info</h2>
      <Input label="Name" />
      <Input label="Name" />
      <Button>process</Button>
    </Card>
  );
};

export default CheckoutPersonalnfo;
