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
          </h1>
          <p className="self-stretch  text-lg md:text-2xl text-pretty font-normal leading-5 md:leading-10">
            Una persona apasionada por el desarrollo web, y que busca siempre
            dar lo mejor, me gusta ayudar en el crecimiento de las demás
            personas sobre el ámbito tecnológico repartiendo mi conocimiento a
            ellas, en mis ratos libres veo videos, escuchar musica y busco
            información sobre las nuevas tecnologías y avances tecnológicos.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Hero;
