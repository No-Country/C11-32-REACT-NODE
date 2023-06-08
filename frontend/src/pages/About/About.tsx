import { Countries } from "@/components";
import React from "react";

const About: React.FC = () => {
  return (
    <>
      <Countries />
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Welcome to SpeakUp!
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We are a dynamic language learning platform designed to connect
            language enthusiasts from across the globe through interactive video
            calls. Our mission is to provide a virtual space where individuals
            can engage in real-time conversations with native speakers or fluent
            speakers of their target language.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            At SpeakUp, we understand the importance of authentic language
            practice in achieving fluency. Through our user-friendly platform,
            you can connect with people from different countries and cultures,
            fostering meaningful language exchanges that enhance your speaking
            and listening skills.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Whether you're a beginner looking to gain confidence in your
            language abilities or an advanced learner aiming to refine your
            proficiency, SpeakUp offers an inclusive community of language
            learners ready to engage in language exchange. Our platform enables
            you to schedule video calls, join language sessions, and immerse
            yourself in conversations that promote cultural understanding and
            linguistic growth.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Join our vibrant community of language enthusiasts today and embark
            on an exciting language learning journey. Connect with native
            speakers, expand your vocabulary, and develop fluency in your target
            language.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Unleash the power of authentic conversations and take your language
            skills to new heights. Sign up for SpeakUp and unlock a world of
            linguistic opportunities!
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
