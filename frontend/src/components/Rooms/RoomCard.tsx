import React from "react";
import "./RoomCard.css";
import { logo } from "@/assets";
import { RoomI } from "@/models";
import { TOPIC_COLOR } from "@/constants";
import { ROUTES } from "@/routes";
import { Link } from "react-router-dom";
import { BadgeError, BadgeSuccess } from "..";
interface RoomCardProps {
  data: RoomI;
}

const RoomCard: React.FC<RoomCardProps> = ({ data }) => {
  const {
    title,
    level,
    language,
    topic,
    is_public,
    max_participants,
    meet_id,
    current_participants,
  } = data;

  const { primaryColor } = TOPIC_COLOR[topic];
  const isRoomFull = current_participants === max_participants;

  return (
    <div className="meeting mt-2">
      <div className="encabezado" style={{ backgroundColor: primaryColor }}>
        <img className="mx-auto" src={logo} alt="logo" />
      </div>
      <div className="info">
        <h5>{title}</h5>
        <h6>{level}</h6>
        <h5>{language}</h5>

        <p className={`${isRoomFull ? "text-red-500" : "text-black"}`}>
          participants: {`${max_participants} / ${current_participants}`}
        </p>
        {is_public ? (
          <BadgeSuccess name="Public" />
        ) : (
          <BadgeError name="Private" />
        )}
        <Link to={`${ROUTES.rooms.join}/${meet_id}`}>
          <button
            className="btn-iniciar mx-auto mt-4"
            style={{ backgroundColor: primaryColor }}
          >
            Join now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RoomCard;
