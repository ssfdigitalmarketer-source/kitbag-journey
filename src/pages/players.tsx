import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { usePlayerStore } from "../store/usePlayerStore"
import PlayerCard from "../components/PlayerCard"

const Players = () => {
    const players = usePlayerStore(s=> s.players);

    return (
        <div>
            <Navbar />
            <section className="py-20 space-y-10">
                <h1 className="text-4xl text-yellow-500 text-center">OUR ATHLETES</h1>
                <div className="px-10 flex flex-wrap gap-14 justify-center">
                {players?.map((player,index)=>(
                    <PlayerCard key={index} title={player.name} img={player.image} link={player.link} className="h-[50vh] lg:h-[50vh] w-[90%] lg:w-[20%]"/>
                ))}

                </div>

            </section>
            <Footer />
        </div>

    )
}

export default Players
