import LogoLarge from "../logoLarge";
import LogoShortDeer from "../logoShortDeer";

const Hero = () => {
  return (
    <section
      id="me"
      className="snap-start  w-full min-h-screen h-fit flex items-center px-10 md:px-20 py-32"
    >
      <div className="w-full max-w-[1920px] mx-auto flex flex-col gap-6 md:gap-11">
        <div className="w-full flex justify-center">
          <LogoShortDeer />
        </div>
        <div className="w-full flex justify-center">
          <LogoLarge />
        </div>
        <div className="w-full flex-col text-slate-600 dark:text-gray-100 justify-start items-center gap-6 flex">
          <h1 className="text-center text-4xl md:text-7xl font-medium">
            ¡Hola mundo! yo soy Joel
            <br />
            un desarollador
          </h1>
          <p className="self-stretch  text-lg md:text-2xl text-pretty font-normal leading-5 md:leading-10">
            Generalista en el área de desarrollo web con más de 4 años de
            experiencia en el área. Tengo un historial comprobado del uso de mis
            destacadas habilidades personales, de comunicación y organización
            para dirigir y mejorar los departamentos de Desarrollo web.
            Trabajador en equipo con excelentes habilidades de comunicación,
            alta calidad de trabajo, determinado y actualmente automotivado.
            Poseo sólidas habilidades para el desempeñar mi trabajo, y soy capaz
            de trabajar de forma independiente.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Hero;
