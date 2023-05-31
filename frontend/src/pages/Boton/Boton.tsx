import React, { ReactNode } from 'react';
import './Boton.css';

interface BotonProps {
  children: ReactNode;
}

const Boton: React.FC<BotonProps> = (props) => {
  return <button className="boton">{props.children}</button>;
};

export default Boton;
