import ServiceCard from "../components/ServiceCard";
import { useDragScroll } from "../hooks/useDragScroll";
import { useEffect } from "react";
import FadeInX from "../animations/FadeInX";
import { section } from "framer-motion/client";

const ServicesSection = () => {
  const { ref, handlers, isDragging } = useDragScroll();

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const scrollStep = 280;
    const interval = setInterval(() => {
      if (isDragging.current) return;

      const maxScroll =
        container.scrollWidth - container.clientWidth;

      if (container.scrollLeft >= maxScroll - 10) {
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        container.scrollBy({
          left: scrollStep,
          behavior: "smooth",
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  //   return (
  //     <section className="w-full relative py-20" >

  //       <div
  //     class="absolute top-1/2 -z-10 left-1/2 h-[100%] w-[100%]
  //            -translate-x-1/2 -translate-y-1/2
  //            bg-white/5
  //            rounded-full
  //            blur-[160px]"
  //   ></div>


  //       <h1 className="text-4xl text-center font-bold items-center text-yellow-400 mb-8">OUR SERVICES</h1>
  //       <FadeInX direction="right" delay={0.4}>

  //         <div className="flex whitespace-nowrap px-8 lg:px-12 gap-10 space-x-8 my-8 lg:mx-0 scrollbar-hide overflow-x-auto cursor-grab active:cursor-grabbing" ref={ref} {...handlers}>
  //           <ServiceCard img='/assets/services/player_management_cover.jpg' title="Player Management" link={"athlete-management"} />
  //           <ServiceCard img='/assets/services/cricket_league_management_cover.webp' title="Cricket League Management" link={"cricket-league-management"} />
  //           <ServiceCard img='/assets/services/branding_pr_cover.jpg' title="Branding & PR" link={"branding&pr"} />
  //           <ServiceCard img='/assets/services/legal_consultancy_cover.webp' title="Legal Consultancy" link={"legal-consultancy"} />
  //           <ServiceCard img='/assets/services/it_services.webp' title="IT Services" link={"it-services"} />
  //         </div>
  //       </FadeInX>

  //     </section>
  //   )
  // }

  return (
    <section className="w-full relative grid gap-4 lg:gap-8 lg:grid-cols-8 lg:grid-rows-4 p-5">

      <div className=" relative row-span-2 col-span-4 px-8 py-5 bg-yellow-400 flex items-center justify-center rounded-xl">
        <h1 className="text-[clamp(2rem,6vw,9rem)] font-black items-center text-black">CORE SERVICES</h1>
      </div>


      <div className="flex items-center relative justify-center overflow-hidden rounded-xl row-span-4 col-span-2">
        <img src="/assets/services/player_management_cover.jpg" alt="" className="w-full h-full object-cover grayscale hover:grayscale-0"/>
        {/* <div className="absolute bottom-0 left-0 w-full h-[40%] z-10 bg-gradient-to-t from-yellow-400/70 via-yellow-400/30 to-transparent opacity-100  group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" /> */}
        <h2 className="absolute top-4 left-4 text-white font-bold md:text-xl xl:text-[clamp(2rem,1vw,9rem)]">ATHLETE MANAGEMENT</h2>
      </div>

      <div className="flex items-center relative justify-center row-span-2 col-span-2 text-white overflow-hidden rounded-lg">
        <img src="/assets/services/cricket_league_management_cover.webp" alt="" className="w-full h-full object-cover grayscale hover:grayscale-0" />
        {/* <div className="absolute bottom-0 left-0 w-full h-[40%] z-10 bg-gradient-to-t from-amber-500/70 via-amber-500/30 to-transparent opacity-100 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" /> */}
        <h2 className="absolute top-4 left-4 text-white font-bold md:text-xl xl:text-[clamp(2rem,1vw,9rem)]">CRICKET LEAGUE MANAGEMENT</h2>

      </div>

      <div className="relative flex items-center justify-center row-span-2 col-span-2 text-white overflow-hidden rounded-xl">
        <img src="/assets/services/branding_pr_cover.jpg" alt="" className="w-full h-full object-cover grayscale hover:grayscale-0" />
        {/* <div className="absolute bottom-0 left-0 w-full h-[40%] z-10 bg-gradient-to-t from-green-500/70 via-green-500/30 to-transparent opacity-100  group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" /> */}
        <h2 className="absolute top-4 left-4 text-white font-bold md:text-xl xl:text-[clamp(2rem,1vw,9rem)]">BRANDING & PR</h2>

      </div>

      <div className="relative flex items-center justify-center row-span-2 col-span-2 text-white overflow-hidden rounded-xl">
        <img src="/assets/services/legal_consultancy_cover.webp" alt="" className="w-full h-full object-cover grayscale hover:grayscale-0" />
        {/* <div className="absolute bottom-0 left-0 w-full h-[40%] z-10 bg-gradient-to-t from-blue-500/70 via-blue-500/30 to-transparent opacity-100 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" /> */}
        <h2 className="absolute top-4 left-4 text-white font-bold md:text-xl xl:text-[clamp(2rem,1vw,9rem)]">LEGAL CONSULTANCY</h2>

      </div>

      <div className="flex relative items-center justify-center row-span-2 col-span-2 text-white overflow-hidden rounded-xl">
        <img src="/assets/services/IT-Services.jpg" alt="" className="w-full h-full object-cover grayscale hover:grayscale-0" />
        {/* <div className="absolute bottom-0 left-0 w-full h-[40%] z-10 bg-gradient-to-t from-purple-500/70 via-purple-500/30 to-transparent opacity-100 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" /> */}
        <h2 className="absolute top-4 left-4 text-white font-bold md:text-xl xl:text-[clamp(2rem,1vw,9rem)]">IT SERVICES</h2>

      </div>


    </section>
  )
}

export default ServicesSection
