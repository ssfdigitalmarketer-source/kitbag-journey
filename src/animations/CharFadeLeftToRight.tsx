import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
};

const char = {
  hidden: {
    x: -30,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function CharFadeLeftToRight({ text, className = "" }) {
  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
      className={`inline-flex flex-wrap justify-center ${className} align-middle`}
    >
      {text.split(" ").map((word, wordIndex) => (
        <span
          key={wordIndex}
          className="inline-block whitespace-nowrap mr-2"
        >
          {word.split("").map((charText, charIndex) => (
            <motion.span
              key={charIndex}
              variants={char}
              className="inline-block"
            >
              {charText}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
}
