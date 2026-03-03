import FadeInX from "../animations/FadeInX"

const About = () => {
    const data = [
        {
            name: "Shahbaz Nadeem",
            image: "/assets/team/shahbaaz_nadeem.jpg",
            role: "Mentor",
            description: "Shahbaz Nadeem brings unparalleled on-field and off-field experience to the team. Born in Bihar, he has represented Bihar and Jharkhand in the Ranji Trophy and featured prominently in India’s premier domestic tournaments, including the Duleep Trophy and Deodhar Trophy. His journey culminated at the highest level with selection to the Indian Test cricket team."
        },
        {
            name: "Sikandar Heyat",
            role: "Founder",
            image: "/assets/team/sh.webp",
            description: "A former state-level cricketer turned sports entrepreneur, Sikandar Heyat brings over 10 years of experience in business strategy, planning, contract negotiation, player management, and athlete development. His leadership experience at senior management levels has been instrumental in company growth and ecosystem development."
        },
        {
            name: "Misbah",
            role: "Founder & Creative Director",
            image: "/assets/team/misbah_ur_rehman.jpg",
            description: "Mr. Misbah has over 18 years of experience in creative advertising and leads a results-driven ad agency focused on building meaningful brands. Blending strategic thinking, creative direction, and storytelling, Misbah delivers impactful campaigns that connect with audiences and drive growth."
        },
        {
            name: "Oneill N Noah",
            role: "Board Advisor",
            image: "/assets/team/oneill_n_noah.jpg",
            description: "With over 35 years of experience in the corporate sector, Mr. Oneill provides the strategic backbone of our organization. His career spans multiple industries, with deep expertise in operations, marketing, team building, strategic planning, and organizational leadership."
        },
        {
            name: "Priyansh Tiwari",
            role: "Head Operations",
            image: "/assets/team/priyansh_tiwari.jpg",
            description: "Priyansh Tiwari is an MBA graduate with more than five years of professional experience in marketing and operations within the sports industry. His strengths include data handling, operational execution, and process optimization that support informed decision-making and organizational efficiency."
        },
        {
            name: "Nivesh Jha",
            role: "Legal Advisor",
            image: "/assets/team/nivesh_jha.jpg",
            description: "Mr. Nivesh Kumar Jha is the Legal Consultant for Kitbag Journey and a Fellow Member of the Institute of Chartered Accountants of India (ICAI) with over 9 years of professional standing. He has extensive experience in GST, assurance, and accounting, and has been actively involved in providing direct tax advisory services to several reputed companies in India."
        },
        {
            name: "Gaurav Juneja",
            role: "Business & Client Relation",
            image: "/assets/team/gaurav_juneja.PNG",
            description: "Gaurav is a MBA graduate and a Sports Management Professional with more than 5 years of experience in Sports industry. With expertise in business development, player management and client relationship, Gaurav is considered as key member in the organisation."
        }
    ]


    return (
        <div className="">

            <section className="pb-20 relative text-gray-300 z-10 space-y-12" >
                <div className="relative w-full">
                    <img
                        src="/assets/stadium_bw.webp"
                        alt="stadium background"
                        className="w-full block"
                        loading="lazy"
                    />

                    <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
                        <h1 className="text-yellow-400 font-black text-4xl md:text-5xl text-center leading-tight">
                            ABOUT KITBAG JOURNEY
                        </h1>
                    </div>
                </div>

                <p className="px-2 text-xs lg:text-xl lg:w-[70%] mx-auto text-center">Kitbag Journey, is solely a sports management and consultancy firm conceptualized in the year 2023 by Sikandar Heyat, who himself is a former cricketer & sport management professional with industry experience of more than 10 years. Sikandar was instrumental in establishing MS Dhoni Cricket Academy across the globe.</p>
                <p className="px-2 text-xs lg:text-xl lg:w-[70%] mx-auto text-center">Kitbag Journey Athlete Management is a next-generation sports management
                    organization dedicated to nurturing athletic talent and empowering sports
                    professionals to achieve excellence. With strategic career development, brand
                    partnerships, professional mentoring, and top-tier representation — we ensure
                    athletes stay focused on performance, while we take care of everything else that
                    drives success.</p>

                <h1 className="text-yellow-400 font-black text-2xl lg:text-4xl text-center">MEET OUR TEAM</h1>


                {/* <FadeInX direction="left"> */}

                {/* <div className="px-2 space-y-8 lg:w-[80%] xl:w-[70%] mx-auto">
                        <div className="lg:flex space-y-3 lg:space-y-0">
                            <div className="w-[100%] aspect-square lg:w-60 lg:h-60 overflow-hidden">
                                <img src="/assets/team/shahbaaz_nadeem.jpg" alt="shahbaz-nadeem" className="w-full h-full object-cover hover:grayscale-0 transition-all duration-300" />
                            </div>
                            <div className="space-y-3 flex-1">
                                <p className="text-yellow-400 text-2xl pl-4 text-center font-semibold lg:text-left lg:text-3xl">SHAHBAZ NADEEM</p>
                                <p className=" text-yellow-400 text-lg lg:text-xl pl-4 text-center lg:text-left font-[Poppins]">MENTOR</p>
                                <p className="lg:pl-4 text-xs lg:text-lg font-[Poppins] text-center lg:text-left">Shahbaz Nadeem brings unparalleled on-field and off-field experience to the team. Born in Bihar, he has represented Bihar and Jharkhand in the Ranji Trophy and featured prominently in India’s premier domestic tournaments, including the Duleep Trophy and Deodhar Trophy. His journey culminated at the highest level with selection to the Indian Test cricket team.</p>
                            </div>
                        </div>

                        <div className="lg:flex space-y-3 lg:space-y-0">
                            <div className="w-[100%] aspect-square lg:w-60 lg:h-60 overflow-hidden">
                                <img src="/assets/team/sh.webp" alt="sikandar-heyat" className="w-full h-full object-cover hover:grayscale-0 transition-all duration-300" />
                            </div>
                            <div className="space-y-3 flex-1">
                                <p className="text-yellow-400 text-2xl pl-4 text-center font-semibold lg:text-left lg:text-3xl">SIKANDAR HEYAT</p>
                                <p className="text-yellow-400 text-lg lg:text-xl pl-4 text-center lg:text-left font-[Poppins] ">FOUNDER</p>
                                <p className="lg:pl-4 text-xs lg:text-lg text-center lg:text-left font-[Poppins]">A former state-level cricketer turned sports entrepreneur, Sikandar Heyat brings over 10 years of experience in business strategy, planning, contract negotiation, player management, and athlete development. His leadership experience at senior management levels has been instrumental in company growth and ecosystem development.</p>
                            </div>
                        </div>

                        <div className="lg:flex space-y-3 lg:space-y-0">
                            <div className="w-[100%] aspect-square lg:w-60 lg:h-60 overflow-hidden">
                                <img src="/assets/team/misbah_ur_rehman.jpg" alt="misbah" className="object-top w-full h-full object-cover hover:grayscale-0 transition-all duration-300" />
                            </div>
                            <div className="space-y-3 flex-1">
                                <p className="text-yellow-400 text-2xl pl-4 text-center font-semibold lg:text-left lg:text-3xl">MISBAH</p>
                                <p className="text-yellow-400 text-lg lg:text-xl pl-4 text-center lg:text-left font-[Poppins] uppercase">Founder & Creative Director</p>
                                <p className="lg:pl-4 text-xs lg:text-lg text-center lg:text-left font-[Poppins]">Mr. Misbah has over 18 years of experience in creative advertising and leads a results-driven ad agency focused on building meaningful brands. Blending strategic thinking, creative direction, and storytelling, Misbah delivers impactful campaigns that connect with audiences and drive growth.</p>
                            </div>
                        </div>

                        <div className="lg:flex space-y-3 lg:space-y-0">
                            <div className="w-[100%] aspect-square lg:w-60 lg:h-60 overflow-hidden">
                                <img src="/assets/team/oneill_n_noah.jpg" alt="oneill-n-noah" className="object-top w-full h-full object-cover hover:grayscale-0 transition-all duration-300" />
                            </div>
                            <div className="space-y-3 flex-1">
                                <p className="text-yellow-400 text-2xl pl-4 text-center font-semibold lg:text-left lg:text-3xl">ONEILL N NOAH</p>
                                <p className="text-yellow-400 text-lg lg:text-xl pl-4 text-center lg:text-left font-[Poppins] ">BOARD ADVISOR</p>
                                <p className="lg:pl-4 text-center lg:text-left text-xs lg:text-lg font-[Poppins]">With over 35 years of experience in the corporate sector, Mr. Oneill provides the strategic backbone of our organization. His career spans multiple industries, with deep expertise in operations, marketing, team building, strategic planning, and organizational leadership.</p>
                            </div>
                        </div>

                        <div className="lg:flex space-y-3 lg:space-y-0">
                            <div className="w-[100%] aspect-square lg:w-60 lg:h-60 overflow-hidden">
                                <img src="/assets/team/priyansh_tiwari.jpg" alt="priyansh-tiwari" className="w-full h-full object-cover hover:grayscale-0 transition-all duration-300" />
                            </div>
                            <div className="space-y-3 flex-1">
                                <p className="text-yellow-400 text-2xl pl-4 text-center font-semibold lg:text-left lg:text-3xl">PRIYANSH TIWARI</p>
                                <p className="text-yellow-400 text-lg lg:text-xl pl-4 text-center lg:text-left font-[Poppins] ">HEAD OPERATIONS</p>
                                <p className="lg:pl-4 text-xs lg:text-lg text-center lg:text-left font-[Poppins]">Priyansh Tiwari is an MBA graduate with more than five years of professional experience in marketing and operations within the sports industry. His strengths include data handling, operational execution, and process optimization that support informed decision-making and organizational efficiency.</p>
                            </div>
                        </div>

                        <div className="lg:flex space-y-3 lg:space-y-0">
                            <div className="w-[100%] aspect-square lg:w-60 lg:h-60 overflow-hidden">
                                <img src="/assets/team/nivesh_jha.jpg" alt="nivesh-jha" className="w-full h-full object-cover hover:grayscale-0 transition-all duration-300" />
                            </div>
                            <div className="space-y-3 flex-1">
                                <p className="text-yellow-400 text-2xl pl-4 text-center font-semibold lg:text-left lg:text-3xl">NIVESH JHA</p>
                                <p className="text-yellow-400 text-lg lg:text-xl pl-4 text-center lg:text-left font-[Poppins] ">LEGAL ADVISOR</p>
                                <p className="lg:pl-4 text-xs lg:text-lg text-center lg:text-left font-[Poppins]">Mr. Nivesh Kumar Jha is the Legal Consultant for Kitbag Journey and a Fellow Member of the Institute of Chartered Accountants of India (ICAI) with over 9 years of professional standing. He has extensive experience in GST, assurance, and accounting, and has been actively involved in providing direct tax advisory services to several reputed companies in India. He also handles international clients, offering comprehensive advisory and compliance support across jurisdictions.</p>
                            </div>
                        </div>

                    </div> */}
                <div className="grid grid-cols-1 lg:grid-cols-4 px-5 gap-8">
                    {data.map((member, index) => (
                        <div className='aspect-square border-[2px] border-white relative group overflow-hidden cursor-pointer rounded-xl' key={index}>
                            <img src={member.image} alt={member.name} className='object-cover h-full w-full group-hover:grayscale-0' />
                            <div className='absolute inset-0 bg-white/80 translate-y-full flex items-center group-hover:translate-y-0 transition-transform duration-300 p-5 text-white '>
                                <p className='translate-y-32 group-hover:translate-y-0 text-xs text-black transition-transform duration-700'>{member.description}</p>
                            </div>

                            <div className="h-8 absolute bottom-0 px-5 py-2 bg-white w-full">
                                <div className='absolute z-50 text-right rounded-xl bottom-5 px-5 py-2 bg-white lg:text-xl transition-transform duration-700 text-yellow-400 right-0'>
                                    <p className="text-black relative font-bold">{member.name}</p>

                                </div>
                                <p className="text-black text-right relative z-50">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* </FadeInX> */}
            </section>

        </div>
    )
}

export default About
