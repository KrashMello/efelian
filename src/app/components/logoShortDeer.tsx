"use client";
import Image from "next/image";
import { useTheme } from "next-themes";

const LogoShortDeer = () => {
  const { theme } = useTheme();
  return (
    <>
      {theme === "dark" ? (
        <Image
          width={160}
          height={160}
          src="/logoDeer_dark.webp"
          alt="Logo deer krashmello"
        />
      ) : (
        <Image
          width={160}
          height={160}
          src="/logoDeer_light.webp"
          alt="Logo deer krashmello"
        />
      )}
    </>
  );
};

export default LogoShortDeer;
