import React from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Readlist from "./pages/Readlist";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/readlist" element={<Readlist />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
