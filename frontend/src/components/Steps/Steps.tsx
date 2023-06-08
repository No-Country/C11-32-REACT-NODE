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

  const stepsContainer = document.querySelector(".steps-container") as HTMLElement;
  const stepCardImages = document.querySelectorAll(".step-card__img") as NodeListOf<HTMLElement>;
  const stepCardBackgrounds = document.querySelectorAll(".step-card__bg") as NodeListOf<HTMLElement>;
  const range = 40;

  const calcValue = (a: number, b: number): string => ((a / b) * range - range / 2).toFixed(1);

  let timeout: number;
  document.addEventListener("mousemove", ({ x, y }) => {
    if (timeout) {
      window.cancelAnimationFrame(timeout);
    }
    timeout = window.requestAnimationFrame(() => {
      const yValue = calcValue(y, window.innerHeight);
      const xValue = calcValue(x, window.innerWidth);
      stepsContainer.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;

      [].forEach.call(stepCardImages, (item: HTMLElement) => {
        item.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
      });

      [].forEach.call(stepCardBackgrounds, (item: HTMLElement) => {
        item.style.backgroundPosition = `${(Number(xValue) * 0.45).toFixed(1)}px ${(-yValue * 0.45).toFixed(1)}px`;
      });
    });
  }, false);

  return (
    <main className="steps-container">
      <h3>Benefits</h3>
      <h1>Take your English to the next level </h1>
      {stepsData.map((step, index) => (
        <div className={`step-card step-card__${index + 1}`} key={index}>
          <div className="step-card__bg"></div>
          <img className="step-card__img" src={step.image} alt={step.title} />
          <div className="step-card__text">
            <p className="step-card__title">{step.title}</p>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Steps;
