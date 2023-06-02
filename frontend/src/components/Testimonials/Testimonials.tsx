import  { useState } from 'react';
import { logo } from "@/assets";
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const testimonies = [
    {
      id: 1,
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
      author: "Judith Black",
      role: "CEO of Workcation",
      image: "https://i.ibb.co/Y2gZ3gn/277378317-970925623782967-5547080077889598648-n.jpg"
    },
    {
      id: 1,
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
      author: "Carlos",
      role: "CEO of Workcation",
      image: "https://i.ibb.co/Y2gZ3gn/277378317-970925623782967-5547080077889598648-n.jpg"
    }
    // Agrega más testimonios aquí
  ];

  const [currentTestimony, setCurrentTestimony] = useState(0);

  const nextTestimony = () => {
    setCurrentTestimony((prevIndex) =>
      prevIndex === testimonies.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 opacity-20" style={{background: 'radial-gradient(45rem at top, theme(colors.indigo.100), white)'}} />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <img className="mx-auto h-16" src={logo} alt="" />
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              <FaQuoteLeft className="inline text-indigo-600 text-3xl" />
              {" "}
              {testimonies[currentTestimony].quote}
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-10 w-10 rounded-full"
              src={testimonies[currentTestimony].image}
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">{testimonies[currentTestimony].author}</div>
              <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">{testimonies[currentTestimony].role}</div>
            </div>
          </figcaption>
        </figure>
      </div>
      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={() =>
            setCurrentTestimony((prevIndex) =>
              prevIndex === 0 ? testimonies.length - 1 : prevIndex - 1
            )
          }
          className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded-md text-gray-800 font-semibold"
        >
          Anterior
        </button>
        <button
          onClick={nextTestimony}
          className="bg-indigo-600 hover:bg-indigo-700 py-2 px-4 rounded-md text-white font-semibold"
        >
          Siguiente
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
