import Navbar from "../components/Navbar"
import { useParams } from "react-router"
import { usePlayerStore } from "../store/usePlayerStore"
import Footer from "../components/Footer"
import VideoCarousel from "../components/VideoCarousel"

const PlayerPage = () => {
  const { slug } = useParams();
  const player = usePlayerStore(s =>
    s.players.find(p => p.link === slug)
  );


  return (
    <div>
      <Navbar />

      <section className="pb-20 pt-40 space-y-16 text-center" >

        <div className="px-8 font-sans gap-20 xl:flex">
          <div className="mb-5 lg:w-[45%] lg:mx-auto"><img src={player?.image} alt={slug} className="w-full object-fill shadow-lg grayscale relative z-20" /></div>
          <div className="space-y-4 flex-1 lg:text-left ">
            <div className="bg-yellow-400 -skew-x-12 py-3 space-y-3 w-[95%] mx-auto relative">
              <h1 className="text-4xl font-bold lg:text-6xl font-oswald text-center text-black uppercase">{player?.name}</h1>
            </div>
            <p className="text-left text-sm lg:text-xl">Date of Birth : <span className="text-white bg-none">{player?.dateOfBirth}</span></p>
            <p className="text-left text-sm lg:text-xl ">Father's Name : <span className="text-white">{player?.fatherName}</span></p>
            <p className="text-left text-sm lg:text-xl ">Place of Birth : <span className="text-white">{player?.placeOfBirth}</span></p>
            {player?.debuts?.map((debut, index) => (
              <p className="text-left text-sm lg:text-xl " key={index}> {debut.title} : <span className="text-white">{debut.value}</span></p>
            ))}
            <p className="text-left text-sm lg:text-xl ">Playing Role : <span className="text-white">{player?.playingRole}</span></p>
            <p className="text-left text-sm lg:text-xl ">Batting Style : <span className="text-white">{player?.battingStyle}</span></p>
            <p className="text-left text-sm lg:text-xl ">Bowling Style : <span className="text-white">{player?.bowlingStyle}</span></p>
            <p className="text-left text-sm lg:text-xl ">Major Achievement : <span className="text-white">{player?.achievement}</span></p>
            {player?.best?.map((best, index) => (
              <p className="text-left text-sm lg:text-xl" key={index}> {best.title} : <span className="text-white">{best.value}</span></p>
            ))}
            <p className="text-left text-sm lg:text-xl"><span className="text-white">{player?.bio}</span></p>
          </div>
        </div>

            {/* <VideoCarousel /> */}

      </section>
      <Footer />

    </div>
  )
}

export default PlayerPage
