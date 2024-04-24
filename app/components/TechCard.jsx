"use client";
import React , { useRef, useState} from "react";
import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue , useSpring, useTransform } from "framer-motion";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TechCard = ({ stack }) => {
    const cardRef = useRef(null)
    const [Hover, setHover] = useState(false)
  const variants = {
    initial: {filter: "grayscale(1)"},
    onHover: { scale: 1.5, filter: "grayscale(0)" ,filter: "drop-shadow(0px 0px 53px rgba(217, 11, 4, 1))", },
    ofHover: { scale: 1, filter: "grayscale(1)" },
  };



  const x = useMotionValue(0);
  const y = useMotionValue(0);


  const moveCard = useMotionTemplate`rotateX(${x}deg) rotateY(${y}deg)`; 

  

  const handleMouse = (e) => {
  const card = cardRef.current.getBoundingClientRect()
  const width = card.width
  const height = card.height

  const mouseX = (e.clientX - card.left) * ROTATION_RANGE;
  const mouseY = (e.clientY - card.top) * ROTATION_RANGE;

  const rX = mouseY / height - HALF_ROTATION_RANGE;
  const rY = mouseX / width - HALF_ROTATION_RANGE;


    x.set(rX)
    y.set(rY)
  }

  const handleMouseLeave = () =>{
    x.set(0)
    y.set(0)
  }


  return (
    <motion.section
      ref={cardRef}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      variants={variants}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}        
      style={{
        transformStyle: "preserve-3d",
        transform: moveCard,
      }}
      className="tech-card aspect-square w-[17%] flex items-center justify-center drop-shadow-glow"
    >
      <motion.div className="p-2 rounded-md flex items-center justify-center aspect-square w-3/4"
       style={{transform: "translateZ(50px)",   transformStyle: "preserve-3d"}}>
        <motion.figure
        variants={variants}
        animate={Hover ? "onHover" : "ofHover"}
        >
          <Image
            
            style={{transform: "translateZ(75px)" }}
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
