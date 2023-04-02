import React from "react";

export default function Projects({ title }) {
  return (
    <div class="row">
      <div class="row">
        <div class="col">
          <h3>SQL Professional Portfolio</h3>
          <a
            href="https://sada-pan-nord-portfolio-production.up.railway.app/"
            target="_blank"
          >
            <img
              class="projectPic"
              src={require("../../assets/SQL-portfolio.png")}
              alt="Professional portfolio using SQL and Handlebars"
            ></img>
          </a>
        </div>
        <div class="col">
          <h3>Know Your Music</h3>
          <a href="https://brachtco.github.io/know-your-music/" target="_blank">
            <img
              class="projectPic"
              src={require("../../assets/knowYourMusic.png")}
              alt="Database manager"
            ></img>
          </a>
        </div>
        <div class="col">
          <h3>Database Manager App</h3>
          <img
            class="projectPic"
            src={require("../../assets/database-manager.png")}
            alt="Database manager"
          ></img>
        </div>
      </div>
      <div class="col">
        <h3>Weather App</h3>
        <a
          href="https://sadapannord.github.io/06-weather-forecast/"
          target="_blank"
        >
          <img
            class="projectPic"
            src={require("../../assets/weather-app.png")}
            alt="Database manager"
          ></img>
        </a>
      </div>
      <div class="col">
        <h3>Newtricious</h3>
        <a href="https://agile-castle-97936.herokuapp.com/" target="_blank">
          <img
            class="projectPic"
            src={require("../../assets/newtricious.png")}
            alt="Database manager"
          ></img>
        </a>
      </div>

      <div class="col">
        <h3>MVC Blog</h3>
        <a href="https://fierce-springs-75302.herokuapp.com/" target="_blank">
          <img
            class="projectPic"
            src={require("../../assets/mvc-blog.png")}
            alt="MVC blog"
          ></img>
        </a>
      </div>
    </div>
  );
}
