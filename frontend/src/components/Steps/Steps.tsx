import { fondo2, horario, teachers, money, plataforma } from "@/assets";

const Steps = () => {
  const stepsData = [
    {
      title: 'Mejora tu Inglés',
      description: 'Nuestra comunidad cuenta con más de 2000 profesores expertos, todos ellos con experiencia docente previa.',
      image: teachers,
    },
    {
      title: 'Asequible',
      description: 'Con clases desde 22,04 PEN, SpeakUp! ofrece aprendizaje de idiomas a distancia que se ajusta a cualquier bolsillo.',
      image: money,
    },
    {
      title: 'Horario flexible',
      description: 'Te ofrecemos la posibilidad de aprender en función de tus horarios. Reserva tus clases cuando quieras aprender.',
      image: horario,
    },
    {
      title: 'Plataforma todo en uno',
      description: 'odo tu aprendizaje en una plataforma completa que te acompañará en cualquier lugar.',
      image: plataforma,
    },
  ];

  return (
    <div className="contenedorpadre" style={{
      backgroundImage: `url(${fondo2})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: '80%',
      height: '500px',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      borderBottomLeftRadius: '70% 20%',
      borderBottomRightRadius: '70% 20%'
    }}>
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-cover bg-center min-h-screen">
        <div className="flex flex-col items-center justify-center py-24 sm:py-32">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:max-w-6xl justify-center"> {/* Añade 'justify-center' para centrar las cards */}
            {stepsData.map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-center">
                  <img src={step.image} alt={step.title} className="mx-auto w-32 h-32 rounded-full" />
                </div>
                <h2 className="mt-6 text-xl font-semibold text-indigo-600 text-center">{step.title}</h2>
                <p className="mt-4 text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
            }

export default Steps;
