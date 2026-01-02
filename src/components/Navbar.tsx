import { useState } from "react";

const Navbar = ({ showMenu } : any) => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  return (
    <nav className="sticky top-0 z-30 w-[100%] p-10 font-semibold lg:flex pointer-events-none">

      <div className="flex mx-auto">

        <button
          className="text-2xl mx-6 absolute right-0 lg:hidden pointer-events-auto" 
          onClick={() => setShowBurgerMenu(true)}
        >
          ☰
        </button>
        {showMenu && (<ul className="hidden list-none tracking-widest text-[15px] lg:flex lg:gap-6 pointer-events-auto cursor-pointer">
          <li>HOME</li>
          <li>PAGES</li>
          <li>BLOG</li>
          <li>CONTACT</li>
        </ul>)}

      </div>

      {/* Burger menu */}
      { showBurgerMenu && (
        <>
          {/* Overlay (does NOT affect layout) */}
          <div
            className="fixed inset-0 z-50 pointer-events-auto"
            onClick={() => setShowBurgerMenu(false)}
          />

          {/* Menu (original positioning preserved) */}
          <div className="w-full absolute z-40 top-0 left-0 lg:w-[20vw] lg:h-[100vh]">
            <ul className="list-none h-full space-y-4 w-full px-8 text py-8 bg-black tracking-widest text-[20px] text-white cursor-pointer" onClick={(e) => e.stopPropagation()}>
              <li className="border-b-[0.5px] border-white py-2 hover:text-yellow-500">HOME</li>
              <li className="border-b-[0.5px] border-white py-2 hover:text-yellow-500">PAGES</li>
              <li className="border-b-[0.5px] border-white py-2 hover:text-yellow-500">BLOG</li>
              <li className="border-b-[0.5px] border-white py-2 hover:text-yellow-500">CONTACT</li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
