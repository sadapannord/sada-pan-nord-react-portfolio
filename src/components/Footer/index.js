import React from "react";
// Import hooks from React Router

const Footer = () => {
  return (
    <footer className="w-100 mt-auto text-dark">
      <div className="container text-center mb-5">
        <h4>&copy; {new Date().getFullYear()}</h4>
        <div class="row">
          <div class="logoLink col s1 offset-s10">
            <a href="https://github.com/sadapannord">
              <img
                class="image"
                src={require("../../assets/gitHub-mark.png")}
                alt="GitHub logo"
              />
              <div class="middle">
                <div class="text">GitHub Repo</div>
              </div>
            </a>
          </div>
          <div class="logoLink col s1">
            <a href="https://www.linkedin.com/in/sada-pan-nord/">
              <img
                class="image linkedIn"
                src={require("../../assets/LinkedIn-Blue-21@2x.png")}
                alt="LinkedIn logo"
              />
              <div class="middle">
                <div class="text">LinkedIn Profile</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
