import type { Metadata } from "next";
import Principal from "./components/ui/pincipal";
import Experience from "./components/ui/Experiance";
import Projects from "./components/ui/Projects";

export const metadata: Metadata = {
  title: process.env.TITLE_PAGE + "| portafolio",
  description: "Breve reseña de quien es KrashMello y lo que hace.",
  icons: "/favicon.ico",
};

const Home = () => {
  return (
    <>
      <Principal />
      <Experience />
      <Projects />
    </>
  );
};
export default Home;
