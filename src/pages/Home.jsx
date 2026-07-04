import React from "react";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects/>
    </div>
  );
};

export default Home;
