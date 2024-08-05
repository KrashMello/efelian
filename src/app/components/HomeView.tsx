"use client";
import fs from "fs";
import path from "path";
import { useState } from "react";
import Hero from "./ui/hero";
import Experience from "./ui/Experiance";
import Projects from "./ui/Projects";

const HomeView = () => {
  const [lang, setLang] = useState("ES");
  const filePath = path.join(process.cwd(), "src/app", `${lang}.json`);
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);
  return (
    <>
      <Hero data={data.hero} />
      <Experience data={data.experience} />
      <Projects />
    </>
  );
};
export default HomeView;
