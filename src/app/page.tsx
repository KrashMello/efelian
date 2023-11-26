import type { Metadata } from "next";
import Experience from "./components/ui/Experiance";
import Projects from "./components/ui/Projects";
import Hero from "./components/ui/hero";

export const metadata: Metadata = {
  title: process.env.TITLE_PAGE + " | portafolio",
  description: "Breve reseña de quien es KrashMello y lo que hace.",
  icons: "/favicon.ico",
};

const Home = () => {
  return (
    <>
      <Hero />
      <Experience />
      <Projects />
    </>
  );
};
export default Home;
