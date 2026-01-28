import BlogCard from "../components/BlogCard"
import { useBlogStore } from "../store/useBlogStore"

const BlogSection = () => {
    const blogsData = useBlogStore(s => s.blogs);

    return (
        <section className="px-5 mt-6 space-y-6 py-20" >
            <h1 className="text-yellow-500 text-4xl text-center">LATEST BLOGS</h1>
            <div className="justify-evenly lg:flex">
                {blogsData?.map((blog, index) => (
                    <BlogCard key={index} image={blog.image} title={blog.title} date={blog.date} />
                ))}
            </div>
        </section>
    )
}

export default BlogSection
