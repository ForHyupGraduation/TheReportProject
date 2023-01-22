import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import React from "react";
import Company from "./pages/Company";
import Header from "./components/Layouts/Header";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="/company/:name" element={<Company />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
