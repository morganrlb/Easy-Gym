"use client";
import { motion } from "motion/react";

export default function OpenTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      initial={{ 
        opacity: 0, 
        filter: 'blur(10px)',
        scale: 0.95
      }}
      animate={{ 
        opacity: 1, 
        filter: 'blur(0px)',
        scale: 1
      }}
      transition={{ 
        duration: 1.2,
        ease: "easeOut"
      }}
    >
        {children}
    </motion.main>
  )
}
