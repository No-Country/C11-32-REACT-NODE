import React from "react";
import { india, japan, germany, us, ukraine, iran, france, spain, turkey, italy } from "@/assets";
import "./Countries.css";

const Countries: React.FC = () => {
  return (
    <section className="flags-section">
      <h2 className="flags-title bigger-title">Learn the most spoken languages in the world!</h2>

      <div className="flags-container">
        <figure className="flag-item" style={{ transform: "translateY(4.32099px)" }}>
          <img alt="" src={spain} />
        </figure>
        <figure className="flag-item" style={{ transform: "translateY(-8.95187px)" }}>
          <img alt="" src={india} />
        </figure>
        <figure className="flag-item" style={{ transform: "translateY(-17.9358px)" }}>
          <img alt="" src={japan} />
        </figure>
        <figure className="flag-item" style={{ transform: "translateY(6.96257px)" }}>
          <img alt="" src={germany} />
        </figure>
        <figure className="flag-item" style={{ transform: "translateY(-19.1358px)" }}>
          <img alt="" src={us} />
        </figure>
        <figure className="flag-item" style={{ transform: "translateY(8.95187px)" }}>
          <img alt="" src={ukraine} />
        </figure>
        <figure className="flag-item" style={{ transform: "translateY(-13.123px)" }}>
          <img alt="" src={iran} />
        </figure>
        <figure className="flag-item" style={{ transform: "translateY(-19.1358px)" }}>
          <img alt="" src={france} />
        </figure>
        <figure className="flag-item" style={{ transform: "translateY(-2.40642px)" }}>
          <img alt="" src={turkey} />
        </figure>
        <figure className="flag-item" style={{ transform: "translateY(3.24064px)" }}>
          <img alt="" src={italy} />
        </figure>
      </div>
    </section>
  );
};

export default Countries;
