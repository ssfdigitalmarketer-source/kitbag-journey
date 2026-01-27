import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,   // controls delay between letters
      delayChildren: 0.2,      // slight pause before starting
    },
  },
};

const letter = {
  hidden: {
    y: 80,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.1,          // slow, noticeable motion
      ease: [0.22, 1, 0.36, 1], // strong, confident easing
    },
  },
};

export default function HeroHeadline({ text }) {
  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="show"
      className="text-[8vh] font-extrabold lg:text-[11vw] inline-block"
    >
      {text.split("").map((char, i) => (
        <motion.span 
          key={i}
          variants={letter}
          className="inline-block "
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h1>
  );
}
