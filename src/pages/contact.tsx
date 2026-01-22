import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { User } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
import { MapPin } from 'lucide-react';
import bg from '../assets/bg.jpg'
import { Link } from "react-router";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


const Contact = () => {
    return (
        <div>
            <Navbar />
            <section className="pb-20 pt-40 px-5 lg:px-20 space-y-16" style={{ backgroundImage: `url(${bg})` }}>
                <h1 className="text-yellow-500 text-4xl text-center">GET IN TOUCH</h1>

                <div className="lg:flex gap-40">
                    <div className="font-sans lg:w-[50%]">
                        <div className="lg:w-[80%]">
                            <p className="text-xl">This is your gateway to connect with us directly. Whether you have inquiries or feedback or simply want to drop a message.</p>
                            <div className="py-10 space-y-10 border-y-[0.5px] my-8 border-yellow-500">
                                <div className="flex gap-4">
                                    <div className="p-3 rounded-lg border-[0.5px] bg-yellow-500 border-yellow-500">
                                        <Phone size={30} className="" />
                                    </div>
                                    <div>
                                        <p className="text-lg text-yellow-500">Phone</p>
                                        <p className="text-lg">+91 1234567890</p>

                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="p-3 rounded-lg border-[0.5px] bg-yellow-500 border-yellow-500">
                                        <Mail size={30} className="" />
                                    </div>
                                    <div>
                                        <p className="text-lg text-yellow-500">Email</p>
                                        <p className="text-lg">kitbag@journey.com</p>

                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="p-3 rounded-lg border-[0.5px] bg-yellow-500 border-yellow-500 self-start">
                                        <MapPin size={30} className="" />
                                    </div>
                                    <div>
                                        <p className="text-lg text-yellow-500">Location</p>
                                        <p className="text-lg">2-A/3, Kundan Mansion, Asaf Ali Road, Turkman Gate, Connaught Place, New Delhi-110002</p>
                                    </div>
                                </div>

                            </div>

                            <div className="flex gap-6 mb-20">
                                <Link to={""}><FaFacebook size={25} className="hover:text-yellow-500 transition-all duration-300"/></Link>
                                <Link to={""}><FaInstagram size={25} className="hover:text-yellow-500 transition-all duration-300"/></Link>
                                <Link to={""}><FaXTwitter size={25} className="hover:text-yellow-500 transition-all duration-300"/></Link>
                                <Link to={""}><FaLinkedin size={25} className="hover:text-yellow-500 transition-all duration-300"/></Link>
                            </div>
                        </div>

                    </div>


                    <div className="lg:w-[40%]">
                        <form action="">
                            <div className="space-y-4 flex flex-col font-sans">
                                <label htmlFor="name" className="text-yellow-500">Name</label>
                                <div className='flex items-center bg-[#0f0f0f] rounded-lg px-3'>
                                    <User className="w-6 h-6 text-[#505050]" />
                                    <input type="text" id="name" className="w-full bg-transparent rounded-lg py-4 px-3 focus:border-none focus:outline-none " placeholder="Name" required />

                                </div>
                                <label htmlFor="email" className="text-yellow-500">Email</label>
                                <div className='flex items-center bg-[#0f0f0f] rounded-lg px-3'>
                                    <Mail className="w-6 h-6 text-[#505050]" />
                                    <input type="text" id="email" className="w-full bg-[#0f0f0f] rounded-lg py-4 px-3 focus:border-none focus:outline-none" placeholder="Email" required />
                                </div>
                                <label htmlFor="message" className="text-yellow-500">Message</label>
                                <textarea name="message" id="message" cols={30} rows={8} className="w-full bg-[#0f0f0f] rounded-lg py-4 px-3 focus:border-none focus:outline-none" placeholder="Your Message" required></textarea>
                                <button className="group relative overflow-hidden font-oswald px-8 py-4 mt-4 text-lg bg-yellow-500 text-black transition-transform duration-300 ease-in-out w-full mx-auto ">

                                    <span className="absolute inset-0 bg-white scale-x-0 origin-center transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>

                                    <span className="relative z-10">Send</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>


                <div className="font-sans w-[80%] mx-auto text-center">
                <p className="text-lg">Are you an Athlete? Submit your portfolio right now and take your career to next level!</p>
                <button className="
    group relative overflow-hidden
    font-oswald px-8 py-4 mt-4 text-lg
    bg-yellow-500 text-black skew-x-[-12deg]
    transition-transform duration-300 ease-in-out
  "
      >
        {/* White fill layer */}
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

        {/* Button text */}
        <span className="relative z-10">
          JOIN US AS AN ATHLETE
        </span>
      </button>

                </div>


            </section>
            <Footer />
        </div>
    )
}

export default Contact
