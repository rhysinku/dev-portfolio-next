"use client";
import { motion } from "framer-motion";
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
    <motion.div whileHover={{ scale: 1.4, transition: { duration: 0.5 } }}>
      <Link href={item.url} target="_blank">
        <IconComponent size={30} />
      </Link>
    </motion.div>
  );
}
