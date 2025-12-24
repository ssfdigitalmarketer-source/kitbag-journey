import { useEffect, useRef, useState } from "react";
import video from "../assets/sports-center.mp4";
import serviceImg from "../assets/service.jpg";
import ServiceCard from "../components/ServiceCard";
import logo from "../assets/kitbag-logo.svg"

const Home = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const videoEl = videoRef.current;
    const section = sectionRef.current;

    if (!wrapper || !videoEl || !section) return;

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
    };
  }, []);

  return (
    <div className="w-full relative">
      {/* Navbar */}
      <nav className="w-[100%] p-10 top-0 font-semibold sticky lg:flex z-30">
        <div className="flex mx-auto">
          <img src={logo} alt="Kitbag Logo" className="h-[100px] mr-5 absolute top-0 left-1 lg:h-[150px]" />
          <button
            className="text-2xl mx-6 absolute right-0 lg:hidden"
            onClick={() => setShowBurgerMenu(!showBurgerMenu)}
          >
            ☰
          </button>
          <ul className="hidden list-none tracking-widest text-[15px] lg:flex lg:gap-6">
            <li>HOME</li>
            <li>PAGES</li>
            <li>BLOG</li>
            <li>CONTACT</li>
          </ul>
        </div>

        {showBurgerMenu && (
          <div className="w-full space-y-3 bg-black relative z-40 top-0 lg:block">
            <ul className="list-none bg-black absolute tracking-widest text-[20px] lg:flex lg:gap-6">
              <li>HOME</li>
              <li>PAGES</li>
              <li>BLOG</li>
              <li>CONTACT</li>
            </ul>
          </div>
        )}
      </nav>

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

      {/* Services Section */}
      <section className="w-full py-20 bg-[url('./assets/bg.jpg')] bg-no-repeat bg-cover">
        <div className="overflow-hidden w-full py-4">
          <div className="flex whitespace-nowrap w-max animate-marquee">
            <span className="text-white text-xl md:text-2xl mr-8">
              PROMOTING TALENT • PROMOTING TALENT • PROMOTING TALENT •
            </span>
            <span className="text-white text-xl md:text-2xl mr-8">
              PROMOTING TALENT • PROMOTING TALENT • PROMOTING TALENT •
            </span>
          </div>
        </div>


        <div className="flex flex-col my-8 lg:flex-row lg:mx-0">
          <ServiceCard img={serviceImg} text="Management" />
          <ServiceCard img={serviceImg} text="Management" />
          <ServiceCard img={serviceImg} text="Managememt" />
          <ServiceCard img={serviceImg} text="Managememt" />
        </div>
      </section>


      {/* About Section */}
      <section className="py-20 bg-[url('./assets/bg.jpg')] bg-no-repeat bg-cover">


      </section>


      {/* Banner  */}
      <section className="w-full py-20 text-2xl px-3 h-[10vh] lg:h-[60vh] font-bold lg:text-[15vh] flex flex-col lg:space-y-24">

        <p className="text-left">PROMOTING AND</p>
        <p className="text-right">MANAGING TALENT</p>
        <p className="text-center">EVERYWHERE</p>

      </section>


    </div>
  );
};

export default Home;
