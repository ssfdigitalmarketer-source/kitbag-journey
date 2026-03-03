import PlayerCard from '../components/PlayerCard'
import { useDragScroll } from "../hooks/useDragScroll";
import { useEffect, useRef } from 'react';
import { usePlayerStore } from '../store/usePlayerStore';
import { useNavigate } from 'react-router';
import FadeInX from '../animations/FadeInX';

const PlayerSection = () => {
  const { ref, handlers, isDragging } = useDragScroll();
  const playersData = usePlayerStore(s => s.players);
  const videoRef = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const scrollStep = 280;
    const interval = setInterval(() => {
      if (isDragging.current) return;

      const maxScroll =
        container.scrollWidth - container.clientWidth;

      if (container.scrollLeft >= maxScroll - 10) {
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        container.scrollBy({
          left: scrollStep,
          behavior: "smooth",
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7; // 0.25 = very slow, 1 = normal
    }
  }, []);

  // return (

  //   <section className="w-full relative py-20 space-y-10">
  //     <video ref={videoRef} src="/assets/videos/smoke_bg.mp4" autoPlay muted loop className="absolute inset-0 w-full h-full object-cover -z-10" ></video>


  //     <h1 className="text-4xl text-yellow-400 text-center">OUR PLAYERS</h1>
  //     <FadeInX direction="right" delay={0.4}>

  //       <div className="overflow-x-auto overscroll-x-contain">
  //         <div className="whitespace-nowrap space-x-8 px-10 gap-10 flex scrollbar-hide overflow-x-auto cursor-grab active:cursor-grabbing" ref={ref}
  //           {...handlers}>
  //           {playersData.map((player, index) => (
  //             <PlayerCard key={index} img={player.image} title={player.name} link={player.link} className="h-[50vh] lg:h-[60vh] w-[80%] md:w-[40%] lg:w-[40%] xl:w-[20%] " />
  //           ))}
  //         </div>

  //       </div>
  //     </FadeInX>


  //   </section>

  // )
  const navigate = useNavigate();
  return (
    <section className='space-y-1'>
      <div className='w-full px-5 bg-yellow-400 relative py-10 xl:py-20 space-y-8 '>
        {/* <div className='w-[50%] h-full bg-white absolute right-0 top-0'></div> */}
        <h1 className='text-3xl md:text-5xl lg:text-7xl xl:text-9xl font-black text-black'>PRO <br /> ATHLETES</h1>
        <div className='flex flex-col lg:flex-row justify-between'>
          <p className='text-xl md:text-2xl xl:text-3xl font-semibold text-black'>The wall of talent defining the next generation of sports</p>
          <p className='font-bold underline text-black text-xl md:text-2xl xl:text-3xl cursor-pointer' onClick={() => navigate('/players')}>View All Talents</p>
        </div>
      </div>
      <div className='grid relative grid-cols-2 md:grid-cols-4 gap-1 '>
        {playersData.slice(0, 4).map((player, index) => (
          <div className='aspect-square relative group overflow-hidden cursor-pointer' key={index}>
            <img src={player.image} alt={player.name} className='object-cover h-full w-full grayscale group-hover:grayscale-0' />
            <div className='absolute inset-0 text-center bg-black/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 font-semibold px-5 text-white flex items-center justify-center' onClick={() => navigate(`/players/${player.link}`)}><p className='text-xl lg:text-3xl translate-y-32 group-hover:translate-y-0 transition-transform duration-700 uppercase'>{player.name}</p>
              <p className='absolute bottom-8 lg:text-xl translate-y-32 group-hover:translate-y-0 transition-transform duration-700 text-yellow-400'>Read More</p>

            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PlayerSection
