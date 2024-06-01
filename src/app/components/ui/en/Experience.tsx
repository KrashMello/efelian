import DescriptionItem from "../../DescriptionItem";

const Experience = () => {
  const experiences = [
    {
      title: (
        <>
          Alcaldía de Iribarren - Lara, Venezuela
          <span className="text-sm text-gray-500 dark:text-gray-300">
            may 2022 - Actuality
          </span>
        </>
      ),
      description: (
        <ul className="list-disc flex flex-col gap-3">
          <li>
            Responsible for the analysis and development of the asset management
            and user responsibility system.
          </li>
          <li>
            Design of the asset management and user responsibility system
            database.
          </li>
          <li>
            Fornt end development of the asset management and user
            responsibility system.
          </li>
          <li>Internship instructor.</li>
        </ul>
      ),
    },
    {
      title: (
        <>
          Kia Motors Ecuador
          <span className="text-sm text-gray-500 dark:text-gray-300">
            jul 2023 - nov 2023
          </span>
        </>
      ),
      description: (
        <ul className="list-disc flex flex-col gap-3">
          <li>
            Desarrollo landing page{" "}
            <a
              className="text-[#5E81AC] dark:text-[#88C0D0] font-semibold hover:underline underline-offset-4"
              href="https://kiateconecta.com/kiaSuscripcion"
            >
              kia te conecta
            </a>
          </li>
          <li>In charge of front end development.</li>
        </ul>
      ),
    },
    {
      title: (
        <>
          Lácteos los Andes C.A - Lara, venezuela
          <span className="text-sm text-gray-500 dark:text-gray-300">
            jul 2019 - feb 2021
          </span>
        </>
      ),
      description: (
        <ul className="list-disc flex flex-col gap-3">
          <li>
            In charge of the analysis and development of the system for
            different procedures of the legal consulting area.
          </li>
          <li>
            Design of the system's database for different procedures of the
            legal consulting area.
          </li>
          <li>
            Development of the fornt end of the system for different procedures
            of the legal consulting area.
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
          Experience{" "}
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
