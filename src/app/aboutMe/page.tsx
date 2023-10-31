'use client';

import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import Nuxt from "../components/svg/nuxt";
import NextJs from "../components/svg/nextjs";
import Laravel from "../components/svg/laravel";
const Page = () => {
  let tabs = [
    {
      id: "skills",
      label: "Habilidades",
      content: (
        <>
          <table className=" w-full h-fit flex flex-wrap justify-center">
            <tbody className="w-1/2 min-h-unit-24">
              <tr className="flex gap-2.5 items-center">
                <td>
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="42" height="33" viewBox="0 0 42 33" fill="none">
                    <path d="M41.2532 28.7083L29.2324 7.29167C29.0241 7.125 28.3991 5.9375 27.1491 5.9375C26.6282 5.9375 25.8991 6.14583 25.1491 7.29167L23.6074 9.75L19.3991 2.22917C19.2949 2.02083 18.5657 0.875 17.3157 0.875C16.7949 0.875 15.9616 1.08333 15.3366 2.22917L0.378238 28.6042C0.274071 28.8125 -0.350929 30.0417 0.274071 31.0833C0.482404 31.6042 1.1074 32.125 2.4824 32.125H39.2741C39.4824 32.125 40.8366 32.125 41.4616 31.0833C41.6699 30.5833 41.8782 29.75 41.2532 28.7083ZM12.7116 28.6042L12.3991 29.75H2.58657L17.4199 3.66667L22.2116 12.2708L12.7116 28.6042ZM15.0241 29.75L23.5866 14.75L32.2949 29.75H15.0241ZM34.8782 29.75L34.4616 28.6042L25.0032 12.25L27.1491 8.64583L39.0657 29.75H34.8782Z" fill="#48D23C" />
                  </svg>
                </td>
                <td >
                  desarrollo de aplicativos web front end con
                </td>
                <td className="flex items-center gap-2">
                  <span>Nuxtjs</span> <Nuxt className="w-3 h-3" />
                </td>
                <td className="flex items-center gap-2">
                  <span>Nextjs</span> <NextJs className="w-3 h-3" />
                </td>
                <td className="flex items-center gap-2">
                  <span>Laravel</span> <Laravel className="w-3 h-3" />
                </td>
              </tr>
              <tr className="flex gap-2.5 items-center">
                <td>
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="42" height="33" viewBox="0 0 42 33" fill="none">
                    <path d="M41.2532 28.7083L29.2324 7.29167C29.0241 7.125 28.3991 5.9375 27.1491 5.9375C26.6282 5.9375 25.8991 6.14583 25.1491 7.29167L23.6074 9.75L19.3991 2.22917C19.2949 2.02083 18.5657 0.875 17.3157 0.875C16.7949 0.875 15.9616 1.08333 15.3366 2.22917L0.378238 28.6042C0.274071 28.8125 -0.350929 30.0417 0.274071 31.0833C0.482404 31.6042 1.1074 32.125 2.4824 32.125H39.2741C39.4824 32.125 40.8366 32.125 41.4616 31.0833C41.6699 30.5833 41.8782 29.75 41.2532 28.7083ZM12.7116 28.6042L12.3991 29.75H2.58657L17.4199 3.66667L22.2116 12.2708L12.7116 28.6042ZM15.0241 29.75L23.5866 14.75L32.2949 29.75H15.0241ZM34.8782 29.75L34.4616 28.6042L25.0032 12.25L27.1491 8.64583L39.0657 29.75H34.8782Z" fill="#48D23C" />
                  </svg>
                </td>
                <td>
                  desarrollador back end TypeScript framework (elumian,laravel)
                </td>
              </tr>
              <tr className="flex gap-2.5 items-center">
                <td>
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="42" height="33" viewBox="0 0 42 33" fill="none">
                    <path d="M41.2532 28.7083L29.2324 7.29167C29.0241 7.125 28.3991 5.9375 27.1491 5.9375C26.6282 5.9375 25.8991 6.14583 25.1491 7.29167L23.6074 9.75L19.3991 2.22917C19.2949 2.02083 18.5657 0.875 17.3157 0.875C16.7949 0.875 15.9616 1.08333 15.3366 2.22917L0.378238 28.6042C0.274071 28.8125 -0.350929 30.0417 0.274071 31.0833C0.482404 31.6042 1.1074 32.125 2.4824 32.125H39.2741C39.4824 32.125 40.8366 32.125 41.4616 31.0833C41.6699 30.5833 41.8782 29.75 41.2532 28.7083ZM12.7116 28.6042L12.3991 29.75H2.58657L17.4199 3.66667L22.2116 12.2708L12.7116 28.6042ZM15.0241 29.75L23.5866 14.75L32.2949 29.75H15.0241ZM34.8782 29.75L34.4616 28.6042L25.0032 12.25L27.1491 8.64583L39.0657 29.75H34.8782Z" fill="#48D23C" />
                  </svg>
                </td>
                <td>
                  diseños de vectorizado con inkscape
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )
    },
    {
      id: "experiens",
      label: "Experiencia",
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      id: "study",
      label: "Estudio",
      content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ];
  return (
    <>
      <section>
        <header className="w-full h-fit px-20 py-5">
          <h1 className="w-1/2 text-slate-600 text-9xl font-bold">Mi nombre es joel</h1>
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
export default Page
