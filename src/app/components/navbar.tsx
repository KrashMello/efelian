import Link from 'next/link';
import NavBtn from './NavBtn';
import Image from 'next/image';

const Navbar = () => {
  return (
    <>
      <nav className="w-full h-24 p-4 border-b border-slate-600 justify-between items-center inline-flex">
        <Link href="/" className="h-11 justify-center items-center flex">
          <Image width={44} height={44} src="/logo64x64_light.png" alt="Logo krashmello" />
        </Link>
        <ul className="px-7 justify-center items-center gap-6 flex">
          {
            menu.map(item => {
              return <NavBtn key={crypto.randomUUID()} to={item.to} title={item.title} />
            })
          }
        </ul>
      </nav>
    </>
  )
}

const menu = [
  {
    title: "Inicio",
    to: "/",
  },
  {
    title: "Sobre mi",
    to: "/aboutMe",
  },
  {
    title: "Proyectos",
    to: "/projects",
  },
  {
    title: "Testimonios",
    to: "/",
  }
];

export default Navbar
