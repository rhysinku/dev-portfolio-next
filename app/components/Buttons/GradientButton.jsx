"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const GradientButton = ({ href = "/", children, targetBlank = false }) => {
  return (
    <motion.div
      whileHover={{
        boxShadow: " 0px 0px 53px 5px rgba(197,29,29,0.51)",
        scale: 1.1,
        transition: { duration: 0.5, type: "spring" },
      }}
      className="btn"
      whileTap={{ scale: 0.9 }}
    >
      <Link href={href} target={targetBlank ? "_blank" : undefined}>
        <button>{children}</button>
      </Link>
    </motion.div>
  );
};

export default GradientButton;
