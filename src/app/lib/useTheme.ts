import React from "react";

function useTheme() {
  const [theme, setTheme] = React.useState(
    typeof window !== "undefined" && localStorage ? localStorage.theme : true,
  );
  const colorTheme = !theme;

  React.useEffect(() => {
    // const root = window.document.documentElement;

    // root.classList.remove(colorTheme);
    // root.classList.add(theme);

    if (typeof window !== "undefined" && localStorage) {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return [colorTheme, setTheme];
}

export default useTheme;
