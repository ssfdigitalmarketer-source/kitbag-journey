import ServiceCard from "../components/ServiceCard";
import { useDragScroll } from "../hooks/useDragScroll";
import { useEffect } from "react";
import FadeInX from "../animations/FadeInX";

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

  return (
    <section className="w-full relative py-20" style={{ backgroundImage: `linear-gradient(to right, #434343 0%, black 100%);` }} >
      
      <div
    class="absolute top-1/2 left-1/2 h-[500px] w-[500px]
           -translate-x-1/2 -translate-y-1/2
           bg-white/20
           rounded-full
           blur-[160px]"
  ></div>
  

      <h1 className="text-4xl text-center items-center text-yellow-400 mb-8">OUR SERVICES</h1>
      <FadeInX direction="right" delay={0.4}>

        <div className="flex whitespace-nowrap px-8 lg:px-12 gap-10 space-x-8 my-8 lg:mx-0 scrollbar-hide overflow-x-auto cursor-grab active:cursor-grabbing" ref={ref} {...handlers}>
          <ServiceCard img='/assets/services/player_management_cover.jpg' title="Player Management" link={"athlete-management"} />
          <ServiceCard img='/assets/services/cricket_league_management_cover.webp' title="Cricket League Management" link={"cricket-league-management"} />
          <ServiceCard img='/assets/services/branding_pr_cover.jpg' title="Branding & PR" link={"branding&pr"} />
          <ServiceCard img='/assets/services/legal_consultancy_cover.webp' title="Legal Consultancy" link={"legal-consultancy"} />
          <ServiceCard img='/assets/services/it_services.webp' title="IT Services" link={"it-services"} />
        </div>
      </FadeInX>

    </section>
  )
}

export default ServicesSection
