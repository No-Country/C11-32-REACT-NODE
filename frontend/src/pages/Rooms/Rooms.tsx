import { Button, RoomCard, ScreenLoader } from "@/components";
import { ROUTES } from "@/routes";
import { roomsList } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const Rooms = () => {
  const { isLoading, data, isSuccess } = useQuery({
    queryKey: ["listRooms"],
    queryFn: roomsList,
  });

  if (isLoading) return <ScreenLoader />;

  return (
    <main className="container mx-auto">
      <Link to={ROUTES.rooms.create}>
        <Button>Create room</Button>
      </Link>
      <div>{isSuccess && data.map((room) => <RoomCard data={room} />)}</div>
    </main>
  );
};

export default Rooms;
