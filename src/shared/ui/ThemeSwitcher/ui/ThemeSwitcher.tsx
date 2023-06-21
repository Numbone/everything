import React, { FC } from "react";
import { classNames } from "shared/lib/classNames/className";
import cls from "./ThemeSwitcher.module.scss";
import { useTheme } from "app/providers/ThemeProvider";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";

interface IThemeSwitcher {
  className?: string;
}
const ThemeSwitcher: FC<IThemeSwitcher> = ({ className }) => {
  const { theme, onToggleTheme } = useTheme();
  return (
    <button
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={onToggleTheme}
    >
      TOGGLE
    </button>
  );
};

export default ThemeSwitcher;
