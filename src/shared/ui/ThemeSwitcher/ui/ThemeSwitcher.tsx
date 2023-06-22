import React, { FC } from "react";
import { classNames } from "shared/lib/classNames/className";
import cls from "./ThemeSwitcher.module.scss";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import Button, { ButtonTheme } from "shared/ui/Button/Button";

interface IThemeSwitcher {
  className?: string;
}
const ThemeSwitcher: FC<IThemeSwitcher> = ({ className }) => {
  const { theme, onToggleTheme } = useTheme();
  console.log(ButtonTheme.CLEAR)
  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={onToggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};

export default ThemeSwitcher;
