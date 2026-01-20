import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const About = () => {
    return (
        <div>
            <Navbar />
            <section className="py-20 px-5 space-y-8">
                <h1 className="text-yellow-500 text-4xl text-center">ABOUT US</h1>
                <p className="font-sans text-xl lg:w-[60%] mx-auto text-center">Kitbag Journey, is solely a sports management and consultancy firm conceptualized in the year 2023 by Sikandar Heyat, who himself is a former cricketer & sport management professional with industry experience of more than 10 years. Sikandar was instrumental in establishing MS Dhoni Cricket Academy across the globe.</p>
                <p className="font-sans text-xl lg:w-[60%] mx-auto text-center">Kitbag Journey Athlete Management is a next-generation sports management
                    organization dedicated to nurturing athletic talent and empowering sports
                    professionals to achieve excellence. With strategic career development, brand
                    partnerships, professional mentoring, and top-tier representation — we ensure
                    athletes stay focused on performance, while we take care of everything else that
                    drives success.</p>

                    <h1 className="text-yellow-500 text-4xl text-center">MEET OUR TEAM</h1>

                    <div className="space-y-8 lg:w-[70%] mx-auto">
                        <div className="lg:flex space-y-3 lg:space-y-0">
                            <div className="w-[100%] h-[40vh] lg:w-60 lg:h-60 overflow-hidden">
                                <img src="https://res.cloudinary.com/dwmmlrpgg/image/upload/v1768632490/sh-sirImage_pb0kj3.jpg" alt="" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                            </div>
                            <div className="space-y-3 flex-1">
                                <p className="text-yellow-500 text-2xl pl-4 text-center lg:text-left lg:text-3xl">SIKANDAR HEYAT</p>
                                <p className="text-white text-lg lg:text-xl pl-4 text-center lg:text-left font-sans ">FOUNDER AND CEO</p>
                                <div className="w-full border-[0.5px] border-yellow-500 "></div>
                                <p className="pl-4 font-sans text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis quae consequuntur laboriosam minus, mollitia eius vel nam id aliquam rerum explicabo iusto eum dolorum adipisci nostrum? Aliquid ipsam cupiditate hic est ad et at aliquam quia, temporibus, numquam doloribus deserunt placeat amet culpa dolor dolorum voluptatum? Iusto corrupti omnis reprehenderit!</p>
                            </div>
                        </div>

                        <div className="lg:flex space-y-3 lg:space-y-0">
                            <div className="w-[100%] h-[40vh] lg:w-60 lg:h-60 overflow-hidden">
                                <img src="https://res.cloudinary.com/dwmmlrpgg/image/upload/v1768632490/sh-sirImage_pb0kj3.jpg" alt="" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                            </div>
                            <div className="space-y-3 flex-1">
                                <p className="text-yellow-500 text-2xl pl-4 text-center lg:text-left lg:text-3xl">SIKANDAR HEYAT</p>
                                <p className="text-white text-lg lg:text-xl pl-4 text-center lg:text-left font-sans ">FOUNDER AND CEO</p>
                                <div className="w-full border-[0.5px] border-yellow-500 "></div>
                                <p className="pl-4 font-sans text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis quae consequuntur laboriosam minus, mollitia eius vel nam id aliquam rerum explicabo iusto eum dolorum adipisci nostrum? Aliquid ipsam cupiditate hic est ad et at aliquam quia, temporibus, numquam doloribus deserunt placeat amet culpa dolor dolorum voluptatum? Iusto corrupti omnis reprehenderit!</p>
                            </div>
                        </div>
                    </div>
            </section>
            <Footer />
        </div>
    )
}

export default About
