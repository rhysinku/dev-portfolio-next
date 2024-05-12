"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useScroll, useTransform } from "framer-motion";
import projectInfo from "../../Data/myProjects.json";
const ProjectBox = () => {
  const carouselRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: carouselRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0", "-85%"]);

  return (
    <div ref={carouselRef} className="relative h-[365vh] flex flex-wrap">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden pt-7">
        <motion.div className="flex  snap-x" style={{ x }}>
          {projectInfo.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectBox;
