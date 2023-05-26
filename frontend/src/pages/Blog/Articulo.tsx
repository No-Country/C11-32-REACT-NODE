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
    <div className="card" style={{ maxWidth: "18rem" }}>
      <img src={thumbnail} className="card-img-top" alt="Thumbnail" />
      <div className="card-body">
        <h6 className="card-subtitle mb-2">{subtitle}</h6>
        <Link to={enlaceblog}>
          <h5 className="card-title">{title}</h5>
        </Link>
        <div className="line"></div> {/* Línea entre el título y la descripción */}
        <p className="card-text">{description}</p>
        <h5 className="card-title">{channel}</h5>

        <div className="feature d-flex">
          <div className="icon-sm me-4">
            <FcAssistant />
          </div>
        </div>

        <Link to={enlaceblog} className="button-ver-mas">Ver más</Link> {/* Botón "Ver más" */}
      </div>
    </div>
  );
};

export default Articulo;
