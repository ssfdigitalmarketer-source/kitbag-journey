import { useState } from "react";
import { Link } from "react-router";

const Navbar = ({ showMenu = true }: any) => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);


  return (
    <nav className="sticky top-0 z-30 w-[100%] py-8 font-semibold lg:flex lg:pointer-events-none">

      <div className="flex mx-auto">

        <button
          className="text-2xl mx-6 absolute right-0 lg:hidden pointer-events-auto"
          onClick={() => setShowBurgerMenu(true)}
        >
          ☰
        </button>
        {showMenu && (<ul className="hidden list-none tracking-widest text-[15px] lg:flex lg:gap-6 pointer-events-auto cursor-pointer">
          <li className="hover:text-yellow-500 transition-all duration-300 ease-in-out"><Link to={"/"}>HOME</Link></li>
          <li className="relative group">
            <span className="hover:text-yellow-500 transition-all duration-300 ease-in-out cursor-pointer">
              SERVICES
            </span>

            <ul
              className="
      absolute top-full left-0 mt-3 w-52
      bg-black text-white text-sm tracking-wide shadow-lg
      opacity-0 invisible
      group-hover:opacity-100 group-hover:visible
      transition-all duration-200 uppercase
    "
            >
              <li className="px-4 py-3 hover:bg-yellow-500 hover:text-black">
                <Link to="/athlete-management">Player Management</Link>
              </li>
              <li className="px-4 py-3 hover:bg-yellow-500 hover:text-black">
                <Link to="/social-media&pr">Social Media & PR</Link>
              </li>
              <li className="px-4 py-3 hover:bg-yellow-500 hover:text-black">
                <Link to="/event-management">Event Management</Link>
              </li>
              <li className="px-4 py-3 hover:bg-yellow-500 hover:text-black">
                <Link to="/legal-consultancy">Legal Consultancy</Link>
              </li>
              <li className="px-4 py-3 hover:bg-yellow-500 hover:text-black">
                <Link to="/it-services">IT Services</Link>
              </li>
            </ul>
          </li>
          <li className="hover:text-yellow-500 transition-all duration-300 ease-in-out"><Link to={"/players"}>ATHLETES</Link></li>
          <li className="hover:text-yellow-500 transition-all duration-300 ease-in-out"><Link to={"/about"}>ABOUT US</Link></li>
          <li className="hover:text-yellow-500 transition-all duration-300 ease-in-out"><Link to={"/contact"}>CONTACT</Link></li>
        </ul>)}

      </div>

      {/* Burger menu */}
      {showBurgerMenu && (
        <>
          {/* Overlay (does NOT affect layout) */}
          <div
            className="fixed inset-0 z-40 bg-black/40"
            onClick={() => setShowBurgerMenu(false)}
          />

          {/* Menu (original positioning preserved) */}
          <div className="w-full absolute z-40 top-0 left-0 lg:w-[20vw] lg:h-[100vh] transition-all duration-300 ease-in-out">
            <ul className="list-none h-full space-y-4 w-full px-8 text-center text py-3 bg-black tracking-widest text-[20px] text-white cursor-pointer pointer-events-auto" onClick={(e) => e.stopPropagation()}>
              <li className=" border-white py-2 hover:text-yellow-500"><Link to={"/"}>HOME</Link></li>
              <li className="py-2">
                <button
                  className="w-full hover:text-yellow-500"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  SERVICES
                </button>

                {mobileServicesOpen && (
                  <ul className="mt-2 space-y-4 text-lg uppercase">
                    <li className="hover:text-yellow-500">
                      <Link to="/athlete-management">Athlete Management</Link>
                    </li>
                    <li className="hover:text-yellow-500">
                      <Link to="/social-media&pr">Social Media & PR</Link>
                    </li>
                    <li className="hover:text-yellow-500">
                      <Link to="/event-management">Event Management</Link>
                    </li>
                    <li className="hover:text-yellow-500">
                      <Link to="/legal-consultancy">Legal Consultancy</Link>
                    </li>
                    <li className="hover:text-yellow-500">
                      <Link to="/it-services">IT Services</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className=" border-white py-2 hover:text-yellow-500"><Link to={"/players"}>ATHLETES</Link></li>
              <li className=" border-white py-2 hover:text-yellow-500"><Link to={"/about"}>ABOUT US</Link></li>
              <li className=" border-white py-2 hover:text-yellow-500"><Link to={"/contact"}>CONTACT</Link></li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
