
import { User, Mail, Phone, Briefcase, Upload } from "lucide-react";
import { useState, useRef } from "react";

const Careers = () => {
    const scriptUrl = import.meta.env.VITE_APP_SCRIPT_URL;

    const formRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        position: "",
        message: ""
    })

    const [showEmptyFieldAlert, setShowEmptyFieldAlert] = useState(false);

    function formDataChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    async function handleForm(e) {
        e.preventDefault();
        console.log(formData);
        if (formData.name === "" || formData.email === "" || formData.message === "" || formData.phone === "" || formData.position === "" || !selectedFile) {
            setShowEmptyFieldAlert(true);
            return;
        }

        if (selectedFile.size > 10 * 1024 * 1024) {
            setShowEmptyFieldAlert(true);
            return;
        }

        const reader = new FileReader();

        try {
            reader.onload = async () => {
                const base64 = reader.result.split(",")[1];

                await fetch(scriptUrl, {
                    method: "POST",
                    mode: "no-cors",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        form: "career",
                        fullName: formData.name,
                        email: formData.email,
                        phone: formData.phone,
                        position: formData.position,
                        message: formData.message,
                        file: base64,
                        fileName: selectedFile.name,
                        mimeType: selectedFile.type
                    })
                });

                alert("Application submitted!");
            };
            reader.readAsDataURL(selectedFile);

        } catch (err) {
            console.log(err);
            return;

        }

    }

    const scrollToForm = () => {
        formRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };
    return (
        <div>
            <section className="px-5 text-xs lg:text-base pt-40 pb-20" style={{ backgroundImage: `url('/assets/bg_paper.jpg')`, backgroundPosition: "center" }}>
                <div className="lg:w-[70%] mx-auto space-y-8 ">
                    <h1 className="text-4xl text-yellow-400 font-black text-center">JOIN OUR TEAM AND CONTRIBUTE TO OUR MISSION</h1>
                    <h2 className="text-xl lg:text-2xl text-yellow-400 text-center ">Currently Looking for :</h2>
                    <div className="lg:flex gap-10 flex-wrap justify-center space-y-3 lg:space-y-0">
                        <div className=" lg:w-[40%] space-y-4 backdrop-blur-xl p-6 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300">
                            <h3 className="text-lg lg:text-xl text-yellow-400">Assistant Manager</h3>
                            <p className="">We are looking for a responsible Assistant Manager to support daily operations, supervise staff, and assist the Manager in planning and execution of tasks. The role involves coordinating teams, preparing reports, ensuring policy compliance, and maintaining efficient workflow.</p>
                            <p className="text-yellow-400 text-xl">Requirements :</p>
                            <p className="">Bachelor’s degree in a related field, 2–4 years of experience, strong communication and leadership skills, and basic proficiency in MS Office.</p>
                            <button className="bg-white px-6 py-3 text-black" onClick={scrollToForm}>Apply Now</button>
                        </div>
                        <div className=" lg:w-[40%] space-y-4 backdrop-blur-xl p-6 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300">
                            <h3 className="text-lg lg:text-xl text-yellow-400">Assistant Manager</h3>
                            <p className="">We are looking for a responsible Assistant Manager to support daily operations, supervise staff, and assist the Manager in planning and execution of tasks. The role involves coordinating teams, preparing reports, ensuring policy compliance, and maintaining efficient workflow.</p>
                            <p className="text-yellow-400 text-xl">Requirements :</p>
                            <p className="">Bachelor’s degree in a related field, 2–4 years of experience, strong communication and leadership skills, and basic proficiency in MS Office.</p>
                            <button className="bg-white px-6 py-3 text-black" onClick={scrollToForm}>Apply Now</button>
                        </div>
                        <div className=" lg:w-[40%] space-y-4 backdrop-blur-xl p-6 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300">
                            <h3 className="text-lg lg:text-xl text-yellow-400">Assistant Manager</h3>
                            <p className="">We are looking for a responsible Assistant Manager to support daily operations, supervise staff, and assist the Manager in planning and execution of tasks. The role involves coordinating teams, preparing reports, ensuring policy compliance, and maintaining efficient workflow.</p>
                            <p className="text-yellow-400 text-xl">Requirements :</p>
                            <p className="">Bachelor’s degree in a related field, 2–4 years of experience, strong communication and leadership skills, and basic proficiency in MS Office.</p>
                            <button className="bg-white px-6 py-3 text-black" onClick={scrollToForm}>Apply Now</button>
                        </div>

                    </div>
                </div>
                <div className="lg:w-[50%] mx-auto mt-20" ref={formRef}>
                    <form action="">
                        <div className="space-y-4 flex flex-col ">

                            {/* Name */}
                            <label htmlFor="name" className="text-yellow-400">Full Name</label>
                            <div className="flex items-center bg-[#0f0f0f] rounded-lg px-3">
                                <User className="w-6 h-6 text-[#505050]" />
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    onChange={formDataChange}
                                    placeholder="Your Name"
                                    className="w-full bg-transparent py-4 px-3 focus:outline-none"
                                    required
                                />
                            </div>
                            {showEmptyFieldAlert && formData.name === "" && <p className="text-red-500">Enter your name</p>}


                            {/* Email */}
                            <label htmlFor="email" className="text-yellow-400">Email</label>
                            <div className="flex items-center bg-[#0f0f0f] rounded-lg px-3">
                                <Mail className="w-6 h-6 text-[#505050]" />
                                <input
                                    type="email"
                                    name="email"
                                    onChange={formDataChange}
                                    id="email"
                                    placeholder="Your Email"
                                    className="w-full bg-transparent py-4 px-3 focus:outline-none"
                                    required
                                />
                            </div>
                            {showEmptyFieldAlert && formData.email === "" && <p className="text-red-500">Enter your email</p>}


                            {/* Phone */}
                            <label htmlFor="phone" className="text-yellow-400">Phone Number</label>
                            <div className="flex items-center bg-[#0f0f0f] rounded-lg px-3">
                                <Phone className="w-6 h-6 text-[#505050]" />
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    onChange={formDataChange}
                                    placeholder="Phone Number"
                                    className="w-full bg-transparent py-4 px-3 focus:outline-none"
                                    required
                                />
                            </div>
                            {showEmptyFieldAlert && formData.phone === "" && <p className="text-red-500">Enter your phone number</p>}


                            {/* Position */}
                            <label htmlFor="position" className="text-yellow-400">Position Applying For</label>
                            <div className="flex items-center bg-[#0f0f0f] rounded-lg px-3">
                                <Briefcase className="w-6 h-6 text-[#505050]" />
                                <input
                                    type="text"
                                    name="position"
                                    id="position"
                                    onChange={formDataChange}
                                    placeholder="Assistant Manager"
                                    className="w-full bg-transparent py-4 px-3 focus:outline-none"
                                    required
                                />
                            </div>
                            {showEmptyFieldAlert && formData.position === "" && <p className="text-red-500">Enter the position you are applying for</p>}

                            {/* Resume Upload */}
                            <label htmlFor="resume" className="text-yellow-400">Upload Resume</label>
                            <div className="flex items-center bg-[#0f0f0f] rounded-lg px-3 py-3">
                                <Upload className="w-6 h-6 text-[#505050]" />
                                <input
                                    type="file"
                                    name="resume"
                                    id="resume"
                                    accept="application/pdf"
                                    onChange={(e) => setSelectedFile(e.target.files[0])}
                                    className="w-full text-sm text-gray-400 file:bg-transparent file:border-none file:text-gray-400"
                                    required
                                />
                            </div>

                            {showEmptyFieldAlert && (!selectedFile ? <p className="text-red-500">Please upload your resume</p> : <p className="text-red-500">File too large (max 10MB)</p>)}

                            {/* Message */}
                            <label htmlFor="message" className="text-yellow-400">Cover Message</label>
                            <textarea
                                name="message"
                                id="message"
                                onChange={formDataChange}
                                rows={6}
                                placeholder="Write a short cover message"
                                className="w-full bg-[#0f0f0f] rounded-lg py-4 px-3 focus:outline-none"
                                required
                            />
                            {showEmptyFieldAlert && formData.message === "" && <p className="text-red-500">Enter your cover message</p>}


                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="group relative overflow-hidden px-8 py-4 mt-4 text-lg bg-yellow-400 text-black w-full"
                                onClick={handleForm}
                            >
                                <span className="absolute inset-0 bg-white scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></span>
                                <span className="relative z-10">Apply Now</span>
                            </button>

                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Careers
