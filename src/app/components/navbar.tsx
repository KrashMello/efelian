"use client";
import Link from "next/link";
import NavBtn from "./NavBtn";
import Image from "next/image";
import React from "react";
import NavDropdownMenu from "./NavDropdownMenu";
import { useTheme } from "next-themes";
import SwitchTheme from "./SwitchTheme";

const Navbar = () => {
  const { theme } = useTheme();

  return (
    <>
      <nav className="w-full h-24 p-4 border-b border-slate-600 justify-between items-center inline-flex">
        <Link href="/" className="h-11 justify-center items-center flex">
          {theme === "dark" ? (
            <Image
              width={44}
              height={44}
              src="/logo64x64_dark.png"
              alt="Logo krashmello"
            />
          ) : (
            <Image
              width={44}
              height={44}
              src="/logo64x64_light.png"
              alt="Logo krashmello"
            />
          )}
        </Link>
        <div className="flex gap-2">
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
    to: "/",
  },
  {
    key: "AboutMe",
    title: "Sobre mi",
    to: "/aboutMe",
  },
  {
    key: "projects",
    title: "Proyectos",
    to: "/projects",
  },
];

export default Navbar;
