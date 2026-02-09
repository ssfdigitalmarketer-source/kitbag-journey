import { useNavigate } from "react-router";
import CharFadeLeftToRight from "../animations/CharFadeLeftToRight";

const CTAButton1 = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center italic font-sans py-10 space-y-10 font-bold lg:py-20">
      <p className="text-3xl lg:text-5xl font-extrabold">
        <CharFadeLeftToRight text="LET'S BUILD A " />

        <CharFadeLeftToRight
          text="FUTURE"
          className="text-yellow-400"
        />

        <CharFadeLeftToRight text=" THAT CELEBRATES YOUR " />

        <CharFadeLeftToRight
          text="PASSION"
          className="text-yellow-400"
        />
      </p>

      <button onClick={()=> navigate('/athlete-contact')} className="
    group relative overflow-hidden
    font-oswald px-8 py-4 mt-4 text-lg
    bg-yellow-400 text-black skew-x-[-12deg]
    transition-transform duration-300 ease-in-out
  "
      >
        {/* White fill layer */}
        <span
          className="
      absolute inset-0
      bg-white
      scale-x-0
      origin-center
      transition-transform duration-300 ease-in-out
      group-hover:scale-x-100
    "
        ></span>

        {/* Button text */}
        <span className="relative z-10">
          JOIN US AS AN ATHLETE
        </span>
      </button>

    </div>
  )
}

export default CTAButton1
