import React from "react";
import "materialize-css";

const Header = () => {
  return (
    <header className=" header centering">
      <div className="row textBackground">
        <h1 className="m-0 headText">Sada Pan-Nord</h1>

        <p className="m-0 headText" style={{ fontWeight: "700" }}>
          Full Stack Developer
        </p>
      </div>
    </header>
  );
};

export default Header;
