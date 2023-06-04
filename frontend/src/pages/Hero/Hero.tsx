import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="px-4 py-6 md:px-6 lg:px-16 xl:px-32">
      <div>
        <div className="flex flex-col items-center justify-center md:flex-row">
          <img src="img/Decore.png" className="absolute right-0 top-0" alt="" />
          <div className="flex flex-col items-center pt-0 md:flex-row md:pt-10">
            <div className="md:w-[450px]">
              <div>
                <div className="grid gap-4">
                  <div className="grid gap-4">
                    <span className="z-10 text-2xl font-bold text-redText">
                      Unlock your potential with the best
                    </span>
                    <span className="z-50 text-4xl font-bold text-purpleText md:text-6xl">
                      Become more confident, speak English, and meet new people!
                    </span>
                  </div>
                  <div className="z-10">
                    <span className="text-lightPurpleText">
                      the best way to Practice Speaking in English and other
                      languages Online in a real-life setting..
                    </span>
                    <img
                      src="img/Decore_line.png"
                      className="top-170 absolute left-20 h-2 w-[300px] md:left-[430px] md:top-[400px] md:h-[12px]"
                      alt=""
                    />
                  </div>
                  <div className="z-10 mt-4 flex items-center space-x-4 md:mt-8 md:space-x-6">
                    <a
                      href="#"
                      className="rounded-md bg-yellowColor px-4 py-2 text-textWhite"
                    >
                      Find out more
                    </a>
                    <div className="flex items-center space-x-2">
                      <div className="rounded-full bg-buttonColor p-2 text-textWhite">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                          />
                        </svg>
                      </div>
                      <div>
                        <span className="text-lightPurpleText">Play Demo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-30 z-10 md:ml-10 md:mt-0 md:w-[700px]">
              <img src="img/hero.avif" className="w-full" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// <div className="hero-main flex items-center justify-center bg-gray-900 text-white">
//   <div className="container">
//     <div className="row">
//       <div className="col-lg-7 mx-auto text-center">
//         <h1 className="text-4xl">Únete a la comunidad de aprendizaje online en vivo más grande de Latinoamérica</h1>
//         <p className="my-3">Clases online en vivo, enfoque 100% práctico, mentorías personalizadas y acceso a una comunidad de estudiantes.</p>
//         <div className="btn-container">
//           <a href="https://wa.link/qwnf6w" className="btn me-2 btn-main">Contactar</a>
//           <a href="https://wa.link/qwnf6w" className="btn btn-outline-light">Grupo Wsp</a>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
