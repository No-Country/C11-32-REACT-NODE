import React, { ChangeEvent } from 'react';
import './CampoTexto.css';

interface CampoTextoProps {
  titulo: string;
  placeholder: string;
  required: boolean;
  valor: string;
  actualizaValor: (valor: string) => void;
}

const CampoTexto: React.FC<CampoTextoProps> = (props) => {
  const placeholderModificado = `${props.placeholder}...`;

  const manejarCambio = (e: ChangeEvent<HTMLInputElement>) => {
    props.actualizaValor(e.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.titulo}</label>
      <input
        placeholder={placeholderModificado}
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
      />
    </div>
  );
};

export default CampoTexto;
