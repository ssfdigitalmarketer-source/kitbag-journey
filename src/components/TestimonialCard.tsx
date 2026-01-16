import testimonialImg from '../assets/testimonialImage.jpg'

const TestimonialCard = ({text, img, name} : any) => {
    return (
        // <div className="w-full min-h-[50vh] relative bg-orange-300/40 p-7 rounded-lg font-sans inline-block shrink-0 lg:min-w-0 lg:max-w-[30%] lg:min-h-[30vh] space-y-8 lg:w-[40%] lg:block">
        <div className='w-full shrink-0'>

        <div className="w-full lg:w-[40%] font-sans rounded-lg space-y-8 cursor-pointer">
            <p className='text-lg font-bilmond'><span className='text-yellow-500 text-xl'>" </span>{text}<span className='text-yellow-500 text-xl'> "</span></p>
            <div className="flex items-center gap-4 space-y-2 lg:space-y-0 ">
                <div className='rounded-full w-20 border-[1px] border-yellow-500 h-auto overflow-hidden'>
                    <img src={testimonialImg} alt="picture" className='object-cover' />
                </div>
                <p className="text-yellow-500 text-lg font-oswald uppercase">Elon Musk</p>
                
            </div>
        </div>
        </div>
    )
}

export default TestimonialCard
