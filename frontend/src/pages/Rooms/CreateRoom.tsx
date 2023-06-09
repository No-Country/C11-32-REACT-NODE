import { Button, Form } from "@/components";
import { RoomForm } from ".";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Room, RoomSchema } from "@/schemas";
import { initialFormRoom } from "@/constants";
import { useMutation } from "@tanstack/react-query";
import { createRoom } from "@/services";
import { useAuth, useToastMessage } from "@/hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/routes";

interface Data {
  meet_id: string;
}

const CreateRoom = () => {
  const navigate = useNavigate();
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

  useEffect(() => {
    if (!data) return;

    const { meet_id } = data as Data;
    navigate(`${ROUTES.rooms.join}/${meet_id}`);
  }, [data]);

  useToastMessage({
    errors: [error],
    successes: [data],
  });

  console.log(methods.formState.errors);

  const handleSubmit = async (data) => {
    mutate(data);
  };

  return (
    <main className="flex justify-center flex-col items-center mx-auto">
      <h1 className="mb-4 text-center font-semibold">Create a room</h1>
      <Form methods={methods} onSubmit={handleSubmit} className="w-[35rem]">
        <RoomForm />
        <Button isLoading={isLoading} className="mx-auto mt-4 w-max">
          Create room
        </Button>
      </Form>
    </main>
  );
};

export default CreateRoom;
