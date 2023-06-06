import  { useState } from 'react';
import { logo } from "@/assets";
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const testimonies = [
    {
      id: 1,
      quote: "I have improved my coding skills tremendously with the help of online resources. Thanks to that, I was able to land my dream job as a Software Engineer.",
      author: "Laura Sanchez",
      role: "Software Engineer",
      image: "https://i.ibb.co/Y2gZ3gn/277378317-970925623782967-5547080077889598648-n.jpg"
    },
    {
      id: 2,
      quote: "Learning languages has opened up a world of opportunities for me. I now work as a translator and get to interact with people from different cultures every day.",
      author: "Sophie Chen",
      role: "Translator",
      image: "https://i.ibb.co/Y2gZ3gn/277378317-970925623782967-5547080077889598648-n.jpg"
    },
    {
      id: 3,
      quote: "Thanks to my language learning journey, I was able to study abroad and immerse myself in a new culture. It has been a life-changing experience for me.",
      author: "David Johnson",
      role: "International Student",
      image: "https://i.ibb.co/Y2gZ3gn/277378317-970925623782967-5547080077889598648-n.jpg"
    },
    {
      id: 4,
      quote: "Learning a new language has made traveling more enjoyable for me. I can now communicate with locals and understand their customs, making every trip unforgettable.",
      author: "Isabella Martinez",
      role: "Passionate Traveler",
      image: "https://i.ibb.co/Y2gZ3gn/277378317-970925623782967-5547080077889598648-n.jpg"
    },
    {
      id: 5,
      quote: "As a business professional, learning languages has helped me expand my network and establish connections with clients from around the world. It has been invaluable for my career.",
      author: "Michael Anderson",
      role: "Business Consultant",
      image: "https://i.ibb.co/Y2gZ3gn/277378317-970925623782967-5547080077889598648-n.jpg"
    },
    {
      id: 6,
      quote: "Becoming bilingual has given me a competitive edge in the job market. I now have more opportunities and can work in different countries if I choose to.",
      author: "Emily Wilson",
      role: "Marketing Specialist",
      image: "https://i.ibb.co/Y2gZ3gn/277378317-970925623782967-5547080077889598648-n.jpg"
    },
    {
      id: 7,
      quote: "Learning languages has been a fulfilling personal journey for me. It has broadened my perspective, enriched my life, and allowed me to connect with people from diverse backgrounds.",
      author: "Daniel Lee",
      role: "Language Enthusiast",
      image: "https://i.ibb.co/Y2gZ3gn/277378317-970925623782967-5547080077889598648-n.jpg"
    },
    {
      id: 8,
      quote: "Being able to speak multiple languages has given me the confidence to explore career opportunities abroad. I'm excited about the possibilities that lie ahead.",
      author: "Olivia Thompson",
      role: "Aspiring Global Professional",
      image: "https://i.ibb.co/Y2gZ3gn/277378317-970925623782967-5547080077889598648-n.jpg"
    },
    {
      id: 9,
      quote: "Language learning has helped me embrace diversity and build meaningful relationships with people from different backgrounds. It has enriched my life in countless ways.",
      author: "Ethan Davis",
      role: "Social Worker",
      image: "https://i.ibb.co/Y2gZ3gn/277378317-970925623782967-5547080077889598648-n.jpg"
    },
    {
      id: 10,
      quote: "Thanks to language learning, I can now enjoy literature and movies in their original language. It has opened up a whole new world of art and culture for me.",
      author: "Sophia Adams",
      role: "Art Enthusiast",
      image: "https://i.ibb.co/Y2gZ3gn/277378317-970925623782967-5547080077889598648-n.jpg"
    }
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
