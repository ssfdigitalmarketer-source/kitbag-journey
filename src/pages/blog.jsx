import { useParams } from 'react-router'
import { useBlogStore } from '../store/useBlogStore';

const Blog = () => {
    const { slug } = useParams();
    const blog = useBlogStore(s =>
        s.blogs.find(b => b.title === slug)
    );

    return (
        <div className='relative'>

            <section className='pb-20 pt-40 relative px-5 lg:px-60 space-y-8 bg-fixed bg-no-repeat'>
                <img src="/assets/bg_black.webp" className="fixed inset-0 -z-10 w-full h-full object-cover" alt="" loading="lazy" />
                <div className='text-center'>
                    <img src={blog?.image} alt="blog-image" className='object-cover mx-auto' />
                </div>
                <h1 className='text-2xl lg:text-4xl font-black text-yellow-400'>{blog?.title}</h1>
                <p className='font-sans'>{blog?.date}</p>
                <div className='space-y-5'>
                    {blog?.content?.map((para, index) => (
                        <p className='font-sans text-xs lg:text-xl' key={index}>{para}</p>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Blog
