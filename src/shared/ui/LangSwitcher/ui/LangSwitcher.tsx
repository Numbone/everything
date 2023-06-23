import React, { FC } from "react";
import { classNames } from "shared/lib/classNames/className";
import cls from "./LangSwitcher.module.scss";
import { useTranslation } from "react-i18next";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
interface LangSwitcherProps {
  className?: string;
}

const LangSwitcher: FC<LangSwitcherProps> = (props) => {
  const { className } = props;
  const { t, i18n } = useTranslation();
  const toggle = async () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };
  return (
    <Button
      className={classNames(cls.LangSwitcher, {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={toggle}
    >{t('Language')}</Button>
  );
};

export default LangSwitcher;
