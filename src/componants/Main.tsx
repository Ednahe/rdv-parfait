import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";
import Contact from "./Contact";
import About from "./About";
import Partner from "./Partner";

const Main = () => {

  return <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/devenir-partenaire" element={<Partner />} />
        </Routes>
      </Router>
    </>
};

export default Main;