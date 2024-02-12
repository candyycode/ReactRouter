import React from "react";
import { Routes, Route } from "react-router-dom";
import Blue from "./Blue.jsx";
import Red from "./Red.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";

function MainContainer() {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
      </Routes>
    </div>
  );
}

export default MainContainer;