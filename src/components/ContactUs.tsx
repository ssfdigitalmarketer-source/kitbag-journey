import { User } from 'lucide-react';
import { Mail } from 'lucide-react';

const ContactUs = () => {
    return (
        <>
            <h1 className="text-yellow-500 text-4xl text-center font-oswald">CONTACT US</h1>
            <div className="space-y-6 lg:space-y-0 lg:flex lg:gap-20">
                <div className="space-y-6 flex-1">
                    <p className="font-extralight font-sans text-center lg:text-left text-lg">Whether you are an athlete looking for representation or a brand seeking meaningful collaborations — we’re here to help.</p>
                    <p className="font-extralight font-sans text-center lg:text-left text-lg">Reach out and take the first step toward your dream career.</p>

                    <h2 className="font-bold text-lg text-center text-yellow-500 lg:text-left">REACH OUT DIRECTLY</h2>
                    <p className="text-lg text-center lg:text-left">kitbagjourney@gmail.com</p>

                </div>

                <div className="flex-1 lg:px-6">
                    <form action="">
                        <div className="space-y-4 flex flex-col font-sans">
                            <div className='flex items-center bg-[#1a1a1a] rounded-lg px-3'>
                                <User className="w-6 h-6 text-[#505050]" />
                                <input type="text" className="w-full bg-transparent rounded-lg py-4 px-3 focus:border-none focus:outline-none " placeholder="Name" required />

                            </div>
                            <div className='flex items-center bg-[#1a1a1a] rounded-lg px-3'>
                                <Mail className="w-6 h-6 text-[#505050]" />
                                <input type="text" className="w-full bg-[#1a1a1a] rounded-lg py-4 px-3 focus:border-none focus:outline-none" placeholder="Email" required />
                            </div>
                            <textarea name="" id="" cols={30} rows={8} className="w-full bg-[#1a1a1a] rounded-lg py-4 px-3 focus:border-none focus:outline-none" placeholder="Your Message" required></textarea>
                            <button className="group relative overflow-hidden font-oswald px-8 py-4 mt-4 text-lg bg-yellow-500 text-black transition-transform duration-300 ease-in-out lg:w-[50%] mx-auto">

                                <span className="absolute inset-0 bg-white scale-x-0 origin-center transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>

                                <span className="relative z-10">Send</span>
                            </button>
                        </div>
                    </form>
                </div>

            </div>


        </>
    )
}

export default ContactUs
