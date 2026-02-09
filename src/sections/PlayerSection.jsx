import PlayerCard from '../components/PlayerCard'
import { useDragScroll } from "../hooks/useDragScroll";
import { useEffect,useRef } from 'react';
import { usePlayerStore } from '../store/usePlayerStore';
import FadeInX from '../animations/FadeInX';

const PlayerSection = () => {
  const { ref, handlers, isDragging } = useDragScroll();
  const playersData = usePlayerStore(s => s.players);
  const videoRef =  useRef(null);

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

  return (

    <section className="w-full relative py-20 space-y-10">
      <video ref={videoRef} src="/assets/videos/smoke_bg.mp4" autoPlay muted loop className="absolute inset-0 w-full h-full object-cover -z-10" ></video>


      <h1 className="text-4xl text-yellow-400 text-center">OUR PLAYERS</h1>
      <FadeInX direction="right" delay={0.4}>

        <div className="overflow-x-auto overscroll-x-contain">
          <div className="whitespace-nowrap space-x-8 px-10 gap-10 flex scrollbar-hide overflow-x-auto cursor-grab active:cursor-grabbing" ref={ref}
            {...handlers}>
            {playersData.map((player, index) => (
              <PlayerCard key={index} img={player.image} title={player.name} link={player.link} className="h-[50vh] lg:h-[60vh] w-[80%] md:w-[40%] lg:w-[40%] xl:w-[20%] " />
            ))}
          </div>

        </div>
      </FadeInX>


    </section>

  )
}

export default PlayerSection
