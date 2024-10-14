import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Work from "./Work";
import Projects from "./Project";
import "./App.css";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Projects />
    </>
  );
};

export default Home;
