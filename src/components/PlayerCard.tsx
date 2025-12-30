import rightArrow from '../assets/right-arrow.svg'

const PlayerCard = ({ img, title }: any) => {
    return (
        <div className="relative inline-block h-[60vh] border-[0.5px] border-yellow-500 border-collapse w-full cursor-pointer lg:block overflow-hidden group">
            <img
                src={img}
                alt="background"
                className="w-full h-full object-cover brightness-100 group-hover:brightness-50 transition-all duration-300"
            />

            <div className="w-[90%] absolute m-5 bottom-0">
                <div className='flex justify-between translate-y-10 group-hover:translate-y-0 transition-all duration-300 mb-2'>
                    <p className="text-2xl text-yellow-500">{title}</p>
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
