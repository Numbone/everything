import React, { Suspense, useState } from "react";
import Counter from "./component/Counter/Counter";
import { Route, Routes } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { Link } from "react-router-dom";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/className";

const App = () => {
  const { theme, onToggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback={<div>Loading...</div>}>
        <button onClick={onToggleTheme}>theme</button>
        <Link to="/about">About</Link>
        <Link to="/">Main</Link>
        <Routes>
          <Route path="/about" element={<AboutPageAsync />} />
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/element" element={<Counter />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
