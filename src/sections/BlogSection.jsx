import BlogCard from "../components/BlogCard"
import { useBlogStore } from "../store/useBlogStore"

const BlogSection = () => {
    const blogsData = useBlogStore(s => s.blogs);

    return (
        <section className="px-5 space-y-8 py-10 relative" >
            <img src="/assets/cricket-rope.webp" alt="bg" className="absolute inset-0 w-full h-full object-cover -z-10 opacity-30"/>
            <h1 className="text-yellow-400 font-bold text-4xl text-center">LATEST BLOGS</h1>
            <div className="lg:justify-evenly gap-4 space-y-8 sm:space-y-0 sm:flex">
                {blogsData?.map((blog, index) => (
                    <BlogCard key={index} image={blog.image} title={blog.title} date={blog.date} />
                ))}
            </div>
        </section>
    )
}

export default BlogSection
