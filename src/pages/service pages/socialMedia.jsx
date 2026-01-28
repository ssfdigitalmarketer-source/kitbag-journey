import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

const SocialMedia = () => {
    return (
        <div>
            <Navbar />
            <section className="">
                <img src="https://res.cloudinary.com/dwmmlrpgg/image/upload/v1768631787/service2_q8sjvo.jpg" alt="social media and pr" className="w-full" />
                <div className="py-20 space-y-8">
                    <h1 className="text-4xl text-yellow-500 text-center">SOCIAL MEDIA AND PR</h1>
                    <div className="text-xs lg:text-lg font-sans px-5 lg:w-[70%] mx-auto space-y-10">
                        <p className="">Athletes aren’t just competitors — they are influential personalities.
                            We help athletes evolve into strong, recognizable, and marketable brands by
                            crafting a unique story that resonates with fans and the industry.</p>
                        {/* <h2 className="text-3xl font-oswald text-yellow-500 text-center">WHAT WE MANAGE</h2> */}
                        <div className="space-y-2">
                            <h3 className="text-yellow-500 text-xl lg:text-2xl">Creative Brand Identity</h3>
                            <p>Signature branding, campaign concepts & storytelling.</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-yellow-500 text-xl lg:text-2xl">Social Media Strategy</h3>
                            <p>Regular content planning, engagement growth & insights.</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-yellow-500 text-xl lg:text-2xl">Public Relations & Reputation Management</h3>
                            <p>Controlled brand narrative, media coordination & crisis management.</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-yellow-500 text-xl lg:text-2xl">Events & Fan Engagement</h3>
                            <p>Meet-ups, digital events, activation experiences & PR appearances.</p>
                        </div>


                    </div>

                </div>
            </section>
            <Footer />
        </div>
    )
}

export default SocialMedia;
