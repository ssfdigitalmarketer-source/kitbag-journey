import { Link } from "react-router"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>


      <footer className='pt-10 px-10 bg-[#0e0e0e] space-y-8'>
        <div className='lg:flex space-y-6 justify-between items-center'>
          <div><h1 className='text-4xl text-yellow-500 uppercase'>Kitbag Journey</h1></div>
          <div>
            <ul className='list-none text-md font-sans space-y-5 lg:space-y-0 lg:flex gap-20'>
              <li className="cursor-pointer hover:text-yellow-500 transition-all duration-300"><Link to={"/"}>Home</Link></li>
              <li className="cursor-pointer hover:text-yellow-500 transition-all duration-300"><Link to={"/about"}>About</Link></li>
              <li className="cursor-pointer hover:text-yellow-500 transition-all duration-300"><Link to={"/contact"}>Contact Us</Link></li>
            </ul>
          </div>
          <div className="flex gap-6 mb-20 w-[80%] justify-center  mx-auto lg:w-[10%] lg:mx-0">
            <Link to={""}><FaFacebook size={25} className="hover:text-yellow-500 transition-all duration-300" /></Link>
            <Link to={""}><FaInstagram size={25} className="hover:text-yellow-500 transition-all duration-300" /></Link>
            <Link to={""}><FaXTwitter size={25} className="hover:text-yellow-500 transition-all duration-300" /></Link>
            <Link to={""}><FaLinkedin size={25} className="hover:text-yellow-500 transition-all duration-300" /></Link>
          </div>
        </div>
        <p className='font-sans text-lg text-yellow-500 text-center'>©2026. Kitbag Journey. All rights reserved.</p>
      </footer>
      <div className="w-full overflow-hidden text-center bg-[#0e0e0e]">
        <h1 className="whitespace-nowrap font-bold text-[13vw] leading-none relative -bottom-2 lg:-bottom-10">
          KITBAG JOURNEY
        </h1>
      </div>
    </div>

  )
}

export default Footer
