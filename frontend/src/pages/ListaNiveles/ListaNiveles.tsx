import React, { ChangeEvent } from 'react';

interface ListaNivelesProps {
  valor: string;
  actualizaValor: (valor: string) => void;
}

const ListaNiveles: React.FC<ListaNivelesProps> = (props) => {
  const levels = [
    'Basic',
    'Pre-Intermediate',
    'Intermediate',
    'Upper-Intermediate',
    'Advanced',
  ];

  const manejarCambio = (e: ChangeEvent<HTMLSelectElement>) => {
    props.actualizaValor(e.target.value);
  };

  return (
    <div className="py-4">
      <label className="block text-xl font-semibold mb-2">Nivel de la Sala</label>
      <select
        value={props.valor}
        onChange={manejarCambio}
        className="w-full bg-white shadow-lg p-4 border-none outline-blue"
      >
        <option value="" disabled hidden>
          Seleccionar nivel de la reunión
        </option>
        {levels.map((level, index) => (
          <option key={index}>{level}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaNiveles;
