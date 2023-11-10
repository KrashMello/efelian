"use client";
import { useTheme } from "next-themes";

const TitleHome = () => {
  const { theme } = useTheme();
  return theme === "dark" ? (
    <h1
      className="text-center text-slate-600 dark:text-gray-100 text-4xl md:text-7xl font-medium"
      style={{
        background: "linear-gradient(180deg, #ECEFF4 63.02%, #4C566A 95.83%)",
        backgroundClip: "Text",
        WebkitBackgroundClip: "Text",
        WebkitTextFillColor: "transparent",
      }}
    >
      !Hola mundo! yo soy Joel
      <br />
      un desarollador
    </h1>
  ) : (
    <h1
      className="text-center text-slate-600 dark:text-gray-100 text-4xl md:text-7xl font-medium"
      style={{
        background: "linear-gradient(180deg, #4C566A 63.02%, #B8B9BA 95.83%)",
        backgroundClip: "Text",
        WebkitBackgroundClip: "Text",
        WebkitTextFillColor: "transparent",
      }}
    >
      !Hola mundo! yo soy Joel
      <br />
      un desarollador
    </h1>
  );
};
export default TitleHome;
