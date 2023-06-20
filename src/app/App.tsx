import React, { Suspense, useState } from "react";

import { Route, Routes } from "react-router-dom";

import { Link } from "react-router-dom";
import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/className";
import { useTheme } from "./providers/ThemeProvider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { AppRouter } from "./providers/Providers/router";

const App = () => {
  const { theme, onToggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={onToggleTheme}>theme</button>
      <Link to="/about">About</Link>
      <Link to="/">Main</Link>
      <AppRouter />
    </div>
  );
};

export default App;
