import React from "react";
// Import React Router Link component for internal hyperlinks
import { Link } from "react-router-dom";
import "materialize-css";

const Header = () => {
  return (
    <header className=" header valign-wrapper">
      <div className="container text-center valign-wrapper">
        {/* Use Link component to create a link that returns to the homepage on click */}

        <h1 className="m-0 left-align" style={{ fontSize: "3rem" }}>
          Sada Pan-Nord
        </h1>

        <p className="m-0" style={{ fontSize: "1.75rem", fontWeight: "700" }}>
          Meet your new programming pals.
        </p>
      </div>
    </header>
  );
};

export default Header;
