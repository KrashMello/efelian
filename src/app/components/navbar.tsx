"use client";
import Link from "next/link";
import NavBtn from "./NavBtn";
import Image from "next/image";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

const Navbar = () => {
  return (
    <>
      <nav className="w-full h-24 p-4 border-b border-slate-600 justify-between items-center inline-flex">
        <Link href="/" className="h-11 justify-center items-center flex">
          <Image
            width={44}
            height={44}
            src="/logo64x64_light.png"
            alt="Logo krashmello"
          />
        </Link>
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
        <Dropdown className="block md:hidden bg-zinc-700">
          <DropdownTrigger>
            <Button variant="light" className="text-slate-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M3 18v-2h18v2H3Zm0-5v-2h18v2H3Zm0-5V6h18v2H3Z"
                />
              </svg>
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Dynamic Actions" items={items}>
            {(item) => (
              <DropdownItem key={item.key} href={item.to} color="default">
                {item.title}
              </DropdownItem>
            )}
          </DropdownMenu>
        </Dropdown>
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
