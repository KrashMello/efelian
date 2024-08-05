import Link from "next/link";
import Image from "next/image";
import React from "react";
import NavDropdownMenu from "../../NavDropdownMenu";
import SwitchTheme from "../../SwitchTheme";
import NavBtn from "./NavBtn";
import SelectLanguage from "../../SelectLanguage";

const Navbar = () => {
  return (
    <>
      <nav className=" bg-opacity-50 backdrop-filter backdrop-blur-lg fixed inline-flex z-10 w-full h-24 p-4 ">
        <div className="max-w-[80%] mx-auto flex justify-between items-center w-full">
          <Link
            href="/"
            aria-label="menu"
            scroll={false}
            className="h-11 justify-center items-center flex"
          >
            <Image
              className="dark:block hidden"
              width={44}
              height={44}
              src="/logo64x64_dark.png"
              alt="Logo deer krashmello"
            />

            <Image
              className="dark:hidden block"
              width={44}
              height={44}
              src="/logo64x64_light.png"
              alt="Logo deer krashmello"
            />
          </Link>
          <div className="flex gap-2 text-zinc-600 dark:text-white ">
            <SwitchTheme />
            <ul className="hidden px-7 justify-center items-center gap-6 md:flex">
              {items.map((item) => {
                return (
                  <NavBtn
                    key={crypto.randomUUID()}
                    to={item.to}
                    title={item.title}
                  />
                );
              })}
              <li>
                <SelectLanguage />
              </li>
            </ul>
            <div className="block md:hidden">
              <NavDropdownMenu items={items} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

const items = [
  {
    key: "Inicio",
    title: "Inicio",
    to: "/#me",
  },
  {
    key: "Experience",
    title: "Experiencia",
    to: "/#experience",
  },
  {
    key: "projects",
    title: "Proyectos",
    to: "/#projects",
  },
];

export default Navbar;
