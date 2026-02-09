import { useNavigate } from "react-router";

const BlogCard = ({ image, title, date }) => {
  const navigate = useNavigate();
  return (
    <div className='w-full border-[1px] border-white/20 bg-white/5 text-white lg:min-h-[30vh] lg:w-[23%] overflow-hidden font-sans group rounded-lg hover:sca hover:bg-white/30 transition-all duration-300 ease-in-out cursor-pointer' onClick={() => navigate(`/blogs/${title}`)}>
      <img src={image} alt="News" className='w-full grayscale group-hover:grayscale-0' loading="lazy"/>

      <div className='px-4 py-6 space-y-8'>
        <div className='space-y-4'>
          <p className='text-sm text-yellow-400'>{date}</p>
          <p className='lg:text-lg font-semibold'>{title}</p>
        </div>
        <div className="flex mx-auto items-center space-x-2 cursor-pointer">
          <p className="text-lg text-yellow-400 font-sans">Read More</p>
        </div>

      </div>
    </div>
  )
}

export default BlogCard
