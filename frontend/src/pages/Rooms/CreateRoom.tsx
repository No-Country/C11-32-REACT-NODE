import { Button, Form } from "@/components";
import { RoomForm } from ".";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Room, RoomSchema } from "@/schemas";
import { initialFormRoom } from "@/constants";
import { useMutation } from "@tanstack/react-query";
import { createRoom } from "@/services";
import { useAuth, useToastMessage } from "@/hooks";

const CreateRoom = () => {
  const { auth } = useAuth() ?? {};

  const { mutate, isLoading, error, data } = useMutation({
    mutationFn: (data: Room) => createRoom(data, auth?.token),
  });
  const methods = useForm<FieldValues>({
    resolver: zodResolver(RoomSchema),
    defaultValues: initialFormRoom,
    mode: "all",
    criteriaMode: "all",
  });

  useToastMessage({
    errors: [error],
    successes: [data],
  });

  console.log(methods.formState.errors);

  const handleSubmit = async (data) => {
    mutate(data);
  };

  return (
    <main className="container mx-auto">
      <h1 className="mb-4 text-center font-semibold">Create a room</h1>
      <Form methods={methods} onSubmit={handleSubmit}>
        <RoomForm />
        <Button isLoading={isLoading} className="mx-auto mt-4 w-max">
          Create room
        </Button>
      </Form>
    </main>
  );
};

export default CreateRoom;
