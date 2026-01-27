import { useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { Calendar, MapPin, User } from "lucide-react"



const AthleteContact = () => {
    const [formData, setFormData] = useState({
        name: "",
        dateOfBirth: "",
        placeOfBirth: "",
        debuts: "",
        playingRole: "",
        battingStyle: "",
        bowlingStyle: "",
        achievements: "",
        bestScore: "",
        bestBowling: "",
        bio: ""
    })

    function formDataChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    function handleForm(e) {
        e.preventDefault();
        console.log(formData);

    }


    return (
        <div>
            <Navbar />
            <section className="pt-40 pb-20 space-y-8 px-5" style={{ backgroundImage: `url('https://res.cloudinary.com/dwmmlrpgg/image/upload/v1769061372/wrinkled-paper-black-background-abstract-2026-01-09-00-09-50-utc_um1mhu.jpg')`, backgroundPosition: "center" }}>
                <h1 className="text-center text-4xl text-yellow-500">JOIN US AS AN ATHLETE</h1>
                <p className="font-sans text-center text-lg">Submit your portfolio today and take your career to next level with our expert guidance and support.</p>
                <div className="mx-auto lg:w-[60%] bg-white/10 px-8 py-10 rounded-lg backdrop-blur-xl">
                    <form action="">
                        <div className="space-y-4 flex flex-col font-sans">

                            {/* Name */}
                            <label className="text-yellow-500">Name</label>
                            <div className="flex items-center bg-[#0f0f0f] rounded-lg px-3">
                                <User className="w-6 h-6 text-[#505050]" />
                                <input
                                    type="text"
                                    name="name"
                                    onChange={formDataChange}
                                    className="w-full bg-transparent py-4 px-3 focus:outline-none"
                                    placeholder="Full Name"
                                    required
                                />
                            </div>

                            {/* Date of Birth */}
                            <label className="text-yellow-500">Date of Birth</label>
                            <div className="flex items-center bg-[#0f0f0f] rounded-lg px-3">
                                <Calendar className="w-6 h-6 text-[#505050]" />
                                <input
                                    type="date"
                                    name="dob"
                                    onChange={formDataChange}
                                    className="w-full bg-transparent py-4 px-3 focus:outline-none"
                                    required
                                />
                            </div>

                            {/* Place of Birth */}
                            <label className="text-yellow-500">Place of Birth</label>
                            <div className="flex items-center bg-[#0f0f0f] rounded-lg px-3">
                                <MapPin className="w-6 h-6 text-[#505050]" />
                                <input
                                    type="text"
                                    name="placeOfBirth"
                                    onChange={formDataChange}
                                    className="w-full bg-transparent py-4 px-3 focus:outline-none"
                                    placeholder="City, Country"
                                />
                            </div>

                            {/* Debuts */}
                            <label className="text-yellow-500">Debuts (if any)</label>
                            <input
                                type="text"
                                name="debuts"
                                onChange={formDataChange}
                                className="w-full bg-[#0f0f0f] rounded-lg py-4 px-3 focus:outline-none"
                                placeholder="ODI / Test / T20 debut details"
                            />

                            {/* Playing Role */}
                            <label className="text-yellow-500">Playing Role</label>
                            <input
                                type="text"
                                name="playingRole"
                                onChange={formDataChange}
                                className="w-full bg-[#0f0f0f] rounded-lg py-4 px-3 focus:outline-none"
                                placeholder="Batsman / Bowler / All-rounder"
                            />

                            {/* Batting Style */}
                            <label className="text-yellow-500">Batting Style</label>
                            <input
                                type="text"
                                name="battingStyle"
                                onChange={formDataChange}
                                className="w-full bg-[#0f0f0f] rounded-lg py-4 px-3 focus:outline-none"
                                placeholder="Right-hand bat / Left-hand bat"
                            />

                            {/* Bowling Style */}
                            <label className="text-yellow-500">Bowling Style</label>
                            <input
                                type="text"
                                name="bowlingStyle"
                                onChange={formDataChange}
                                className="w-full bg-[#0f0f0f] rounded-lg py-4 px-3 focus:outline-none"
                                placeholder="Fast / Spin / Medium"
                            />

                            {/* Achievements */}
                            <label className="text-yellow-500">Achievements (if any)</label>
                            <textarea
                                name="achievements"
                                onChange={formDataChange}
                                rows={4}
                                className="w-full bg-[#0f0f0f] rounded-lg py-4 px-3 focus:outline-none"
                                placeholder="Awards, records, milestones"
                            />

                            {/* Best Score */}
                            <label className="text-yellow-500">Best Score</label>
                            <input
                                type="text"
                                name="bestScore"
                                onChange={formDataChange}
                                className="w-full bg-[#0f0f0f] rounded-lg py-4 px-3 focus:outline-none"
                                placeholder="e.g. 183 vs Australia"
                            />

                            {/* Best Bowling Figure */}
                            <label className="text-yellow-500">Best Bowling Figure</label>
                            <input
                                type="text"
                                name="bestBowling"
                                onChange={formDataChange}
                                className="w-full bg-[#0f0f0f] rounded-lg py-4 px-3 focus:outline-none"
                                placeholder="e.g. 6/32"
                            />

                            {/* About Yourself */}
                            <label className="text-yellow-500">Say something about yourself</label>
                            <textarea
                                name="about"
                                onChange={formDataChange}
                                rows={6}
                                className="w-full bg-[#0f0f0f] rounded-lg py-4 px-3 focus:outline-none"
                                placeholder="Short bio about the player"
                            />

                            {/* Submit Button */}
                            <button
                                onClick={handleForm}
                                className="group relative overflow-hidden font-oswald px-8 py-4 mt-4 text-lg bg-yellow-500 text-black transition-transform duration-300 ease-in-out w-full"
                            >
                                <span className="absolute inset-0 bg-white scale-x-0 origin-center transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                                <span className="relative z-10">Submit Profile</span>
                            </button>

                        </div>
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default AthleteContact
