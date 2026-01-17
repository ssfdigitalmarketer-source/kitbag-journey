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
          <div className="mb-5 lg:w-[45%]"><img src='https://res.cloudinary.com/dwmmlrpgg/image/upload/v1768631030/kounain-quraishi_otrsqs.png' alt={slug} className="w-full object-contain shadow-lg grayscale relative z-20" /></div>
          <div className="space-y-4 flex-1 lg:text-left ">
            <div className="bg-yellow-500 -skew-x-12 py-3 space-y-3 w-[95%] mx-auto relative">
            <h1 className="text-4xl font-bold lg:text-6xl font-oswald text-center text-black">KOUNAIN QURAISHI</h1>
            </div>
            <h2 className="text-yellow-500 font-sans relative -top-3 text-right right-10">Right Handed Batsman</h2>
            <p className="text-left text-xl text-yellow-500">Date of Birth : <span className="text-white bg-none">29-09-2002</span></p>
            <p className="text-left text-xl text-yellow-500">Father's Name : <span className="text-white">Shamim Quraishi</span></p>
            <p className="text-left text-xl text-yellow-500">Place of Birth : <span className="text-white">Hyderabad</span></p>
            <p className="text-left text-xl text-yellow-500">First Class Debut : <span className="text-white">N/A</span></p>
            <p className="text-left text-xl text-yellow-500">List-A Debut : <span className="text-white">N/A</span></p>
            <p className="text-left text-xl text-yellow-500">Playing Role : <span className="text-white">Batting All Rounder</span></p>
            <p className="text-left text-xl text-yellow-500">Batting Style : <span className="text-white">Right Handed</span></p>
            <p className="text-left text-xl text-yellow-500">Bowling Style : <span className="text-white">Right Arm Off Break</span></p>
            <p className="text-left text-xl text-yellow-500">Major Achievement : <span className="text-white"> Quarter Finals col CK Nayadu Trophy against Karnataka - 103 runs</span></p>
            <p className="text-left text-xl text-yellow-500">Bio : <span className="text-white">Md Kounain Quraishi is a promising batting all-rounder known for his strong middle-order batting and effective right-arm off-break bowling. With the ability to build innings under pressure and contribute with disciplined off-spin, he has displayed match-winning potential in competitive tournaments. His performances in knockout games and his ability to play long innings highlight his temperament and future potential as a complete all-rounder</span></p>
            <p className="text-left text-xl text-yellow-500">Best Score : <span className="text-white">155 not out</span></p>
            <p className="text-left text-xl text-yellow-500">Best Bowling Figure : <span className="text-white">15 over 30 runs 4 wickets</span></p>
          </div>
        </div>


      </section>
    </div>
  )
}

export default PlayerPage
