import Article from "./components/article";
import type { Metadata } from "next";
import LogoShortDeer from "./components/logoShortDeer";
import LogoLarge from "./components/logoLarge";

export const metadata: Metadata = {
  title: process.env.TITLE_PAGE + "Inicio",
  description: "Breve reseña de quien es KrashMello y lo que hace.",
};

const Home = async () => {
  let repoData: any = [];
  await fetch("https://api.github.com/users/krashmello/repos", {
    cache: "force-cache",
  })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      repoData = result;
    });
  repoData = repoData.filter((v: any) => {
    return v.name === "dotfile" ||
      v.name === "MAPANI-front" ||
      v.name === "MAPANI_back" ||
      v.name === "krashmello.github.io"
      ? false
      : true;
  });
  return (
    <>
      <section
        id="me"
        className="snap-center w-full h-screen flex items-center  px-20 py-12"
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
              Me encanta desarrollar aplicaciones, trabajar en equipo, jugar en
              mis tiempos libres y compartir mi conocimiento con los demas.
            </p>
          </div>
        </div>
      </section>
      <section
        id="exerience"
        className="snap-center w-full h-screen flex px-20 py-12 md:py-24 dark:bg-gray-700 bg-[#D8DEE9] flex-col justify-start items-start gap-6"
      >
        <header className="w-full h-12 md:h-24 md:py-2 justify-start items-start gap-1">
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
        <div className="w-full">
          <dl className="text-slate-500 dark:text-white flex flex-wrap gap-12 justify-center w-full">
            <div className="w-[40%]">
              <dt className="py-5 text-xl flex flex-col font-semibold border-b border-b-gray-400">
                Lacteos los Andes C.A
                <span className="text-sm text-gray-400">
                  ene 2002 - ene 2008
                </span>
              </dt>
              <dd className="py-3 pl-12">
                <ul className="list-disc flex flex-col gap-3">
                  <li>Limpieza de baños activista progresivo bien cacheroso</li>
                  <li>Administracion de archivos archivosos</li>
                  <li>
                    Creacion de sistema administrativo para la lectura de
                    archivos y almacenamiento de datos judiciales
                  </li>
                  <li>Administracion de servidores</li>
                </ul>
              </dd>
            </div>
            <div className="w-[40%]">
              <dt className="py-5 text-xl flex flex-col font-semibold border-b border-b-gray-400">
                Lacteos los Andes C.A
                <span className="text-sm text-gray-400">
                  ene 2002 - ene 2008
                </span>
              </dt>
              <dd className="py-3 pl-12">
                <ul className="list-disc flex flex-col gap-3">
                  <li>Limpieza de baños activista progresivo bien cacheroso</li>
                  <li>Administracion de archivos archivosos</li>
                  <li>
                    Creacion de sistema administrativo para la lectura de
                    archivos y almacenamiento de datos judiciales
                  </li>
                  <li>Administracion de servidores</li>
                </ul>
              </dd>
            </div>
            <div className="w-[40%]">
              <dt className="py-5 text-xl flex flex-col font-semibold border-b border-b-gray-400">
                Alcaldia de Iribarren
                <span className="text-sm text-gray-400">
                  ene 2008 - ene 2012
                </span>
              </dt>
              <dd className="py-3 pl-12">
                <ul className="list-disc flex flex-col gap-3">
                  <li>algodon que anexar aqui</li>
                  <li>Administracion de archivos archivosos</li>
                  <li>
                    Creacion de sistema administrativo para la gestion de bienes
                    y responsabilidad de uso de bienes
                  </li>
                  <li>Administracion de servidores</li>
                </ul>
              </dd>
            </div>
            <div className="w-[40%]">
              <dt className="py-5 text-xl flex flex-col font-semibold border-b border-b-gray-400">
                kia Motors Ecuador
                <span className="text-sm text-gray-400">
                  ene 2013 - ene 2013
                </span>
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

      <section className="snap-center w-full h-screen flex px-20 py-12 md:py-24 flex-col justify-start items-start gap-6">
        <header className="w-full h-12 md:h-24 md:py-2 justify-start items-start gap-1">
          <h2 className="text-slate-600 dark:text-gray-100 text-3xl md:text-6xl font-normal">
            Últimos proyectos
          </h2>
        </header>
        <div className="flex flex-wrap gap-5">
          {repoData.map((repo: any) => {
            return (
              <>
                <Article
                  key={repo.id}
                  title={repo.name}
                  href={repo.homepage != null ? repo.homepage : repo.html_url}
                  description={repo.description}
                  footer={[
                    // <EflTag title="HTML" key={crypto.randomUUID()} />,
                    <div
                      className="w-full flex text-slate-200 items-center justify-between gap-2.5 text-xs"
                      key={crypto.randomUUID()}
                    >
                      <div className="flex gap-2.5">
                        <span
                          className={`${
                            repo.language == "TypeScript"
                              ? "bg-blue-700"
                              : repo.language === "Vue"
                              ? "bg-green-500"
                              : repo.language === "HTML"
                              ? "bg-orange-500"
                              : "bg-yellow-400"
                          } flex w-3 h-3 rounded-full`}
                        ></span>
                        <span className="font-bold text-zinc-600 dark:text-gray-100">
                          {repo.language}
                        </span>
                      </div>
                      <span className="text-zinc-600 dark:text-gray-100">
                        <strong>last Update:</strong>{" "}
                        {repo.updated_at.replace(
                          /(T[0-9]{2}:[0-9]{2}:[0-9]{2}Z)/g,
                          "",
                        )}
                      </span>
                    </div>,
                  ]}
                />
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Home;
