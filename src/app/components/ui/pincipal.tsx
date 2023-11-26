import LogoLarge from "../logoLarge";
import LogoShortDeer from "../logoShortDeer";

const Principal = () => {
  return (
    <section
      id="me"
      className="snap-start max-w-[1920px] w-full h-screen flex items-center  px-20 py-12"
    >
      <div className="w-full flex flex-col gap-6 md:gap-11">
        <div className="w-full flex justify-center">
          <LogoShortDeer />
        </div>
        <div className="w-full flex justify-center">
          <LogoLarge />
        </div>
        <div className="w-full flex-col text-slate-600 dark:text-gray-100 justify-start items-center gap-6 flex">
          <h1 className="text-center  text-4xl md:text-7xl font-medium">
            !Hola mundo! yo soy Joel
            <br />
            un desarollador
          </h1>
          <p className="self-stretch text-center text-lg md:text-4xl font-normal leading-5 md:leading-10">
            Me encanta trabajar en equipo, jugar en mis tiempos libres y
            compartir mi conocimiento con los demas.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Principal;
