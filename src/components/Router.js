import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Precooling from "./Precooling";
import Sourcing from "./Sourcing";

const RouteLink = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/precooling" element={<Precooling />} />
      <Route path="/sourcing" element={<Sourcing />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}
export default RouteLink;