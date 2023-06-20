import React, { Suspense, useState } from "react";

import { Route, Routes } from "react-router-dom";

import { Link } from "react-router-dom";
import './styles/index.scss'
import { classNames } from "shared/lib/classNames/className";
import { useTheme } from "./providers/ThemeProvider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";


const App = () => {
  const { theme, onToggleTheme } = useTheme(); 
  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback={<div>Loading...</div>}>
        <button onClick={onToggleTheme}>theme</button>
        <Link to="/about">About</Link>
        <Link to="/">Main</Link>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
