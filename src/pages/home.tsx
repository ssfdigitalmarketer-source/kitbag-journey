import { useEffect, useRef, useState } from "react";
import PlayerSection from "../components/PlayerSection";
import video from "../assets/cricket-video.mp4";
import serviceImg from "../assets/service.jpg";
import serviceImg2 from "../assets/service2.jpg";
import serviceImg3 from "../assets/service3.jpg";
import serviceImg4 from "../assets/service4.jpg";
import ServiceCard from "../components/ServiceCard";
import playerImg from "../assets/players/virat-singh.jpeg";
import playerImg2 from "../assets/players/virat-singh.jpeg";
import rightArrow from '../assets/right-arrow.svg';
import TestimonialCard from "../components/TestimonialCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MovingBanner from "../components/MovingBanner";
import logo from "../assets/kitbag-logo.svg"
import NewsCard from "../components/NewsCard";
import CTAButton1 from "../components/CTAButton1";
import HeroHeadline from "../animations/HeroHeadline";
import FadeInLeftToRight from "../animations/FadeInLeftToRight";
import stadiumVideo from "../assets/stadium.mp4";
import ContactUs from "../components/ContactUs";
import shIm from "../assets/sh-sirImage.JPG"
import testimonialBackground from "../assets/testimonialBackground1.jpg"
import { Link } from "react-router";


const Home = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  const [showMenu, setShowMenu] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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
      <Navbar showMenu={showMenu} />
      <img
        src={logo}
        alt="Kitbag Logo"
        className="h-[100px] mr-5 absolute top-0 z-20 lg:z-50 left-1 lg:h-[150px]"
      />

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
            src={video}
            autoPlay
            muted
            loop
            className="w-[50%] transition-transform duration-500"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full px-5 py-20 bg-[url('./assets/bg.jpg')] bg-no-repeat bg-cover">
        <div className="overflow-hidden w-full py-4">
          <div className="flex whitespace-nowrap w-max animate-marquee-right">
            <span className="text-white text-3xl md:text-2xl mr-8">
              PROMOTING TALENT • PROMOTING TALENT • PROMOTING TALENT •
            </span>
            <span className="text-white text-3xl md:text-2xl mr-8">
              PROMOTING TALENT • PROMOTING TALENT • PROMOTING TALENT •
            </span>
            <span className="text-white text-3xl md:text-2xl mr-8">
              PROMOTING TALENT • PROMOTING TALENT • PROMOTING TALENT •
            </span>
            <span className="text-white text-3xl md:text-2xl mr-8">
              PROMOTING TALENT • PROMOTING TALENT • PROMOTING TALENT •
            </span>
          </div>
        </div>

        <div className="flex gap-3 flex-col my-8 lg:flex-row lg:mx-0">
          <ServiceCard img={serviceImg} title="Player Management" text="We represent athletes with complete dedication and ensure they are showcased
correctly in the global sports market."/>
          <ServiceCard img={serviceImg2} title="Social Media and P.R" text="From media appearances to digital identity, we help develop an impactful personal
brand."/>
          <ServiceCard img={serviceImg3} title="Event Management" text="We source high-value commercial opportunities and negotiate deals that match
athlete potential"/>
          <ServiceCard img={serviceImg4} title="Legal Consultancy" text="We support athletic growth through expert mentoring & professional environment
building.
" />
        </div>

        <div className="flex mx-auto justify-center items-center space-x-2 cursor-pointer">
          <p className="text-center text-xl font-sans">View More </p>
          <img src={rightArrow} alt="Right Arrow" className="w-6 h-6 invert" />
        </div>


      </section>


      {/* About Section */}

      <section className=" px-5">
        <FadeInLeftToRight>
          <div className="space-y-10 font-bold font-sans text-2xl text-center mx-auto lg:w-[70%] lg:text-2xl">
            <p className="italic"><span className="text-yellow-400">" </span>EVERY <span className="text-yellow-400">TALENT</span> NEEDS RIGHT GUIDANCE AND <span className="text-yellow-400">PROFESSIONAL</span> TEAM BOTH ON AND OFF THE FIELD IN SHAPING THEIR <span className="text-yellow-400">CAREER</span>.</p>
            <p className="italic">WE ARE LEAVING NO STONE UNTURNED AND MAKING SURE EVERY <span className="text-yellow-400">SPORTS</span> TALENT <span className="text-yellow-400">REACH</span> THEIR FULL <span className="text-yellow-400">POTENTIAL</span>.<span className="text-yellow-400"> "</span></p>
            <div>
              <p className="text-sm font-oswald lg:text-xl">SHAHBAZ NADEEM</p>
              <p className="text-yellow-500 text-xs lg:text-sm">MENTOR, KITBAG JOURNEY.</p>
            </div>
          </div>
        </FadeInLeftToRight>
      </section>



      <section className="px-5 text-xl font-semibold bg-[url('./assets/bg.jpg')] text-left bg-no-repeat bg-cover">

        <div className="space-y-5 px-5 my-20 text-center lg:flex lg:text-left">
          <div className="w-full h-[50vh] overflow-hidden lg:h-[80vh] lg:w-1/2">
            <div className="lg:w-[80%] h-full">
              <img src={shIm} alt="" className="h-full object-cover grayscale mx-auto hover:grayscale-0" />

            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-4 flex-col justify-center lg:flex">
            <h1 className="text-3xl text-yellow-500 lg:text-6xl">WELCOME TO KITBAG JOURNEY.</h1>
            <h2 className="text-xl lg:text-3xl font-regular">AN ATHLETE MANAGEMENT COMPANY</h2>
            <p className="font-sans text-lg">Kitbag Journey, is solely a sports management and consultancy firm conceptualized in the year 2023 by Sikandar Heyat, who himself is a former cricketer & sport management professional with industry experience of more than 10 years. </p>
            <p className="font-sans text-lg">Our athlete management framework brings together elite professionals across
              performance, branding, legal, and commercial domains. We help athletes unlock
              career milestones through strategic guidance tailored to their ambitions.</p>

            <button className="px-8 py-4 border-2 border-white lg:w-[25%] hover:bg-white hover:text-black transition-all duration-300">ABOUT US</button>
          </div>

        </div>

      </section>


      <MovingBanner />

      <section className="bg-[#090909] relative px-5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            src={stadiumVideo}
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

      <section className="lg:px-32 relative py-20">
        <div className="w-full h-full inset-0 overflow-hidden absolute top-0 left-0 z-0">
          <img src={testimonialBackground} alt="testimonial background" className="object-cover w-full h-full" />
          <div className="
    absolute inset-0
    bg-gradient-to-r
    from-black
    via-black
    via-[30%]
    to-transparent
  " />
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
              <TestimonialCard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. olore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat" />
              <TestimonialCard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. o" />
              <TestimonialCard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, em ipsum dolor sit amet, consectetur adipiscing elit," />
            </div>
          </div>

          <button className="absolute top-1/2 left-0 opacity-30 lg:opacity-0 rounded-full p-2 bg-white group-hover:opacity-30 hover:bg-yellow-500 transition-all duration-300 ease-in-out" onClick={moveLeft} ><img src={rightArrow}
            alt="left-arrow" className="cursor-pointer transform rotate-180" />
          </button>

          <button className="rounded-full absolute opacity-30 lg:opacity-0 top-1/2 right-0 p-2 bg-white group-hover:opacity-30 hover:bg-yellow-500 transition-all duration-300 ease-in-out" onClick={moveRight} ><img src={rightArrow} alt="right-arrow" className="cursor-pointer" />
          </button>


        </div>

      </section>


      <section className="px-5 mt-6 space-y-6 py-20 ">
        <h1 className="text-yellow-500 text-4xl text-center">LATEST BLOGS</h1>
        <div className="justify-evenly lg:flex">
          <NewsCard image={playerImg} description="Virat Singh gets selected in IPL" date="2024-05-15" />
          <NewsCard image={playerImg2} description=" simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the" date="2024-05-10" />
          <NewsCard image={playerImg2} description=" simply dummy text of the printinpsum has been the industry's standard dummy text ever" date="2024-05-10" />

        </div>
      </section>
      <Footer />

      <div className="w-full overflow-hidden text-center">
        <h1 className="whitespace-nowrap font-bold text-[13vw] leading-none relative -bottom-2 lg:-bottom-10">
          KITBAG JOURNEY
        </h1>
      </div>

    </div>
  );
};

export default Home;
