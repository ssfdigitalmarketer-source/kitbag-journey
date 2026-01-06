import MarqueeBackground from "../animations/MarqueeBackground";
import { useRef, useEffect } from "react";

const MovingBanner = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
 const scrollBlockCount = useRef(0);
  const isLocked = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isLocked.current) {
          console.log("🛑 Center reached — locking scroll");
          isLocked.current = true;
          scrollBlockCount.current = 2;
        }
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "-50% 0px -50% 0px",
      }
    );

    if (targetRef.current) observer.observe(targetRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (!isLocked.current) return;

      e.preventDefault();
      scrollBlockCount.current -= 1;

      console.log("⛔ Scroll blocked", scrollBlockCount.current);

      if (scrollBlockCount.current <= 0) {
        console.log("✅ Scroll unlocked");
        isLocked.current = false;
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <section className="relative text-center text-4xl font-bold px-5 space-y-6 py-14 lg:py-20 lg:text-9xl overflow-hidden lg:text-left" ref={targetRef}>
      <MarqueeBackground />
      <p className="text-left">
        WE CREATE
      </p>

      <p className="text-right" >
        BRANDS AND IP&apos;S
      </p>

      <p className="text-center" >
        WE ARE KITBAG JOURNEY
      </p>
    </section>
  );
};

export default MovingBanner;
