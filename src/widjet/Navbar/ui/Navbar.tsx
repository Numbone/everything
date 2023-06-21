import React from "react";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/className";
import cls from "./Navbar.module.scss";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

interface NavbarProps {
  className?: string;
}
const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <ThemeSwitcher/>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
          About
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} className={cls.mainLink} to="/">
          Main
        </AppLink>
      </div>
    </div>
  );
};

export default Navbar;
