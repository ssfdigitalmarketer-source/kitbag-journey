import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const MarqueeLine = ({ text, direction = "left", fontSize }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div
        className="flex items-center"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 25,
        }}
      >
        {[...Array(15)].map((_, i) => (
          <span
            key={i}
            style={{ fontSize }}
            className="
              font-extrabold uppercase italic
              text-transparent
              stroke-text
              mr-24
              leading-none
            "
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const MarqueeBackground = () => {
  const containerRef = useRef(null);
  const [fontSize, setFontSize] = useState(40); // default fallback

  useEffect(() => {
    const updateFontSize = () => {
      if (containerRef.current) {
        const containerHeight = containerRef.current.offsetHeight;
        const lines = 4; // we want exactly 4 lines visible
        // divide height by lines and adjust slightly for spacing
        setFontSize(containerHeight / lines * 0.9);
      }
    };

    updateFontSize();
    window.addEventListener("resize", updateFontSize);
    return () => window.removeEventListener("resize", updateFontSize);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 -z-10 flex flex-col justify-evenly opacity-25 overflow-hidden"
    >
      <MarqueeLine text="PROMOTING TALENT" direction="left" fontSize={fontSize} />
      <MarqueeLine text="KITBAG JOURNEY" direction="right" fontSize={fontSize} />
      <MarqueeLine text="PROMOTING TALENT" direction="left" fontSize={fontSize} />
      <MarqueeLine text="KITBAG JOURNEY" direction="right" fontSize={fontSize} />
    </div>
  );
};

export default MarqueeBackground;
