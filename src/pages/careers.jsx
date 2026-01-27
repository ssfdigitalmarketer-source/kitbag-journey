import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { User, Mail, Phone, Briefcase, Upload } from "lucide-react";
import { useRef } from "react";

const Careers = () => {
    const formRef = useRef(null);

    const scrollToForm = () => {
        formRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };
    return (
        <div>
            <Navbar />
            <section className="px-5 pt-40 pb-20" style={{ backgroundImage: `url('https://res.cloudinary.com/dwmmlrpgg/image/upload/v1769061372/wrinkled-paper-black-background-abstract-2026-01-09-00-09-50-utc_um1mhu.jpg')`, backgroundPosition: "center" }}>
                <div className="lg:w-[70%] mx-auto space-y-8 ">
                    <h1 className="text-4xl text-yellow-500 text-center">JOIN OUR TEAM AND CONTRIBUTE TO OUR MISSION</h1>
                    <h2 className="text-2xl text-yellow-500 text-center font-sans">Currently Looking for :</h2>
                    <div className="lg:flex gap-10 flex-wrap justify-center space-y-3 lg:space-y-0">
                        <div className="font-sans lg:w-[40%] space-y-4 backdrop-blur-xl p-6 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300">
                            <h3 className="text-xl text-yellow-500">Assistant Manager</h3>
                            <p className="text-lg">We are looking for a responsible Assistant Manager to support daily operations, supervise staff, and assist the Manager in planning and execution of tasks. The role involves coordinating teams, preparing reports, ensuring policy compliance, and maintaining efficient workflow.</p>
                            <p className="text-yellow-500 text-xl">Requirements :</p>
                            <p className="text-lg">Bachelor’s degree in a related field, 2–4 years of experience, strong communication and leadership skills, and basic proficiency in MS Office.</p>
                            <button className="bg-white px-6 py-3 text-black" onClick={scrollToForm}>Apply Now</button>
                        </div>
                        <div className="font-sans lg:w-[40%] space-y-4 backdrop-blur-xl p-6 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300">
                            <h3 className="text-xl text-yellow-500">Assistant Manager</h3>
                            <p className="text-lg">We are looking for a responsible Assistant Manager to support daily operations, supervise staff, and assist the Manager in planning and execution of tasks. The role involves coordinating teams, preparing reports, ensuring policy compliance, and maintaining efficient workflow.</p>
                            <p className="text-yellow-500 text-xl">Requirements :</p>
                            <p className="text-lg">Bachelor’s degree in a related field, 2–4 years of experience, strong communication and leadership skills, and basic proficiency in MS Office.</p>
                            <button className="bg-white px-6 py-3 text-black" onClick={scrollToForm}>Apply Now</button>
                        </div>
                        <div className="font-sans lg:w-[40%] space-y-4 backdrop-blur-xl p-6 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300">
                            <h3 className="text-xl text-yellow-500">Assistant Manager</h3>
                            <p className="text-lg">We are looking for a responsible Assistant Manager to support daily operations, supervise staff, and assist the Manager in planning and execution of tasks. The role involves coordinating teams, preparing reports, ensuring policy compliance, and maintaining efficient workflow.</p>
                            <p className="text-yellow-500 text-xl">Requirements :</p>
                            <p className="text-lg">Bachelor’s degree in a related field, 2–4 years of experience, strong communication and leadership skills, and basic proficiency in MS Office.</p>
                            <button className="bg-white px-6 py-3 text-black" onClick={scrollToForm}>Apply Now</button>
                        </div>

                    </div>
                </div>
                <div className="lg:w-[50%] mx-auto mt-20" ref={formRef}>
                    <form action="">
                        <div className="space-y-4 flex flex-col font-sans">

                            {/* Name */}
                            <label htmlFor="name" className="text-yellow-500">Full Name</label>
                            <div className="flex items-center bg-[#0f0f0f] rounded-lg px-3">
                                <User className="w-6 h-6 text-[#505050]" />
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Your Name"
                                    className="w-full bg-transparent py-4 px-3 focus:outline-none"
                                    required
                                />
                            </div>

                            {/* Email */}
                            <label htmlFor="email" className="text-yellow-500">Email</label>
                            <div className="flex items-center bg-[#0f0f0f] rounded-lg px-3">
                                <Mail className="w-6 h-6 text-[#505050]" />
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Your Email"
                                    className="w-full bg-transparent py-4 px-3 focus:outline-none"
                                    required
                                />
                            </div>

                            {/* Phone */}
                            <label htmlFor="phone" className="text-yellow-500">Phone Number</label>
                            <div className="flex items-center bg-[#0f0f0f] rounded-lg px-3">
                                <Phone className="w-6 h-6 text-[#505050]" />
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    placeholder="Phone Number"
                                    className="w-full bg-transparent py-4 px-3 focus:outline-none"
                                    required
                                />
                            </div>

                            {/* Position */}
                            <label htmlFor="position" className="text-yellow-500">Position Applying For</label>
                            <div className="flex items-center bg-[#0f0f0f] rounded-lg px-3">
                                <Briefcase className="w-6 h-6 text-[#505050]" />
                                <input
                                    type="text"
                                    name="position"
                                    id="position"
                                    placeholder="Assistant Manager"
                                    className="w-full bg-transparent py-4 px-3 focus:outline-none"
                                    required
                                />
                            </div>

                            {/* Resume Upload */}
                            <label htmlFor="resume" className="text-yellow-500">Upload Resume</label>
                            <div className="flex items-center bg-[#0f0f0f] rounded-lg px-3 py-3">
                                <Upload className="w-6 h-6 text-[#505050]" />
                                <input
                                    type="file"
                                    name="resume"
                                    id="resume"
                                    className="w-full text-sm text-gray-400 file:bg-transparent file:border-none file:text-gray-400"
                                    required
                                />
                            </div>

                            {/* Message */}
                            <label htmlFor="message" className="text-yellow-500">Cover Message</label>
                            <textarea
                                name="message"
                                id="message"
                                rows={6}
                                placeholder="Write a short cover message"
                                className="w-full bg-[#0f0f0f] rounded-lg py-4 px-3 focus:outline-none"
                                required
                            />

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="group relative overflow-hidden font-oswald px-8 py-4 mt-4 text-lg bg-yellow-500 text-black w-full"
                            >
                                <span className="absolute inset-0 bg-white scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></span>
                                <span className="relative z-10">Apply Now</span>
                            </button>

                        </div>
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Careers
