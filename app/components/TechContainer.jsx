import React from "react";
import TechCard from "./TechCard";
export default function techContainer() {
  const techList = [
    {
      name: "HTML",
      image: "html.png",
    },
    {
      name: "CSS",
      image: "css.png",
    },
    {
      name: "Javascript",
      image: "js.png",
    },
    {
      name: "PHP",
      image: "php.png",
    },
    {
      name: "mySQL",
      image: "mysqli.png",
    },
    {
      name: "React",
      image: "react.png",
    },
    {
      name: "Sass",
      image: "sass.png",
    },
    {
      name: "Tailwind",
      image: "tailwind.png",
    },
    {
      name: "Wordpress",
      image: "wordpress.png",
    },
    {
      name: "Figma",
      image: "figma.png",
    },
    {
      name: "GIT",
      image: "git.png",
    },
    {
      name: "NextJs",
      image: "nextjs.png",
    },
    {
      name: "Laravel",
      image: "laravel.png",
    },
  ];
  return (
    <div className="flex flex-wrap justify-evenly w-full gap-5">
      {techList.map((stack) => (
        <TechCard stack={stack} key={stack.image} />
      ))}
    </div>
  );
}
