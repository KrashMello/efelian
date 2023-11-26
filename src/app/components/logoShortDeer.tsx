import Image from "next/image";

const LogoShortDeer = () => {
  return (
    <>
      <Image
        className="sm:dark:block md:hidden hidden dark:hidden"
        width={320}
        height={48}
        src="/logoDeer_dark.webp"
        alt="Logo deer krashmello"
      />

      <Image
        className="sm:dark:hidden sm:block hidden dark:hidden"
        width={320}
        height={48}
        src="/logoDeer_light.webp"
        alt="Logo deer krashmello"
      />
      <Image
        className="dark:block hidden sm:dark:hidden sm:hidden"
        width={200}
        height={48}
        src="/logoDeer_dark.webp"
        alt="Logo deer krashmello"
      />

      <Image
        className="dark:hidden block sm:dark:hidden sm:hidden"
        width={200}
        height={48}
        src="/logoDeer_light.webp"
        alt="Logo deer krashmello"
      />
    </>
  );
};

export default LogoShortDeer;
