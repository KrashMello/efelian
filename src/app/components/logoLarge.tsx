import Image from "next/image";

const LogoLarge = () => {
  return (
    <>
      <Image
        className="dark:block hidden"
        width={320}
        height={48}
        src="/full_logo_dark.png"
        alt="Logo deer krashmello"
      />

      <Image
        className="dark:hidden block"
        width={320}
        height={48}
        src="/full_logo_light.png"
        alt="Logo deer krashmello"
      />
    </>
  );
};

export default LogoLarge;
