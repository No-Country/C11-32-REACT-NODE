import React from 'react';
import './MiOrg.css';

interface MiOrgProps {
  cambiarMostrar: () => void;
}

const MiOrg: React.FC<MiOrgProps> = (props) => {
  return (
    <section className="orgSection">
      <h3 className="title">Salas de Practica</h3>
      <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />
    </section>
  );
};

export default MiOrg;
