import React from 'react';
import './Meeting.css';
import logo from '../../../public/img/logo.svg';
interface MeetingProps {
  datos: {
    idioma: string;
    nivel: string;
    descripcion: string;

  };
  colorPrimario: string;
}

const Meeting: React.FC<MeetingProps> = (props) => {
  const { idioma, nivel,descripcion } = props.datos;
  const { colorPrimario } = props;

  return (
    <div className="meeting mt-2">
      <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
        <img className="mx-auto" src={logo} alt="logo" />
      </div>
      <div className="info">
        <h6>{nivel}</h6>
        <h5>{descripcion}</h5>
        <h5>{idioma}</h5>
       
        <button className="btn-iniciar mx-auto mt-4"  style={{ backgroundColor: colorPrimario }}>Unirme Ya </button>
      </div>
    </div>
  );
};

export default Meeting;
