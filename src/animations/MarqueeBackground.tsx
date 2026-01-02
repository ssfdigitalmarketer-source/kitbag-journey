import { motion } from "framer-motion";

const MarqueeLine = ({ text, direction = "left" }) => {
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
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="
              text-[8vh] lg:text-[8rem]
              font-extrabold uppercase
              text-transparent
              leading-none
              stroke-text
              mr-24
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
  return (
    <div className="absolute h-full italic inset-0 -z-10 flex flex-col gap-6 opacity-25 py-5 overflow-hidden">
      <MarqueeLine text="PROMOTING TALENT" direction="left" />
      <MarqueeLine text="KITBAG JOURNEY" direction="right" />
      <MarqueeLine text="PROMOTING TALENT" direction="left" />
      <MarqueeLine text="KITBAG JOURNEY" direction="right" />
    </div>
  );
};

export default MarqueeBackground;
