"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navlist = ({ item }) => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <Link
      className={`nav-item px-2 ${pathName === item.link && "nav_hover"}`}
      href={item.link}
    >
      {item.title}
    </Link>
  );
};

export default Navlist;
