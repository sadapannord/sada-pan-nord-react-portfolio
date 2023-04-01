import React from "react";
// Import React Router Link component for internal hyperlinks
// import { Link } from "react-router-dom";
import "materialize-css";

const Header = () => {
  return (
    <header className=" header centering">
      <div class="row textBackground">
        <h1 className="m-0 headText">Sada Pan-Nord</h1>

        <p className="m-0 headText" style={{ fontWeight: "700" }}>
          Full Stack Developer
        </p>
      </div>
    </header>
  );
};

export default Header;
