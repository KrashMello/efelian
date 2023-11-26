import Footer from "./layout/Footer";
import Article from "../article";
import ProjectRoad from "../svg/ProjectRoad";

const Projects = async () => {
  let repoData: any = [];
  let allRepoData: any = [];
  await fetch("https://api.github.com/users/krashmello/repos", {
    cache: "force-cache",
  })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      repoData = result;
    });
  allRepoData = repoData;
  repoData = repoData.filter((v: any) => {
    return v.name === "dotfile" ||
      v.name === "MAPANI-front" ||
      v.name === "MAPANI_back" ||
      v.name === "krashmello.github.io"
      ? false
      : true;
  });
  allRepoData = allRepoData.filter((v: any) => {
    return v.name === "krashmello.github.io" ? false : true;
  });

  return (
    <section
      id="projects"
      className="snap-start w-full min-h-screen h-fit flex px-10 md:px-20 pt-32 md:pt-32  flex-col justify-center md:justify-start items-start gap-6"
    >
      <header className="w-full h-12 md:h-24 md:py-2 justify-start items-start gap-1">
        <h2 className=" flex items-center gap-4 text-slate-600 dark:text-gray-100 text-3xl md:text-6xl font-normal">
          Últimos proyectos{" "}
          <span>
            <ProjectRoad />
          </span>
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
      <div className="w-full h-12 md:h-24 md:py-2 justify-start items-start gap-1">
        <h2 className=" flex items-center gap-4 text-slate-600 dark:text-gray-100 text-3xl md:text-6xl font-normal">
          Todos los proyectos{" "}
          <span>
            <ProjectRoad />
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap gap-5">
        {allRepoData.map((repo: any) => {
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
        <Article
          title="Kia Landing"
          href="https://kiateconecta.com/kiaSuscripcion"
          description="Landing de suscripcion kia motors ecuador"
          footer={[
            // <EflTag title="HTML" key={crypto.randomUUID()} />,
            <div
              className="w-full flex text-slate-200 items-center justify-between gap-2.5 text-xs"
              key={crypto.randomUUID()}
            >
              <div className="flex gap-2.5">
                <span
                  className={`bg-green-500 flex w-3 h-3 rounded-full`}
                ></span>
                <span className="font-bold text-zinc-600 dark:text-gray-100">
                  vue
                </span>
              </div>
              <span className="text-zinc-600 dark:text-gray-100">
                <strong>last Update:</strong>2023-10-11
              </span>
            </div>,
          ]}
        />
        <Footer />
      </div>
    </section>
  );
};
export default Projects;
