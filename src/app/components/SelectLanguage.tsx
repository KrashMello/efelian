const SelectLanguage = ({ lang }: { lang: string }) => {
  return (
    <div className="group/select relative">
      <input
        readOnly
        value={lang}
        className="w-9 bg-transparent ring-0 outline-none focus:ring-slate-700 px-1 cursor-pointer font-bold"
      />
      <ul className="hidden group-focus-within/select:flex flex-col absolute  gap-1 top-6 font-bold">
        <li className="hover:bg-slate-500 hover:text-white px-1">
          <a href="/">ES</a>
        </li>
        <li className="hover:bg-slate-500 hover:text-white px-1">
          <a href="/en">EN</a>
        </li>
      </ul>
    </div>
  );
};

export default SelectLanguage;
