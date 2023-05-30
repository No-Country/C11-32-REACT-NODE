import React, { useState } from 'react';
import CampoTexto from '../CampoTexto/CampoTexto';
import ListaOpciones from '../ListaOpciones/ListaOpciones';
import './Formulario.css';
import ListaNiveles from '../ListaNiveles/ListaNiveles';
import Boton from '../Boton/Boton';

interface FormularioProps {
  registrarSala: (datos: any) => void;
  topics: string[];
}

const Formulario: React.FC<FormularioProps> = (props) => {
  const [idioma, setIdioma] = useState('');
  const [participantes, setParticipantes] = useState('');
  
  const [descripcion, setDescripcion] = useState('');
  const [nivel, setNivel] = useState('');
  const [topico, setTopico] = useState('');
  const [errorParticipantes, setErrorParticipantes] = useState('');

  const manejarEnvio = (e: React.FormEvent) => {
    e.preventDefault();

    if (!/^\d+$/.test(participantes) || Number(participantes) <= 0) {
      setErrorParticipantes('Ingrese un número válido de participantes');
      return;
    }

    const datosaEnviar = {
      idioma: idioma,
      participantes: participantes,
      descripcion: descripcion,
      nivel: nivel,
      topico: topico,
    };
    props.registrarSala(datosaEnviar);
  };

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Crear Sala</h2>
        <ListaNiveles valor={nivel} actualizaValor={setNivel} />
        <ListaOpciones
          valor={topico}
          actualizaValor={setTopico}
          topics={props.topics}
        />
        <CampoTexto
          titulo="Idioma"
          placeholder="Ingrese Idioma"
          required={true}
          valor={idioma}
          actualizaValor={setIdioma}
        />
        <CampoTexto
          titulo="Cantidad de Participantes"
          placeholder="Ingrese número de Participantes"
          required={true}
          valor={participantes}
          actualizaValor={setParticipantes}
        />
        {errorParticipantes && <p className="error">{errorParticipantes}</p>}
        <CampoTexto
          titulo="Descripcion"
          placeholder="Ingrese alguna descripcion de la sala"
          required={false}
          valor={descripcion}
          actualizaValor={setDescripcion}
        />
        <Boton>Crear Reunión</Boton>
      </form>
    </section>
  );
};

export default Formulario;
