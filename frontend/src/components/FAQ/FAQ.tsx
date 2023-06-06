import React, { useState } from 'react';
import { faq } from "@/assets";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const faqs: FAQItem[] = [
    {
        question: 'What is the Conversation Meeting?',
        answer: 'It`s an online meeting within a group of several people. We`re joined by those who want to communicate in English and develop speaking skills.',
      },
    {
      question: 'How can I join the session?',
      answer: 'Go to Rooms , Complete the form and Join Session',
    },
    {
      question: 'What level of English is required to join a Speak Up session?',
      answer: 'You can choose your level Basic, Intermediate and Advanced.',
    },
    {
      question: 'I would like to host a session by myself. What should I do?',
      answer: 'Just create the room , go to Rooms and complete the form ',
    },
    {
        question: 'Are there any native speakers in the sessions?',
        answer: 'You can find people from different countries so YES you can practice with native speakers',
      }
      
                    
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
  <div className="md:w-1/4">
    <h2 className="text-3xl font-semibold mb-4 text-center">Frequently Asked Questions</h2>
    <div className="max-w-lg">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            className="w-full text-left p-4 focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            <span className="font-medium text-gray-900">{faq.question}</span>
            <svg
              className={`ml-2 h-5 w-5 transform ${
                activeIndex === index ? 'rotate-180' : 'rotate-0'
              } transition-transform`}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M6 8a1 1 0 0 1 1.7-.7l3.58 3.59L14.3 7.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4A1 1 0 0 1 6 8z"
              />
            </svg>
          </button>
          {activeIndex === index && (
            <div className="px-4 py-2">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  </div>
  <div className="md:w-1/3">
    <img src={faq} alt="Imagen" className="max-w-full" />
  </div>
</div>

  );
};

export default FAQ;
