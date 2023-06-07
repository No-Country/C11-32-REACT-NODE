import { Button } from "@/components";
import { ROUTES } from "@/routes";
import { Link } from "react-router-dom";

const Rooms = () => {
  return (
    <main className="container mx-auto">
      <Link to={ROUTES.rooms.create}>
        <Button>Create room</Button>
      </Link>
    </main>
  );
};

export default Rooms;
