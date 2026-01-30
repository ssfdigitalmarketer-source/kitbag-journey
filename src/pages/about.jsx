import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const About = () => {
    return (
        <div className="">

            <Navbar />
            <section className="pb-20 relative z-10 space-y-8" >
                <div className="relative w-full">
                    <img
                        src="https://res.cloudinary.com/dwmmlrpgg/image/upload/v1769592417/Untitled_design_2_genmsi.png"
                        alt=""
                        className="w-full block"
                    />

                    <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
                        <h1 className="text-yellow-400 text-4xl md:text-5xl text-center leading-tight">
                            ABOUT US
                        </h1>
                    </div>
                </div>



                <p className="px-2 font-sans text-xs lg:text-xl lg:w-[70%] mx-auto text-center">Kitbag Journey, is solely a sports management and consultancy firm conceptualized in the year 2023 by Sikandar Heyat, who himself is a former cricketer & sport management professional with industry experience of more than 10 years. Sikandar was instrumental in establishing MS Dhoni Cricket Academy across the globe.</p>
                <p className="px-2 font-sans text-xs lg:text-xl lg:w-[70%] mx-auto text-center">Kitbag Journey Athlete Management is a next-generation sports management
                    organization dedicated to nurturing athletic talent and empowering sports
                    professionals to achieve excellence. With strategic career development, brand
                    partnerships, professional mentoring, and top-tier representation — we ensure
                    athletes stay focused on performance, while we take care of everything else that
                    drives success.</p>

                <h1 className="text-yellow-400 text-4xl text-center">MEET OUR TEAM</h1>

                <div className="px-2 space-y-8 lg:w-[80%] xl:w-[70%] mx-auto">
                    <div className="lg:flex space-y-3 lg:space-y-0">
                        <div className="w-[100%] h-[45vh] lg:w-60 lg:h-60 overflow-hidden">
                            <img src="https://res.cloudinary.com/dwmmlrpgg/image/upload/v1768987152/WhatsApp_Image_2026-01-21_at_10.13.06_AM_ybdw2y.jpg" alt="" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                        </div>
                        <div className="space-y-3 flex-1">
                            <p className="text-yellow-400 text-2xl pl-4 text-center lg:text-left lg:text-3xl">SHAHBAZ NADEEM</p>
                            <p className=" text-yellow-400 text-lg lg:text-xl pl-4 text-center lg:text-left font-sans">MENTOR</p>
                            {/* <div className="w-full border-[0.5px] border-yellow-400 "></div> */}
                            <p className="lg:pl-4 text-xs lg:text-lg font-sans text-center lg:text-left">Shahbaz Nadeem brings unparalleled on-field and off-field experience to the team. Born in Bihar, he has represented Bihar and Jharkhand in the Ranji Trophy and featured prominently in India’s premier domestic tournaments, including the Duleep Trophy and Deodhar Trophy. His journey culminated at the highest level with selection to the Indian Test cricket team.</p>
                        </div>
                    </div>

                    <div className="lg:flex space-y-3 lg:space-y-0">
                        <div className="w-[100%] h-[45vh] lg:w-60 lg:h-60 overflow-hidden">
                            <img src="https://res.cloudinary.com/dwmmlrpgg/image/upload/v1768632490/sh-sirImage_pb0kj3.jpg" alt="" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                        </div>
                        <div className="space-y-3 flex-1">
                            <p className="text-yellow-400 text-2xl pl-4 text-center lg:text-left lg:text-3xl">SIKANDAR HEYAT</p>
                            <p className="text-yellow-400 text-lg lg:text-xl pl-4 text-center lg:text-left font-sans ">FOUNDER</p>
                            {/* <div className="w-full border-[0.5px] border-yellow-400 "></div> */}
                            <p className="lg:pl-4 text-xs lg:text-lg text-center lg:text-left font-sans">A former state-level cricketer turned sports entrepreneur, Sikandar Heyat brings over 10 years of experience in business strategy, planning, contract negotiation, player management, and athlete development. His leadership experience at senior management levels has been instrumental in company growth and ecosystem development.</p>
                        </div>
                    </div>

                    <div className="lg:flex space-y-3 lg:space-y-0">
                        <div className="w-[100%] h-[45vh] lg:w-60 lg:h-60 overflow-hidden">
                            <img src="https://res.cloudinary.com/dwmmlrpgg/image/upload/v1768987893/IMG_2553.JPG_r1v7yx.jpg" alt="" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                        </div>
                        <div className="space-y-3 flex-1">
                            <p className="text-yellow-400 text-2xl pl-4 text-center lg:text-left lg:text-3xl">ONEILL N NOAH</p>
                            <p className="text-yellow-400 text-lg lg:text-xl pl-4 text-center lg:text-left font-sans ">BOARD ADVISOR</p>
                            {/* <div className="w-full border-[0.5px] border-yellow-400 "></div> */}
                            <p className="lg:pl-4 text-center lg:text-left text-xs lg:text-lg font-sans">With over 35 years of experience in the corporate sector, Mr. Oneill provides the strategic backbone of our organization. His career spans multiple industries, with deep expertise in operations, marketing, team building, strategic planning, and organizational leadership.</p>
                        </div>
                    </div>

                    <div className="lg:flex space-y-3 lg:space-y-0">
                        <div className="w-[100%] h-[45vh] lg:w-60 lg:h-60 overflow-hidden">
                            <img src="https://res.cloudinary.com/dwmmlrpgg/image/upload/v1768987152/IMG_2554.JPG_rqrkgi.jpg" alt="" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                        </div>
                        <div className="space-y-3 flex-1">
                            <p className="text-yellow-400 text-2xl pl-4 text-center lg:text-left lg:text-3xl">PRIYANSH TIWARI</p>
                            <p className="text-yellow-400 text-lg lg:text-xl pl-4 text-center lg:text-left font-sans ">HEAD OPERATIONS</p>
                            {/* <div className="w-full border-[0.5px] border-yellow-400 "></div> */}
                            <p className="lg:pl-4 text-xs lg:text-lg text-center lg:text-left font-sans">Priyansh Tiwari is an MBA graduate with more than five years of professional experience in marketing and operations within the sports industry. His strengths include data handling, operational execution, and process optimization that support informed decision-making and organizational efficiency.</p>
                        </div>
                    </div>

                    <div className="lg:flex space-y-3 lg:space-y-0">
                        <div className="w-[100%] h-[45vh] lg:w-60 lg:h-60 overflow-hidden">
                            <img src="https://res.cloudinary.com/dwmmlrpgg/image/upload/v1769067675/IMG_2584.JPG_qt6dpq.jpg" alt="" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                        </div>
                        <div className="space-y-3 flex-1">
                            <p className="text-yellow-400 text-2xl pl-4 text-center lg:text-left lg:text-3xl">NIVESH JHA</p>
                            <p className="text-yellow-400 text-lg lg:text-xl pl-4 text-center lg:text-left font-sans ">LEGAL ADVISOR</p>
                            {/* <div className="w-full border-[0.5px] border-yellow-400 "></div> */}
                            <p className="lg:pl-4 text-xs lg:text-lg text-center lg:text-left font-sans">Mr. Nivesh Kumar Jha is the Legal Consultant for Kitbag Journey and a Fellow Member of the Institute of Chartered Accountants of India (ICAI) with over 9 years of professional standing. He has extensive experience in GST, assurance, and accounting, and has been actively involved in providing direct tax advisory services to several reputed companies in India. He also handles international clients, offering comprehensive advisory and compliance support across jurisdictions.</p>
                        </div>
                    </div>

                     <div className="lg:flex space-y-3 lg:space-y-0">
                        <div className="w-[100%] h-[45vh] lg:w-60 lg:h-60 overflow-hidden">
                            <img src="https://res.cloudinary.com/dwmmlrpgg/image/upload/v1769778598/misbah-ur-rehman_aepc9k.jpg" alt="" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                        </div>
                        <div className="space-y-3 flex-1">
                            <p className="text-yellow-400 text-2xl pl-4 text-center lg:text-left lg:text-3xl">MISBAH</p>
                            <p className="text-yellow-400 text-lg lg:text-xl pl-4 text-center lg:text-left font-sans uppercase">Founder & Creative Director</p>
                            {/* <div className="w-full border-[0.5px] border-yellow-400 "></div> */}
                            <p className="lg:pl-4 text-xs lg:text-lg text-center lg:text-left font-sans">Mr. Misbah has over 18 years of experience in creative advertising and leads a results-driven ad agency focused on building meaningful brands. Blending strategic thinking, creative direction, and storytelling, Misbah delivers impactful campaigns that connect with audiences and drive growth.</p>
                        </div>
                    </div>

                </div>
            </section>
            <Footer />
        </div>
    )
}

export default About
