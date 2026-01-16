import PlayerCard from './PlayerCard'
import { useDragScroll } from "../hooks/useDragScroll";
import ViratSingh from "../assets/players/virat-singh.jpeg";
import ShikharMohan from "../assets/players/shikhar-mohan.jpeg";
import AmitKumar from "../assets/players/amit-kumar.jpeg";
import ShashiMathur from "../assets/players/shashi-mathur.jpeg";
import RajandeepSingh from "../assets/players/rajandeep-singh.jpeg";
import SharandeepSingh from "../assets/players/sharandeep-singh.jpeg";
import Manishi from "../assets/players/manishi.jpeg";
import KounainQuraishi from "../assets/players/kounain-quraishi.jpeg";
import PankajKumar from "../assets/players/pankaj-kumar.jpeg";
import JatinPandey from "../assets/players/jatin-pandey.jpeg";


const PlayerSection = () => {
    const { ref, handlers } = useDragScroll();
    const playerData = [
        { img: ViratSingh, title: "Virat Singh", link : "virat-singh"},
        { img: ShikharMohan, title: "Shikhar Mohan" },
        { img: AmitKumar, title: "Amit Kumar" },
        { img: ShashiMathur, title: "Shashi Mathur" },
        { img: RajandeepSingh, title: "Rajandeep Singh" },
        { img: SharandeepSingh, title: "Sharandeep Singh" },
        { img: Manishi, title: "Manishi" },
        { img: KounainQuraishi, title: "Kounain Quraishi" },
        { img: PankajKumar, title: "Pankaj Kumar" },
        { img: JatinPandey, title: "Jatin Pandey" },
    ];

    return (

            <section className="w-full py-20 space-y-10">
                <h1 className="text-4xl text-yellow-500 text-center">OUR PLAYERS</h1>
                <div className="overflow-x-auto overscroll-x-contain">
                    <div className="whitespace-nowrap space-x-8 px-10 gap-10 flex scrollbar-hide overflow-x-auto cursor-grab active:cursor-grabbing" ref={ref}
                        {...handlers}>
                        {playerData.map((player, index) => (
                            <PlayerCard key={index} img={player.img} title={player.title} link={player.link} />
                        ))}
                    </div>

                </div>


            </section>

    )
}

export default PlayerSection
