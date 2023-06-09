import { Button, RoomCard, ScreenLoader } from "@/components";
import { ROUTES } from "@/routes";
import { roomsList } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const Rooms = () => {
  const { isLoading, data, isSuccess } = useQuery({
    queryKey: ["listRooms"],
    queryFn: roomsList,
    refetchInterval:3000
  });

  if (isLoading) return <ScreenLoader />;

  return (
    <main className="px-8 mx-auto pt-8">
      <Link to={ROUTES.rooms.create}>
        <Button className="mb-8 w-max">Create room</Button>
      </Link>
      <div className="grid-cards">
        {isSuccess && data.map((room) => <RoomCard data={room} />)}
      </div>
    </main>
  );
};

export default Rooms;
