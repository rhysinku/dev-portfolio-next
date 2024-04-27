import React from "react";
import { FaGithub, FaCodepen, FaLinkedin, FaGoogle } from "react-icons/fa";
export default function SocialMediaCard({ item }) {
  const iconMap = {
    FaGithub,
    FaCodepen,
    FaLinkedin,
    FaGoogle,
  };

  const IconComponent = iconMap[item.icon];

  if (!IconComponent) {
    // Return an error message or fallback if the icon is invalid
    return <section>Invalid icon: {item.icon}</section>;
  }

  return (
    <section>
      <IconComponent size={30} />
    </section>
  );
}
