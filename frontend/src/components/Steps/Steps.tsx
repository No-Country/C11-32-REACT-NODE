import {  horario, teachers, money, plataforma } from "@/assets";

const Steps = () => {
  const stepsData = [
    {
      title: 'Improve Your English',
      description: 'Our community has over 2000 expert teachers, all with previous teaching experience.',
      image: teachers,
    },
    {
      title: 'Affordable',
      description: 'With classes starting from 22.04 PEN, SpeakUp! offers distance language learning that fits any budget.',
      image: money,
    },
    {
      title: 'Flexible Schedule',
      description: 'We offer the possibility to learn based on your schedule. Reserve your classes whenever you want to learn.',
      image: horario,
    },
    {
      title: 'All-in-One Platform',
      description: 'All your learning in one comprehensive platform that accompanies you anywhere.',
      image: plataforma,
    },
  ];
  
  return (
    <div className="contenedorpadre" style={{
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',

      
    }}>
<div className="bg-cover bg-center min-h-64 pt-0">
        <div className="flex flex-col items-center justify-center py-24 sm:py-32">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:max-w-6xl">
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
