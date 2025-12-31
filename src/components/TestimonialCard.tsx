import testimonialImg from '../assets/testimonialImage.jpg'

const TestimonialCard = ({text, img, name} : any) => {
    return (
        // <div className="w-full min-h-[50vh] relative bg-orange-300/40 p-7 rounded-lg font-sans inline-block shrink-0 lg:min-w-0 lg:max-w-[30%] lg:min-h-[30vh] space-y-8 lg:w-[40%] lg:block">
        <div className="w-full flex flex-col justify-between font-sans min-h-[50vh] bg-orange-300/15 p-7 rounded-lg min-w-[280px] max-w-[320px] lg:max-w-[40%] shrink-0 space-y-8 lg:w-[30%] lg:min-h-[30vh]">
            <p className='text-lg font'>{text}</p>
            <div className="flex items-center">
                <div className='rounded-full w-14 h-auto overflow-hidden mr-4'>
                    <img src={testimonialImg} alt="" className='object-cover' />
                </div>
                <p className="text-yellow-500">Elon Musk</p>

            </div>
        </div>
    )
}

export default TestimonialCard
