import rightArrow from '../assets/right-arrow.svg'

const NewsCard = ({image,description,date} : any) => {
  return (
    <div className='w-full my-10 lg:w-[30%] space-y-4 font-sans'>
      <img src={image} alt="News" className='w-full h-[50vh] lg:h-[30vh] object-cover' />
      <div className='py-4'>
        <p className='text-sm text-gray-500'>{date}</p>
        <p className='text-lg font-semibold'>{description}</p>
      </div>
      <div className="flex mx-auto items-center space-x-2 cursor-pointer">
          <p className="text-xl font-sans">Read More</p>
          <img src={rightArrow} alt="Right Arrow" className="w-6 h-6 invert" />
        </div>
    </div>
  )
}

export default NewsCard
