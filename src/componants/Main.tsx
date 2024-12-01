import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";
import BlogDetail from "./BlogDetail";
import Contact from "./Contact";
import About from "./About";
import Partner from "./Partner";
import Admin from "./Admin";
import Error404 from "./Error404";

const Main: React.FC = () => {

  return <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/devenir-partenaire" element={<Partner />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </>
};

export default Main;