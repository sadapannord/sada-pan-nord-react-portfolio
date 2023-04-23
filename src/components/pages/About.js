import React from "react";

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
        sparked my interest in web development? Realizing that I needed a change
        in my working environment. I was unhappy with my job; there was no more
        room for growth, and nothing left to learn. A friend mentioned that she
        had recently gone through a coding bootcamp, and my interest was peaked.
        I did some research and found that my personality fit almost every
        description of a web developer. I love learning new things, and I have a
        passion for problem solving (I frequently do logic puzzles before bed).
      </p>
      <h3>Skills</h3>
      <div>
        <p>
          Through my various careers I have learned many valuable skills, both
          hard and soft
        </p>
        <h4>Soft skills</h4>
        <div
          class="row"
          style={{
            width: "80%",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        >
          <li class="col">Communication</li>
          <li class="col">Organization</li>
          <li class="col">Teamwork</li>
          <li class="col">Adaptability</li>
          <li class="col">Leadership</li>
          <li class="col">Initiative</li>
        </div>
      </div>
      <h4>Hard skills</h4>
      <div
        class="row"
        style={{
          width: "60%",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <b>Microsoft Office</b>
        <li class="col">Word</li>
        <li class="col">Outlook</li>
        <li class="col">Excel</li>
        <li class="col">PowerPoint</li>
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
        <li class="col">HTML</li>
        <li class="col">CSS</li>
        <li class="col">JavaScript</li>
        <li class="col">Node</li>
        <li class="col">Express</li>
        <li class="col">React</li>
        <li class="col">MySQL</li>
        <li class="col">NoSQL</li>
      </div>
      <b>Libraries</b>
      <div
        class="row"
        style={{
          width: "60%",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <li class="col">Bootstrap</li>
        <li class="col">Materialize</li>
        <li class="col">Mongoose</li>
      </div>
    </div>
  );
}
