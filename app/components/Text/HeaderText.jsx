"use client";
import { motion, stagger } from "framer-motion";

const HeaderText = ({ word, isDrag = false }) => {
  const variants = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.2 } },
  };

  return (
    <>
      <motion.span
        variants={variants}
        initial="hidden"
        animate="visible"
        className="block"
      >
        {word.split(" ").map((text, i) => (
          <span className="inline-block text" key={i}>
            {text.split("").map((l, j) => (
              <motion.span
                whileHover={{ color: "#fff", scale: 1.3 }}
                whileTap={{
                  scale: 1.3,
                }}
                whileDrag={{ scale: 2 }}
                key={j}
                variants={variants}
                className="inline-block"
                drag={isDrag ? true : false}
              >
                {l}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </motion.span>
    </>
  );
};

export default HeaderText;
