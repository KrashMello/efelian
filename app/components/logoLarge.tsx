import Image from "next/image";

const LogoLarge = () => {
  return (
    <>
      <Image
        className="sm:dark:block md:hidden dark:hidden hidden w-[320] h-[48px]"
        width={320}
        height={48}
        src="/full_logo_dark.png"
        alt="Logo deer krashmello"
      />

      <Image
        className="sm:dark:hidden sm:block hidden dark:hidden w-[320px] h-[48px]"
        width={320}
        height={48}
        src="/full_logo_light.png"
        alt="Logo deer krashmello"
      />

      <Image
        className="dark:block hidden sm:dark:hidden w-[200px] h-[32px]"
        width={200}
        height={32}
        src="/full_logo_dark.png"
        alt="Logo deer krashmello"
      />

      <Image
        className="dark:hidden block sm:hidden w-[200px] h-[32px]"
        width={200}
        height={32}
        src="/full_logo_light.png"
        alt="Logo deer krashmello"
      />
    </>
  );
};

export default LogoLarge;
