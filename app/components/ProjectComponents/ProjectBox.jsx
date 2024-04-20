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
    <div ref={carouselRef} className="relative h-[350vh]  flex-wrap">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div className="flex " style={{ x }}>
          {projectInfo.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectBox;
