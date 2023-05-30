import React from 'react';

interface ListaOpcionesProps {
  valor: string;
  topics: string[];
  actualizaValor: (valor: string) => void;
}

const ListaOpciones: React.FC<ListaOpcionesProps> = (props) => {
  const manejarCambio = (e: React.ChangeEvent<HTMLSelectElement>) => {
    props.actualizaValor(e.target.value);
  };

  return (
    <div className="py-4">
      <label className="block text-xl font-semibold mb-2">Lista de Temas</label>
      <select
        value={props.valor}
        onChange={manejarCambio}
        className="w-full bg-white shadow-lg p-4 border-none outline-blue"
      >
        <option value="" disabled defaultValue="" hidden>
          Seleccionar tema de la reunión
        </option>
        {props.topics.map((topic, index) => (
          <option key={index} value={topic}>
            {topic}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ListaOpciones;
