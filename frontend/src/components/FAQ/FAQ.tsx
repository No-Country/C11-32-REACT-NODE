import React from "react";
import "./FAQ.css";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      question: "What is the Conversation Meeting?",
      answer:
        "It`s an online meeting within a group of several people. We`re joined by those who want to communicate in English and develop speaking skills.",
    },
    {
      question: "How can I join the session?",
      answer: "Go to Rooms, complete the form, and join the session.",
    },
    {
      question: "What level of English is required to join a Speak Up session?",
      answer: "You can choose your level: Basic, Intermediate, and Advanced.",
    },
    {
      question: "I would like to host a session by myself. What should I do?",
      answer: "Just create the room, go to Rooms, and complete the form.",
    },
    {
      question: "Are there any native speakers in the sessions?",
      answer:
        "You can find people from different countries, so YES, you can practice with native speakers.",
    },
  ];

  return (
    <section className="faq-container">
      <h1>Preguntas frecuentes</h1>
      {faqs.map((faq, index) => (
        <div className="faq-tab" key={index}>
          <input type="radio" name="abrir" id={`acc${index + 1}`} />
          <label htmlFor={`acc${index + 1}`}>
            <h2>{index + 1}</h2>
            <h3>{faq.question}</h3>
          </label>
          <div className="faq-content">
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FAQ;
