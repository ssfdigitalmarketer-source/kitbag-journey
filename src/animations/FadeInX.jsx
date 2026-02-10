import { motion } from "framer-motion";

const FadeIn = ({
  children,
  direction = "left", // left | right | up | down
  delay = 0,
  duration = 0.6,
  distance = 50,
}) => {
  const variants = {
    left: { x: -distance, y: 0 },
    right: { x: distance, y: 0 },
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
  };

  const { x, y } = variants[direction];

  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x, y }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default FadeIn;
