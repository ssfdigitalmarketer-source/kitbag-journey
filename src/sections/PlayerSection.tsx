import PlayerCard from '../components/PlayerCard'
import { useDragScroll } from "../hooks/useDragScroll";
import { useEffect } from 'react';
import { usePlayerStore } from '../store/usePlayerStore';

const PlayerSection = () => {
     const { ref, handlers, isDragging } = useDragScroll();
     const playersData = usePlayerStore(s => s.players);
    
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
      

    return (

            <section className="w-full py-20 space-y-10">
                <h1 className="text-4xl text-yellow-500 text-center">OUR PLAYERS</h1>
                <div className="overflow-x-auto overscroll-x-contain">
                    <div className="whitespace-nowrap space-x-8 px-10 gap-10 flex scrollbar-hide overflow-x-auto cursor-grab active:cursor-grabbing" ref={ref}
                        {...handlers}>
                        {playersData.map((player, index) => (
                            <PlayerCard key={index} img={player.image} title={player.name} link={player.link} className="h-[50vh] lg:h-[60vh] w-[80%] lg:w-[20%]"/>
                        ))}
                    </div>

                </div>


            </section>

    )
}

export default PlayerSection
