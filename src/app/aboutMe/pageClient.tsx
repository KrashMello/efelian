"use client"
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import Nuxt from "../components/svg/nuxt";
import NextJs from "../components/svg/nextjs";
import Laravel from "../components/svg/laravel";
import PostgreSQL from "../components/svg/PostgreSQL";
import MariaDB from "../components/svg/MariaDB";
import Inkscape from "../components/svg/Inkscape.tsx";
import MongoDB from "../components/svg/MongoDB";
export default function PageClient() {
  let tabs = [
    {
      id: "skills",
      label: "Habilidades",
      content: (
        <>
          <ul className=" w-full flex justify-center flex-col gap-3">
            <li className="flex items-center w-full justify-center gap-2.5">
              Desarrollo de aplicativos web front end con (
              <span>Nuxtjs</span> <Nuxt className="w-3 h-3" />
              <span>Nextjs</span> <NextJs className="w-3 h-3" />
              <span>Laravel</span> <Laravel className="w-3 h-3" />)
            </li>
            <li className="flex items-center w-full justify-center gap-2.5">
              Desarrollador back end TypeScript framework ( elumian,<span>Laravel</span> <Laravel className="w-3 h-3" />)
            </li>
            <li className="flex items-center w-full justify-center gap-2.5">
              Manejo de base de datos ( PostgresSQL <PostgreSQL className="w-3 h-3" /> MariaDB <MariaDB className="w-3 h-3" /> MongoDB <MongoDB className="w-3 h-3" /> )
            </li>
            <li className="flex items-center w-full justify-center gap-2.5">
              Diseños de vectorizado con inkscape <Inkscape className="w-3 h-3" />
            </li>
          </ul>
        </>
      )
    },
    {
      id: "experiens",
      label: "Experiencia",
      content: (
        <>
          <ul className=" w-full flex justify-center flex-col gap-3">
            <li className="flex items-center w-full justify-center">
              Desarrollo front end - 3 años
            </li>
            <li className="flex items-center w-full justify-center">
              Desarrollador back end - 3 años
            </li>
            <li className="flex items-center w-full justify-center">
              Base de datos - 3 años
            </li>
            <li className="flex items-center w-full justify-center">
              Diseño vectorial - 1 años
            </li>
          </ul>
        </>
      )
    },
    // {
    //   id: "study",
    //   label: "Estudio",
    //   content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    // }
  ];
  return (
    <>
      <section>
        <header className="w-full h-fit px-20 py-5">
          <h1 className="w-3/4 text-slate-600 text-9xl font-bold">Mi nombre es joel</h1>
        </header>
        <div className="w-full h-fit px-20 py-9">
          <p className="text-slate-600 text-4xl font-normal leading-9 tracking-wide w-1/2">
            Soy un ingeniero de sistemas oriundo de Venezuela.
            <br />
            <br />
            Me considero bueno en mi trabajo y siempre trato de dar lo mejor de mi.
            <br />
            <br />
            Mi objetvo es crecer profecionalmente y crear herramientas que faciliten y automaticen las funcionalidades de las personas en el campo laboral.
          </p>
        </div>
      </section>
      <section className="bg-[#D8DEE9] py-12 px-12">
        <Tabs variant="underlined" aria-label="Dynamic tabs" items={tabs}>
          {(item) => (
            <Tab key={item.id} title={item.label}>
              <Card className="bg-slate-600">
                <CardBody className="w-full text-white">
                  {item.content}
                </CardBody>
              </Card>
            </Tab>
          )}
        </Tabs>
      </section>
    </>
  )


}
