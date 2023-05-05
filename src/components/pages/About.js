import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="row">
      {/* <h1>About Me</h1> */}
      <img
        style={{
          height: "200px",
          width: "auto",
          display: "block",
          marginRight: "auto",
          marginLeft: "auto",
        }}
        src={require("../../assets/slack-profile.png")}
        alt="Profile Picture"
      ></img>
      <h3>Hello! My name is Sada, and I'm a full stack developer.</h3>
      <p
        style={{
          width: "80%",
          display: "block",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        I recently began my journey in the dev world in October of 2022. What
        sparked my interest in web development? Realizing that I needed a
        challenge, something to make me think. I have a passion for learning and
        problem solving and a friend mentioned that she had recently gone
        through a coding bootcamp, which peaked my interest. I did some research
        and found that my personality fit almost every description of a web
        developer. Upon starting the coding bootcamp through the University of
        Utah I found that I loved how it expanded my mind, and forced me to
        think through problems. Coding allows me to be creative while at the
        same time solving puzzles.
      </p>
      <h3>Professional Resume</h3>
      <a href="./sada-pan-nord-2023-resume.pdf" download>
        Sada Pan-Nord Professional Resume
      </a>
      <h3>Completed Projects</h3>
      <p>
        In order to view the various projects I have completed, and to view my
        competency please navigate to the <a href="#project">Project </a> tab.{" "}
      </p>
      <h3>Skills</h3>
      <div>
        <p>
          Through my various careers I have learned many valuable skills, both
          hard and soft:
        </p>
      </div>
      <h4>Hard skills</h4>
      <div
        class="row"
        style={{
          width: "80%",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <b>Microsoft Office</b>
        <div class="row">
          <li class="col s6 rCorners">Word</li>
          <li class="col s6 rCorners">Outlook</li>
        </div>
        <div class="row">
          <li class="col s6 rCorners">Excel</li>
          <li class="col s6 rCorners">PowerPoint</li>
        </div>
      </div>
      <b>Technical Languages:</b>
      <div
        class="row"
        style={{
          width: "80%",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <li class="col rCorners">HTML</li>
        <li class="col rCorners">CSS</li>
        <li class="col rCorners">JavaScript</li>
        <li class="col rCorners">Node</li>
      </div>
      <div
        class="row"
        style={{
          width: "80%",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <li class="col rCorners">Express</li>
        <li class="col rCorners">React</li>
        <li class="col rCorners">MySQL</li>
        <li class="col rCorners">NoSQL</li>
      </div>
      <b>Libraries</b>
      <div
        class="row"
        style={{
          width: "80%",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <li class="col rCorners">Bootstrap</li>
        <li class="col rCorners">Materialize</li>
        <li class="col rCorners">Mongoose</li>
      </div>
      <h4>Soft skills</h4>
      <div
        class="row"
        style={{
          width: "80%",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <li class="col rCorners" style={{ border: "2px solid #3f21ad" }}>
          Communication
        </li>
        <li class="col rCorners" style={{ border: "2px solid #3f21ad" }}>
          Organization
        </li>
        <li class="col rCorners" style={{ border: "2px solid #3f21ad" }}>
          Teamwork
        </li>
        <li class="col rCorners" style={{ border: "2px solid #3f21ad" }}>
          Adaptability
        </li>
        <li class="col rCorners" style={{ border: "2px solid #3f21ad" }}>
          Leadership
        </li>
        <li class="col rCorners" style={{ border: "2px solid #3f21ad" }}>
          {" "}
          Initiative
        </li>
      </div>
    </div>
  );
}
