import React, { useContext, useMemo, useState } from "react";

import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
  ThemeContextProps,
} from "../lib/ThemeContext";
const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const onToggleTheme = () => {
    setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
  };
  const defaultProps = useMemo(
    () => ({ theme: theme, setTheme, onToggleTheme }),
    [theme]
  );
  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
