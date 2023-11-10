"use client";
import { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";

const SwitchTheme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const DarkModeIcon = () => {
    if (theme === "dark")
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 4q-.425 0-.713-.288T11 3V2q0-.425.288-.713T12 1q.425 0 .713.288T13 2v1q0 .425-.288.713T12 4Zm0 19q-.425 0-.713-.288T11 22v-1q0-.425.288-.713T12 20q.425 0 .713.288T13 21v1q0 .425-.288.713T12 23Zm9-10q-.425 0-.713-.288T20 12q0-.425.288-.713T21 11h1q.425 0 .713.288T23 12q0 .425-.288.713T22 13h-1ZM2 13q-.425 0-.713-.288T1 12q0-.425.288-.713T2 11h1q.425 0 .713.288T4 12q0 .425-.288.713T3 13H2Zm16-7q-.275-.275-.275-.688T18 4.6l.35-.375q.275-.3.7-.3t.725.3q.3.3.3.725t-.3.725l-.375.35q-.3.275-.7.275T18 6ZM4.225 19.775q-.3-.3-.3-.725t.3-.725l.375-.35q.3-.275.7-.275t.7.3q.275.275.288.7T6 19.4l-.35.375q-.275.3-.7.3t-.725-.3Zm14.1 0l-.35-.375q-.275-.3-.275-.7t.3-.7q.275-.275.7-.287t.7.287l.375.35q.3.275.3.7t-.3.725q-.3.3-.725.3t-.725-.3ZM4.6 6l-.375-.35q-.3-.275-.3-.7t.3-.725q.3-.3.725-.3t.725.3l.35.375q.275.3.275.7T6 6q-.275.275-.687.275T4.6 6ZM12 18q-2.5 0-4.25-1.75T6 12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 2.5-1.75 4.25T12 18Z"
          />
        </svg>
      );
    else
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m17.75 4.09l-2.53 1.94l.91 3.06l-2.63-1.81l-2.63 1.81l.91-3.06l-2.53-1.94L12.44 4l1.06-3l1.06 3l3.19.09m3.5 6.91l-1.64 1.25l.59 1.98l-1.7-1.17l-1.7 1.17l.59-1.98L15.75 11l2.06-.05L18.5 9l.69 1.95l2.06.05m-2.28 4.95c.83-.08 1.72 1.1 1.19 1.85c-.32.45-.66.87-1.08 1.27C15.17 23 8.84 23 4.94 19.07c-3.91-3.9-3.91-10.24 0-14.14c.4-.4.82-.76 1.27-1.08c.75-.53 1.93.36 1.85 1.19c-.27 2.86.69 5.83 2.89 8.02a9.96 9.96 0 0 0 8.02 2.89m-1.64 2.02a12.08 12.08 0 0 1-7.8-3.47c-2.17-2.19-3.33-5-3.49-7.82c-2.81 3.14-2.7 7.96.31 10.98c3.02 3.01 7.84 3.12 10.98.31Z"
          />
        </svg>
      );
  };

  return (
    <Button
      variant="light"
      className="text-zinc-600"
      onClick={() => setTheme(theme === "dark" ? "ligh" : "dark")}
      isIconOnly
    >
      <DarkModeIcon />
    </Button>
  );
};
export default SwitchTheme;
