import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Seo from "@/components/common/Seo";

const Home = () => {
  return (
    <>
      <Seo
        title="Portfolio"
        description="Portfolio of Adarsh Dhauni — Full Stack Developer specializing in React, Node.js, Express, MongoDB, and modern web applications."
      />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </>
  );
};

export default Home;
