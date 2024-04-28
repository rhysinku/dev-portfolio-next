import Link from "next/link";
import React from "react";
import {
  FaGithub,
  FaCodepen,
  FaLinkedin,
  FaGoogle,
  FaInstagram,
} from "react-icons/fa";
export default function SocialMediaCard({ item }) {
  const iconMap = {
    FaGithub,
    FaCodepen,
    FaLinkedin,
    FaGoogle,
    FaInstagram,
  };

  const IconComponent = iconMap[item.icon];

  if (!IconComponent) {
    // Return an error message or fallback if the icon is invalid
    return <section>Invalid icon: {item.icon}</section>;
  }

  return (
    <div className="text-priColor-900">
      <Link href={item.url} target="_blank">
        <IconComponent size={30} />
      </Link>
    </div>
  );
}
