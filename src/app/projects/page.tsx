import Article from "../components/article";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: process.env.TITLE_PAGE + "Proyectos",
  description: "Reseña de quien es krashmello",
};
const Page = async () => {
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
    return v.name === "krashmello.github.io" ? false : true;
  });

  return (
    <>
      <section className="w-full h-fit flex py-12 md:py-24  flex-col justify-start items-start gap-6">
        <header className="w-full h-24 md:py-5 px-20 justify-start items-start">
          <h2 className="text-slate-500 text-4xl md:text-6xl font-normal">
            Todos los proyectos
          </h2>
        </header>
        <div className="flex md:py-12 px-20 flex-wrap gap-3.5">
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
                        <span className="font-bold text-slate-300">
                          {repo.language}
                        </span>
                      </div>
                      <span className="text-slate-200 ">
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
                  <span className="font-bold text-slate-300">vue</span>
                </div>
                <span className="text-slate-200">
                  <strong>last Update:</strong>2023-10-11
                </span>
              </div>,
            ]}
          />
        </div>
      </section>
    </>
  );
};
export default Page;
