import { motion } from "framer-motion";
import React from "react";

const TagButton = ({ children }) => {
  return (
    <motion.div className="tag-btn">
      <span>{children}</span>
    </motion.div>
  );
};

export default TagButton;
