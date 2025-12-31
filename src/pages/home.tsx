import { useEffect, useRef, useState } from "react";
import video from "../assets/cricket-video.mp4";
import serviceImg from "../assets/service.jpg";
import serviceImg2 from "../assets/service2.png";
import serviceImg3 from "../assets/service3.jpg";
import serviceImg4 from "../assets/service4.jpg";
import ServiceCard from "../components/ServiceCard";
import PlayerCard from "../components/PlayerCard";
import playerImg from "../assets/playerImage.jpeg"
import playerImg2 from "../assets/playerImage2.jpeg"
import playerImg3 from "../assets/playerImage3.jpeg"
import playerImg4 from "../assets/playerImage4.jpeg"
import cricketImg from "../assets/cricket-image.jpg"
import rightArrow from '../assets/right-arrow.svg'
import TestimonialCard from "../components/TestimonialCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MovingBanner from "../components/MovingBanner";
import logo from "../assets/kitbag-logo.svg"
import NewsCard from "../components/NewsCard";
import CTAButton1 from "../components/CTAButton1";


const Home = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  const [showMenu, setShowMenu] = useState(false);

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
        className="h-[100px] mr-5 absolute top-0 z-10 left-1 lg:h-[150px]"
      />

      {/* Hero section */}
      <section
        ref={sectionRef}
        className="w-full py-10 px-5 text-center relative
                   h-[60vh] lg:h-[200vh] lg:px-20 lg:pb-40
                   bg-[url('./assets/bg.jpg')] bg-no-repeat bg-cover"
      >
        <h1
          ref={headingRef}
          className="text-[8vh] mx-auto font-extrabold mt-[10px] text-white lg:text-[11vw] "
        >
          PROMOTING TALENT
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


      {/* About Section */}
      <section className="py-20 space-y-32 px-8 text-xl font-semibold bg-[url('./assets/bg.jpg')] text-left bg-no-repeat bg-cover">

        <div className=" space-y-10 mx-auto lg:w-[70%] lg:text-5xl">
          <p className="">EVERY <span className="text-yellow-400">TALENT</span> NEEDS RIGHT GUIDANCE AND <span className="text-yellow-400">PROFESSIONAL</span> TEAM BOTH ON AND OFF THE FIELD IN SHAPING THEIR <span className="text-yellow-400">CAREER</span>.</p>
          <p>WE ARE LEAVING NO STONE UNTURNED AND MAKING SURE EVERY <span className="text-yellow-400">SPORTS</span> TALENT <span className="text-yellow-400">REACH</span> THEIR FULL <span className="text-yellow-400">POTENTIAL.</span></p>
          <div>
            <p className="text-lg lg:text-2xl">Shahbaz Nadeem</p>
            <p className="text-yellow-500 text-xs lg:text-sm">MENTOR, KITBAG JOURNEY.</p>
          </div>
        </div>

        <div className="space-y-5 my-20 text-center lg:flex lg:text-left">
          <div className="w-full h-[50vh] overflow-hidden lg:h-[80vh] lg:w-1/2"><img src={cricketImg} alt="" className="h-full object-contain grayscale mx-auto hover:grayscale-0" /></div>

          <div className="w-full px-5 lg:w-1/2 space-y-4 flex-col justify-center lg:flex">
            <p className="text-yellow-500 text-xs lg:text-lg">WELCOME TO FUTURE</p>
            <p className="text-3xl lg:text-6xl">WELCOME TO KITBAG JOURNEY.
              AN ATHLETE MANAGEMENT COMPANY.
            </p>
            <button className="px-8 py-4 border-2 border-white lg:w-[25%] hover:bg-white hover:text-black transition-all duration-300">ABOUT US</button>
          </div>

        </div>

      </section>

      <section className="bg-[#090909] px-5">
        <CTAButton1 />
      </section>

      {/* Services Section */}
      <section className="w-full px-5 py-20 bg-[url('./assets/bg.jpg')] bg-no-repeat bg-cover">

        <h1 className="text-4xl text-yellow-500 text-center">WHAT WE MANAGE</h1>


        <div className="flex gap-3 flex-col my-8 lg:flex-row lg:mx-0">
          <ServiceCard img={serviceImg} title="Career Representation" text="We represent athletes with complete dedication and ensure they are showcased
correctly in the global sports market."/>
          <ServiceCard img={serviceImg2} title="Brand & Image Positioning" text="From media appearances to digital identity, we help develop an impactful personal
brand."/>
          <ServiceCard img={serviceImg3} title="Endorsement & Sponsorship Deals" text="We source high-value commercial opportunities and negotiate deals that match
athlete potential"/>
          <ServiceCard img={serviceImg4} title="Mentorship & Skill Advisory" text="We support athletic growth through expert mentoring & professional environment
building.
" />
        </div>

        <div className="flex mx-auto justify-center items-center space-x-2 cursor-pointer">
          <p className="text-center text-xl font-sans">View More </p>
          <img src={rightArrow} alt="Right Arrow" className="w-6 h-6 invert" />
        </div>


      </section>


      {/* Banner  */}
      {/* <section className="w-full my-10 py-28 text-2xl px-3 h-[10vh] lg:h-[60vh] font-bold lg:text-[10vh] flex flex-col lg:space-y-32 lg:px-20">

        <p className="text-left">WE CREATE</p>
        <p className="text-right">BRANDS AND IP'S</p>
        <p className="text-center">WE ARE KITBAG JOURNEY</p>

      </section> */}
      <MovingBanner />


      {/* players section */}
      <section className="w-full py-20 space-y-10 px-5">
        <h1 className="text-4xl text-yellow-500 text-center">OUR PLAYERS</h1>

        <div className="overflow-x-auto overscroll-x-contain">
          <div className="whitespace-nowrap space-x-3 lg:flex">
            <PlayerCard img={playerImg} title="Virat Singh" />
            <PlayerCard img={playerImg2} title="Virat Singh" />
            <PlayerCard img={playerImg3} title="Virat Singh" />
            <PlayerCard img={playerImg4} title="Virat Singh" />
          </div>
        </div>
        <div className="w-[30%] mx-auto justify-between flex invert lg:hidden"><img src={rightArrow} alt="" className="transform rotate-180" /><img src={rightArrow} alt="" /></div>
        <div className="overflow-hidden w-full py-4">
          <div className="flex whitespace-nowrap w-max animate-marquee-right">
            <span className="text-white text-xl md:text-2xl mr-8">
              PROMOTING TALENT • PROMOTING TALENT • PROMOTING TALENT •
            </span>
            <span className="text-white text-xl md:text-2xl mr-8">
              PROMOTING TALENT • PROMOTING TALENT • PROMOTING TALENT •
            </span>
            <span className="text-white text-xl md:text-2xl mr-8">
              PROMOTING TALENT • PROMOTING TALENT • PROMOTING TALENT •
            </span>
            <span className="text-white text-xl md:text-2xl mr-8">
              PROMOTING TALENT • PROMOTING TALENT • PROMOTING TALENT •
            </span>
          </div>
        </div>
      </section>

      <section className="px-5">
        <div className="space-y-10">
          <h1 className="text-yellow-500 text-4xl text-center">
            TESTIMONIALS
          </h1>
          <h1 className="text-center text-5xl">
            WHAT OUR CLIENTS SAY
          </h1>

          <div className="overflow-x-auto overscroll-x-contain lg:overflow-visible">
            <div className="flex gap-10 w-max lg:w-full lg:justify-around">
              <TestimonialCard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. olore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat" />
              <TestimonialCard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. o" />
              <TestimonialCard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, em ipsum dolor sit amet, consectetur adipiscing elit," />
            </div>
          </div>
          <div className="w-[30%] mx-auto justify-between flex invert lg:hidden"><img src={rightArrow} alt="" className="transform rotate-180" /><img src={rightArrow} alt="" /></div>
        </div>

      </section>


      <section className="px-5 mt-6 space-y-10 py-20">
        <h1 className="text-yellow-500 text-4xl text-center">LATEST NEWS</h1>
        <div className="justify-evenly lg:flex">
          <NewsCard image={playerImg} description="Virat Singh gets selected in IPL" date="2024-05-15" />
          <NewsCard image={playerImg2} description=" simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the" date="2024-05-10" />
          <NewsCard image={playerImg2} description=" simply dummy text of the printinpsum has been the industry's standard dummy text ever" date="2024-05-10" />
          <NewsCard image={playerImg2} description=" simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry" date="2024-05-10" />
        </div>
      </section>


      <section className="w-full my-20 py-20 space-y-7 px-5">
        <h1 className="text-yellow-500 text-4xl text-center">CONTACT US</h1>
        <p className="font-extralight font-sans text-center text-2xl">Let’s build a future that celebrates your passion.</p>
        <p className="font-extralight font-sans text-center text-2xl">Whether you are an athlete looking for representation or a brand seeking
          meaningful collaborations — we’re here to help.</p>
        <p className="font-extralight font-sans text-center text-2xl">Reach out and take the first step toward your dream career</p>

        <div className="text-lg justify-between lg:flex mx-auto lg:w-[40%]">
          <button className="text-white border-2 px-8 py-4 mt-4 hover:bg-white hover:text-black transition-all duration-300">JOIN US AS AN ATHLETE</button>
          <button>BUSINESS AND SPONSORSHIP INQUIRIES</button>
        </div>

      </section>


      {/* Footer */}
      <Footer />


    </div>
  );
};

export default Home;
