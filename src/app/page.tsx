import type { Metadata } from "next";
import Experience from "./components/ui/Experiance";
import Projects from "./components/ui/Projects";
import Hero from "./components/ui/hero";

export const metadata: Metadata = {
  title: process.env.TITLE_PAGE + " | portafolio",
  description:
    "¡Hola mundo! Soy Joel Una persona apasionada por el desarrollo web que busca siempre dar lo mejor. Me gusta ayudar en el crecimiento de las demás en el ámbito tecnológico, compartiendo mi conocimiento. En mis ratos libres disfruto de ver videos, escuchar musica y buscar información sobre las nuevas tecnologías y avances.",
  icons: "/favicon.ico ",
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
