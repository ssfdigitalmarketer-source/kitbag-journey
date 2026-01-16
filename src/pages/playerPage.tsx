import Navbar from "../components/Navbar"
import playerImg from "../assets/players/kounain-quraishi.png"
import { useParams } from "react-router"

const PlayerPage = () => {
  const { slug } = useParams();

  return (
    <div>
      <Navbar />

      <section className="py-20 space-y-16 text-center">

        <div className="px-8 font-sans gap-20 lg:flex">
          <div className="mb-5 lg:w-[45%]"><img src={playerImg} alt={slug} className="w-full object-contain shadow-lg grayscale relative z-20" /></div>
          <div className="space-y-4 flex-1 lg:text-left ">
            <div className="bg-yellow-500 -skew-x-12 py-3 space-y-3 relative -left-6">
            <h1 className="text-4xl font-bold lg:text-6xl font-oswald text-center text-black">KOUNAIN QURAISHI</h1>
            </div>
            <h2 className="text-yellow-500 font-sans relative -top-3 text-right right-10">Right Handed Batsman</h2>
            <p className="text-left text-lg text-yellow-500">Date of Birth : <span className="text-white">29-09-2002</span></p>
            <p className="text-left text-lg text-yellow-500">Father’s Name : <span className="text-white">Shamim Quraishi</span></p>
            <p className="text-left text-lg text-yellow-500">Place of Birth : <span className="text-white">Hyderabad</span></p>
            <p className="text-left text-lg text-yellow-500">First Class Debut : <span className="text-white">Hyderabad</span></p>
          </div>
        </div>


      </section>
    </div>
  )
}

export default PlayerPage
