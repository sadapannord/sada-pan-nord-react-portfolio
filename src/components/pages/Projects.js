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
          <p style={{ color: "black" }}>
            A secondary professional portfolio using SQL and handlebars.
          </p>
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
          <p style={{ color: "black" }}>
            A website where a user can learn more about their favorite artists
            and bands. The website suggests similar artists, as well as provides
            a link to the artists YouTube channel.{" "}
          </p>
        </div>
        <div className="col">
          <a href="https://science-science.herokuapp.com/" target="_blank">
            <h3>Spacetastic Science</h3>
            <img
              className="projectPic"
              src={require("../../assets/spacetastic-science.png")}
              alt="Spacetastic Science"
            ></img>
          </a>
          <p style={{ color: "black" }}>
            An application geared towards children wanting to learn about the
            solar system. Users can create projects, and save information about
            planetary bodies.
          </p>
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
          <p style={{ color: "black" }}>
            A standard weather forecasting application that saves a users'
            previous searches.
          </p>
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
          <p style={{ color: "black" }}>
            An application that allows users to set up their food preferences
            and intolerances. Based on the users' selections the app will
            suggest recipes based on their favorite foods.
          </p>
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
          <p style={{ color: "black" }}>
            A demonstration of a MySQL database and its functions that was
            created during the coding bootcamp.
          </p>
        </div>
      </div>
    </div>
  );
}
