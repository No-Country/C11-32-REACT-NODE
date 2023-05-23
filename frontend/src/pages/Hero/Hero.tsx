import React from 'react';
import "./Hero.css"
const Hero: React.FC = () => {
  return (
    <div className="hero-main flex items-center vh-100 bg-gray-900 text-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 mx-auto text-center">
            <h1 className="text-4xl">Únete a la comunidad de aprendizaje online en vivo más grande de Latinoamérica</h1>
            <p className="my-3">Clases online en vivo, enfoque 100% práctico, mentorías personalizadas y acceso a una comunidad de estudiantes.</p>
            <a href="https://wa.link/qwnf6w" className="btn me-2 btn-main">Contactar</a>
            <a href="https://wa.link/qwnf6w" className="btn btn-outline-light">Grupo Wsp</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
