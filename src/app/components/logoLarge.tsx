import Image from "next/image";

const LogoLarge = () => {
  return (
    <>
      <Image
        className="sm:dark:block md:hidden dark:hidden hidden"
        width={320}
        height={48}
        src="/full_logo_dark.png"
        alt="Logo deer krashmello"
      />

      <Image
        className="sm:dark:hidden sm:block hidden dark:hidden"
        width={320}
        height={48}
        src="/full_logo_light.png"
        alt="Logo deer krashmello"
      />

      <Image
        className="dark:block hidden sm:dark:hidden"
        width={200}
        height={32}
        src="/full_logo_dark.png"
        alt="Logo deer krashmello"
      />

      <Image
        className="dark:hidden block sm:hidden"
        width={200}
        height={32}
        src="/full_logo_light.png"
        alt="Logo deer krashmello"
      />
    </>
  );
};

export default LogoLarge;
