import React, { Suspense } from "react";
import Counter from "./component/Counter/Counter";
import { Route, Routes } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
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
