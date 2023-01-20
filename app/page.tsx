import { NextPage } from "next";
import { About, Contact, Experience, Hero, Projects, Skills } from "@section/.";

const Home: NextPage = () => {
  return (
    <main className="bg-gray-900 text-white">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
};

export default Home;
