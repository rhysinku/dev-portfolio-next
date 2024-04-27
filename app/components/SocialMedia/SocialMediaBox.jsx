import React from "react";

import socialMedia from "../../Data/SocialMedia.json";
import SocialMediaCard from "./SocialMediaCard";

export default function SocialMediaBox() {
  return (
    <>
      {socialMedia.map((item, index) => (
        <SocialMediaCard item={item} key={index} />
      ))}
    </>
  );
}
