import React, { useState } from "react";
import NavTabs from "./NavTabs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./Footer";
import Header from "./Header";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Project") {
      return <Projects />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header />
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer />
    </div>
  );
}
