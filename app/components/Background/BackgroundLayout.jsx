"use client";
import React from "react";
import AnimateBackground from "./AnimateBackground";
import Image from "next/image";
import { motion } from "framer-motion";

const BackgroundLayout = () => {
  return (
    <>
      <motion.div
        className="origin-center absolute top-0 left-0"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3 }}
      >
        <motion.div
          animate={{ x: [0, 10, 0], scale: [1, 1.01, 1] }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 4,
            type: "tween",
          }}
        >
          <Image
            alt="Pockey Pepero Logo"
            src={"/pp_bighero.png"}
            width={"1150"}
            height={"100"}
            className="opacity-70 -rotate-12"
          ></Image>
        </motion.div>
      </motion.div>
      <AnimateBackground />
    </>
  );
};

export default BackgroundLayout;
