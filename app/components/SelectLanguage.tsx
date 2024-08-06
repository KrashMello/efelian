"use client";
import { getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const SelectLanguage = () => {
  const [lang, setLang] = useState<any>("es");
  const router = useRouter();

  useEffect(() => {
    const saveLang = getCookie("lang") || "es";
    setLang(saveLang);
  }, [lang]);

  const handleLang = (selectedLang: string) => {
    setLang(selectedLang);
    setCookie("lang", selectedLang);
    router.push("/");
  };
  return (
    <div className="group/select relative">
      <input
        readOnly
        value={lang}
        className="w-9 bg-transparent ring-0 outline-none focus:ring-slate-700 px-1 cursor-pointer font-bold"
      />
      <ul className="hidden group-focus-within/select:flex flex-col absolute  gap-1 top-6 font-bold">
        <li className="hover:bg-slate-500 hover:text-white px-1" key="lang-es">
          <button onClick={() => handleLang("es")}>ES</button>
        </li>
        <li className="hover:bg-slate-500 hover:text-white px-1" key="lang-en">
          <button onClick={() => handleLang("en")}>EN</button>
        </li>
      </ul>
    </div>
  );
};

export default SelectLanguage;
