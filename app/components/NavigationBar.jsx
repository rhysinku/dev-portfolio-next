"use client";
import Navlist from "./Navlist";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ top: -100, opacity: 0 }}
      animate={{ top: 0, opacity: 1 }}
      transition={{ durations: 500, type: "spring" }}
      id="nav"
      className="backdrop-blur-sm"
    >
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
    </motion.div>
  );
};

export default NavigationBar;
