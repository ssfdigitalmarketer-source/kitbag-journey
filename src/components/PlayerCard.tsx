import rightArrow from '../assets/right-arrow.svg'

const PlayerCard = ({ img, title }: any) => {
    return (
        <div className="relative inline-block h-[60vh] w-full cursor-pointer group lg:block overflow-hidden group">
            <img
                src={img}
                alt="background"
                className="w-full h-full object-cover brightness-100 grayscale group-hover:brightness-50 group-hover:grayscale-0 transition-all duration-300"
            />

            <div className="w-[90%] absolute m-5 bottom-0">
                <div className='flex justify-between translate-y-10 group-hover:translate-y-0 transition-all duration-300 mb-2'>
                    <p className="text-2xl bg-yellow-500 pr-4 px-20 relative -left-14 py-1 text-black uppercase font-bold -skew-x-12">{title}</p>
                    <img src={rightArrow} alt="Right Arrow" className="w-8 h-8 invert" />
                </div>

                <div className="opacity-0 justify-between items-center -translate-x-6 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">

                    <div className="text-xl">
                        <p>
                            Career Runs: <span className="text-yellow-500">1000</span>
                        </p>
                        <p>
                            S/R: <span className="text-yellow-500">1000</span>
                        </p>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default PlayerCard;
