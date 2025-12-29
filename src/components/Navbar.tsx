// import { useEffect, useState } from "react";
// import logo from "../assets/kitbag-logo.svg"

// const Navbar = () => {
//     const [showBurgerMenu, setShowBurgerMenu] = useState(false);
//     const [showBurgerMenuIcon,setShowBurgerMenuIcon] = useState(false);

//     useEffect(()=>{
        
//     },[])
//     return (
//         <nav className="w-[100%] p-10 top-0 font-semibold sticky lg:flex z-30">
//             <div className="flex mx-auto">
//                 <img src={logo} alt="Kitbag Logo" className="h-[100px] mr-5 absolute top-0 left-1 lg:h-[150px]" />
//                 <button className="text-2xl mx-6 absolute right-0 lg:hidden" onClick={() => setShowBurgerMenu(!showBurgerMenu)}>☰</button>
//                 <ul className="hidden list-none tracking-widest text-[15px] lg:flex lg:gap-6">
//                     <li>HOME</li>
//                     <li>PAGES</li>
//                     <li>BLOG</li>
//                     <li>CONTACT</li>
//                 </ul>
//             </div>

//             {showBurgerMenu && (
//                 <div className="w-full space-y-3 relative z-40 top-0">
//                     <ul className="list-none w-full top-12 px-4 py-5 bg-black absolute tracking-widest text-[20px] lg:flex lg:gap-6">
//                         <li>HOME</li>
//                         <li>PAGES</li>
//                         <li>BLOG</li>
//                         <li>CONTACT</li>
//                     </ul>
//                 </div>
//             )}
//         </nav>
//     )
// }

// export default Navbar;

import { useState } from "react";
import logo from "../assets/kitbag-logo.svg";

const Navbar = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  return (
    <nav className="sticky top-0 z-30 w-[100%] p-10 font-semibold lg:flex">
      <div className="flex mx-auto">
        <img
          src={logo}
          alt="Kitbag Logo"
          className="h-[100px] mr-5 absolute top-0 left-1 lg:h-[150px]"
        />

        <button
          className="text-2xl mx-6 absolute right-0 lg:hidden"
          onClick={() => setShowBurgerMenu(true)}
        >
          ☰
        </button>

        <ul className="hidden list-none tracking-widest text-[15px] lg:flex lg:gap-6">
          <li>HOME</li>
          <li>PAGES</li>
          <li>BLOG</li>
          <li>CONTACT</li>
        </ul>
      </div>

      {/* Burger menu */}
      {showBurgerMenu && (
        <>
          {/* Overlay (does NOT affect layout) */}
          <div
            className="fixed inset-0 z-30"
            onClick={() => setShowBurgerMenu(false)}
          />

          {/* Menu (original positioning preserved) */}
          <div className="w-full space-y-3 relative z-40 top-0">
            <ul
              className="list-none w-full top-12 px-4 py-5 bg-black absolute tracking-widest text-[20px] text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <li>HOME</li>
              <li>PAGES</li>
              <li>BLOG</li>
              <li>CONTACT</li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
