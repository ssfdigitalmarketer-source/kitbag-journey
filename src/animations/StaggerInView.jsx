import { motion } from "framer-motion";

const containerVariants = (stagger) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
    },
  },
});

const itemVariants = (yOffset) => ({
  hidden: { opacity: 0, y: yOffset },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
});

const StaggerInView = ({
  children,
  className = "",
  stagger = 0.15,
  yOffset = 30,
  once = true,
  amount = 0.3,
}) => {
  return (
    <motion.div
      className={className}
      variants={containerVariants(stagger)}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div
              key={index}
              variants={itemVariants(yOffset)}
              className="flex-shrink-0"
            >
              {child}
            </motion.div>
          ))
        : (
          <motion.div
            variants={itemVariants(yOffset)}
            className="flex-shrink-0"
          >
            {children}
          </motion.div>
        )}
    </motion.div>
  );
};

export default StaggerInView;
