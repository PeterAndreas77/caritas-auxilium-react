import React from "react";
import Hero from "./hero";
import Feature from "./feature";
import Howto from "./howto";
import "../styles/landing.css";

const Landing = () => {
  return (
    <main className="content">
      <Hero />
      <Feature />
      <Howto />
    </main>
  );
};

export default Landing;
