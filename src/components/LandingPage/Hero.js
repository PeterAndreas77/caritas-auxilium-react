import React from "react";
import "../../styles/hero.css";

const Hero = () => {
  return (
    <section id="hero-page">
      <img
        className="hero-img"
        src="/caritas_logo.png"
        alt="Caritas Auxilium Logo"
      />
      <p>Humanitarian Crisis and Disaster Donation App</p>
      <a href="#feature-page" className="button">
        features
      </a>
      <a href="#howto-page" className="button">
        how to use
      </a>
    </section>
  );
};

export default Hero;
