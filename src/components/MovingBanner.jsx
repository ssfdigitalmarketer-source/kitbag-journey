import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const ScrollSection = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 20,
    mass: 0.7,
  });

  // Increased horizontal motion
  const xP1 = useTransform(smoothProgress, [0, 1], [0, 200]);       // first paragraph moves more
  const xP2 = useTransform(smoothProgress, [0, 0.33, 1], [120, 40, 20]); // second paragraph moves more
  const xP3 = useTransform(smoothProgress, [0, 1], [0, -150]);      // third paragraph moves more left

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[50vh] lg:h-[70vh] flex flex-col justify-center px-3 lg:px-20 space-y-12 overflow-hidden font-bold text-2xl lg:text-[10vh]"
    >
      <motion.p className="text-left" style={{ x: xP1 }}>
        WE CREATE
      </motion.p>

      <motion.p className="text-right" style={{ x: xP2 }}>
        BRANDS AND IP&apos;S
      </motion.p>

      <motion.p className="text-center" style={{ x: xP3 }}>
        WE ARE KITBAG JOURNEY
      </motion.p>
    </section>
  );
};

export default ScrollSection;
