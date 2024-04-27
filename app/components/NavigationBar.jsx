"use client";
import Navlist from "./Navlist";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen((toggle) => !toggle);
  };

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
    <div id="nav" className="backdrop-blur-sm z-50 relative">
      <div className="wrapper">
        {/* Mobile */}
        <div>
          <nav className="flex justify-between items-center min-h-14 px-4">
            <Link href={"/"}>
              <Image
                src="/pp.png"
                width={51}
                height={51}
                alt="Rhysin Villahermosa Logo"
              />
            </Link>
            <div
              className="flex flex-col w-9 h-9 justify-evenly z-50"
              onClick={handleToggle}
            >
              <span className="w-full h-1 bg-white rounded-md"></span>
              <span className="w-full h-1 bg-white rounded-md"></span>
              <span className="w-full h-1 bg-white rounded-md"></span>
            </div>
            {isOpen && (
              <section className="fixed top-0 left-0 w-screen h-screen bg-priColor-700 flex items-center justify-center">
                <div className="flex flex-col gap-y-5 text-8xl">
                  {navItem.map((item) => (
                    <Navlist item={item} key={item.title}></Navlist>
                  ))}
                </div>
              </section>
            )}
          </nav>
        </div>

        {/* Desktop */}
        <div className="md:block hidden">
          <nav className="flex justify-between items-center min-h-14">
            <Link href={"/"}>
              <Image
                src="/pp.png"
                width={51}
                height={51}
                alt="Rhysin Villahermosa Logo"
              />
            </Link>

            <section className="flex gap-x-5 font-secFont text-white">
              {navItem.map((item) => (
                <Navlist item={item} key={item.title}></Navlist>
              ))}
            </section>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
