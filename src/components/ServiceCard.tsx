import rightArrow from '../assets/right-arrow.svg'

const ServiceCard = ({img,text}:any) => {
  return (
    <div className='relative h-[60vh] border-[0.5px] border-gray-500 border-collapse w-full cursor-pointer overflow-hidden'>
      <img src={img} alt="background" className='w-full h-full object-cover brightness-50 hover:brightness-75 transition-all duration-300'/>
      <div className='w-[90%] absolute m-5 bottom-0'>
        <p className="text-lg text-yellow-500 ">Our Services</p>
        <div className="flex justify-between text-3xl">
        <p className="">{text}</p>
        <img src={rightArrow} alt="Right Arrow" className="w-8 h-8 invert"/>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
