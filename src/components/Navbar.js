import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [earningOpen, setEarningOpen] = useState(false);

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  const handleEarningOpen = () => {
    setEarningOpen(!earningOpen);
  };

  return (
    <div className="w-full fixed top-0 left-0 z-10 position-fixed">
      <div className="lg:flex bg-black text-opacity-100 text-white items-center justify-center py-4 lg:px-10 px-7">
        <div className="cursor-pointer flex items-center font-poppins justify-center">
          <img
            className="max-h-10 min-w-10 pt-2 pl-2"
            src="./images/navlogo.png"
            alt="logo"
          />
        </div>
        <div onClick={handleNavToggle} className="text-3xl absolute right-8 top-6 cursor-pointer lg:hidden">
          {navOpen ? (
            <ion-icon name="close"></ion-icon>
          ) : (
            <ion-icon name="menu"></ion-icon>
          )}
        </div>

        <ul className={`lg:flex lg:items-center bg-black lg:pb-0 pb-12 absolute lg:static lg:z-auto z-[-5] left-0 w-full lg-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${navOpen ? 'top-20 opacity-100 ': 'top-[-490px]'} lg:opacity-100 opacity-0 font-semibold font-poppins text-sm text-gray-400 font-heading justify-center `}>
          <li className="lg:ml-10 lg:my-0 my-7 hover:text-gray-100">
            <Link className="text-lg" to="/" onClick={() => { setNavOpen(false) }}>
              Home
            </Link>
          </li>
          <li className="lg:ml-10 lg:my-0 my-7 hover:text-gray-100">
            <Link className="text-lg" to="/trade" onClick={() => { setNavOpen(false) }}>
              Trade
            </Link>
          </li>
          <li
            className={`relative lg:ml-10 lg:my-0 my-7 hover:text-gray-100 ${earningOpen ? 'cursor-pointer' : ''}`}
          >
            <a className="text-lg flex items-center gap-3" href="#" onClick={handleEarningOpen}>
              Earnings 
              {earningOpen ? (
                <ion-icon name="caret-up-outline"></ion-icon>
          ) : (
            <ion-icon name="caret-down-outline"></ion-icon>
          )}
            </a>
            {earningOpen && (
              <div className="absolute top-full left-0 mt-4 mb-2 w-40 bg-black rounded-lg shadow-lg">
                <Link to="earning" className="block px-4 py-2 text-white hover:bg-gray-700" onClick={() => { setNavOpen(false) }}>
                  Investment
                </Link>
                <Link to="refferal" className="block px-4 py-2 text-white hover:bg-gray-700 "onClick={() => { setNavOpen(false) }}>
                  Referral and Binary
                </Link>
                <Link to="extrabonus" className="block px-4 py-2 text-white hover:bg-gray-700 "onClick={() => { setNavOpen(false) }}>
                  Extra bonus for referral
                </Link>
              </div>
            )}
          </li>
          <li className="lg:ml-10 lg:my-0 my-7 hover:text-gray-100">
            <Link className="text-lg" to="/resources" onClick={() => { setNavOpen(false) }}>
              Resources
            </Link>
          </li>
          <li className="lg:ml-10 lg:my-0 my-7 hover:text-gray-100">
            <Link className="text-lg" to="/legal" onClick={() => { setNavOpen(false) }}>
              Legal
            </Link>
          </li>
          <li className="lg:ml-10 lg:my-0 my-7 hover:text-gray-100">
            <Link className="text-lg" to="/contact" onClick={() => { setNavOpen(false) }}>
              Contact
            </Link>
          </li>
          <li className="lg:ml-10 lg:my-0 my-7 hover:text-gray-100">
            <Link className="text-lg" to="/aboutus" onClick={() => { setNavOpen(false) }}>
              About
            </Link>
          </li>
          <li className="lg:ml-10 lg:my-0 my-7 hover:text-gray-100">
            <Link className="text-lg" to="/blog" onClick={() => { setNavOpen(false) }}>
              Blog
            </Link>
          </li>
          <li className="lg:ml-10 lg:my-0 my-7 hover:text-gray-100">
            <Link className="text-lg" to="/login" onClick={() => { setNavOpen(false) }}>
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
