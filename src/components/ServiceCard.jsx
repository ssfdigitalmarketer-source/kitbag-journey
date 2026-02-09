import { useNavigate } from "react-router"
import { motion } from "framer-motion";

const ServiceCard = ({ img, title, link}) => {
  const navigate = useNavigate();
  return (
    <div className="relative shrink-0 py-20 h-[60vh] lg:h-[60vh] w-[80%] md:w-[50%] lg:w-[40%] xl:w-[20%] -skew-x-6 cursor-pointer group lg:block group will-change-transform transform-gpu backface-hidden" onClick={() => navigate(`/${link}`)}>
            <div className="w-full h-[90%] border-[0.5px] border-white absolute top-3 left-3 group-hover:border-yellow-400 transition-all duration-300 "></div>

            <div className="w-full h-[90%] absolute top-0 left-0 overflow-hidden">
                <img
                    src={img}
                    alt="background"
                    className="w-full h-full object-cover scale-125 brightness-100 skew-x-6 grayscale group-hover:brightness-50 group-hover:grayscale-0 transition-all duration-300 object-top"
                />
                <div className="w-[90%] z-20 absolute m-5 bottom-0">
                    <div className='flex justify-between translate-y-10 group-hover:translate-y-0 transition-all duration-300 mb-2'>
                        <p className="text-md lg:text-xl bg-yellow-400 pr-4 px-20 relative pl-12 -left-14 py-1 text-black uppercase font-bold -skew-x-12">{title}</p>

                    </div>

                    <div className="opacity-0 justify-between items-center -translate-x-6 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">

                        <div className="text-xl font-sans font-light skew-x-6">
                            <p>
                                View More
                            </p>
                        </div>

                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-[40%] z-10 bg-gradient-to-t from-yellow-400/70 via-yellow-400/30 to-transparent opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />

            </div>


        </div>

  )
}

export default ServiceCard
