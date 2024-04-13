import Image from "next/image";

const LogoShortDeer = () => {
  return (
    <>
      <Image
        className="sm:dark:block md:hidden hidden dark:hidden w-[320px] h-[356px]"
        width={320}
        height={48}
        src="/logoDeer_dark.webp"
        alt="Logo deer krashmello"
      />

      <Image
        className="sm:dark:hidden sm:block hidden dark:hidden w-[320px] h-[356px]"
        width={320}
        height={48}
        src="/logoDeer_light.webp"
        alt="Logo deer krashmello"
      />
      <Image
        className="dark:block hidden sm:dark:hidden sm:hidden w-[200px] h-[200px]"
        width={200}
        height={48}
        src="/logoDeer_dark.webp"
        alt="Logo deer krashmello"
      />

      <Image
        className="dark:hidden block sm:dark:hidden sm:hidden w-[200px] h-[200px]"
        width={200}
        height={48}
        src="/logoDeer_light.webp"
        alt="Logo deer krashmello"
      />
    </>
  );
};

export default LogoShortDeer;
