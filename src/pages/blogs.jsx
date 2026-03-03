
import { useBlogStore } from "../store/useBlogStore"
import BlogCard from "../components/BlogCard"
import FadeInX from "../animations/FadeInX"

const Blogs = () => {
  const blogs = useBlogStore(s => s.blogs);

  return (
    <div className="bg-fixed">

      <img src="/assets/bg_black.webp" className="fixed inset-0 -z-10 w-full h-full object-cover" alt="" loading="lazy" />

      <section className="pt-40 pb-20 space-y-8 px-2 lg:px-5">
        <h1 className="text-4xl text-yellow-400 font-black text-center">BLOGS</h1>
        <FadeInX direction="up">
          <div className="lg:flex justify-around">
            {blogs?.map((blog, index) => (
              <BlogCard key={index} title={blog?.title} image={blog?.image} date={blog?.date} />
            ))}
          </div>

        </FadeInX>
      </section>

    </div>
  )
}

export default Blogs
