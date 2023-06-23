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

  return (
    <div className={classNames("app", {}, [theme])}>
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
