import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { useBlogStore } from "../store/useBlogStore"
import BlogCard from "../components/BlogCard"

const Blogs = () => {
  const blogs = useBlogStore(s=> s.blogs);

  return (
    <div className="bg-fixed" style={{ backgroundImage: `url("https://res.cloudinary.com/dwmmlrpgg/image/upload/v1769593899/copy_of_backgroundfooter_dvic2i_cc16e1.png")` }}>
      <Navbar />
      <section className="pt-40 pb-20 space-y-8 px-2 lg:px-5">
        <h1 className="text-4xl text-yellow-400 text-center">BLOGS</h1>
        <div className="lg:flex justify-around">
          {blogs?.map((blog,index)=>(
            <BlogCard key={index} title={blog?.title} image={blog?.image} date={blog?.date}/>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Blogs
