"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const TechCard = ({ stack }) => {
  const variants = {
    initial: { filter: "grayscale(1)" },
    onHover: { scale: 1.5, filter: "grayscale(0)" },
  };
  return (
    <motion.section
      variants={variants}
      className="tech-card aspect-square w-[17%] flex items-center justify-center"
    >
      <motion.div className="bg-white p-2 rounded-md flex items-center justify-center aspect-square w-3/4">
        <motion.figure
          whileHover="onHover"
          variants={variants}
          initial="initial"
        >
          <Image
            src={`/tech-stack/${stack.image}`}
            alt={stack.name}
            width={40}
            height={40}
          />
        </motion.figure>
      </motion.div>
    </motion.section>
  );
};

export default TechCard;
