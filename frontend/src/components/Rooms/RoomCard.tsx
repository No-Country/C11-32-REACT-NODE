import React from "react";
import "./RoomCard.css";
import { logo } from "@/assets";
import { RoomI } from "@/models";
import { TOPIC_COLOR } from "@/constants";
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
    status,
  } = data;

  const { primaryColor, secondaryColor } = TOPIC_COLOR[topic];

  return (
    <div className="meeting mt-2">
      <div className="encabezado" style={{ backgroundColor: primaryColor }}>
        <img className="mx-auto" src={logo} alt="logo" />
      </div>
      <div className="info">
        <h5>{title}</h5>
        <h6>{level}</h6>
        <h5>{language}</h5>

        <button
          className="btn-iniciar mx-auto mt-4"
          style={{ backgroundColor: primaryColor }}
        >
          Join now
        </button>
      </div>
    </div>
  );
};

export default RoomCard;
