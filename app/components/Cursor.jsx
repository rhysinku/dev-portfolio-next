"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const Cursor = () => {
  // const [mouse, setmouse] = useState({x:0, y: 0})
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const cursorSize = 30;
  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);

    // setmouse({x:clientX - cursorSize / 2, y:clientY - cursorSize / 2})
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouse);
    // console.log(mouse.x);
    // console.log(mouse.y);
    return () => {
      window.removeEventListener("mousemove", handleMouse);
      // console.log("Clean Up");
    };
  }, []);

  return (
    <motion.div
      className="cursor"
      style={{ left: smoothMouse.x, top: smoothMouse.y, width: cursorSize }}
    ></motion.div>
  );
};

export default Cursor;
