import CharFadeLeftToRight from "../animations/CharFadeLeftToRight";

const CTAButton1 = () => {
  return (
    <div className="text-center italic font-sans py-10 space-y-8 font-bold lg:py-20">
      <p className="text-2xl lg:text-5xl font-extrabold leading-tight">
        <CharFadeLeftToRight text="LET'S BUILD A " />

        <CharFadeLeftToRight
          text="FUTURE"
          className="text-yellow-500"
        />

        <CharFadeLeftToRight text=" THAT CELEBRATES YOUR " />

        <CharFadeLeftToRight
          text="PASSION"
          className="text-yellow-500"
        />

        <CharFadeLeftToRight text="!" />
      </p>

      <button className="font-oswald px-8 py-4 mt-4 hover:bg-white text-lg bg-yellow-500 text-black hover:text-black transition-all duration-300">JOIN US AS AN ATHLETE</button>

    </div>
  )
}

export default CTAButton1
