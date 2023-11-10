import Image from "next/image";
import Article from "./components/article";
// import EflTag from './components/EflTag'
import type { Metadata } from "next";
import HeroHome from "./components/imagesLogoHome";
import TitleHome from "./components/TitleHome";

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
      <section className="w-full h-fit flex flex-col gap-6 md:gap-11 px-20 py-12">
        <HeroHome />
        <div className="w-full flex-col justify-start items-center gap-6 flex">
          <TitleHome />
          <p className="self-stretch text-center dark:text-gray-100 text-slate-600 text-lg md:text-4xl font-normal leading-5 md:leading-10">
            Me encanta desarrollar aplicaciones, trabajar en equipo, jugar en
            mis tiempos libres y compartir mi conocimiento con los demas.
          </p>
        </div>
      </section>

      <section className="w-full h-fit flex px-20 py-12 md:py-24 dark:bg-gray-700 bg-[#D8DEE9] flex-col justify-start items-start gap-6">
        <header className="w-full h-12 md:h-24 md:py-2 justify-start items-start gap-1">
          <h2 className="text-slate-500 dark:text-gray-100 text-3xl md:text-6xl font-normal">
            Últimos proyectos
          </h2>
        </header>
        <div className="flex flex-wrap gap-3.5">
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
