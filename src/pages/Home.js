import React, { useEffect } from "react";
import { motion as m, useScroll, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "swiper/css";
import { Link } from "react-router-dom";

// const container = {
//   hidden: { opacity: 1, scale: 0 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       delayChildren: 0.3,
//       staggerChildren: 0.2
//     }
//   }
// };

const item = {
  hidden: { y: "10vh", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Home = () => {
  return (
<div className="overflow-x-hidden w-full flex items-start justify-center flex-col pt-16">

{/* Main Page  */}

<div className="w-full flex min-h-screen relative font-poppins justify-center items-center">
  <video
    autoPlay
    loop
    muted
    className="absolute z-0 w-full h-auto object-cover max-h-screen"
  >
    <source src="./images/video/fronthomepage.mp4" />
  </video>
  <div className="flex flex-col sm:flex-row w-full max-w-7xl top-70 absolute items-center px-6">
    <div className="w-full sm:w-1/2 text-left sm:ml-4 sm:text-left sm:pt-5">

      <m.div
        variants={item}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 0.8,
          ease: "anticipate",
        }}
      >
        <img
          src="./images/text2.png"
          className="lg:mb-6 lg:mt-0 sm:mb-1 sm:mt-20 sm:pd-10"
          alt="Text"
        />
      </m.div>
      <m.div
        variants={item}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 1.6,
          ease: "anticipate",
        }}
        className="font-poppins text-justify"
      >
        Discover the power of one Ozo, the leading investment platform for
        crypto, forex, casino, and commodities. With tailored packages and
        impressive returns, One Ozo empowers investors to grow their
        wealth. Maximize your potential in the dynamic world of finance
        with One Ozo's innovative solutions. Start your journey towards
        financial success today!
      </m.div>
      <m.div
        initial={{ y: "20vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.8,
          ease: "anticipate",
        }}
        className="flex space-x-0 sm:mt-8"
      >
        <button className="text-white shadow-white-700 shadow-md hover:text-white transition ease-in-out delay-150 hover:scale-95 hover:translate-y-1 rounded-full font-semibold text-lg tracking-wide">
          <img src="./images/button.png" className="h-14" alt="Button 1" />
        </button>
        <button className="text-white shadow-white-700 shadow-md hover:text-white transition ease-in-out delay-150 hover:scale-95 hover:translate-y-1 rounded-full font-semibold text-lg tracking-wide">
          <img src="./images/dashboardfinal.png" className="h-[68px]" alt="Button 2" />
        </button>
      </m.div>
    </div>
  </div>
</div>
</div>

  );
};

export default Home;