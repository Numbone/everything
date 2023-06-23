import React from "react";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/className";
import cls from "./Navbar.module.scss";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  className?: string;
}
const Navbar = ({ className }: NavbarProps) => {
  const {t}=useTranslation();
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
          {t("About")}
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} className={cls.mainLink} to="/">
        {t("Home")}
        </AppLink>
      </div>
    </div>
  );
};

export default Navbar;
