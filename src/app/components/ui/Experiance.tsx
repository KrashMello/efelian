import DescriptionItem from "../DescriptionItem";

const Experience = () => {
  const experiences = [
    {
      title: (
        <>
          Lácteos los Andes C.A
          <span className="text-sm text-gray-400">jul 2019 - feb 2021</span>
        </>
      ),
      description: (
        <ul className="list-disc flex flex-col gap-3">
          <li>Desarrollo sistema integral multi modular</li>
          <li>
            Diseño de interfaz y base de datos del sistema de SIELLA usando las
            siguientes tegnologías (Vue, postgreSQL, Laravel)
          </li>
          <li>Desarrollo del sistema multi modular SIELLA</li>
          <li>Integración de sistema multi modular</li>
        </ul>
      ),
    },
    {
      title: (
        <>
          Alcaldía de Iribarren
          <span className="text-sm text-gray-400">may 2022 - Actualidad</span>
        </>
      ),
      description: (
        <ul className="list-disc flex flex-col gap-3">
          <li>Desarrollo sistema integral multi modular</li>
          <li>Diseño de interfaz y base de datos del sistema de bienes</li>
          <li>
            Desarrollo del sistema de bienes usando las siguientes tegnologías
            (postgreSQL, nuxtJS)
          </li>
          <li>Integración de sistema multi modular</li>
        </ul>
      ),
    },
    {
      title: (
        <>
          Kia Motors Ecuador
          <span className="text-sm text-gray-400">jul 2023 - Actualidad</span>
        </>
      ),
      description: (
        <ul className="list-disc flex flex-col gap-3">
          <li>
            Desarrollo web landing page{" "}
            <a
              className="text-[#5E81AC] dark:text-[#88C0D0] hover:underline underline-offset-4"
              href="https://kiateconecta.com/kiaSuscripcion"
            >
              kia te conecta
            </a>
          </li>
        </ul>
      ),
    },
  ];
  return (
    <section
      id="experience"
      className="snap-start w-full min-h-screen h-fit flex px-10 md:px-20 py-32 dark:bg-gray-700 bg-[#D8DEE9] flex-col justify-start items-start gap-6"
    >
      <header className="max-w-[1920px] mx-auto w-full h-12 md:h-24 md:py-2 justify-start items-start gap-1">
        <h2 className=" flex items-center gap-4 text-[#5E81AC] dark:text-[#88C0D0] text-3xl md:text-6xl font-normal">
          Experiencia{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M3 20V7h6V4h6v3h6v13H3Zm7-13h4V5h-4v2Z"
              />
            </svg>
          </span>
        </h2>
      </header>
      <div className="w-full mx-auto max-w-[1920px]">
        <dl className="text-slate-500 dark:text-white flex flex-wrap gap-12 justify-center w-full">
          {experiences.map((item) => {
            return (
              <DescriptionItem
                key={crypto.randomUUID()}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </dl>
      </div>
    </section>
  );
};
export default Experience;
