import React from "react";

export default function Projects({ title }) {
  return (
    <div className="row">
      <h2>My Top Projects</h2>
      <p>
        {" "}
        The following applications are projects that I developed while attending
        the University of Utah Professional Coding Bootcamp.{" "}
      </p>
      <div className="row projects">
        <div className="col">
          <a
            href="https://sada-pan-nord-portfolio-production.up.railway.app/"
            target="_blank"
          >
            <h3>SQL Professional Portfolio</h3>
            <img
              className="projectPic"
              src={require("../../assets/SQL-portfolio.png")}
              alt="Professional portfolio using SQL and Handlebars"
            ></img>
          </a>
        </div>
        <div className="col">
          <a href="https://brachtco.github.io/know-your-music/" target="_blank">
            <h3>Know Your Music</h3>
            <img
              className="projectPic"
              src={require("../../assets/knowYourMusic.png")}
              alt="Database manager"
            ></img>
          </a>
        </div>
        <div className="col">
          <a
            href="https://watch.screencastify.com/v/qS9N27RaLy9Loog8nNsE"
            target="_blank"
          >
            <h3>Database Manager App</h3>
            <img
              className="projectPic"
              src={require("../../assets/database-manager.png")}
              alt="Database manager"
            ></img>
          </a>
        </div>
      </div>
      <div className="row projects">
        <div className="col">
          <a
            href="https://sadapannord.github.io/06-weather-forecast/"
            target="_blank"
          >
            <h3>Weather App</h3>
            <img
              className="projectPic"
              src={require("../../assets/weather-app.png")}
              alt="Database manager"
            ></img>
          </a>
        </div>
        <div className="col">
          <a href="https://agile-castle-97936.herokuapp.com/" target="_blank">
            <h3>Newtricious</h3>
            <img
              className="projectPic"
              src={require("../../assets/newtricious.png")}
              alt="Database manager"
            ></img>
          </a>
        </div>

        <div className="col">
          <a href="https://fierce-springs-75302.herokuapp.com/" target="_blank">
            <h3>MVC Blog</h3>
            <img
              className="projectPic"
              src={require("../../assets/mvc-blog.png")}
              alt="MVC blog"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}
