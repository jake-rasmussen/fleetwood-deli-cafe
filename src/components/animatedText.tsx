import React from "react";
import { delay, motion } from "framer-motion";

const AnimatedTextCharacter = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  // splitting text into letters
  const letters = Array.from(text);

  // Variants for Container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  // Variants for each letter
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
      variants={container}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.2 }}
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          <span className={className}>
            {letter === " " ? "\u00A0" : letter}
          </span>
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextCharacter;
