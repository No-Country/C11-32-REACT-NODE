import React from 'react';
import './Meetings.css';
import Meeting from '../Sala/Meeting';

interface MeetingsProps {
  datos: {
    colorPrimario: string;
    colorSecundario: string;
    titulo: string;
  };
  salas: Array<{
    idioma: string;
    nivel: string;
    topico: string;
  }>;
}

const Meetings: React.FC<MeetingsProps> = (props) => {
  const { colorPrimario, colorSecundario, titulo } = props.datos;
  const { salas } = props;
  const obj = {
    backgroundColor: colorSecundario,
  };

  const estiloTitulo = { borderColor: colorPrimario };

  return (
    <>
      {salas.length > 0 && (
        <section className="topic" style={obj}>
          <h3 style={estiloTitulo}>{titulo}</h3>
          <div className="meetings">
            {salas.map((meeting, index) => (
              <Meeting datos={meeting} key={index} colorPrimario={colorPrimario} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Meetings;
