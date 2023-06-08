import React, { useEffect, useState } from 'react';
import { horario, teachers, money, plataforma } from "@/assets";
import "./Steps.css";

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

  const [isAnimationEnabled, setIsAnimationEnabled] = useState(true);

  const stepsContainerRef = React.useRef<HTMLElement>(null);
  const stepCardImagesRef = React.useRef<HTMLCollectionOf<HTMLElement> | null>(null);
  const stepCardBackgroundsRef = React.useRef<HTMLCollectionOf<HTMLElement> | null>(null);
  const range = 40;

  const calcValue = (a: number, b: number): string => ((a / b) * range - range / 2).toFixed(1);

  let timeout: number;

  const handleMouseMove = ({ x, y }: { x: number; y: number }) => {
    if (!isAnimationEnabled) {
      return;
    }

    if (timeout) {
      window.cancelAnimationFrame(timeout);
    }
    timeout = window.requestAnimationFrame(() => {
      const yValue = calcValue(y, window.innerHeight);
      const xValue = calcValue(x, window.innerWidth);
      stepsContainerRef.current!.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;

      Array.prototype.forEach.call(stepCardImagesRef.current, (item: HTMLElement) => {
        item.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
      });

      Array.prototype.forEach.call(stepCardBackgroundsRef.current, (item: HTMLElement) => {
        item.style.backgroundPosition = `${xValue * 0.45}px ${-yValue * 0.45}px`;
      });
    });
  };

  const initializeMouseMove = () => {
    document.addEventListener("mousemove", handleMouseMove, false);

    window.addEventListener("beforeunload", () => {
      if (timeout) {
        window.cancelAnimationFrame(timeout);
      }
    });
  };

  useEffect(() => {
    initializeMouseMove();

    // Restaurar el estado de la animación desde el almacenamiento local
    const isAnimationEnabledFromStorage = localStorage.getItem('isAnimationEnabled') === 'true';
    setIsAnimationEnabled(isAnimationEnabledFromStorage);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove, false);
    };
  }, []);

  useEffect(() => {
    // Guardar el estado de la animación en el almacenamiento local
    localStorage.setItem('isAnimationEnabled', String(isAnimationEnabled));
  }, [isAnimationEnabled]);

  return (
    <main
      className="steps-container"
      ref={stepsContainerRef}
    >
      <h3>Guillermo del Toro</h3>
      <h1>Pinocho</h1>
      {stepsData.map((step, index) => (
        <div className={`step-card step-card__${index + 1}`} key={index}>
          <div className="step-card__bg"></div>
          <img
            className="step-card__img"
            src={step.image}
            alt={step.title}
            ref={el => {
              if (el) {
                stepCardImagesRef.current = el;
              }
            }}
          />
          <div className="step-card__text">
            <p className="step-card__title">{step.title}</p>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Steps;
