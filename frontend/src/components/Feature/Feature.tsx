import { AiOutlineTeam, AiOutlineComment, AiOutlineBulb } from 'react-icons/ai';

const Feature = () => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4 relative">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Mejora tu Inglés</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Practica Conversaciones</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">speakUp! proporciona una plataforma para que las personas practiquen y mejoren sus habilidades en el idioma inglés a través de conversaciones con hablantes nativos o fluidos. Ofrece una comunidad de apoyo donde los aprendices de idiomas pueden conectarse con compañeros de conversación y participar en discusiones significativas.</p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <AiOutlineTeam className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
                    Conéctate con compañeros de idiomas.
                  </dt>
                  <dd className="inline">Encuentra compañeros de conversación de todo el mundo que estén interesados en el intercambio de idiomas. Practica habilidades de habla en inglés con hablantes nativos o fluidos y mejora tu pronunciación, vocabulario y fluidez.</dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <AiOutlineComment className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
                    Participa en discusiones significativas.
                  </dt>
                  <dd className="inline">Únete a foros de discusión basados en temas y participa en conversaciones sobre diversos temas. Aprende sobre diferentes culturas y perspectivas mientras practicas tus habilidades en el idioma inglés.</dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <AiOutlineBulb className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
                    Mejora tus habilidades en el idioma.
                  </dt>
                  <dd className="inline">Gana confianza al hablar inglés, mejora tus habilidades en el idioma y desarrolla fluidez a través de la práctica regular y las interacciones con hablantes nativos o fluidos.</dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="relative">
            <img src="/img/fe.png" alt="Captura de pantalla del producto" className="w-full h-auto my-20 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
