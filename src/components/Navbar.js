import { Menu, MenuItem } from "@mui/material";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <m.div>
      <div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 2.0,
            delay: 0.7,
            ease: "anticipate",
          },
        }}
        class="flex flex-wrap z-10"
      >
        <section class="relative mx-auto">
          {/*//        <!-- navbar -->*/}
          <nav class="flex justify-between  bg-black text-opacity-100 text-white w-screen">
            <div class="px-5 xl:px-12 py-2 flex w-full items-center">
              {/*//            <!-- Nav Links -->*/}
              <ul class="hidden md:flex px-4 mx-auto font-semibold font-poppins text-sm text-gray-400 items-center font-heading space-x-12 ">
                <a class="text-3xl  font-bold font-heading" href="#">
                  <img
                    class="h-10 pt-2 pl-2"
                    src="./images/navlogo.png"
                    alt="logo"
                  />
                  {/*Logo Here.*/}
                </a>
                <li>
                  <Link class="hover:text-gray-200" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link class="hover:text-gray-200" to="/trade">
                    Trade
                  </Link>
                </li>
                <li className="relative">
                  <button
                    onClick={() => setOpen((prev) => !prev)}
                    className="flex items-center space-x-2"
                  >
                    <span> Earning</span>
                    {!open ? (
                      <AiOutlineCaretDown className="h-8 text-white" />
                    ) : (
                      <AiOutlineCaretUp className="h-8 text-white" />
                    )}
                  </button>
                  {!open && (
                    <div className="absolute z-10 text-sm font-light  min-w-[200px]  space-y-2  w-full rounded-lg bg-opacity-60  bg-black top-16  text-white">
                        <div className="hover:bg-gray-900 px-4 py-3  rounded-lg"> 
                          <Link to="earning">Investment</Link>
                        </div>
                        <div className="hover:bg-gray-900 px-4  py-3   rounded-lg">
                          <Link to="refferal">Referral and Binary</Link>
                        </div>
                        <div className="hover:bg-gray-900 px-4  py-3   rounded-lg">
                          <Link to="extrabonus">Extra bonus for referral</Link>
                        </div>
                    </div>
                  )}
                </li>
                <li>
                  <Link class="hover:text-gray-200" to="/resources">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link class="hover:text-gray-200" to="/legal">
                    Legal
                  </Link>
                </li>
                <li>
                  <Link class="hover:text-gray-200" to="/contact">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link class="hover:text-gray-200" to="/aboutus">
                    About
                  </Link>
                </li>
                <li>
                  <Link class="hover:text-gray-200" to="/blog">
                    Blog
                  </Link>
                </li>
                <Link to="/dashboard" className="" href="#">
                  <img
                    class="h-14  "
                    src="./images/dashboard2.png"
                    alt="logo"
                  />
                </Link>
              </ul>
              {/*//            <!-- Header Icons -->*/}
              {/*               
             <div class="hidden xl:flex  space-x-5 items-center">
                <Link class="hover:text-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </Link>
                <Link class="flex items-center hover:text-gray-200" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span class="flex absolute -mt-5 ml-4">
                    <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                  </span>
                </Link>
           
                <Link class="flex items-center hover:text-gray-200" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 hover:text-gray-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </Link>
              </div> */}
            </div>
            {/*//          <!-- Responsive navbar -->*/}
            <a class="xl:hidden flex mr-6 items-center" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span class="flex absolute -mt-5 ml-4">
                <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
              </span>
            </a>
            <a class="navbar-burger self-center mr-12 xl:hidden" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </a>
          </nav>
        </section>
      </div>

      <div class="absolute bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <a
            title="Follow me on twitter"
            href="https://www.twitter.com/asad_codes"
            target="_blank"
            class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
          >
            <img
              class="object-cover object-center w-full h-full rounded-full"
              src="https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2019/12/twitter-logo.jpg"
            />
          </a>
        </div>
      </div>
    </m.div>
  );
};

export default Navbar;
