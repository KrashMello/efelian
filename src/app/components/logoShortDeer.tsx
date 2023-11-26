import Image from "next/image";

const LogoShortDeer = () => {
  return (
    <>
      <Image
        className="dark:block hidden"
        width={320}
        height={48}
        src="/logoDeer_dark.webp"
        alt="Logo deer krashmello"
      />

      <Image
        className="dark:hidden block"
        width={320}
        height={48}
        src="/logoDeer_light.webp"
        alt="Logo deer krashmello"
      />
    </>
  );
};

export default LogoShortDeer;
