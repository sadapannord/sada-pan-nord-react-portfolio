import React from "react";
// Import hooks from React Router

const Footer = () => {
  // We retrieve the current `location` object data from React Router

  // We get React Router's navigate object so we can access and adjust browser history

  return (
    <footer className="w-100 mt-auto text-dark p-4">
      <div className="container text-center mb-5">
        <h4>&copy; {new Date().getFullYear()}</h4>
        <div class="logoLink">
          <a href="https://github.com/sadapannord">
            <img
              class="image"
              src={require("../../assets/gitHub-mark.png")}
              alt="GitHub logo"
            />
            <div class="middle">
              <div class="text">Sada's GitHub Repo</div>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
