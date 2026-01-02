import MarqueeBackground from "../animations/MarqueeBackground";


const MovingBanner = () => {

  return (
    <section className="relative text-center text-4xl font-bold px-5 space-y-6 py-14 lg:py-20 lg:text-9xl overflow-hidden lg:text-left">
        <MarqueeBackground />
      <p className="">
        WE CREATE
      </p>

      <p className="" >
        BRANDS AND IP&apos;S
      </p>

      <p className="" >
        WE ARE KITBAG JOURNEY
      </p>
    </section>
  );
};

export default MovingBanner;
