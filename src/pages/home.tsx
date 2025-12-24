import { useEffect, useRef, useState } from "react";
import video from "../assets/sports-center.mp4";
import serviceImg from "../assets/service.jpg";
import ServiceCard from "../components/ServiceCard";
import PlayerCard from "../components/PlayerCard";
import logo from "../assets/kitbag-logo.svg"
import playerImg from "../assets/playerImage.jpeg"
import gymPic from "../assets/gymPicture.jpg"

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
      <section className="py-20 space-y-32 px-8 text-xl font-semibold bg-[url('./assets/bg.jpg')] text-left bg-no-repeat bg-cover">

        <div className=" space-y-10 mx-auto lg:w-[70%] lg:text-6xl">
          <p className="">EVERY <span className="text-yellow-400">TALENT</span> NEEDS RIGHT GUIDANCE AND <span className="text-yellow-400">PROFESSIONAL</span> TEAM BOTH ON AND OFF THE FIELD IN SHAPING THEIR <span className="text-yellow-400">CAREER</span>.</p>
          <p>WE ARE LEAVING NO STONE UNTURNED AND MAKING SURE EVERY <span className="text-yellow-400">SPORTS</span> TALENT <span className="text-yellow-400">REACH</span> THEIR FULL <span className="text-yellow-400">POTENTIAL.</span></p>
          <div>
            <p className="text-lg lg:text-2xl">Shahbaz Nadeem</p>
            <p className="text-yellow-500 text-xs lg:text-sm">MENTOR, KITBAG JOURNEY.</p>
          </div>
        </div>

        <div className="space-y-5 my-20 lg:flex">
          <div className="w-full h-[50vh] overflow-hidden lg:h-[80vh] lg:w-1/2"><img src={gymPic} alt="" className="h-full object-contain" /></div>

          <div className="w-full lg:w-1/2 space-y-4 flex-col justify-center lg:flex">
            <p className="text-yellow-500 text-xs lg:text-lg">WELCOME TO FUTURE</p>
            <p className="text-3xl lg:text-6xl">WELCOME TO KITBAG JOURNEY.
              AN ATHLETE MANAGEMENT COMPANY.
            </p>
            <button className="px-8 py-4 border-2 border-white lg:w-[25%] hover:border-yellow-500 hover:text-yellow-500 transition-all duration-300">ABOUT US</button>
          </div>

        </div>

      </section>


      {/* Banner  */}
      <section className="w-full py-28 text-2xl px-3 h-[10vh] lg:h-[60vh] font-bold lg:text-[10vh] flex flex-col lg:space-y-32 lg:px-20">

        <p className="text-left">WE CREATE</p>
        <p className="text-right">BRANDS AND IP'S</p>
        <p className="text-center">WE ARE KITBAG JOURNEY</p>

      </section>


      {/* players section */}
      <section className="w-full py-20 space-y-10 px-5">
  <h1 className="text-4xl text-yellow-500 text-center">OUR PLAYERS</h1>

  {/* Scroll container */}
  <div className="overflow-x-auto overscroll-x-contain">
    <div className="whitespace-nowrap space-x-2 lg:flex">
      <PlayerCard img={playerImg} title="Virat Singh" />
      <PlayerCard img={playerImg} title="Virat Singh" />
      <PlayerCard img={playerImg} title="Virat Singh" />
      <PlayerCard img={playerImg} title="Virat Singh" />
    </div>
  </div>
</section>



    </div>
  );
};

export default Home;
