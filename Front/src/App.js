import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import React from "react";
import Company from "./pages/Company";
import Upjong from "./pages/Upjong";
import Header from "./components/Layouts/Header";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import Regist from "./pages/Regist";

const App = () => {
  return (
    <div className="App" style={{ backgroundColor: "whitesmoke" }}>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="/company/:name" element={<Company />} />
          <Route path="/upjong/:upjongNumber" element={<Upjong />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/regist" element={<Regist />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
