import React from "react";
import { Link } from "react-router-dom";

export const Hero = () => {
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
      <div className="hero-btn-groups">
        <Link to="/register">
          <i className="fas fa-pencil-alt" /> Register
        </Link>
        <Link to="/login">
          <i className="fas fa-sign-in-alt" /> Login
        </Link>
      </div>
    </section>
  );
};

export default Hero;
