import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Resume from "./components/pages/Resume";

function AppRouter() {
  //attempting to conditionally render dav bar
  // const [currentPage, setCurrentPage] = useState('Home')
  // const renderNav = () => {
  //     if(currentPage === "Home") {
  //         return  <Route path="/contact" element = {<Contact/>}/> <Route path="/about" element = {<About/>}/>
  //     }
  //   }
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
}

export default AppRouter;
