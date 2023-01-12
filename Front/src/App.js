import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import React from "react";
import About from "./pages/About";
import Header from "./components/Layouts/Header";

const App = () => {
  return (
    <div className="App" style={{ background: "black" }}>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
