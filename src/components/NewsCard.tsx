import rightArrow from '../assets/right-arrow.svg'

const NewsCard = ({ image, description, date }: any) => {
  return (
    <div className='w-full bg-white/5 text-white my-10 lg:min-h-[30vh] lg:w-[23%] overflow-hidden font-sans group rounded-lg hover:scale-105 hover:bg-white/20 transition-all duration-300 ease-in-out cursor-pointer'>
      <img src={image} alt="News" className='w-full h-[50vh] lg:h-[30vh] grayscale object-cover group-hover:grayscale-0' />

      <div className='px-4 py-6 space-y-8'>
        <div className='space-y-4'>
          <p className='text-sm text-yellow-500'>{date}</p>
          <p className='text-lg font-semibold'>{description}</p>
        </div>
        <div className="flex mx-auto items-center space-x-2 cursor-pointer">
          <p className="text-lg text-yellow-500 font-sans">Read More</p>
          <img src={rightArrow} alt="Right Arrow" className="w-6 h-6 invert" />
        </div>

      </div>
    </div>
  )
}

export default NewsCard
