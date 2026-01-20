import { useParams } from 'react-router'
import { useBlogStore } from '../store/useBlogStore';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Blog = () => {
    const { slug } = useParams();
    const blog = useBlogStore(s =>
        s.blogs.find(b => b.title === slug)
    );

    return (
        <div>
            <Navbar />

            <section className='py-20 px-5 lg:px-60 space-y-8'>
                <div className='text-center'>
                    <img src={blog?.image} alt="blog-image" className='object-cover mx-auto'/>
                </div>
                <h1 className='text-2xl lg:text-4xl text-yellow-500'>{blog?.title}</h1>
                <p className='font-sans'>{blog?.date}</p>
                <div className='space-y-5'>
                    {blog?.content?.map((para,index)=>(
                        <p className='font-sans text-lg lg:text-xl' key={index}>{para}</p>
                    ))}
                </div>
            </section>

            <Footer />

        </div>
    )
}

export default Blog
