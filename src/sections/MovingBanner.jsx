import MarqueeBackground from "../animations/MarqueeBackground";
import { useRef } from "react";
import FadeInX from "../animations/FadeInX";

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
      className="relative overflow-hidden px-5 py-14 text-3xl font-bold lg:py-20 lg:text-9xl text-center"
    >
      <MarqueeBackground />

      {/* <div className="h-full bg-yellow-400 w-[30px]"></div> */}

      <div>
      <FadeInX direction="left" delay={0.4}>
        <p className="moving-paragraph relative">
          WE CREATE
        </p>
      </FadeInX>

      <FadeInX direction="left" delay={0.8}>
        <p className="moving-paragraph relative">
          BRANDS AND IP&apos;S
        </p>
      </FadeInX>

      <FadeInX direction="left" delay={1.2}>
      <p className="moving-paragraph relative">
        WE ARE KITBAG JOURNEY
      </p>
      </FadeInX>

      </div>

    </section>
  );
};

export default MovingBanner;
