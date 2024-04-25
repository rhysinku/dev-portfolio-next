import React from "react";
import TechCard from "./TechCard";
import techList from "../Data/techList.json";
export default function techContainer() {
  return (
    <div className="flex flex-wrap justify-evenly w-full gap-5">
      {techList.map((stack) => (
        <TechCard stack={stack} key={stack.image} />
      ))}

    </div>
  );
}
