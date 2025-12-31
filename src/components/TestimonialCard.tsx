import testimonialImg from '../assets/testimonialImage.jpg'

const TestimonialCard = ({text, img, name} : any) => {
    return (
        // <div className="w-full min-h-[50vh] relative bg-orange-300/40 p-7 rounded-lg font-sans inline-block shrink-0 lg:min-w-0 lg:max-w-[30%] lg:min-h-[30vh] space-y-8 lg:w-[40%] lg:block">
        <div className="w-full font-sans min-h-[50vh] overflow-hidden bg-white/5 p-7 rounded-lg min-w-[280px] max-w-[320px] lg:max-w-[40%] shrink-0 space-y-8 lg:w-[30%] lg:min-h-[30vh] hover:bg-white/20 transition-all duration-300 ease-in-out cursor-pointer">
            <div className="mx-auto flex flex-col gap-2 items-center">
                <div className='rounded-full w-14 border-[1px] border-yellow-500 h-auto overflow-hidden'>
                    <img src={testimonialImg} alt="" className='object-cover' />
                </div>
                <p className="text-yellow-500">Elon Musk</p>
                
            </div>
            <p className='text-lg text-center'><span className='text-yellow-500'>" </span>{text}<span className='text-yellow-500'> "</span></p>
        </div>
    )
}

export default TestimonialCard
