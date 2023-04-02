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
      <h4>Hello! My name is Sada, and I'm a full stack developer.</h4>
      <p
        style={{
          width: "60%",
          display: "block",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        I recently began my journey in the dev world in October of 2022. What
        sparked my interest in web development? Realizing that I needed a change
        in my working environment. I was unhappy with my job; there was no more
        room for growth, and nothing left to learn.
      </p>
    </div>
  );
}
