import React from "react";
import Navlist from "./Navlist";
import Image from "next/image";
import Link from "next/link";

const NavigationBar = () => {
  const navItem = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Project",
      link: "/project",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];

  return (
    // Home Nav
    <div id="nav" className="backdrop-blur-sm">
      <div className="wrapper">
        <nav className="flex justify-between items-center min-h-14">
          <Link href={"/"}>
            <Image src="/pp.png" width={51} height={51} />
          </Link>
          <section className="flex gap-x-5 font-secFont text-white">
            {navItem.map((item) => (
              <Navlist item={item} key={item.title}></Navlist>
            ))}
          </section>
        </nav>
      </div>
    </div>
  );
};

export default NavigationBar;
