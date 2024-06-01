import type { Metadata } from "next";
import Experience from "../components/ui/en/Experience";
import Projects from "../components/ui/en/Projects";
import Hero from "../components/ui/en/Hero";

export const metadata: Metadata = {
  title: process.env.TITLE_PAGE + " | portfolio",
  description:
    "Hello world, i'm joel A person passionate about web development that always seeks to give the best. I like to help in the growth of others in the technological field, sharing my knowledge. In my free time I enjoy watching videos, listening to music and looking for information about new technologies and advances.",
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
