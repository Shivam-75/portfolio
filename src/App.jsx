import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Home from "./page/home/Home";
import Service from "./page/service/Service";
import Contact from "./page/contact/Contact";
import About from "./page/about/About";
import Project from "./page/Project/Project";
import Socialmedia from "./components/socialmedia/Socialmedia";

const App = () => {
  return (
    <Routes>
      <Route element={<Nav />}>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Project" element={<Project />} />
      </Route>
    </Routes>
  );
};

export default App;
