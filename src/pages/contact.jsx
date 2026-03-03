
import { User } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";


const Contact = () => {
    const scriptUrl = import.meta.env.VITE_APP_SCRIPT_URL;
    const [formData, setFormData] = useState({
        name: "",
        email: "",
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
        if (formData.name === "" || formData.email === "" || formData.message === "") {
            setShowEmptyFieldAlert(true);
            return;
        }
        
        try {
            await fetch(scriptUrl, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    form: "contact",
                    name: formData.name,
                    email: formData.email,
                    message: formData.message
                }),
            });

                alert("Message sent successfully!");

        } catch (err) {
            console.log(err);
            return;

        }

    }

    return (
        <div className="bg-fixed">
            {/* <div className="fixed z-0 top-0"><img src="https://res.cloudinary.com/dwmmlrpgg/image/upload/v1769593899/copy_of_backgroundfooter_dvic2i_cc16e1.png" alt="" /> </div> */}
            <section className="pb-20 relative z-20 pt-40 text-xs px-5 lg:px-20 space-y-16" >
                <img src="/assets/bg_black.webp" className="fixed inset-0 -z-10 w-full h-full object-cover" alt="" loading="lazy" />
                <h1 className="text-yellow-400 text-4xl font-black text-center">GET IN TOUCH</h1>

                <div className="lg:flex gap-40">
                    <div className=" lg:w-[50%]">
                        <div className="lg:w-[80%]">
                            <p className="text-sm lg:text-xl">This is your gateway to connect with us directly. Whether you have inquiries or feedback or simply want to drop a message.</p>
                            <div className="py-10 space-y-10 border-y-[0.5px] my-8 border-yellow-400">
                                <div className="flex gap-4">
                                    <div className="p-3 rounded-lg border-[0.5px] bg-yellow-400 border-yellow-400">
                                        <Phone size={25} className="" />
                                    </div>
                                    <div>
                                        <p className="text-xs lg:text-lg text-yellow-400">Phone</p>
                                        <p className="text-xs lg:text-lg">+91 7828645264</p>

                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="p-3 rounded-lg border-[0.5px] bg-yellow-400 border-yellow-400">
                                        <Mail size={25} className="" />
                                    </div>
                                    <div>
                                        <p className="text-xs lg:text-lg text-yellow-400">Email</p>
                                        <p className="text-xs lg:text-lg">kitbagjourney@gmail.com</p>

                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="p-3 rounded-lg border-[0.5px] bg-yellow-400 border-yellow-400 self-start">
                                        <MapPin size={25} className="" />
                                    </div>
                                    <div>
                                        <p className="text-xs lg:text-lg text-yellow-400">Location</p>
                                        <p className="text-xs lg:text-lg">2-A/3, Kundan Mansion, Asaf Ali Road, Turkman Gate, Connaught Place, New Delhi-110002</p>
                                    </div>
                                </div>

                            </div>

                            <div className=" mb-20 space-y-3">
                                <p className="text-sm lg:text-base">Social Media Links :</p>
                                <div className="flex gap-6">
                                    <a href="https://www.facebook.com/profile.php?id=61550798993939" target="_blank" rel="noopener noreferrer">
                                        <FaFacebook size={25} className="hover:text-yellow-400 transition-all duration-300" /></a>
                                    <a href="https://www.instagram.com/kitbag_journey/" target="_blank" rel="noopener noreferrer">
                                        <FaInstagram size={25} className="hover:text-yellow-400 transition-all duration-300" /></a>
                                    <a href="https://www.linkedin.com/company/sports-journey/" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin size={25} className="hover:text-yellow-400 transition-all duration-300" /></a>

                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="lg:w-[40%]">
                        <form action="">
                            <div className="space-y-4 flex flex-col ">
                                <label htmlFor="name" className="text-yellow-400">Name</label>
                                <div className='flex items-center bg-[#0f0f0f] rounded-lg px-3 border-[1px] border-white/30 opacity-70'>
                                    <User className="w-6 h-6 text-[#505050]" />
                                    <input name="name" onChange={formDataChange} type="text" id="name" className="w-full bg-transparent rounded-lg py-4 px-3 focus:border-none focus:outline-none " placeholder="Name" required />

                                </div>
                                {showEmptyFieldAlert && formData.name === "" && <p className="text-red-500">Enter your name</p>}
                                <label htmlFor="email" className="text-yellow-400">Email</label>
                                <div className='flex items-center bg-[#0f0f0f] rounded-lg px-3 border-[1px] border-white/30 opacity-70'>
                                    <Mail className="w-6 h-6 text-[#505050]" />
                                    <input name="email" onChange={formDataChange} type="text" id="email" className="w-full bg-[#0f0f0f] rounded-lg py-4 px-3 focus:border-none focus:outline-none" placeholder="Email" required />
                                </div>
                                {showEmptyFieldAlert && formData.email === "" && <p className="text-red-500">Enter your email</p>}

                                <label htmlFor="message" className="text-yellow-400">Message</label>
                                <textarea onChange={formDataChange} name="message" id="message" cols={30} rows={8} className="w-full bg-[#0f0f0f] rounded-lg py-4 px-3 border-[1px] border-white/30 opacity-70" placeholder="Your Message" required></textarea>
                                {showEmptyFieldAlert && formData.message === "" && <p className="text-red-500">Enter your message</p>}

                                <button onClick={handleForm} className="group relative overflow-hidden px-8 py-4 mt-4 text-xs lg:text-lg bg-yellow-400 text-black transition-transform duration-300 ease-in-out w-full mx-auto ">

                                    <span className="absolute inset-0 bg-white scale-x-0 origin-center transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>

                                    <span className="relative z-10">Send</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>


                {/* <div className=" w-[80%] mx-auto text-center">
                    <p className="text-xs lg:text-lg">Are you an Athlete? Submit your portfolio right now and take your career to next level!</p>
                    <button onClick={()=> navigate('/athlete-contact')} className="
    group relative overflow-hidden
    font-oswald px-8 py-4 mt-4 text-xs lg:text-lg
    bg-yellow-400 text-black skew-x-[-12deg]
    transition-transform duration-300 ease-in-out
  "
                    >
                        
                        <span
                            className="
      absolute inset-0
      bg-white
      scale-x-0
      origin-center
      transition-transform duration-300 ease-in-out
      group-hover:scale-x-100
    "
                        ></span>

                        
                        <span className="relative z-10">
                            JOIN US AS AN ATHLETE
                        </span>
                    </button>

                </div> */}


            </section>
        </div>
    )
}

export default Contact
