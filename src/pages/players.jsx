
import { usePlayerStore } from "../store/usePlayerStore"
import { useNavigate } from "react-router"
import PlayerCard from "../components/PlayerCard"
import FadeInX from "../animations/FadeInX"
import { SlArrowRight } from "react-icons/sl"

const Players = () => {
    const players = usePlayerStore(s => s.players);

    // return (
    //     <div>
    //         <Navbar />
    //         {/* <div className="fixed top-0"><img src="https://res.cloudinary.com/dwmmlrpgg/image/upload/v1769592417/Untitled_design_2_genmsi.png" alt="" /> </div> */}
    //         <section className="pb-20 pt-40 space-y-10 bg-fixed bg-cover" style={{ backgroundImage: `url("/assets/stadium_bw.webp")` }}>
    //             <h1 className="text-4xl font-black relative z-30 text-yellow-400 text-center">OUR PLAYERS</h1>
    //             {/* <FadeInX direction="left"> */}
    //             <div className="px-10 flex flex-wrap gap-14 justify-center">
    //             {players?.map((player,index)=>(
    //                 <PlayerCard key={index} title={player.name} img={player.image} link={player.link} className="h-[50vh] lg:h-[50vh] w-[90%] lg:w-[30%] xl:w-[20%]"/>
    //             ))}

    //             </div>

    //             {/* </FadeInX> */}

    //         </section>
    //         <Footer />
    //     </div>

    // )
    const navigate = useNavigate();
    return (
        <div>
            <section className="px-5">
                <div className="pt-28 md:pt-32 xl:pt-48 pb-10">
                    <h1 className="text-5xl xl:text-9xl font-black relative z-30 text-white">OUR <br /> ATHLETES</h1>
                </div>
                <div className='grid relative py-10 md:py-14 xl:py-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 '>
                    {players.map((player, index) => (
                        <div className='aspect-square text-center border-[2px] border-white relative group overflow-hidden cursor-pointer rounded-xl' key={index}>
                            <img src={player.image} alt={player.name} className='object-cover h-full w-full group-hover:grayscale-0' />
                            <div className='absolute inset-0 bg-black/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 font-semibold px-5 text-white flex items-center justify-center' onClick={() => navigate(`/players/${player.link}`)}>
                                <p className='text-xl lg:text-3xl translate-y-32 group-hover:translate-y-0 transition-transform duration-700 uppercase'>{player.name}</p>

                            </div>

                            <div className="h-6 absolute z-0 bottom-0 bg-white w-full">
                                <div className='absolute z-50 flex items-center rounded-xl gap-3 -bottom-1 px-8 py-2 bg-white lg:text-xl transition-transform duration-700 text-yellow-400 right-0'>
                                    <p className="text-black relative z-30">Read More</p>
                                    <SlArrowRight size={15} className="text-black" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Players
