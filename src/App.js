import React from "react";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import {
  Routes,
  Route,
} from "react-router-dom";

import "./App.css";
import ScrollToTop from "./utils/ScrollToTop";

export default function App() {
  return (
    <div>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}
