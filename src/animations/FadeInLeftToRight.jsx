
import { motion } from "framer-motion";

const variant = {
  hidden: {
    x: -60,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 5,                 // slow, confident
      ease: [0.22, 1, 0.36, 1],       // premium easing
    },
  },
};

export default function FadeInLeftToRight({ children, delay = 0 }) {
  return (
    <motion.div
      variants={variant}
      initial="hidden"
      animate="show"
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
