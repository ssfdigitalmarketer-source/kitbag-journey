import { Link } from "react-router"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className='pt-10 px-10 bg-[#0e0e0e] space-y-8'>
        <div className='lg:flex space-y-6 lg:flex-col justify-between items-center'>
          <div className="flex flex-col justify-center">
            <img src='https://res.cloudinary.com/dwmmlrpgg/image/upload/v1768632392/kitbag-logo_fmwuly.svg' alt="Kitbag-Logo" className="h-[100px] lg:h-[120px] cursor-pointer" />
            <ul className='list-none text-xl space-y-5 lg:space-y-0 gap-20 lg:flex font-oswald uppercase'>
              <li className="cursor-pointer hover:text-yellow-500 transition-all duration-300"><Link to={"/about"}>About Us</Link></li>
              <li className="cursor-pointer hover:text-yellow-500 transition-all duration-300"><Link to={"/contact"}>Contact Us</Link></li>
              <li className="cursor-pointer hover:text-yellow-500 transition-all duration-300"><Link to={"/careers"}>Careers</Link></li>
            </ul>
          </div>

          <div>
          </div>
          <div className="flex gap-6 mb-20 w-[80%] justify-center  mx-auto lg:w-[10%] lg:mx-0">
            <a href="https://www.facebook.com/profile.php?id=61550798993939" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={25} className="hover:text-yellow-500 transition-all duration-300" /></a>
            <a href="https://www.instagram.com/kitbag_journey/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={25} className="hover:text-yellow-500 transition-all duration-300" /></a>
            <a href="https://www.linkedin.com/company/sports-journey/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={25} className="hover:text-yellow-500 transition-all duration-300" /></a>
          </div>
        </div>
        <p className='font-sans text-lg text-yellow-500 text-center'>©2026. Kitbag Journey. All rights reserved. Designed and maintained by <a
          href="https://ssfdesigns.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          SSF Designs
        </a>.</p>
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
