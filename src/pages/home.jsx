import { useEffect, useRef, useState } from "react";
import PlayerSection from "../sections/PlayerSection";
// import TestimonialCard from "../components/TestimonialCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MovingBanner from "../sections/MovingBanner";
import CTAButton1 from "../sections/CTAButton1";
import HeroHeadline from "../animations/HeroHeadline";
import FadeInLeftToRight from "../animations/FadeInLeftToRight";
import ServicesSection from "../sections/ServicesSection";
import BlogSection from "../sections/BlogSection";
import { useNavigate } from "react-router";
import FadeInX from "../animations/FadeInX";

const Home = () => {
  const videoRef = useRef(null);
  const wrapperRef = useRef(null);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  const [showMenu, setShowMenu] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();

  const slideRef = useRef(null);

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

      const maxScale = isMobile ? 2 : 1.6;
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
      <Navbar />

      {/* Hero section */}
      <section
        ref={sectionRef}
        className="w-full py-24 px-5 text-center relative
                   h-[70vh] lg:h-[210vh] top-0 lg:px-20 lg:pb-40
                    bg-no-repeat bg-fixed bg-center bg-cover "
        style={{ backgroundImage: `url("/assets/stadium.webp")` }}
      >
        <div class="absolute inset-0 bg-black/60"></div>

      <FadeInX direction="up">
        <h1
          ref={headingRef}
          className="text-[8vh] relative z-10 mx-auto font-extrabold mt-[10px] text-white lg:text-[11vw]"
        >
          PROMOTING TALENT
        </h1>

      </FadeInX>
        {/* <img src="/assets/stadium.jpg" alt="bg" className="fixed z-0 inset-0 grayscale" /> */}


        {/* Sticky video wrapper */}
        <div ref={wrapperRef} className="w-full flex justify-center">
          <video
            ref={videoRef}
            src="/assets/videos/hero_video.mp4"
            autoPlay
            muted
            loop
            className="w-[50%] transition-transform duration-500 "
          />
        </div>
      </section>

      {/* Services Section */}
      
        <ServicesSection />


      {/* About Section */}
      <section className="overflow-hidden relative py-10 lg:py-20">
        <img src="/assets/cricket_ball.webp" alt="bg" className="absolute inset-0 w-full h-full object-cover" />
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        >
          <source src="/assets/videos/stadium_video.mp4" type="video/mp4" />
        </video> */}

        {/* Overlay (optional) */}
        <div className="absolute inset-0 bg-black/60"></div>
        {/* <img src="https://res.cloudinary.com/dwmmlrpgg/image/upload/v1769588635/cricket_ball_background_ulkhdw.png" alt="" className="w-full scale-[2] h-full object-contain absolute top-0 brightness-50" /> */}
        <div className="px-2 space-y-3 lg:space-y-10 font-bold font-sans text-center mx-auto lg:w-[70%] relative z-10 lg:text-2xl">
          <p className="italic text-sm lg:text-2xl"><span className="">" </span>EVERY <span className="">TALENT</span> NEEDS RIGHT GUIDANCE AND <span className="">PROFESSIONAL</span> TEAM BOTH ON AND OFF THE FIELD IN SHAPING THEIR <span className="">CAREER</span>.</p>
          <p className="italic text-sm lg:text-2xl">WE ARE LEAVING NO STONE UNTURNED AND MAKING SURE EVERY <span className="">SPORTS</span> TALENT <span className="">REACH</span> THEIR FULL <span className="">POTENTIAL</span><span className=""> "</span></p>
          <div>
            <p className="text-xs font-oswald lg:text-xl">SHAHBAZ NADEEM</p>
            <p className="text-yellow-400 text-xs lg:text-sm">FORMER INDIAN CRICKETER, MENTOR, KITBAG JOURNEY.</p>
          </div>
        </div>
      </section>


      <section className="lg:px-5 py-2 relative text-left bg-no-repeat bg-cover">

        <img src="/assets/bg_black.webp" className="absolute inset-0 w-full h-full object-cover" alt="" loading="lazy" />

        <div className="space-y-5 px-5 my-20 text-center lg:flex lg:text-left">
          <div className="w-full h-[50vh] overflow-hidden lg:h-[80vh] lg:w-1/2">
            <div className="lg:w-[80%] h-full">
              <img src='/assets/team/sh.webp' alt="" className="h-full object-cover grayscale mx-auto hover:grayscale-0" />

            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-4 flex-col relative lg:-top-14 justify-center lg:flex" >
            <h1 className="text-3xl text-yellow-400 lg:text-6xl font-semibold">WELCOME TO KITBAG JOURNEY</h1>
            <h2 className="text-xl lg:text-3xl font-semibold">AN ATHLETE MANAGEMENT COMPANY</h2>
            <p className="font-sans text-xs lg:text-lg">Kitbag Journey, is solely a sports management and consultancy firm conceptualized in the year 2023 by Sikandar Heyat, who himself is a former cricketer & sport management professional with industry experience of more than 10 years.</p>
            {/* <p className="font-sans lg:text-lg">Our athlete management framework brings together elite professionals across performance, branding, legal, and commercial domains. We help athletes unlock career milestones through strategic guidance tailored to their ambitions.</p> */}

            <button className="group relative overflow-hidden font-oswald px-6 py-3 mt-4 text-lg bg-yellow-400 text-black skew-x-[-12deg] transition-transform duration-300 ease-in-out lg:w-[30%]" onClick={() => navigate('/about')}>
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
            src="/assets/videos/cricket_highlight.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover grayscale brightness-50"
            loading="lazy"
          />
        </div>

        <div className="relative z-10">
          <CTAButton1 />
        </div>
      </section>

      {/* players section */}

        <PlayerSection />


      <div className="overflow-hidden w-full py-4">
        <div className="flex whitespace-nowrap w-max animate-marquee-right [animation-duration:30s]">
          <span className="text-white text-xl md:text-3xl mr-8">
            AMIT KUMAR SELECTED FOR IPL  • VIRAT SINGH APPOINTED AS CAPTAIN OF JHARKHAND RANJI TEAM • SHIKHAR MOHAN SCORED DOUBLE CENTURY •
          </span>
          <span className="text-white text-xl md:text-3xl mr-8">
            AMIT KUMAR SELECTED FOR IPL  • VIRAT SINGH APPOINTED AS CAPTAIN OF JHARKHAND RANJI TEAM • SHIKHAR MOHAN SCORED DOUBLE CENTURY •


          </span>
          <span className="text-white text-xl md:text-3xl mr-8">
            AMIT KUMAR SELECTED FOR IPL  • VIRAT SINGH APPOINTED AS CAPTAIN OF JHARKHAND RANJI TEAM • SHIKHAR MOHAN SCORED DOUBLE CENTURY •

          </span>
          <span className="text-white text-xl md:text-3xl mr-8">
            AMIT KUMAR SELECTED FOR IPL  • VIRAT SINGH APPOINTED AS CAPTAIN OF JHARKHAND RANJI TEAM • SHIKHAR MOHAN SCORED DOUBLE CENTURY •

          </span>
        </div>
      </div>

      {/* <section className="px-5 lg:px-32 relative py-20 group">
        <div className="w-full h-full inset-0 overflow-hidden absolute top-0 left-0 z-0">
          <img src='https://res.cloudinary.com/dwmmlrpgg/image/upload/v1768632570/testimonialBackground1_j7khty.jpg' alt="testimonial background" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black via-[30%] to-transparent" />
        </div>
        <div className="relative space-y-10 group">
          <h1 className="text-yellow-400 text-4xl">
            TESTIMONIALS
          </h1>
          <div className="overscroll-x-contain overflow-hidden">
            <div className="flex lg:w-full transition-all duration-300 ease-in-out" ref={slideRef}>
              <TestimonialCard text="Managing a player growth is very tactical journey and I am happy that Kitbag Journey team is leaving no stone unturned to provide best support to the athletes" img="https://res.cloudinary.com/dwmmlrpgg/image/upload/v1768987152/WhatsApp_Image_2026-01-21_at_10.13.06_AM_ybdw2y.jpg" name="Shahbaaz Nadeem" title="Former India Test and IPL Player" />
              <TestimonialCard text="Team Kitbag Journey has all experiences of handling a Sports Events: From Planning to drafting to marketing to sponsorship to franchise sell, they have been spot on and guide the client in hosting a successful event!!" img="https://res.cloudinary.com/dwmmlrpgg/image/upload/v1769496538/IMG_2605.JPG_kemtgb.jpg" name="Rajan Gunabalan" title="Sports Management Professional" />
              <TestimonialCard text="Sikandar Bhai was always there when i needed support like contract negotiation, endorsement or any commercial association and career planning" img="https://res.cloudinary.com/dwmmlrpgg/image/upload/v1768631030/virat-singh_mqvvpp.jpg" name="Virat Singh" title="Captain Jharkhand Cricket" />
            </div>
          </div>



        </div>
        <button className="absolute top-1/2 left-0 lg:left-10 opacity-30 lg:opacity-0 rounded-full p-2 bg-white group-hover:opacity-30 hover:bg-yellow-400 transition-all duration-300 ease-in-out" onClick={moveLeft} ><SlArrowLeft className="text-black" />
        </button>

        <button className="rounded-full absolute opacity-30 lg:opacity-0 top-1/2 right-0 lg:right-10 p-2 bg-white group-hover:opacity-30 hover:bg-yellow-400 transition-all duration-300 ease-in-out" onClick={moveRight} ><SlArrowRight className="text-black" />
        </button>

      </section> */}

      <BlogSection />

      <section className="relative pt-20 px-5 text-center overflow-hidden space-y-10">

        <h1 className="text-4xl text-yellow-400 text-center uppercase">The Genesis of Kitbag Journey</h1>

        {/* Content */}
        <div className="relative z-10 space-y-8">

          <div class="relative aspect-video w-full">
            <iframe
              class="absolute inset-0 w-full mx-auto h-full rounded-lg"
              src="https://www.youtube.com/embed/mR2D-JPrWXs"
              title="YouTube video"
              allowfullscreen>
            </iframe>
          </div>



        </div>

      </section>

      <Footer />
    </div>
  );
};

export default Home;
