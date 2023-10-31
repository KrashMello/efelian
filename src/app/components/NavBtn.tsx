import Link from "next/link";

const NavBtn = (props: { to: string, title: string }) => {
  return (
    <>
      <li>
        <Link href={props.to} className="px-2.5 py-2 focus:border-b border-slate-600 text-black text-center">{props.title}</Link>
      </li>
    </>
  )
}
export default NavBtn;
