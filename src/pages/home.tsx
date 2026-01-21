import { useEffect, useRef, useState } from "react";
import bg from '../assets/bg.jpg'
import PlayerSection from "../sections/PlayerSection";
import TestimonialCard from "../components/TestimonialCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MovingBanner from "../sections/MovingBanner";
import CTAButton1 from "../sections/CTAButton1";
import HeroHeadline from "../animations/HeroHeadline";
import FadeInLeftToRight from "../animations/FadeInLeftToRight";
import ServicesSection from "../sections/ServicesSection";
import BlogSection from "../sections/blogSection";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { useNavigate } from "react-router";

const Home = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  const [showMenu, setShowMenu] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();

  const slideRef = useRef<HTMLDivElement | null>(null);

  function moveRight() {
    if (!slideRef.current) return;

    const slideWidth = slideRef.current.children[0].clientWidth;
    const totalSlides = slideRef.current.children.length;

    const nextIndex = Math.min(currentIndex + 1, totalSlides - 1);

    slideRef.current.style.transform = `translateX(-${slideWidth * nextIndex}px)`;
    setCurrentIndex(nextIndex);
  }


  function moveLeft() {
    if (!slideRef.current) return;

    const slideWidth = slideRef.current.children[0].clientWidth;
    const prevIndex = Math.max(currentIndex - 1, 0);

    slideRef.current.style.transform = `translateX(-${slideWidth * prevIndex}px)`;
    setCurrentIndex(prevIndex);
  }



  useEffect(() => {
    const wrapper = wrapperRef.current;
    const videoEl = videoRef.current;
    const section = sectionRef.current;

    if (!wrapper || !videoEl || !section) return;


    const observer = new IntersectionObserver(
      ([entry]) => {
        // entry.isIntersecting === false means fully out of viewport
        setShowMenu(entry.isIntersecting);
        console.log(showMenu);

      },
      {
        root: null,        // viewport
        threshold: 0,      // triggers when fully out
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);



    const setStickyTop = () => {
      const rect = videoEl.getBoundingClientRect();
      const videoHeight = rect.height || videoEl.offsetHeight || 0;

      wrapper.style.position = "sticky";
      wrapper.style.top = `calc(50vh - ${videoHeight / 2}px)`;
      wrapper.style.zIndex = "20";
      wrapper.style.display = "flex";
      wrapper.style.justifyContent = "center";
      wrapper.style.marginTop = "2rem";
    };

    videoEl.addEventListener("loadedmetadata", setStickyTop);
    window.addEventListener("resize", setStickyTop);
    requestAnimationFrame(setStickyTop);

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      let progress =
        (-rect.top + windowHeight * 0.1) /
        (section.offsetHeight - windowHeight * 0.1);

      progress = Math.min(Math.max(progress, 0), 1);

      const isMobile = window.innerWidth < 768;

      const maxScale = isMobile ? 2 : 1.8;
      const speed = isMobile ? 2 : 1.8;

      const scale = Math.min(1 + progress * speed, maxScale);

      videoEl.style.transform = `scale(${scale})`;
      videoEl.style.transition = "transform 0.3s ease-out";
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      videoEl.removeEventListener("loadedmetadata", setStickyTop);
      window.removeEventListener("resize", setStickyTop);
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="w-full relative">
      {/* Navbar */}
      <Navbar  />
      {/* <img
        src='https://res.cloudinary.com/dwmmlrpgg/image/upload/v1768632392/kitbag-logo_fmwuly.svg'
        alt="Kitbag-Logo"
        className="h-[100px] mr-5 absolute top-0 z-20 lg:z-50 left-1 lg:h-[150px]"
      /> */}

      {/* Hero section */}
      <section
        ref={sectionRef}
        className="w-full py-10 px-5 text-center relative
                   h-[60vh] lg:h-[200vh] lg:px-20 lg:pb-40
                    bg-no-repeat bg-cover"
      >
        <h1
          ref={headingRef}
          className="text-[8vh] mx-auto font-extrabold mt-[10px] text-white lg:text-[11vw]"
        >
          <HeroHeadline text="PROMOTING TALENT" />
        </h1>

        {/* Sticky video wrapper */}
        <div ref={wrapperRef} className="w-full flex justify-center">
          <video
            ref={videoRef}
            src="https://res.cloudinary.com/dwmmlrpgg/video/upload/v1768981037/0121_1_o7qzgk.mp4"
            autoPlay
            muted
            loop
            className="w-[50%] transition-transform duration-500"
          />
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />


      {/* About Section */}
      <section className="overflow-hidden relative py-4 lg:py-20">
        <img src="https://res.cloudinary.com/dwmmlrpgg/image/upload/v1768989994/lucid-origin_White_twisted_rope_lying_on_dewy_green_grass_field_in_morning_light-0.jpg_kgu35x.jpg" alt="" className="w-full object-fill absolute top-0 grayscale" />
        <FadeInLeftToRight>
          <div className="px-4 space-y-10 font-bold font-sans text-md text-center mx-auto lg:w-[70%] relative z-10 lg:text-2xl">
            <p className="italic"><span className="text-yellow-400">" </span>EVERY <span className="text-yellow-400">TALENT</span> NEEDS RIGHT GUIDANCE AND <span className="text-yellow-400">PROFESSIONAL</span> TEAM BOTH ON AND OFF THE FIELD IN SHAPING THEIR <span className="text-yellow-400">CAREER</span>.</p>
            <p className="italic">WE ARE LEAVING NO STONE UNTURNED AND MAKING SURE EVERY <span className="text-yellow-400">SPORTS</span> TALENT <span className="text-yellow-400">REACH</span> THEIR FULL <span className="text-yellow-400">POTENTIAL</span>.<span className="text-yellow-400"> "</span></p>
            <div>
              <p className="text-sm font-oswald lg:text-xl">SHAHBAZ NADEEM</p>
              <p className="text-yellow-500 text-xs lg:text-sm">MENTOR, KITBAG JOURNEY.</p>
            </div>
          </div>
        </FadeInLeftToRight>
      </section>


      <section className="px-5 text-xl font-semibold text-left bg-no-repeat bg-cover" style={{ backgroundImage: `url(${bg})` }}>

        <div className="space-y-5 px-5 my-20 text-center lg:flex lg:text-left">
          <div className="w-full h-[50vh] overflow-hidden lg:h-[80vh] lg:w-1/2">
            <div className="lg:w-[80%] h-full">
              <img src='https://res.cloudinary.com/dwmmlrpgg/image/upload/v1768632490/sh-sirImage_pb0kj3.jpg' alt="" className="h-full object-cover grayscale mx-auto hover:grayscale-0" />

            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-4 flex-col relative lg:-top-14 justify-center lg:flex">
            <h1 className="text-3xl text-yellow-500 lg:text-6xl">WELCOME TO KITBAG JOURNEY</h1>
            <h2 className="text-xl lg:text-3xl font-regular">AN ATHLETE MANAGEMENT COMPANY</h2>
            <p className="font-sans text-lg">Kitbag Journey, is solely a sports management and consultancy firm conceptualized in the year 2023 by Sikandar Heyat, who himself is a former cricketer & sport management professional with industry experience of more than 10 years. </p>
            <p className="font-sans text-lg">Our athlete management framework brings together elite professionals across
              performance, branding, legal, and commercial domains. We help athletes unlock
              career milestones through strategic guidance tailored to their ambitions.</p>

            <button className="group relative overflow-hidden font-oswald px-8 py-4 mt-4 text-lg bg-yellow-500 text-black skew-x-[-12deg] transition-transform duration-300 ease-in-out lg:w-[30%]" onClick={() => navigate('/about')}>
              {/* White fill layer */}
              <span className="absolute inset-0 bg-white scale-x-0 origin-center transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>

              {/* Button text */}
              <span className="relative z-10">ABOUT US</span>
            </button>
          </div>

        </div>

      </section>


      <MovingBanner />

      <section className="bg-[#090909] relative px-5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            src="https://res.cloudinary.com/dwmmlrpgg/video/upload/v1768977680/0121_kmxaaw.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover grayscale brightness-50"
          />
        </div>

        <div className="relative z-10">
          <CTAButton1 />
        </div>
      </section>

      {/* players section */}
      <PlayerSection />


      <div className="overflow-hidden w-full py-4">
        <div className="flex whitespace-nowrap w-max animate-marquee-right">
          <span className="text-white text-xl md:text-2xl mr-8">
            AMIT KUMAR SELECTED FOR IPL  • AMIT KUMAR SELECTED FOR IPL • AMIT KUMAR SELECTED FOR IPL •
          </span>
          <span className="text-white text-xl md:text-2xl mr-8">
            AMIT KUMAR SELECTED FOR IPL  • AMIT KUMAR SELECTED FOR IPL • AMIT KUMAR SELECTED FOR IPL •

          </span>
          <span className="text-white text-xl md:text-2xl mr-8">
            AMIT KUMAR SELECTED FOR IPL  • AMIT KUMAR SELECTED FOR IPL • AMIT KUMAR SELECTED FOR IPL •

          </span>
          <span className="text-white text-xl md:text-2xl mr-8">
            AMIT KUMAR SELECTED FOR IPL  • AMIT KUMAR SELECTED FOR IPL • AMIT KUMAR SELECTED FOR IPL •

          </span>
        </div>
      </div>

      <section className="px-5 lg:px-32 relative py-20 group">
        <div className="w-full h-full inset-0 overflow-hidden absolute top-0 left-0 z-0">
          <img src='https://res.cloudinary.com/dwmmlrpgg/image/upload/v1768632570/testimonialBackground1_j7khty.jpg' alt="testimonial background" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black via-[30%] to-transparent" />
        </div>
        <div className="relative space-y-10 group">
          <h1 className="text-yellow-500 text-4xl">
            TESTIMONIALS
          </h1>
          <h1 className="text-6xl">
            WHAT OUR CLIENTS SAY
          </h1>

          <div className="overscroll-x-contain overflow-hidden">
            <div className="flex lg:w-full transition-all duration-300 ease-in-out" ref={slideRef}>
              <TestimonialCard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. olore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat" img="https://res.cloudinary.com/dwmmlrpgg/image/upload/v1768632786/testimonialImage_tdlohi.jpg" />
              <TestimonialCard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. o" img="https://res.cloudinary.com/dwmmlrpgg/image/upload/v1768632786/testimonialImage_tdlohi.jpg" />
              <TestimonialCard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, em ipsum dolor sit amet, consectetur adipiscing elit," img="https://res.cloudinary.com/dwmmlrpgg/image/upload/v1768632786/testimonialImage_tdlohi.jpg" />
            </div>
          </div>



        </div>
        <button className="absolute top-1/2 left-0 lg:left-10 opacity-30 lg:opacity-0 rounded-full p-2 bg-white group-hover:opacity-30 hover:bg-yellow-500 transition-all duration-300 ease-in-out" onClick={moveLeft} ><SlArrowLeft className="text-black"/>
        </button>

        <button className="rounded-full absolute opacity-30 lg:opacity-0 top-1/2 right-0 lg:right-10 p-2 bg-white group-hover:opacity-30 hover:bg-yellow-500 transition-all duration-300 ease-in-out" onClick={moveRight} ><SlArrowRight className="text-black"/>
        </button>

      </section>

      <BlogSection />

      <section className="relative py-20 px-5 text-center overflow-hidden">

  {/* Watermark */}
  <svg
    className="absolute inset-0 w-full h-full opacity-[0.05]"
    preserveAspectRatio="none"
  >
    <defs>
      <pattern
        id="kitbagPattern"
        width="1100"
        height="200"     // ← EXACT MULTIPLE
        patternUnits="userSpaceOnUse"
      >
        <g
          fontSize="64"
          fontWeight="800"
          fill="white"
          dominantBaseline="hanging"
        >
          {/* Row 1 */}
          <text x="50" y="0">
            KITBAG&nbsp;&nbsp;&nbsp;JOURNEY&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            KITBAG&nbsp;&nbsp;&nbsp;JOURNEY&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            KITBAG&nbsp;&nbsp;&nbsp;JOURNEY
          </text>

          {/* Row 2 (shifted) */}
          <text x="-300" y="100">
            KITBAG&nbsp;&nbsp;&nbsp;JOURNEY&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            KITBAG&nbsp;&nbsp;&nbsp;JOURNEY&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            KITBAG&nbsp;&nbsp;&nbsp;JOURNEY
          </text>
        </g>
      </pattern>
    </defs>

    <rect width="100%" height="100%" fill="url(#kitbagPattern)" />
  </svg>

  {/* Content */}
  <div className="relative z-10 space-y-8">
    <h1 className="text-2xl lg:text-5xl text-yellow-500">
      READY TO TAKE YOUR CAREER TO NEXT LEVEL?
    </h1>

    <p className="lg:text-xl font-sans">
      Our scouts are always looking for the next generation of elite talent.
      Send us your portfolio and let's discuss your future today.
    </p>

    <button className="px-6 py-4 border bg-white font-sans text-black rounded-lg uppercase">
      Apply for Representation
    </button>
  </div>

</section>

      <Footer />
    </div>
  );
};

export default Home;
