const TestimonialCard = ({ text, img, name, title }: any) => {
    return (
        <div className='w-full shrink-0'>

            <div className="w-full lg:w-[40%] font-sans rounded-lg space-y-8 cursor-pointer">
                <p className='text-lg font-sans'><span className='text-yellow-500 text-xl'>" </span>{text}<span className='text-yellow-500 text-xl'> "</span></p>
                <div className="flex items-center gap-4 space-y-2 lg:space-y-0 ">
                    <div className='rounded-full w-20 h-20 border-[1px] border-yellow-500 overflow-hidden'>
                        <img src={img} alt="picture" className='w-full h-full object-cover' />
                    </div>
                    <div>
                    <p className="text-yellow-500 text-lg font-oswald uppercase">{name}</p>
                    <p className="text-sm font-sans">{title}</p>

                    </div>
                    

                </div>
            </div>
        </div>
    )
}

export default TestimonialCard
