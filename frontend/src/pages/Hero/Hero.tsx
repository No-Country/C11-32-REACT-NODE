import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="px-4 md:px-6 lg:px-16 xl:px-32 py-6">
      <div>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <img src="img/Decore.png" className="absolute right-0 top-0" z-10 alt="" />
          <div className="pt-0 md:pt-10 flex flex-col md:flex-row items-center">
            <div className="md:w-[450px]">
              <div>
                <div className="grid gap-4">
                  <div className="grid gap-4">
                    <span className="text-redText font-bold text-2xl z-10">Unlock your potential with the best</span>
                    <span className="font-bold text-4xl md:text-6xl text-purpleText z-50">
                      Become more confident, speak English, and meet new people!
                    </span>
                    
                  </div>
                  <div className='z-10'>
                    <span className="text-lightPurpleText">
                      the best way to Practice Speaking in English and other languages Online in a real-life setting..
                    </span>
                    <img
                      src="img/Decore_line.png"
                      className="absolute top-170 md:top-[400px] left-20 md:left-[430px] h-2 md:h-[12px] w-[300px]"
                      alt=""
                    />
                  </div>
                  <div className="flex items-center space-x-4 md:space-x-6 mt-4 md:mt-8 z-10">
                    <a href="#" className="px-4 py-2 rounded-md bg-yellowColor text-textWhite">
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
                          className="w-6 h-6"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
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
            <div className="mt-30 md:mt-0 md:ml-10 md:w-[600px] z-10">
              <img src="img/hero.avif" className="w-full" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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