import React from "react";
import Hero from "./Hero";
import Feature from "./Feature";
import Howto from "./Howto";
import "../../styles/landing.css";

export const LandingPage = () => {
  return (
    <main className="content">
      <Hero />
      <Feature />
      <Howto />
    </main>
  );
};

export default LandingPage;
