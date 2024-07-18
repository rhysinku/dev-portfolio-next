"use client"
import { motion } from "framer-motion"
import { useState } from "react"

const DemoPage = () => {

    const [isOpen, setIsOpen] = useState(false)

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


  return (
    
    <div className="h-screen flex items-center justify-center flex-col">
        <motion.div className="size-20 bg-priColor-700 rounded-full relative cursor-pointer hover:scale-110 hover:shadow-priColor-700 transition-transform" onClick={()=> setIsOpen( open => !open) }>
            <motion.span className="bg-white w-12 h-1 absolute m-auto origin-center" style={{top:"35%", x:"-50%" , left: "50%", y:"-50%"}} transition={BurgerTransition} variants={BurgerVariantTop} animate={isOpen ? "open" : "close"}></motion.span>
            <motion.span className="bg-white w-12 h-1 absolute m-auto origin-center" style={{top:"50%", x:"-50%" , left: "50%", y:"-50%"}} transition={BurgerTransition} variants={BurgerVariantMiddle} animate={isOpen ? "open" : "close"}></motion.span>
            <motion.span className="bg-white w-12 h-1 absolute m-auto origin-center" style={{top:"65%", x:"-50%" , left: "50%", y:"-50%"}} transition={BurgerTransition} variants={BurgerVariantBottom} animate={isOpen ? "open" : "close"}></motion.span>
        </motion.div>
    </div>
  )
}

export default DemoPage
