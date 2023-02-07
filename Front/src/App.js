import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import React, { useEffect } from "react";
import Company from "./pages/Company";
import Upjong from "./pages/Upjong";
import Header from "./components/Layouts/Header";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import Regist from "./pages/Regist";
import Test from "./pages/Test";
import Investor from "./pages/Investor";
import { useState } from "react";
const App = () => {
  const [color, setColor] = useState();
  useEffect(() => {
    const intervalId = setInterval(() => {
      setColor((color) => (color === "red" ? "#33ff33" : "red"));
    }, 50);
    return () => clearInterval(intervalId);
  });

  return (
    // color : "whiteSmoke"
    <div className="App" style={{ backgroundColor: color }}>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="/company/:name" element={<Company />} />
          <Route path="/upjong/:upjongNumber" element={<Upjong />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/regist" element={<Regist />} />
          <Route path="/test" element={<Test />} />
          <Route path="/investor/:nickname" element={<Investor />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
