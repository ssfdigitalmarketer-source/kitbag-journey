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

            <section className='pb-20 pt-40 px-5 lg:px-60 space-y-8' style={{ backgroundImage: `url('https://res.cloudinary.com/dwmmlrpgg/image/upload/v1769061372/wrinkled-paper-black-background-abstract-2026-01-09-00-09-50-utc_um1mhu.jpg')`, backgroundPosition: "center" }}>
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
