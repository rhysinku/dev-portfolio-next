"use client";
import Navlist from "./Navlist";
import Image from "next/image";
import Link from "next/link";
import navItem from "../Data/menu.json";
import { useState } from "react";

import { createMedia } from "@artsy/fresnel";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { MediaContextProvider, Media } = createMedia({
    // breakpoints values can be either strings or integers
    breakpoints: {
      sm: 0,
      md: 768,
      lg: 1024,
      xl: 1192,
    },
  });

  const handleToggle = () => {
    setIsOpen((toggle) => !toggle);
  };
  const handleClickItem = () => {
    setIsOpen(false);
  };

  return (
    // Home Nav
    <MediaContextProvider>
      {/* Mobile */}
      <Media lessThan="md">
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
            <section className="fixed inset-0 bg-triColor-900 flex items-center justify-center z-40">
              <div className="flex flex-col gap-y-5 text-8xl">
                {navItem.map((item) => (
                  <div onClick={handleClickItem} key={item.title}>
                    <Navlist item={item} />
                  </div>
                ))}
              </div>
            </section>
          )}
        </nav>
      </Media>
      {/* Desktop */}
      <Media greaterThanOrEqual="md">
        <div id="nav" className="backdrop-blur-sm relative z-50">
          <div className="wrapper">
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
      </Media>
    </MediaContextProvider>
  );
};

export default NavigationBar;
