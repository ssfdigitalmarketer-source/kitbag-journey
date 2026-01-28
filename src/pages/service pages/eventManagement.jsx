import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

const EventManagement = () => {
    return (
        <div>
            <Navbar />
            <section className="">
                <div className="relative w-full">
                    <img
                        src="https://res.cloudinary.com/dwmmlrpgg/image/upload/v1768631738/service_h5odoj.jpg"
                        alt=""
                        className="w-full block"
                    />

                    <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
                        <h1 className="text-yellow-400 text-4xl md:text-5xl text-center leading-tight">
                            CRICKET LEAGUE MANAGEMENT
                        </h1>
                    </div>
                </div>
                {/* <img src="https://res.cloudinary.com/dwmmlrpgg/image/upload/v1769506079/aksh-yadav-bY4cqxp7vos-unsplash_lx3exy.jpg" alt="social media and pr" className="w-full" /> */}
                <div className="py-20 space-y-8">
                    {/* <h1 className="text-4xl text-yellow-400 text-center">Cricket League Management</h1> */}
                    <div className="text-xs lg:text-lg font-sans px-5 lg:w-[70%] mx-auto space-y-10">
                        <p className="">We build and manage scalable sports events and leagues with a strong focus on commercial viability, brand value, and long-term growth. Our end-to-end approach ensures structured planning, efficient execution, and measurable returns for stakeholders.</p>
                        {/* <h2 className="text-3xl font-oswald text-yellow-400 text-center">WHAT WE MANAGE</h2> */}
                        <div className="space-y-2">
                            <h3 className="text-yellow-400 text-xl lg:text-2xl">End-to-End Execution</h3>
                            <p>Strategic planning to flawless on-ground delivery.</p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-yellow-400 text-xl lg:text-2xl">League Planning</h3>
                            <p>Format design, scheduling, governance, and competition structure.</p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-yellow-400 text-xl lg:text-2xl">Player Drafting</h3>
                            <p>Transparent draft and auction execution systems.</p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-yellow-400 text-xl lg:text-2xl">Franchise Sales</h3>
                            <p>Franchise structuring, onboarding, and partner coordination.</p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-yellow-400 text-xl lg:text-2xl">Sponsorship Strategy</h3>
                            <p>Revenue-focused brand partnerships and integrations.</p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-yellow-400 text-xl lg:text-2xl">Operations</h3>
                            <p>Venue management, logistics, officials, and match-day control.</p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-yellow-400 text-xl lg:text-2xl">Hospitality</h3>
                            <p>VIP, investor, sponsor, and stakeholder experience management.</p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-yellow-400 text-xl lg:text-2xl">Media Management</h3>
                            <p>Press relations, broadcast coordination, and visibility growth.</p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-yellow-400 text-xl lg:text-2xl">Content Creation</h3>
                            <p>Digital-first sports content to build audience and brand value.</p>
                        </div>


                    </div>

                </div>
            </section>
            <Footer />
        </div>
    )
}

export default EventManagement;
