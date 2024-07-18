"use client"
import { motion , MotionConfig } from "framer-motion"
import { useState } from "react"
import navItem from "../Data/menu.json";
import Link from "next/link";

const DemoPage = () => {

    const [isOpen, setIsOpen] = useState(false)
    const handleisOpen = () => {
        setIsOpen(!isOpen)
    }

    const BurgerTransition = {
        ease: "easeInOut",
        type: "spring"
    }

    const BurgerVariantTop = {
        open:{
            rotate: "45deg",
            top: "50%",
        },
        close:{
            rotate: "0deg",   
            top: "35%",
        }
    }

    const BurgerVariantMiddle = {
        open:{
          width: "0",
        },
        close:{
            rotate: "100%",   
        }
    }

    const BurgerVariantBottom = {
        open:{
            rotate: "-45deg",
            top: "50%",
        },
        close:{
            rotate: "0deg",   
            top: "65%",
        }
    }

    const BurgerMenuVariant= {
        open:{
            x: "0",
        },
        close:{
            x: "100%",
        }
    }


  return (
     <>
      <div className="h-screen flex items-center justify-center flex-col">
        <MotionConfig transition={BurgerTransition}>
        <motion.div className="z-10 size-20 bg-priColor-700 rounded-full relative cursor-pointer hover:scale-110 hover:shadow-priColor-700 transition-all" onClick={handleisOpen}>
            <motion.span className="bg-white w-12 h-1 absolute m-auto origin-center" style={{top:"35%", x:"-50%" , left: "50%", y:"-50%"}}  variants={BurgerVariantTop} animate={isOpen ? "open" : "close"}></motion.span>
            <motion.span className="bg-white w-12 h-1 absolute m-auto origin-center" style={{top:"50%", x:"-50%" , left: "50%", y:"-50%"}}  variants={BurgerVariantMiddle} animate={isOpen ? "open" : "close"}></motion.span>
            <motion.span className="bg-white w-12 h-1 absolute m-auto origin-center" style={{top:"65%", x:"-50%" , left: "50%", y:"-50%"}}  variants={BurgerVariantBottom} animate={isOpen ? "open" : "close"}></motion.span>
        </motion.div>
        </MotionConfig>
    </div>

  <MotionConfig transition={BurgerTransition}>
  <motion.div className="fixed top-0 w-full h-screen bg-secColor-900 px-6" variants={BurgerMenuVariant} animate={isOpen ? "open" : "close"} >
       <div className="w-full h-full flex items-center ">
       <ul className="flex flex-col">
            {navItem.map((item, index)=> (
                <Link href={item.link} key={index} className="hover:text-priColor-800 text-5xl" onClick={handleisOpen}>{item.title}</Link>
            ))}
        </ul>
       </div>
    </motion.div>
  </MotionConfig>
   </>
  )
}

export default DemoPage
