import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

const AtheleteManagement = () => {
    return (
        <div className="relative">
            <Navbar />
            <section className="">
                <img src="https://res.cloudinary.com/dwmmlrpgg/image/upload/v1768631738/service_h5odoj.jpg" alt="" className="w-full" />
                <div className="py-20 space-y-8">
                    <h1 className="text-4xl text-yellow-500 text-center ">ATHLETE MANAGEMENT</h1>
                    <div className="text-lg font-sans px-5 lg:w-[70%] mx-auto space-y-10">
                        <p className="">Our athlete management framework brings together elite professionals across
                            performance, branding, legal, and commercial domains. We help athletes unlock
                            career milestones through strategic guidance tailored to their ambitions.</p>
                        <h2 className="text-3xl font-oswald text-yellow-500 text-center">WHAT WE MANAGE</h2>
                        <div className="space-y-2">
                            <h3 className="text-yellow-500 text-2xl">Career Representation</h3>
                            <p>We represent athletes with complete dedication and ensure they are showcased
                                correctly in the global sports market.</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-yellow-500 text-2xl">Brand & Image Positioning</h3>
                            <p>From media appearances to digital identity, we help develop an impactful personal brand.</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-yellow-500 text-2xl">Endorsement & Sponsorship Deals</h3>
                            <p>From media appearances to digital identity, we help develop an impactful personal brand.</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-yellow-500 text-2xl">Mentorship & Skill Advisory</h3>
                            <p>We support athletic growth through expert mentoring & professional environment
                                building.</p>
                        </div>
                    </div>

                </div>
            </section>
            <Footer />
        </div>
    )
}

export default AtheleteManagement
