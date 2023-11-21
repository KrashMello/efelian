"use client";
import Image from "next/image";
import { useTheme } from "next-themes";

const LogoLarge = () => {
  const { theme } = useTheme();
  return (
    <>
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
    </>
  );
};

export default LogoLarge;
