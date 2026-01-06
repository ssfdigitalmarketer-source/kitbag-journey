import { useState } from "react";
import { Link } from "react-router";

const Navbar = ({ showMenu = true} : any) => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

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
          <li className="hover:text-yellow-500 transition-all duration-300 ease-in-out">HOME</li>
          <li className="hover:text-yellow-500 transition-all duration-300 ease-in-out"><Link to="/services">SERVICES</Link></li>
          <li className="hover:text-yellow-500 transition-all duration-300 ease-in-out">ABOUT US</li>
          <li className="hover:text-yellow-500 transition-all duration-300 ease-in-out">CONTACT</li>
        </ul>)}

      </div>

      {/* Burger menu */}
      { showBurgerMenu && (
        <>
          {/* Overlay (does NOT affect layout) */}
          <div
            className="fixed inset-0 z-40 bg-black/40"
            onClick={() => setShowBurgerMenu(false)}
          />

          {/* Menu (original positioning preserved) */}
          <div className="w-full absolute z-40 top-0 left-0 lg:w-[20vw] lg:h-[100vh] transition-all duration-300 ease-in-out">
            <ul className="list-none h-full space-y-4 w-full px-8 text-center text py-3 bg-black tracking-widest text-[20px] text-white cursor-pointer pointer-events-auto" onClick={(e) => e.stopPropagation()}>
              <li className=" border-white py-2 hover:text-yellow-500">HOME</li>
              <li className=" border-white py-2 hover:text-yellow-500"><Link to="/services">SERVICES</Link></li>
              <li className=" border-white py-2 hover:text-yellow-500">ABOUT US</li>
              <li className=" border-white py-2 hover:text-yellow-500">CONTACT</li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
