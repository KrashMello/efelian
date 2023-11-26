import Link from "next/link";
import Image from "next/image";
import React from "react";
import NavDropdownMenu from "../../NavDropdownMenu";
import SwitchTheme from "../../SwitchTheme";
import NavBtn from "./NavBtn";

const Navbar = () => {
  return (
    <>
      <nav className="bg-slate-200 dark:bg-slate-800 fixed inline-flex z-10 w-full h-24 p-4 border-b border-slate-600 justify-between items-center">
        <Link
          href="/"
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
          </ul>
          <div className="block md:hidden">
            <NavDropdownMenu items={items} />
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
