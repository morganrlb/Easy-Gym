"use client";
import { motion } from "motion/react";

export default function OpenTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      initial={{ 
        y: 30,
        filter: "blur(10px)",
        opacity: 0
      }}
      animate={{ 
        y: 0,
        filter: "blur(0)",
        opacity: 1
      }}
      transition={{ 
        duration: 0.8,
        ease: "easeOut"
      }}
      style={{
        willChange: 'transform, opacity, filter'
      }}
    >
        {children}
    </motion.main>
  )
}
