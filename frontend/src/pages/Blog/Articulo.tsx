import React from "react";
import { FcAssistant } from "react-icons/fc";
import { Link } from 'react-router-dom';
import "./Articulo.css";

interface ArticuloProps {
  thumbnail: string;
  title: string;
  subtitle: string;
  enlaceblog: string;
  description: string;
  channel: string;
}

const Articulo: React.FC<ArticuloProps> = ({ thumbnail, title, subtitle, enlaceblog, description, channel }) => {
  return (
    <div className="new-card" style={{ maxWidth: "18rem" }}>
      <img src={thumbnail} className="new-card-img" alt="Thumbnail" />
      <div className="card-body">
        <h6 className="card-subtitle mb-2">{subtitle}</h6>
        <Link to={enlaceblog}>
          <h5 className="new-card-title">{title}</h5>
        </Link>
        <div className="new-line"></div>
        <p className="new-card-text">{description}</p>
        <h5 className="new-card-title">{channel}</h5>

        <div className="feature d-flex">
          <div className="icon-sm me-4">
            <FcAssistant />
          </div>
        </div>

        <Link to={enlaceblog} className="new-button-ver-mas">Ver más</Link>
      </div>
    </div>
  );
};

export default Articulo;
