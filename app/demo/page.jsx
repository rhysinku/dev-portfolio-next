"use client"
import { motion } from "framer-motion"
import { useState } from "react"

const DemoPage = () => {

    const [isOpen, setIsOpen] = useState(false)

    const BurgerVariant = {
        open:{
            rotate: "45deg",
        },
        close:{
            rotate: "0deg",   
        }
    }


  return (
    
    <div className="h-screen flex items-center justify-center flex-col">
        <motion.div className="size-20 bg-priColor-700 rounded-full relative cursor-pointer" onClick={()=> setIsOpen( open => !open) }>
            <motion.span className="bg-white w-12 h-1 absolute m-auto" style={{top:"35%", x:"-50%" , left: "50%", y:"-50%"}} variants={BurgerVariant} animate={isOpen ? "open" : "close"}></motion.span>
            <motion.span className="bg-white w-12 h-1 absolute m-auto" style={{top:"50%", x:"-50%" , left: "50%", y:"-50%"}} variants={BurgerVariant} animate={isOpen ? "open" : "close"}></motion.span>
            <motion.span className="bg-white w-12 h-1 absolute m-auto" style={{top:"65%", x:"-50%" , left: "50%", y:"-50%"}} variants={BurgerVariant} animate={isOpen ? "open" : "close"}></motion.span>
        </motion.div>
    </div>
  )
}

export default DemoPage
