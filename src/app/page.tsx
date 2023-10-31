import Image from 'next/image'
import Article from './components/article'
import EflTag from './components/EflTag'

const Home = async () => {
  let repoData: any = []
  await fetch('https://api.github.com/users/krashmello/repos', { cache: 'force-cache' }).then(response => {
    return response.json()
  }).then(result => {
    repoData = result
  })
  return (
    <>
      <section className="w-full h-fit flex flex-col gap-11 px-20 py-12">
        <div className="w-full flex justify-center">
          <Image width={160} height={160} src="/logoDeer_light.webp" alt="Logo deer krashmello" />
        </div>
        <div className="w-full flex justify-center">
          <Image width={320} height={48} src="/full_logo_light.png" alt="Logo deer krashmello" />
        </div>
        <div className="w-full flex-col justify-start items-center gap-6 flex">
          <h1 className="text-center text-slate-600 text-7xl font-medium" style={{
            background: "linear-gradient(180deg, #4C566A 63.02%, #B8B9BA 95.83%)",
            backgroundClip: "Text",
            WebkitBackgroundClip: "Text",
            WebkitTextFillColor: "transparent"
          }}>
            Hola mundo yo soy joel<br />un Desarollador
          </h1>
          <p className="self-stretch text-center text-slate-600 text-4xl font-normal leading-10">
            Me encanta desarrollar aplicaciones, trabajar en equipo y escuchar musica.
          </p>
        </div>
      </section>

      <section className="w-full h-fit flex px-20 py-24 bg-[#D8DEE9] flex-col justify-start items-start gap-6">
        <header className="w-full h-24 py-2 justify-start items-start gap-1">
          <h2 className="text-slate-500 text-6xl font-normal">Últimos proyectos</h2>
        </header>
        <div className='flex flex-wrap gap-3.5'>
          {
            repoData.map((repo: any) => {
              return (
                <>
                  <Article
                    key={repo.id}
                    title={repo.name}
                    href={repo.html_url}
                    description=""
                    footer={[
                      // <EflTag title="HTML" key={crypto.randomUUID()} />,
                      <div className="flex text-black items-center gap-2.5 text-xs" key={crypto.randomUUID()}>
                        <span className={`${repo.language == "TypeScript" ? 'bg-blue-700' :
                          repo.language === 'Vue' ? 'bg-green-500' :
                            repo.language === 'HTML' ? 'bg-orange-500' :
                              'bg-yellow-400'} flex w-3 h-3 rounded-full`}></span>
                        <span className="font-bold">{repo.language}</span>
                        <span><strong>last Update:</strong> {repo.updated_at}</span>
                      </div>
                    ]
                    }
                  />
                </>
              )
            })
          }
        </div>
      </section>
    </>
  )
}
export default Home;
