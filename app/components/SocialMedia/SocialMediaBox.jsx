import React from "react";

import socialMedia from "../../Data/SocialMedia.json";
import SocialMediaCard from "./SocialMediaCard";

export default function SocialMediaBox() {
  return (
    <div className="flex gap-4">
      {socialMedia.map((item, index) => (
        <SocialMediaCard item={item} key={index} />
      ))}
    </div>
  );
}
