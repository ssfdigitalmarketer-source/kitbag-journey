import MarqueeBackground from "../animations/MarqueeBackground";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FadeInX from "../animations/FadeInX";

gsap.registerPlugin(ScrollTrigger);

const MovingBanner = () => {
  const targetDiv = useRef(null);

  // useGSAP(
  //   () => {
  //     const paragraphs = gsap.utils.toArray<HTMLParagraphElement>(
  //       ".moving-paragraph"
  //     );

  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: targetDiv.current,
  //         pin: true,
  //         scrub: true,
  //         start: "top center",
  //         end: "+=200%",
  //       },
  //     });

  //     tl.to(paragraphs[0], { x: 40 }, 0)
  //       .to(paragraphs[1], { x: -40 }, 0)
  //       .to(paragraphs[2], { x: 40 }, 0);

  //     tl.to(paragraphs[0], { x: 80 })
  //       .to(paragraphs[1], { x: -80 })
  //       .to(paragraphs[2], { x: 80 });
  //   },
  //   { scope: targetDiv }
  // );

  return (
    <section
      ref={targetDiv}
      className="relative overflow-hidden px-5 py-14 text-4xl font-bold lg:py-20 lg:text-9xl text-center"
    >
      <MarqueeBackground />

      <FadeInX direction="right" delay={0.4}>
        <p className="moving-paragraph relative">
          WE CREATE
        </p>
      </FadeInX>

      <FadeInX direction="left" delay={0.8}>
        <p className="moving-paragraph relative">
          BRANDS AND IP&apos;S
        </p>
      </FadeInX>

      <FadeInX direction="right" delay={1.2}>
      <p className="moving-paragraph relative">
        WE ARE KITBAG JOURNEY
      </p>
      </FadeInX>

    </section>
  );
};

export default MovingBanner;
