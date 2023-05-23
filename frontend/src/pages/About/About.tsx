import { RiErrorWarningLine, RiRocket2Line, RiThumbUpLine, RiGlobeLine } from 'react-icons/ri';

const About = () => {
  return (
    <div className="px-4 py-8 bg-gray-100">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src="https://i.ibb.co/HLc74dd/pexels-photo-4458554.jpg" loading="lazy" alt="Mundo Poli" className="w-3/4" />
        </div>
        <div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold">¿Quieres perder el miedo a hablar otro idioma? Te ayudamos a fortalecer tu conversación.</h2>
            <div className="text-gray-700">Con el método social, aumenta tu confianza practicando en grupos personalizados y con la ayuda de un coach experto.</div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  <div className="flex flex-col items-center">
    <div className="mb-2">
      <RiErrorWarningLine className="w-8 h-8" />
    </div>
    <div className="text-center">
      <h3 className="font-bold">El problema no eres tú,<br />es cómo te enseñan</h3>
    </div>
  </div>
  <div className="flex flex-col items-center">
    <div className="mb-2">
      <RiRocket2Line className="w-8 h-8" />
    </div>
    <div className="text-center">
      <h3 className="font-bold">La clave es conversar y practicar</h3>
    </div>
  </div>
  <div className="flex flex-col items-center">
    <div className="mb-2">
      <RiThumbUpLine className="w-8 h-8" />
    </div>
    <div className="text-center">
      <h3 className="font-bold">Equivocarse es parte del aprendizaje</h3>
    </div>
  </div>
  <div className="flex flex-col items-center">
    <div className="mb-2">
      <RiGlobeLine className="w-8 h-8" />
    </div>
    <div className="text-center">
      <h3 className="font-bold">Conocer personas de todo el mundo te hará cambiar tu mundo</h3>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  </div>
  
  );
}

export default About;
