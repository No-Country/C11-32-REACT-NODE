import Banner from "@/components/MainBanner/Banner";
import { data } from "../../constants/data";
import Footer from "../Footer/Footer";

const Specially: React.FC = () => {
  const heroData = data[8]; // selecciona el primer objeto de datos, por ejemplo

  return (
    <>
      <Banner title={heroData.title} description={heroData.description} thumbnail={heroData.thumbnail} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          <div className="md:col-span-7">
                        <p>
              Hello there student! ¿Sabes cuál es la diferencia entre 'especially' y 'specially'? ¿O quizás eres de aquellos estudiantes que ha llegado hasta el año 2023 sin saber de la existencia de 'especially'? 🙈
            </p>
            <p>
              En ese caso, quédate ahí pegado al asiento y solucionaremos esto en menos que canta un gallo. No vuelvas a liarte con estos dos adverbios en inglés.
            </p>
            <hr />

            <article>
              <h3 className="text-xl font-bold">¿Cuándo usamos 'especially'?</h3>

              <p>
                <span className="font-bold">👉 Usamos 'especially' cuando equivale a 'sobre todo', 'above all'.</span>
              </p>
              <ul className="list-disc ml-6">
                <li>I love fruit, especially bananas.</li>
                <li>We've got many plants at home, especially cacti.</li>
                <li>That bar is always packed, especially at weekends.</li>
              </ul>
              <p>
                <span className="font-bold">👉 También usamos 'especially' delante de adjetivos, con el significado de 'particularmente'.</span>
              </p>
              <ul className="list-disc ml-6">
                <li>I feel especially grumpy in the mornings.</li>
                <li>The underground was especially busy this morning.</li>
                <li>It's not especially hot for this time of the year.</li>
              </ul>
              <h3 className="text-xl font-bold">¿Cuándo usamos 'specially'?</h3>

              <p>Cuando nos referimos al propósito específico o la función de algo.</p>
              <ul className="list-disc ml-6">
                <li>These scissors are specially designed for left-handed people.</li>
                <li>This poodle is specially trained to sniff drugs.</li>
              </ul>
              <div>
                <p><span className="font-bold">¿Cuándo se pueden usar ambas?</span></p>
                <p>Mira este ejemplo:</p>

                <p>
                  <span className="font-bold">👉🥛 I bought this milk especially / specially for you.</span>
                </p>
                <p>
                  Este caso nos referimos a un propósito en particular. He comprado esta leche para ti, quizás porque te gusta más o porque eres intolerante a la lactosa, vegetariano, etc. Ambas son aceptadas, pero es más común usar 'especially'.
                </p>

                <p>
                  En resumen, recuerda que 'especially' es mucho más común y puedes usarlo siempre y cuando no hables del propósito específico o la función de algo, en ese caso usas 'specially'.
                </p>
                <p>Tomar examen</p>
              </div>
            </article>
            <hr />

            <article>
              <iframe
                title="Quizlet"
                loading="lazy"
                src="https://quizlet.com/404238738/flashcards/embed?i=10rxrk&amp;x=1jj1"
                height="500"
                width="100%"
                style={{ border: "0" }}
                data-gtm-yt-inspected-4="true"
              ></iframe>
              <p>This video has been specially made with love at Ucollege headquarters by Carlos Apolaya Sanchez. 💕</p>
              <p>¡Puedes compartirlo, 'especially' si te ha ayudado!</p>
            </article>
          </div>
          <div className="md:col-span-5 flex flex-row justify-center items-center mt-4 md:mt-0">
          <div className="w-1/2">
              <img
                src="https://i.ibb.co/bX2x42b/Rosa-Vertical-Retro-Banner-retr-ctil-para-Black-Friday-1.png"
                alt="Imagen relacionada con el trabajo"
                className="w-full h-auto mb-4"
              />
            </div>
            <div className="w-1/2">
            <img
                src="https://i.ibb.co/bX2x42b/Rosa-Vertical-Retro-Banner-retr-ctil-para-Black-Friday-1.png"
                alt="Imagen relacionada con el trabajo"
                className="w-full h-auto mb-4"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Specially;
