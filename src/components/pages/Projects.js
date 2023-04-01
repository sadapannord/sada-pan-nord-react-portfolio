import React from "react";
import Project from "../Project";
const arrayOfImages = [];
arrayOfImages.push("../../assets/database-manager.png");
arrayOfImages.push("../../assets/mvc-blog.png");
arrayOfImages.push("../../assets/newtricious.png");
arrayOfImages.push("../../assets/text-editor.png");
arrayOfImages.push("../../assets/project-01-img.png");

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
      <div>
        {data.map((p) => (
          <Project title={p.title} />
        ))}
      </div>
      <div>
        <img
          src={require("../../assets/database-manager.png")}
          alt="Database manager"
        ></img>
      </div>
    </div>
  );
}
