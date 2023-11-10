"use client";
import Image from "next/image";
import { useTheme } from "next-themes";

const HeroHome = () => {
  const { theme } = useTheme();
  return (
    <>
      <div className="w-full flex justify-center">
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
      </div>
      <div className="w-full flex justify-center">
        {theme === "dark" ? (
          <Image
            width={320}
            height={48}
            src="/full_logo_dark.png"
            alt="Logo deer krashmello"
          />
        ) : (
          <Image
            width={320}
            height={48}
            src="/full_logo_light.png"
            alt="Logo deer krashmello"
          />
        )}
      </div>
    </>
  );
};

export default HeroHome;
