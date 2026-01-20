import ServiceCard from "../components/ServiceCard";
import bg from '../assets/bg.jpg';
import { useDragScroll } from "../hooks/useDragScroll";
import { useEffect } from "react";

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
    <section className="w-full py-20 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${bg})` }}>
      <div className="flex whitespace-nowrap px-8 lg:px-12 gap-10 space-x-8 my-8 lg:mx-0 scrollbar-hide overflow-x-auto cursor-grab active:cursor-grabbing" ref={ref} {...handlers}>
        <ServiceCard img='https://res.cloudinary.com/dwmmlrpgg/image/upload/v1768631738/service_h5odoj.jpg' title="Player Management" link={"athlete-management"}/>
        <ServiceCard img='https://res.cloudinary.com/dwmmlrpgg/image/upload/v1768631787/service2_q8sjvo.jpg' title="Social Media and P.R" link={"social-media&pr"} />
        <ServiceCard img='https://res.cloudinary.com/dwmmlrpgg/image/upload/v1768631645/service3_dyonnu.jpg' title="Event Management" link={"event-management"}/>
        <ServiceCard img='https://res.cloudinary.com/dwmmlrpgg/image/upload/v1768631845/service4_xlxk51.jpg' title="Legal Consultancy" link={"legal-consultancy"} />
        <ServiceCard img='https://res.cloudinary.com/dwmmlrpgg/image/upload/v1768914345/male-data-scientist-works-on-personal-computer-wea-2026-01-09-10-11-30-utc_wdsuz6.jpg' title="IT Services" link={"it-services"} />
      </div>
    </section>
  )
}

export default ServicesSection
