const Experience = () => {
  return (
    <section
      id="experience"
      className="snap-start w-full min-h-screen h-fit flex px-20 py-32 dark:bg-gray-700 bg-[#D8DEE9] flex-col justify-start items-start gap-6"
    >
      <header className="max-w-[1920px] w-full h-12 md:h-24 md:py-2 justify-start items-start gap-1">
        <h2 className=" flex items-center gap-4 text-slate-600 dark:text-gray-100 text-3xl md:text-6xl font-normal">
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
      <div className="w-full max-w-[1920px]">
        <dl className="text-slate-500 dark:text-white flex flex-wrap gap-12 justify-center w-full">
          <div className="w-full md:w-[40%]">
            <dt className="py-5 text-xl flex flex-col font-semibold border-b border-b-gray-400">
              Lacteos los Andes C.A
              <span className="text-sm text-gray-400">ene 2002 - ene 2008</span>
            </dt>
            <dd className="py-3 pl-12">
              <ul className="list-disc flex flex-col gap-3">
                <li>Limpieza de baños activista progresivo bien cacheroso</li>
                <li>Administracion de archivos archivosos</li>
                <li>
                  Creacion de sistema administrativo para la lectura de archivos
                  y almacenamiento de datos judiciales
                </li>
                <li>Administracion de servidores</li>
              </ul>
            </dd>
          </div>
          <div className="w-full md:w-[40%]">
            <dt className="py-5 text-xl flex flex-col font-semibold border-b border-b-gray-400">
              Lacteos los Andes C.A
              <span className="text-sm text-gray-400">ene 2002 - ene 2008</span>
            </dt>
            <dd className="py-3 pl-12">
              <ul className="list-disc flex flex-col gap-3">
                <li>Limpieza de baños activista progresivo bien cacheroso</li>
                <li>Administracion de archivos archivosos</li>
                <li>
                  Creacion de sistema administrativo para la lectura de archivos
                  y almacenamiento de datos judiciales
                </li>
                <li>Administracion de servidores</li>
              </ul>
            </dd>
          </div>
          <div className="w-full md:w-[40%]">
            <dt className="py-5 text-xl flex flex-col font-semibold border-b border-b-gray-400">
              Alcaldia de Iribarren
              <span className="text-sm text-gray-400">ene 2008 - ene 2012</span>
            </dt>
            <dd className="py-3 pl-12">
              <ul className="list-disc flex flex-col gap-3">
                <li>algodon que anexar aqui</li>
                <li>Administracion de archivos archivosos</li>
                <li>
                  Creacion de sistema administrativo para la gestion de bienes y
                  responsabilidad de uso de bienes
                </li>
                <li>Administracion de servidores</li>
              </ul>
            </dd>
          </div>
          <div className="w-full md:w-[40%]">
            <dt className="py-5 text-xl flex flex-col font-semibold border-b border-b-gray-400">
              kia Motors Ecuador
              <span className="text-sm text-gray-400">ene 2013 - ene 2013</span>
            </dt>
            <dd className="py-3 pl-12">
              <ul className="list-disc flex flex-col gap-3">
                <li>diseño web landing page kia te conecta</li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};
export default Experience;
