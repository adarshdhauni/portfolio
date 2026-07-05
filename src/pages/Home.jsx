import React from "react";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Seo from "@/components/common/Seo";

const Home = () => {
  return (
    <>
      <Seo
        title="Portfolio"
        description="Portfolio of Adarsh Dhauni — Full Stack Developer specializing in React, Node.js, Express, MongoDB and modern web applications."
      />

      <div>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </div>
    </>
  );
};

export default Home;
