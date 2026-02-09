import { motion } from "framer-motion";

const FadeInX = ({
  children,
  direction = "left",
  delay = 0,
  duration = 0.6,
  distance = 50,
}) => {
  const x = direction === "left" ? -distance : distance;

  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default FadeInX;
