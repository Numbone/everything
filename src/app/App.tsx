import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/className";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/Providers/router";
import { Navbar } from "widjet/Navbar";
import { Sidebar } from "widjet/Sidebar";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";

const App = () => {
  const { theme } = useTheme();
  const { t, i18n } = useTranslation();
  const onSwitch = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={onSwitch}> {t("test")}</button>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
