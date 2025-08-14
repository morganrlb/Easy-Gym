"use client";
import React from "react";
import { motion } from "motion/react";

type SpotlightProps = {
  gradientFirst?: string;
  gradientSecond?: string;
  gradientThird?: string;
  translateY?: number;
  width?: number;
  height?: number;
  smallWidth?: number;
  duration?: number;
  xOffset?: number;
};

export const Spotlight = ({
  gradientFirst = "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(25, 95%, 65%, .10) 0, hsla(25, 95%, 55%, .04) 50%, hsla(25, 95%, 45%, .01) 80%)",
  gradientSecond = "radial-gradient(50% 50% at 50% 50%, hsla(25, 95%, 65%, .08) 0, hsla(25, 95%, 55%, .03) 80%, transparent 100%)",
  gradientThird = "radial-gradient(50% 50% at 50% 50%, hsla(25, 95%, 65%, .06) 0, hsla(25, 95%, 45%, .025) 80%, transparent 100%)",
  translateY = -350,
  width = 560,
  height = 1380,
  smallWidth = 240,
  duration = 7,
  xOffset = 100,
}: SpotlightProps = {}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
        delay: 0.5
      }}
      className="pointer-events-none fixed inset-0 h-full w-full overflow-hidden"
      style={{
        willChange: 'opacity',
        zIndex: 1
      }}
    >
      <motion.div
        animate={{
          x: [0, xOffset, 0],
        }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-screen h-screen pointer-events-none"
        style={{
          willChange: 'transform'
        }}
      >
        <div
          style={{
            transform: `translate3d(0, ${translateY}px, 0) rotate(-45deg)`,
            background: gradientFirst,
            width: `${width}px`,
            height: `${height}px`,
            willChange: 'transform'
          }}
          className={`absolute top-0 left-0`}
        />

        <div
          style={{
            transform: "rotate(-45deg) translate3d(5%, -50%, 0)",
            background: gradientSecond,
            width: `${smallWidth}px`,
            height: `${height}px`,
            willChange: 'transform'
          }}
          className={`absolute top-0 left-0 origin-top-left`}
        />

        <div
          style={{
            transform: "rotate(-45deg) translate3d(-180%, -70%, 0)",
            background: gradientThird,
            width: `${smallWidth}px`,
            height: `${height}px`,
            willChange: 'transform'
          }}
          className={`absolute top-0 left-0 origin-top-left`}
        />
      </motion.div>

      <motion.div
        animate={{
          x: [0, -xOffset, 0],
        }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-screen h-screen pointer-events-none"
        style={{
          willChange: 'transform'
        }}
      >
        <div
          style={{
            transform: `translate3d(0, ${translateY}px, 0) rotate(45deg)`,
            background: gradientFirst,
            width: `${width}px`,
            height: `${height}px`,
            willChange: 'transform'
          }}
          className={`absolute top-0 right-0`}
        />

        <div
          style={{
            transform: "rotate(45deg) translate3d(-5%, -50%, 0)",
            background: gradientSecond,
            width: `${smallWidth}px`,
            height: `${height}px`,
            willChange: 'transform'
          }}
          className={`absolute top-0 right-0 origin-top-right`}
        />

        <div
          style={{
            transform: "rotate(45deg) translate3d(180%, -70%, 0)",
            background: gradientThird,
            width: `${smallWidth}px`,
            height: `${height}px`,
            willChange: 'transform'
          }}
          className={`absolute top-0 right-0 origin-top-right`}
        />
      </motion.div>
    </motion.div>
  );
};
