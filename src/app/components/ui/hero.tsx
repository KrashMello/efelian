import LogoLarge from "../logoLarge";
import LogoShortDeer from "../logoShortDeer";

const Hero = ({ data }: any) => {
  return (
    <section
      id="me"
      className="w-full min-h-screen h-fit flex items-center px-10 md:px-20 py-32"
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
            {data.title}
          </h1>
          <p className="self-stretch text-center text-lg md:text-2xl font-normal leading-5 md:leading-10">
            {data.description}
          </p>
        </div>
      </div>
    </section>
  );
};
export default Hero;
