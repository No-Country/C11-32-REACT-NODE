import { useState } from "react"

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Formulario from "../Formulario/Formulario";
import MiOrg from "../MiOrg/MiOrg";
import Meetings from "../Salas/Meetings";

const About = () => {
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [salas, actualizarSalas] = useState([]);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  // RegistrarSala
  const registrarSala = (sala) => {
    console.log('Nueva sala', sala);
    actualizarSalas([...salas, sala]);
  };

  const topics = [
    {
      titulo: 'Technology in Our Daily Lives 📱💻',
      colorPrimario: '#57C278',
      colorSecundario: '#D9F7E9',
    },
    {
      titulo: 'Art and Creativity 🎨🖌️',
      colorPrimario: '#82CFFA',
      colorSecundario: '#E8F8FF',
    },
    {
      titulo: 'Environmental Issues and Sustainability ♻️🌍',
      colorPrimario: '#A6D157',
      colorSecundario: '#F0F8E2',
    },
    {
      titulo: 'Travel and Exploration ✈️🌴',
      colorPrimario: '#E06B69',
      colorSecundario: '#FDE7E8',
    },
    {
      titulo: 'Cultural Diversity and Traditions 🌍🎎',
      colorPrimario: '#DB6EBF',
      colorSecundario: '#FAE9F5',
    },
    {
      titulo: 'Education and Lifelong Learning 📚🎓',
      colorPrimario: '#FFBA05',
      colorSecundario: '#FFF5D9',
    },
    {
      titulo: 'Current Events and News 📰🌐',
      colorPrimario: '#FF8A29',
      colorSecundario: '#FFEEDF',
    },
  ];
  
  return (
    <div>
      <Header />
      {mostrarFormulario && (
        <Formulario
          topics={topics.map((topic) => topic.titulo)}
          registrarSala={registrarSala}
        />
      )}
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {topics.map((topic, index) => (
        <Meetings
          datos={topic}
          key={topic.titulo}
          salas={salas.filter((sala) => sala.topico === topic.titulo)}
        />
      ))}
      <Footer />
    </div>
  );
};
export default About;
