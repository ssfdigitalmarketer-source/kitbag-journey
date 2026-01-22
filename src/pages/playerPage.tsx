import Navbar from "../components/Navbar"
import { useParams } from "react-router"
import { usePlayerStore } from "../store/usePlayerStore"
import Footer from "../components/Footer"

const PlayerPage = () => {
  const { slug } = useParams();
  const player = usePlayerStore(s =>
    s.players.find(p => p.link === slug)
  );


  return (
    <div>
      <Navbar />

      <section className="pb-20 pt-40 space-y-16 text-center" >

        <div className="px-8 font-sans gap-20 lg:flex">
          <div className="mb-5 bg-emerald-400 lg:w-[45%]"><img src={player?.image} alt={slug} className="w-full object-fill shadow-lg grayscale relative z-20" /></div>
          <div className="space-y-4 flex-1 lg:text-left ">
            <div className="bg-yellow-500 -skew-x-12 py-3 space-y-3 w-[95%] mx-auto relative">
              <h1 className="text-4xl font-bold lg:text-6xl font-oswald text-center text-black uppercase">{player?.name}</h1>
            </div>
            <p className="text-left text-xl text-yellow-500">Date of Birth : <span className="text-white bg-none">{player?.dateOfBirth}</span></p>
            <p className="text-left text-xl text-yellow-500">Father's Name : <span className="text-white">{player?.fatherName}</span></p>
            <p className="text-left text-xl text-yellow-500">Place of Birth : <span className="text-white">{player?.placeOfBirth}</span></p>
            {player?.debuts?.map((debut, index) => (
              <p className="text-left text-xl text-yellow-500" key={index}> {debut.title} : <span className="text-white">{debut.value}</span></p>
            ))}
            <p className="text-left text-xl text-yellow-500">Playing Role : <span className="text-white">{player?.playingRole}</span></p>
            <p className="text-left text-xl text-yellow-500">Batting Style : <span className="text-white">{player?.battingStyle}</span></p>
            <p className="text-left text-xl text-yellow-500">Bowling Style : <span className="text-white">{player?.bowlingStyle}</span></p>
            <p className="text-left text-xl text-yellow-500">Major Achievement : <span className="text-white">{player?.achievement}</span></p>
            <p className="text-left text-xl text-yellow-500">Bio : <span className="text-white">{player?.bio}</span></p>
            {player?.best?.map((best, index) => (
              <p className="text-left text-xl text-yellow-500" key={index}> {best.title} : <span className="text-white">{best.value}</span></p>
            ))}
          </div>
        </div>


      </section>
      <Footer />

    </div>
  )
}

export default PlayerPage
