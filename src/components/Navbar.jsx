import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Navbar = ({ showMenu = true }) => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <nav className="fixed px-5 z-50 w-[100%] justify-between lg:justify-around items-center font-semibold flex pointer-events-none">
      {/* <div className="pointer-events-auto px-6" onClick={() => navigate('/')}> */}
        <img
          src='/assets/kitbag_logo.svg'
          alt="Kitbag-Logo"
          className="h-[70px] pointer-events-auto relative -left-3 lg:-left-8 lg:h-[150px] cursor-pointer"
          onClick={() => navigate('/')}

        />

      {/* </div> */}
        <button
          className="text-2xl lg:hidden pointer-events-auto"
          onClick={() => setShowBurgerMenu(true)}
        >
          ☰
        </button>

      <div className="hidden lg:flex lg:flex-2 h-[50%] w-[85%] lg:border-[1px] lg:border-white/10 bg-white/10 backdrop-blur-xl rounded-xl items-center justify-between lg:px-5">

        {showMenu && (<ul className="hidden list-none w-full tracking-widest space-x-8 rounded-xl py-5 text-[15px] lg:flex lg:gap-6 pointer-events-auto cursor-pointer">
          {/* <li className="hover:text-yellow-400 transition-all duration-300 ease-in-out"><Link to={"/"}>HOME</Link></li> */}
          <li className="relative left-0 group">
            <span className="hover:text-yellow-400 transition-all duration-300 ease-in-out cursor-pointer">
              SERVICES
            </span>

            <ul
              className="
      absolute top-full left-0 mt-3 w-52
      bg-black/30 backdrop-blur-xl text-white text-sm tracking-wide
      opacity-0 invisible -translate-y-3 rounded-b-lg
      group-hover:opacity-100 group-hover:translate-y-2 group-hover:visible
      transition-all duration-200 uppercase pointer-events-auto
    "
            >
              <Link to="/athlete-management">
                <li className="px-4 py-3 hover:bg-yellow-400 hover:text-black">
                  Player Management
                </li>
              </Link>

              <Link to="/branding&pr">
                <li className="px-4 py-3 hover:bg-yellow-400 hover:text-black">
                  Branding & PR
                </li>
              </Link>

              <Link to="/cricket-league-management">
                <li className="px-4 py-3 hover:bg-yellow-400 hover:text-black">
                  Cricket League Management
                </li>
              </Link>

              <Link to="/legal-consultancy">
                <li className="px-4 py-3 hover:bg-yellow-400 hover:text-black">
                  Legal Consultancy
                </li>
              </Link>

              <Link to="/it-services">
                <li className="px-4 py-3 hover:bg-yellow-400 hover:text-black">
                  IT Services
                </li>
              </Link>
            </ul>
          </li>
          <li className="hover:text-yellow-400 transition-all duration-300 ease-in-out"><Link to={"/about"}>ABOUT US</Link></li>
          <li className="hover:text-yellow-400 transition-all duration-300 ease-in-out"><Link to={"/players"}>PLAYERS</Link></li>
          <li className="hover:text-yellow-400 transition-all duration-300 ease-in-out"><Link to={"/blogs"}>BLOGS</Link></li>
          <li className="hover:text-yellow-400 transition-all duration-300 ease-in-out"><Link to={"/contact"}>CONTACT</Link></li>
        </ul>)}

        <div className="hidden gap-6 justify-center pointer-events-auto lg:flex">
          <a href="https://www.facebook.com/profile.php?id=61550798993939" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={25} className="hover:text-yellow-400 transition-all duration-300" /></a>
          <a href="https://www.instagram.com/kitbag_journey/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={25} className="hover:text-yellow-400 transition-all duration-300" /></a>
          <a href="https://www.linkedin.com/company/sports-journey/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={25} className="hover:text-yellow-400 transition-all duration-300" /></a>
        </div>

      </div>

      {/* Burger menu */}
      {showBurgerMenu && (
        <>
          {/* Overlay (does NOT affect layout) */}
          <div
            className="fixed inset-0 h-screen z-40 bg-black/40 pointer-events-auto"
            onClick={() => setShowBurgerMenu(false)}
          />

          {/* Menu (original positioning preserved) */}
          <div className="w-[70%] absolute z-40 top-0 left-0 h-screen transition-all duration-300 ease-in-out">
            <ul className="list-none text-sm h-full space-y-4 w-[95%] rounded-lg px-8 lg:text-center py-3 bg-white/10 backdrop-blur-xl tracking-widest text-[20px] text-white cursor-pointer pointer-events-auto" onClick={(e) => e.stopPropagation()}>
              {/* <li className=" border-white py-2 hover:text-yellow-400"><Link to={"/"}>HOME</Link></li> */}
              <li className="py-2">
                <button
                  className=" hover:text-yellow-400"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  SERVICES
                </button>

                {mobileServicesOpen && (
                  <ul className="mt-4 px-4 text-xs space-y-4 uppercase">
                    <li className="hover:text-yellow-400">
                      <Link to="/athlete-management">Athlete Management</Link>
                    </li>
                    <li className="hover:text-yellow-400">
                      <Link to="/branding&pr">Branding & PR</Link>
                    </li>
                    <li className="hover:text-yellow-400">
                      <Link to="/cricket-league-management">Cricket League Management</Link>
                    </li>
                    <li className="hover:text-yellow-400">
                      <Link to="/legal-consultancy">Legal Consultancy</Link>
                    </li>
                    <li className="hover:text-yellow-400">
                      <Link to="/it-services">IT Services</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className=" border-white py-2 hover:text-yellow-400"><Link to={"/about"}>ABOUT US</Link></li>
              <li className=" border-white py-2 hover:text-yellow-400"><Link to={"/players"}>PLAYERS</Link></li>
              <li className=" border-white py-2 hover:text-yellow-400"><Link to={"/blogs"}>BLOGS</Link></li>
              <li className=" border-white py-2 hover:text-yellow-400"><Link to={"/contact"}>CONTACT</Link></li>
              <div className="gap-6 justify-center pointer-events-auto flex">
                <a href="https://www.facebook.com/profile.php?id=61550798993939" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={25} className="hover:text-yellow-400 transition-all duration-300" /></a>
                <a href="https://www.instagram.com/kitbag_journey/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={25} className="hover:text-yellow-400 transition-all duration-300" /></a>
                <a href="https://www.linkedin.com/company/sports-journey/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={25} className="hover:text-yellow-400 transition-all duration-300" /></a>
              </div>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
