import React from "react";
import Project from "../Project";

const data = [
  {
    title: "new title",
  },
  {
    title: "best",
  },
  {
    title: "title",
  },
];

export default function Projects({ title }) {
  return (
    <div>
      {data.map((p) => (
        <Project title={p.title} />
      ))}
    </div>
  );
}
