import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { usePlayerStore } from "../store/usePlayerStore"
import PlayerCard from "../components/PlayerCard"

const Players = () => {
    const players = usePlayerStore(s=> s.players);

    return (
        <div >
            <Navbar />
            <div className="fixed top-0"><img src="https://res.cloudinary.com/dwmmlrpgg/image/upload/v1769592417/Untitled_design_2_genmsi.png" alt="" /> </div>
            <section className="pb-20 pt-40 space-y-10">
                <h1 className="text-4xl text-yellow-400 text-center">OUR PLAYERS</h1>
                <div className="px-10 flex flex-wrap gap-14 justify-center">
                {players?.map((player,index)=>(
                    <PlayerCard key={index} title={player.name} img={player.image} link={player.link} className="h-[50vh] lg:h-[50vh] w-[90%] lg:w-[30%] xl:w-[20%]"/>
                ))}

                </div>

            </section>
            <Footer />
        </div>

    )
}

export default Players
