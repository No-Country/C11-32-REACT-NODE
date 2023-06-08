import React, { useEffect } from "react";
import { india, japan, germany, us, ukraine, iran, france, spain, turkey, italy } from "@/assets";
import "./Countries.css";
import Parallax from 'parallax-js';

const Countries: React.FC = () => {
  useEffect(() => {
    const scene = document.getElementById('scene');
    const text = document.getElementById('text');
    const parallaxInstanceScene = new Parallax(scene);
    const parallaxInstanceText = new Parallax(text);

    parallaxInstanceScene.friction(0.2, 0.2);
  }, []);

  return (
    <section className="banner">
      <div className="container">
        <div id="scene">
          <h2 id="text">
            <span data-depth-y="2">s</span>
            <span data-depth-y="-6">p</span>
            <span data-depth-y="5">e</span>
            <span data-depth-y="-8">a</span>
            <span data-depth-y="-3">k</span>
            <span data-depth-y="6">up!</span>
          </h2>
          
          <div className="layer z" data-depth="-0.5">
            <img src={japan} alt="Japan" style={{ position: "absolute", top: "20%", left: "10%" }} />
          </div>
          <div className="layer z" data-depth="0.75">
            <img src={germany} alt="Germany" style={{ position: "absolute", top: "40%", left: "30%" }} />
          </div>
          <div className="layer z" data-depth="1">
            <img src={us} alt="US" style={{ position: "absolute", top: "60%", left: "50%" }} />
          </div>
          <div className="layer" data-depth="-0.25">
            <img src={ukraine} alt="Ukraine" style={{ position: "absolute", top: "80%", left: "70%" }} />
          </div>
          <div className="layer" data-depth="0.625">
            <img src={france} alt="France" style={{ position: "absolute", top: "30%", left: "80%" }} />
          </div>
          <div className="layer" data-depth="-0.375">
            <img src={turkey} alt="Turkey" style={{ position: "absolute", top: "50%", left: "90%" }} />
          </div>
          <div className="layer z" data-depth="0.5">
            <img src={italy} alt="Italy" style={{ position: "absolute", top: "70%", left: "70%" }} />
          </div>
          <div className="layer z" data-depth="0.9">
            <img src={india} alt="Italy" style={{ position: "absolute", top: "70%", left: "70%" }} />
          </div>
          <div className="layer z" data-depth="0.9">
            <img src={iran} alt="Italy" style={{ position: "absolute", top: "70%", left: "70%" }} />
          </div>
          <div className="layer z" data-depth="0.9">
            <img src={spain} alt="Italy" style={{ position: "absolute", top: "70%", left: "70%" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countries;
