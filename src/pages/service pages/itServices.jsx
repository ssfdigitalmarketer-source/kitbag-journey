import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";


const ITServices = () => {
    return (
        <div>
            <Navbar />
            <section className="">
                <div className="relative w-full">
                    <img
                        src="/assets/services/it_services.webp"
                        alt="it services"
                        className="w-full block"
                        loading="lazy"
                    />

                    <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
                        <h1 className="text-yellow-400 text-4xl md:text-5xl text-center leading-tight">
                            IT SERVICES
                        </h1>
                    </div>
                </div>
                {/* <img src="https://res.cloudinary.com/dwmmlrpgg/image/upload/v1768914345/male-data-scientist-works-on-personal-computer-wea-2026-01-09-10-11-30-utc_wdsuz6.jpg" alt="" className="w-full" /> */}
                <div className="py-20 space-y-8">
                    {/* <h1 className="text-4xl text-yellow-500 text-center">IT SERVICES</h1> */}
                    <div className="text-xs lg:text-lg font-sans px-5 lg:w-[70%] mx-auto space-y-10">
                        <p className="">From conceptualization to execution, SSF Designs specializes in comprehensive product development, delivering innovative solutions tailored to your unique needs.</p>
                        <p className="">With dynamic branding solutions that are carefully developed to connect with your target audience and spur growth, SSF Designs can help you elevate the visibility of your brand.</p>
                        {/* <h2 className="text-3xl font-oswald text-yellow-500 text-center">WHAT WE MANAGE</h2> */}
                        <div className="space-y-2">
                            <h3 className="text-yellow-500 text-xl lg:text-2xl">Website Design and Development</h3>
                            <p>Creating innovative and accurate digital experiences.</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-yellow-500 text-xl lg:text-2xl">Email Marketing</h3>
                            <p>Direct. Personalized. Engaging. Automated. Converting. Measurable. Effective.</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-yellow-500 text-xl lg:text-2xl">PPC</h3>
                            <p>Instant visibility, targeted advertising, measurable results.</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-yellow-500 text-xl lg:text-2xl">Social Media Marketing</h3>
                            <p>Engage. Connect. Influence. Grow. Convert. Analyze. Succeed.</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-yellow-500 text-xl lg:text-2xl">SEO</h3>
                            <p>Boost visibility. Drive traffic. Rank higher.</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-yellow-500 text-xl lg:text-2xl">Mobile Application Development</h3>
                            <p>Innovative solutions tailored for mobile platforms.</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-yellow-500 text-xl lg:text-2xl">Corporate & Advertisement videos</h3>
                            <p>Compelling visuals that narrate brand stories effectively.</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-yellow-500 text-xl lg:text-2xl">Readymade Clone</h3>
                            <p>Replicate and innovate your business with our clone solutions.</p>
                        </div>


                    </div>

                </div>
            </section>
            <Footer />
        </div>
    )
}

export default ITServices
