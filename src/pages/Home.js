import React, { useEffect, useState } from "react";
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

    const [isLargeScreen, setIsLargeScreen] = useState(true);
  
    useEffect(() => {
      const handleResize = () => {
        setIsLargeScreen(window.innerWidth >= 768);
      };
  
      // Add event listener to handle screen size changes
      window.addEventListener('resize', handleResize);
  
      // Initial check for screen size on component mount
      handleResize();
  
      // Clean up event listener on component unmount
      return () => window.removeEventListener('resize', handleResize);
    }, []);



  return (
    <div className="overflow-x-hidden w-full flex items-start justify-center flex-col pt-16">
      {/* <video
        autoplay="true"
        loop="true"
        muted="true"
        class="absolute z-0 w-auto 
            min-w-full object-cover h-full opacity-40 max-w-none"
      >
        <source src="./images/video/bganimation.mp4" />
      </video> */}
      {/* Main Page  First Section */}
      <div className="w-full flex min-h-screen relative font-poppins justify-center items-center mb-44">
        <video
          autoPlay
          loop
          muted
          className="absolute z-0 w-full h-auto object-cover max-h-screen"
        >
          <source src="./images/video/fronthomepage.mp4" />
        </video>
        {/* <img src="./images/animation/mainintro.gif" className=""/> */}
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
              {/* <button className="text-white my-2   bg-violet-700  shadow-white-700 shadow-md hover:bg-violet-800 hover:text-white  transition ease-in-out delay-150 hover:scale-95  hover:translate-y-1 border-2 rounded-full px-7 py-4 font-semibold text-lg tracking-wide">
                Buy Tokens
              </button> */}

              <button className="text-white shadow-white-700 shadow-md hover:text-white transition ease-in-out delay-150 hover:scale-95 hover:translate-y-1 rounded-full font-semibold text-lg tracking-wide">
                <img
                  src="./images/button.png"
                  className="h-14"
                  alt="Button 1"
                />
              </button>
              <button className="text-white shadow-white-700 shadow-md hover:text-white transition ease-in-out delay-150 hover:scale-95 hover:translate-y-1 rounded-full font-semibold text-lg tracking-wide">
                <img
                  src="./images/dashboardfinal.png"
                  className="h-[68px]"
                  alt="Button 2"
                />
              </button>
            </m.div>
          </div>
          {/* <div className="w-1/2 h-full  flex justify-center items-center">
            <img src="./images/video/logovideo.gif" className="max-w-[450px]" />
          </div> */}
        </div>
      </div>
      {/* <div className="w-full min-h-[3vh] bg-gradient-to-b opacity-40 from-cyan-950 ">
            </div> */}

      {/* Section second */}
      <div className="w-full flex h-full relative justify-center items-center mb-44">
  <img
    src="./images/bgmain2.jpg"
    className="z-0 opacity-100 max-w-full object-cover w-full h-[80vh]"
  />
  {/* <video
    autoplay="true"
    loop="true"
    muted="true"
    className="absolute z-0 w-auto opacity-70 min-w-full object-cover max-h-screen max-w-none"
  >
    <source src="./images/video/2ndVideo.mp4" />
  </video> */}
  {/* flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 lg:px-32 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:static sm:justify-start sm:items-start */}
  <div className="absolute px-6 flex flex-col md:flex-row">
    <div className="w-full sm:w-1/2 flex justify-center items-center sm:mb-0">
      {/* <img src="./images/laptop.png" className="" /> */}
    </div>
    <div className="w-full sm:w-1/2 text-center sm:text-left">
      <m.h1
        className="text-3xl sm:text-5xl mb-4 sm:mb-12 font-bold font-poppins"
        initial={{ y: "20vh", opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 1.1,
            ease: "anticipate",
          },
        }}
      >
        Maximize Wealth with One Ozo
      </m.h1>
      <m.p
        initial={{ x: 200, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 1.6,
            ease: "anticipate",
          },
        }}
        className="font-poppins text-sm sm:text-lg text-center sm:text-justify"
      >
        One Ozo is a leading investment platform that offers individuals the
        opportunity to invest in cryptocurrency, forex, casino, and commodities.
        With a range of tailored packages, investors can diversify their
        portfolios and aim for substantial returns. Our platform provides a
        user-friendly interface, ensuring a seamless investing experience.
        Whether you're a seasoned investor or new to the market,
        <br />
        <br />
        One Ozo offers the tools and resources to make informed investment
        decisions. Join us today and unlock the potential of these dynamic
        markets. Grow your wealth and achieve financial success with One Ozo's
        innovative and secure investment solutions
      </m.p>
    </div>
  </div>
</div>


      {/* Third Section */}
      <div className="flex flex-col justify-center items-center mb-44 mx-auto px-6">
        <m.h1
          initial={{ y: -50, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 1.5,
              delay: 0.7,
              ease: "anticipate",
            },
          }}
          className="text-4xl text-center font-poppins font-bold w-full"
        >
          Why Choose One Ozo for Your Investment?
        </m.h1>
        <m.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: {
              delayChildren: 0.5,
              staggerChildren: 0.2,
            },
          }}
          className="grid md:grid-cols-2 sm:grid-cols-1 mt-24 mb-24 max-w-7xl gap-x-16 gap-y-12"
        >
          {/* 1  */}
          <m.div
            initial={{
              y: 20,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.4,
                ease: "anticipate",
              },
            }}
            className="max-w-[480px]  relative space-x-6 w-full flex items-center"
          >
            {/* left  */}
            <img
              src="./images/animation/circleanimation.png"
              className="animate-spin-slow absolute left-0 w-32"
            />

            <img src="./images/icons/profit.png" className="w-16 pl-2 " />
            {/* right  */}
            <div className="font-poppins pl-6   text-lg">
              Strong Performance:
              <p className="font-poppins mt-2 text-sm">
                One Ozo delivers impressive investment performance, ensuring
                optimal returns for our clients' portfolios
              </p>
            </div>
          </m.div>
          {/* 2  */}
          <m.div
            initial={{
              y: 20,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.8,
                ease: "anticipate",
              },
            }}
            className="max-w-[480px] space-x-6 relative w-full flex items-center"
          >
            {/* left  */}
            <img
              src="./images/animation/circleanimation.png"
              className="animate-spin-slow absolute left-0 w-32"
            />
            <img src="./images/icons/interface.png" className="w-16 pl-2 " />
            {/* right  */}
            <div className="font-poppins pl-6 text-lg">
              Diverse Investment Options:
              <p className="font-poppins mt-2 text-sm">
                With One Ozo, investors gain access to a wide range of
                investment opportunities, including cryptocurrencies, forex,
                casino, and commodities.
              </p>
            </div>
          </m.div>
          {/* 3 */}
          <m.div
            initial={{
              y: 20,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 1.2,
                ease: "anticipate",
              },
            }}
            className="max-w-[450px] relative space-x-6  w-full flex items-center"
          >
            {/* left  */}
            <img
              src="./images/animation/circleanimation.png"
              className="animate-spin-slow absolute left-0 w-32"
            />

            <img src="./images/icons/secure.png" className="w-16 pl-2 " />
            {/* right  */}
            <div className="font-poppins pl-6 text-lg">
              Expert Guidance:
              <p className="font-poppins mt-2 text-sm">
                Our team of experienced professionals provides expert guidance
                and market insights to help investors make informed decisions.
              </p>
            </div>
          </m.div>
          {/* 4 */}
          <m.div
            initial={{
              y: 20,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 1.6,
                ease: "anticipate",
              },
            }}
            className="max-w-[480px] relative space-x-6  w-full flex items-center"
          >
            {/* left  */}
            <img
              src="./images/animation/circleanimation.png"
              className="animate-spin-slow absolute left-0 w-32"
            />

            <img src="./images/icons/api.png" className="w-16 pl-2 " />
            {/* right  */}
            <div className="font-poppins pl-6   text-lg">
              User-Friendly Platform
              <p className="font-poppins mt-2 text-sm">
                One Ozo offers a user-friendly platform, making it easy for
                investors to manage their portfolios and track their
                investments.
              </p>
            </div>
          </m.div>
          {/* 5 */}
          <m.div
            initial={{
              y: 20,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 2.0,
                ease: "anticipate",
              },
            }}
            className="max-w-[480px]  relative space-x-6  w-full flex items-center"
          >
            {/* left  */}
            <img
              src="./images/animation/circleanimation.png"
              className="animate-spin-slow absolute left-0 w-32"
            />

            <img src="./images/icons/analytics.png" className="w-16 pl-2 " />
            {/* right  */}
            <div className="font-poppins pl-6   text-lg">
              Security and Trust:
              <p className="font-poppins mt-2 text-sm">
                One Ozo prioritizes the security of clients' funds and personal
                information, building trust and confidence in our platform
              </p>
            </div>
          </m.div>
          {/* 6 */}
          <m.div
            initial={{
              y: 20,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 2.4,
                ease: "anticipate",
              },
            }}
            className="max-w-[480px]  relative space-x-6  w-full flex items-center"
          >
            {/* left  */}
            <img
              src="./images/animation/circleanimation.png"
              className="animate-spin-slow absolute left-0 w-32"
            />

            <img src="./images/icons/certified.png" className="w-16 pl-2 " />
            {/* right  */}
            <div className="font-poppins pl-6  text-lg">
              Exceptional Customer Support:
              <p className="font-poppins mt-2 text-sm">
                Our dedicated customer support team is available to assist
                clients with any queries or concerns promptly and effectively.
              </p>
            </div>
          </m.div>
        </m.div>
      </div>

      {/* Cryptocurrency says  */}
      {/* Parent  */}

      {/* Center Div  */}
      {/* <div className="w-full flex justify-center mb-16 min-h-[100vh]  items-center relative "> */}
      {/* <video
          autoplay="true"
          loop="true"
          muted="true"
          class="absolute z-0 w-auto 
            min-w-full object-cover max-h-screen max-w-none"
        >
          <source src="./images/video/finalbgvideo1.mp4" />
        </video> */}

      {/* <m.div className="max-w-6xl w-full mx-auto absolute  p-16 min-h-[50vh] my-24  grid grid-cols-4 gap-8 ">
          <m.div
             initial={{ scale: 0,opacity:0 }}
             whileInView={{
           
              opacity: 1, scale: 1,
             transition:{
              duration: 0.3,
        delay: 0.0,
        ease: [0, 0.71, 0.2, 1.01]
             }
             }}
             
            viewport={{ once: true }}
            className="min-w-[150px] min-h-[150px] hover:scale-105  transition duration-500 transform  flex flex-col space-y-4 justify-center text-white font-semibold text-xl items-center shadow-2xl rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 shadow-cyan-500 "
          >
            <img src="./images/icons/interface.png" className="w-16" />

            <p className="">Interface</p>
          </m.div>

          <m.div
             initial={{ scale: 0,opacity:0 }}
             whileInView={{
           
              opacity: 1, scale: 1,
             transition:{
              duration: 0.3,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01]
             }
             }}
            // viewport={{ once: true }}
            className=" min-h-[150px] min-w-[150px]  hover:scale-105 transition duration-500 transform flex flex-col space-y-4 justify-center  text-white font-semibold text-xl items-center shadow-2xl rounded-lg bg-gradient-to-r from-sky to-indigo-500 shadow-indigo-500"
          >
            <img src="./images/icons/exchange.png" className="w-16" />

            <p className="">Exchange</p>
          </m.div>
          <m.div
             initial={{ scale: 0,opacity:0 }}
             whileInView={{
           
              opacity: 1, scale: 1,
             transition:{
              duration: 0.3,
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01]
             }
             }}
            // viewport={{ once: true }}
            className=" min-h-[150px]  min-w-[150px]  hover:scale-105 transition duration-500 transform flex flex-col space-y-4 justify-center text-white font-semibold text-xl items-center shadow-2xl rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-fuchsia-500 "
          >
            <img src="./images/icons/secure.png" className="w-16" />

            <p className="">Security</p>
          </m.div>

          <m.div
            initial={{ scale: 0,opacity:0 }}
            whileInView={{
          
             opacity: 1, scale: 1,
            transition:{
             duration: 0.3,
       delay: 0.4,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }}
            // viewport={{ once: true }}
            className="min-h-[150px]  min-w-[150px]  hover:scale-105 transition duration-500 transform flex flex-col space-y-4 justify-center  text-white font-semibold text-xl items-center shadow-2xl rounded-lg  bg-gradient-to-r from-purple-500 to-pink-500 shadow-purple-500 "
          >
            <img src="./images/icons/profit.png" className="w-16" />
            <p className="">Investment </p>
          </m.div>
        </m.div> */}
      {/* </div> */}

      {/* fourth Section */}

      <div className="font-poppins max-w-full w-full  flex flex-col justify-center items-center px-6 mb-44">
  <m.h1
    initial={{ y: -50, opacity: 0 }}
    whileInView={{
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.25,
        ease: "anticipate",
      },
    }}
    className="text-4xl sm:text-6xl text-center font-semibold"
  >
    Finance simplified,
    <br />
    in your language
  </m.h1>

  <div className="w-full mt-12 flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-14 items-center">
    <m.button
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 1.0,
          delay: 0.35,
          ease: "anticipate",
        },
      }}
      className="text-white w-40 sm:w-56 border-2 py-4 shadow-grey-700 shadow-2xl hover:text-white transition ease-in-out delay-150 hover:scale-95 hover:translate-y-1 rounded-full font-semibold text-base sm:text-lg tracking-wide"
    >
      Youtube
    </m.button>
    <m.button
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 1.6,
          delay: 0.9,
          ease: "anticipate",
        },
      }}
      className="text-white w-40 sm:w-56 border-2 py-4 shadow-grey-700 shadow-2xl hover:text-white transition ease-in-out delay-150 hover:scale-95 hover:translate-y-1 rounded-full font-semibold text-base sm:text-lg tracking-wide"
    >
      Blogs
    </m.button>
  </div>
</div>

{isLargeScreen && (
    <>
<div className="font-poppins flex flex-col justify-center w-full relative h-full max-h-screen text-black mt-44 mb-44 py-10">
  <div className="max-w-[380px] max-h-[280px] ease-in-out z-10 duration-300 h-full hover:rotate-0 hover:z-50 hover:cursor-pointer transform transition delay-300 hover:-translate-y-36 absolute left-[280px] bottom-6 -rotate-6 px-6 py-8 w-full bg-white rounded-2xl shadow-xl">
    <h2 className="mb-4 text-gray-600">Lorem ipsum</h2>
    <p className="text-gray-500">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
    </p>
  </div>
  <div className="max-w-[420px] absolute z-8 left-[500px] ease-in-out duration-300 bottom-0 hover:z-9 hover:rotate-0 hover:cursor-pointer transform transition delay-300 hover:-translate-y-36 rotate-12 max-h-[250px] h-full rounded-2xl bg-white p-3">
    <img src="./images/yt2.jpg" className="rounded-2xl" />
  </div>
  <div className="max-w-[420px] absolute z-7 bottom-12 hover:rotate-0 duration-300 ease-in-out hover:z-9 hover:cursor-pointer transform transition delay-300 hover:-translate-y-36 -rotate-3 right-[500px] max-h-[250px] h-full rounded-2xl bg-white p-3">
    <img src="./images/yt1.jpg" className="rounded-2xl" />
  </div>

  <div className="max-w-[380px] rotate-6 hover:rotate-0 hover:z-9 duration-300 ease-in-out hover:cursor-pointer transform delay-300 hover:-translate-y-36 z-8 -bottom-12 absolute right-[320px] px-6 py-8 w-full bg-white rounded-2xl shadow-xl">
    <h2 className="mb-4 text-gray-600">Word of the day</h2>
    <h2 className="mb-4 text-3xl">Additionally Survillence Measure</h2>

    <p className="text-gray-500">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
    </p>
  </div>
</div>
</>
  )}

<div className="w-full h-full mt-4 px-6 py-8 shadow-xl">
  <div></div>
</div>


      {/* Section Five */}
      <div className="flex  mx-auto min-h-[100vh] font-poppins relative  w-full  justify-end md:justify-center items-center mb-44 mt-44 md:mt-0">
        {/* left  */}

        {/* <img
          src="./images/bg3.jpg"
          className="z-0 opacity-60 object-cover "
        /> */}
        <video
          autoplay="true"
          loop="true"
          muted="true"
          class="absolute z-0 w-auto opacity-50
            max-w-full object-cover max-h-screen "
        >
          <source src="./images/video/ozotokenvideo1.mp4" />
        </video>
        <div className="absolute w-full ml-44  flex justify-start items-center">
          <div className="max-w-2xl w-full text-left px-6">
            <m.h1
              initial={{ x: -50, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.8,
                  ease: "anticipate",
                },
              }}
              className="font-bold font-poppins text-5xl mb-6"
            >
              OZO Token: Unlock Lucrative Promotions
              <br />
              <span className="text-4xl font-medium">
                for Smart Investors
              </span>{" "}
            </m.h1>
            <m.p
              initial={{ x: -50, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.8,
                  delay: 0.3,
                  ease: "anticipate",
                },
              }}
              className="  text-base mb-6"
            >
              OZO Token offers exclusive promotions, rewarding investors for
              their commitment and maximizing their returns.
            </m.p>

            <div className="space-y-6 ">
              <m.div
                initial={{ y: -50, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 1.5,
                    delay: 0.3,
                    ease: "anticipate",
                  },
                }}
                className="flex items-center space-x-4"
              >
                <img src="./images/transfer-money.png" className="w-12" />
                <div className="font-poppins  text-xl">
                  Multilevel Referral Rewards:
                  <p className="font-poppins text-base">
                    Earn attractive referral bonuses and Ozo Token rewards
                    through our comprehensive multilevel referral program.
                  </p>
                </div>
              </m.div>
              <m.div
                initial={{ y: -50, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 1.5,
                    delay: 0.5,
                    ease: "anticipate",
                  },
                }}
                className="flex items-center space-x-4"
              >
                <img src="./images/debit.png" className="w-12" />
                <div className="font-poppins  text-xl">
                  Investment Level Rewards:
                  <p className="font-poppins text-base">
                    Ascend through investment levels to receive Ozo Token
                    rewards, with higher levels offering increased percentages
                    based on your total investment amount.
                  </p>
                </div>
              </m.div>
              <m.div
                initial={{ y: -50, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 1.5,
                    delay: 0.7,
                    ease: "anticipate",
                  },
                }}
                className="flex items-center space-x-4"
              >
                <img src="./images/safety.png" className="w-12" />
                <div className="font-poppins  text-xl">
                  Weekly Withdrawal and Bonus:
                  <p className="font-poppins text-base">
                    Benefit from weekly withdrawal options while enjoying
                    additional bonuses for not withdrawing, accumulating in your
                    Extra Income wallet.
                  </p>
                </div>
              </m.div>
            </div>
          </div>

          {/* right  */}
          {/* <div className=" pl-2  flex justify-center items-center">
            <img src="./images/ai.png" className=" " />
          
          </div> */}
        </div>
      </div>

      {/* section Sixth */}

      <div className="flex mx-auto min-h-screen font-poppins relative w-full justify-end md:justify-center items-center mb-44 md:mt-0 mt-44">
        <img
          src="./images/dogbg.jpg"
          className="z-0 opacity-60 object-cover w-full h-full md:max-w-full md:h-auto"
        />

        <div className="absolute px-6 md:px-52 w-full bg-opacity-40 py-8 md:py-[202px]">
          <m.h1
            className="text-4xl md:text-6xl font-bold mb-4 md:mb-6"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.6,
                ease: "anticipate",
              },
            }}
            // viewport={{ once: true }}
          >
            security first.
            <br />
            and second.
          </m.h1>
          <m.p
            initial={{ x: 50, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 1.4,
                ease: "anticipate",
              },
            }}
            // viewport={{ once: true }}
            className="text-xl md:text-3xl font-semibold mb-4 md:mb-6"
          >
            what’s yours remains only yours.
          </m.p>
          <m.p
            initial={{ x: 50, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
                ease: "anticipate",
              },
            }}
            // viewport={{ once: true }}
            className="text-base md:text-xl font-semibold mb-6 md:mb-10"
          >
            Rest assured, One Ozo employs state-of-the-art encryption and
            <br /> stringent security protocols to safeguard your funds and
            personal information,
            <br /> ensuring the utmost protection for your assets and peace of
            mind.
          </m.p>
          <m.button
            initial={{ x: 50, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 0.2,
                ease: "anticipate",
              },
            }}
            className="rounded-full bg-white px-8 md:px-14 py-4 md:py-6"
          >
            <span className="text-black text-base md:text-2xl font-semibold">
              Become a member
            </span>{" "}
          </m.button>
        </div>
      </div>

      {/* Document  */}
      {/* <m.h1 initial={{ y: -50, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 1.5,
                delay:0.7,
                ease: "anticipate",
              },
            }} className="text-5xl font-poppins font-bold text-center  mt-24 w-full">
        Document
      </m.h1> */}
      {/* <div  
        className="max-w-6xl w-full mx-auto  h-full p-16 min-h-[50vh] mb-24  grid grid-cols-4 gap-8 ">
        <m.div  initial={{ scale: 0,opacity:0 }}
            whileInView={{
       
             opacity: 1, scale: 1,
            transition:{
             duration: 0.2,
       delay: 0.1,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }}className="min-w-[150px] min-h-[150px] hover:scale-105  transition duration-500 transform  flex flex-col space-y-4 justify-center text-white font-semibold text-xl items-center shadow-2xl rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 shadow-purple-500 ">
          <img src="./images/icons/document.png" className="w-16" />

          <p className="">Privacy</p>
        </m.div>

        <m.div   initial={{ scale: 0,opacity:0 }}
            whileInView={{
             
             opacity: 1, scale: 1,
            transition:{
             duration: 0.2,
       delay: 0.2,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }}className=" min-h-[150px] min-w-[150px]  hover:scale-105 transition duration-500 transform flex flex-col space-y-4 justify-center  text-white font-semibold text-xl items-center shadow-2xl rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 shadow-cyan-500 ">
          <img src="./images/icons/document.png" className="w-16" />

          <p className="">Terms</p>
        </m.div>

        <m.div  initial={{ scale: 0,opacity:0 }}
            whileInView={{
             
             opacity: 1, scale: 1,
            transition:{
             duration: 0.2,
       delay: 0.3,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }} className=" min-h-[150px]  min-w-[150px]  hover:scale-105 transition duration-500 transform flex flex-col space-y-4 justify-center text-white font-semibold text-xl items-center shadow-2xl rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-fuchsia-500">
          <img src="./images/icons/document.png" className="w-16" />

          <p className="">Subscription</p>
        </m.div>

        <m.div   initial={{ scale: 0,opacity:0 }}
            whileInView={{
             
             opacity: 1, scale: 1,
            transition:{
             duration: 0.2,
       delay: 0.4,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }} className="min-h-[150px]  min-w-[150px]  hover:scale-105 transition duration-500 transform flex flex-col space-y-4 justify-center  text-white font-semibold text-xl items-center shadow-2xl rounded-lg  bg-gradient-to-r from-sky to-indigo-500 shadow-indigo-500">
          <img src="./images/icons/document.png" className="w-16" />
          <p className="">White Papers </p>
        </m.div>
      </div> */}

      {/* section seven */}

      <div className="w-full min-h-screen font-poppins relative flex items-center mb-44 mt-44">
        <img
          src="./images/story.png"
          className="z-0 opacity-80 max-w-full h-auto object-cover"
        />

        <div className="absolute w-full flex flex-col md:flex-row px-4 md:px-16 bg-opacity-40 justify-around text-justifiy gap-6">
          <m.h1
            initial={{
              x: -50,
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.75,
                easings: "easeInOut",
              },
            }}
            className="text-4xl md:text-6xl font-bold max-w-[550px] pb-2 max-h-max flex items-end "
          >
            the story of One Ozo begin with trust
          </m.h1>
          <m.p
            initial={{
              x: 150,
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.75,
                easings: "easeInOut",
              },
            }}
            className="text-base md:text-xl max-w-[550px]"
          >
            The story of One Ozo begins with trust, as we firmly believe that
            trust is the foundation of any successful investment journey. From
            the very beginning, we set out to establish a platform built on
            integrity, transparency, and reliability. We understand that our
            clients entrust us with their hard-earned money, and we take this
            responsibility seriously.
            <br />
            <br />
            By consistently delivering on our promises, providing secure
            investment opportunities, and prioritizing client satisfaction, we
            have earned the trust of thousands of investors worldwide. Trust is
            not just a word for us; it's a commitment we uphold every day.
            <br />
            <br />
            Join One Ozo and experience the power of trust in your investment
            endeavors
          </m.p>
        </div>
      </div>

      {/* section eighth */}
      <div className="w-full min-h-[100vh] font-poppins relative mb-44 ">
        {/* <img src="./images/bg.png" className="z-0  object-cover " /> */}
        <video
          autoplay="true"
          loop="true"
          muted="true"
          class="absolute z-0 w-auto opacity-50
            max-w-full object-cover max-h-[110vh] "
        >
          <source src="./images/video/finalbgvideo1.mp4" />
        </video>
        <div className="absolute flex items-center justify-center w-full sm:flex">
          <m.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.4,
                delay: 0.4,
                ease: [0, 0.71, 0.2, 1.01],
              },
            }}
            className=" w-full max-w-[950px] rounded-2xl py-12  "
          >
            <img src="./images/calc.jpg" className="opacity-50" />
            <div className="flex flex-col max-w-[450px] right-0 md:right-60 absolute top-0 md:top-28 min-h-[40vh] px-6 text-center">
              <m.h1
                initial={{
                  x: 75,
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.75,
                    easings: "easeInOut",
                  },
                }}
                className="mb-6  uppercase font-semibold text-purple-700 text-xl"
              >
                Crypto earn
              </m.h1>
              <m.h1
                initial={{
                  x: 75,
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.75,
                    easings: "easeInOut",
                  },
                }}
                className="mb-6 text-5xl font-semibold font-poppins "
              >
                Get the most out of your
                <br />
                assets, safely
              </m.h1>
              <m.h1
                initial={{
                  x: 75,
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.75,
                    easings: "easeInOut",
                  },
                }}
                className="mb-6 text-xl "
              >
                Choose from 21+ cryptocurrencies and stablecoins.
              </m.h1>

              <Link
                to="earning"
                className="px-6 py-2 font-medium text-lg border rounded-full"
              >
                Calculate Rewards
              </Link>
            </div>
          </m.div>
        </div>
      </div>

      {/* section nine           */}

      <div className="flex mx-auto min-h-screen font-poppins relative w-full justify-end md:justify-center items-center mb-44">
        <img
          src="./images/skydiving.jpg"
          className="z-0 opacity-60 object-cover w-full h-full md:max-w-full md:h-auto"
        />

        <div className="absolute px-6 md:px-52 w-full bg-opacity-40 py-8 md:py-[202px]">
          <m.h1
            className="text-4xl md:text-6xl font-bold mb-4 md:mb-6"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.6,
                ease: "anticipate",
              },
            }}
            // viewport={{ once: true }}
          >
            we take your money <br />
            matters seriously
          </m.h1>
          <m.p
            initial={{ x: 50, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 1.4,
                ease: "anticipate",
              },
            }}
            // viewport={{ once: true }}
            className="text-xl md:text-3xl font-semibold mb-4 md:mb-6"
          >
            so that you don’t have to.
          </m.p>
          <m.p
            initial={{ x: 50, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
                ease: "anticipate",
              },
            }}
            // viewport={{ once: true }}
            className="text-base md:text-xl font-semibold mb-6 md:mb-10"
          >
            At One Ozo, we are dedicated to expertly managing your money
            matters,
            <br /> providing a secure and reliable platform, so you can have
            peace of mind <br />
            and enjoy worry-free financial stability.
          </m.p>
          <m.button
            initial={{ x: 50, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 0.2,
                ease: "anticipate",
              },
            }}
            className="rounded-full bg-white px-8 md:px-12 py-4 md:py-6"
          >
            <span className="text-black text-base md:text-2xl font-semibold">
              Experience the upgrade
            </span>{" "}
          </m.button>
        </div>
      </div>

      {/* section 10 */}

      <div className="w-full mb-44 px-6">
        <div className="font-poppins mx-auto max-w-6xl space-y-12 sm:mx-8 justify-center items-center text-center">
          <h1 className="text-4xl text-center font-bold mb-16">FAQs</h1>

          <div className="text-xl   ">
            <p className="font-semibold mb-4">
              1. How do I qualify for a promo code in Ozo Pay?
            </p>
            <p className="text-gray-500">
              You qualify for a promo code by making your initial investment and
              purchasing one of Ozo Pay's packages.
            </p>
          </div>
          <div className="text-xl   ">
            <p className="font-semibold mb-4">
              2. What is the minimum deposit required to participate in Package
              1?
            </p>
            <p className="text-gray-500">
              The minimum deposit required for Package 1 is $100.
            </p>
          </div>

          <div className="text-xl   ">
            <p className="font-semibold mb-4">
              3. Can I choose multiple investment packages simultaneously?
            </p>
            <p className="text-gray-500">
              Yes, you can choose multiple investment packages simultaneously
              based on your investment goals and preferences.
            </p>
          </div>

          <div className="text-xl   ">
            <p className="font-semibold mb-4">
              4. how long is the package duration for Package 2?
            </p>
            <p className="text-gray-500">
              The package duration for Package 2 is 180 days.
            </p>
          </div>

          <div className="text-xl   ">
            <p className="font-semibold mb-4">
              5. Is the ROI fixed for all investment packages?
            </p>
            <p className="text-gray-500">
              Yes, the ROI is fixed for each investment package as specified in
              the provided details.
            </p>
          </div>
          <div className="text-xl   ">
            <p className="font-semibold mb-4">
              6. What happens if I reach the capping limit in Package 3?
            </p>
            <p className="text-gray-500">
              If you reach the capping limit in Package 3, you will not receive
              any additional returns beyond that limit.
            </p>
          </div>
          <div className="text-xl   ">
            <p className="font-semibold mb-4">
              7. Are the referral bonuses applicable only to the investment
              amount?
            </p>
            <p className="text-gray-500">
              Referral bonuses are applicable to the investment amount made by
              the referred individuals in their respective packages.
            </p>
          </div>
          <div className="text-xl   ">
            <p className="font-semibold mb-4">
              8. How are the Ozo Tokens credited to my wallet?
            </p>
            <p className="text-gray-500">
              Ozo Tokens earned through referral bonuses are credited directly
              to your Ozo Token wallet within the platform.
            </p>
          </div>
          <div className="text-xl   ">
            <p className="font-semibold mb-4">
              9. Are there any restrictions on the usage of Ozo Tokens?
            </p>
            <p className="text-gray-500">
              Ozo Tokens can be utilized within the platform for various
              purposes, including additional investments or other specified
              benefits.
            </p>
          </div>
          <div className="text-xl   ">
            <p className="font-semibold mb-4">
              10. Can I withdraw my principal amount before the package duration
              ends?
            </p>
            <p className="text-gray-500">
              No, the principal amount can only be withdrawn at the end of the
              package duration as per the terms and conditions.
            </p>
          </div>
          <div className="text-xl   ">
            <p className="font-semibold mb-4">
              11. Are there any hidden fees or charges involved?
            </p>
            <p className="text-gray-500">
              No, there are no hidden fees or charges. All applicable fees and
              charges are transparently communicated upfront.
            </p>
          </div>
          <div className="text-xl   ">
            <p className="font-semibold mb-4">
              12. How can I track the performance of my investments?
            </p>
            <p className="text-gray-500">
              One Ozo provides a user-friendly platform where you can easily
              track and monitor the performance of your investments
            </p>
          </div>
          <div className="text-xl   ">
            <p className="font-semibold mb-4">
              13. Is Ozo Pay regulated by any financial authority?
            </p>
            <p className="text-gray-500">
              Ozo Pay operates under the regulatory guidelines and compliance
              requirements set by the relevant financial authorities.
            </p>
          </div>
          <div className="text-xl   ">
            <p className="font-semibold mb-4">
              14. Can I cancel my investment package before the package duration
              ends?
            </p>
            <p className="text-gray-500">
              No, investment packages cannot be canceled before the specified
              package duration. It is a commitment for the stated period
            </p>
          </div>
          <div className="text-xl   ">
            <p className="font-semibold mb-4">
              15. What security measures are in place to protect my investment
              and personal information?
            </p>
            <p className="text-gray-500">
              Ozo Pay prioritizes the security of investments and personal
              information, utilizing advanced encryption technology and robust
              security measures to safeguard your data.
            </p>
          </div>
        </div>
      </div>

{/* already comment section */}

      {/* <div className=" w-full flex min-h-[80vh] h-full relative justify-center items-center ">
        <img src="./images/bg5.png " className="object-cover  " />
      </div>
      <div className=" w-full flex min-h-[80vh] h-full relative justify-center items-center ">
        <img src="./images/bg4.jpg " className="object-cover  " />
      </div>
      What we do 
      <div className="w-full flex justify-center mb-16 items-center flex-col">
        
        <h1 className="text-4xl mt-16  mb-12 uppercase font-semibold font-poppins">
          What WE do
        </h1>
        <h1 className="text-4xl text-center mb-12 uppercase font-semibold font-poppins">
          THE VALUE OF THESE <span className="text-blue-500"> MODELS</span> IS
          IN <br />
          THE <span className="text-green-500"> MINIMIZATION</span> OF{" "}
          <span className="text-rose-600">RISK</span>
        </h1>
        <div className="flex space-x-4 font-poppins text-2xl items-center max-w-[calc(100%-4rem)]">
          <div className="max-w-[400px] bg-zinc-900  backdrop-blur-md  border-2 p-8 min-h-[350px]  rounded-2xl flex justify-center items-center flex-col  shadow-md">
            <GiSpellBook fontSize={"56px"} className="mb-2" />
            <h3 className="">Knowledge</h3>
            <p className="text-lg">
              Our team of experts has a deep understanding of the crypto market.
              We monitor the market 24/7, looking for opportunities to make a
              profit. We use our knowledge and experience to make informed
              trading decisions.
            </p>
          </div>

          <div className="max-w-[400px] bg-neutral-900 border-2 p-8 min-h-[355px] flex justify-center items-center flex-col rounded-2xl shadow-md">
            <SiBitcoincash fontSize={"56px"} className="" />
            <h3 className="">Earnings</h3>
            <p className="text-lg">
              We have a proven track record of success in the crypto market. We
              have generated consistent profits for our clients. We are
              confident that we can continue to generate profits for our clients
              in the future.
            </p>
          </div>

          <div className="max-w-[400px] bg-neutral-900  border-2 p-8  min-h-[350px]  flex justify-center items-center flex-col rounded-2xl shadow-md">
            <TbAlertTriangleFilled fontSize={"56px"} className="mb-1" />
            <h3 className="">Risk Reduction</h3>
            <p className="text-lg">
              We use statistical modeling and machine learning to identify and
              execute trades. We believe that the value of these models is in
              the minimization of risk. We use a variety of risk management
              techniques to protect our capital.
            </p>
          </div>
        </div>
      </div> */}

      {/* <div className="w-full font-poppins min-h-[100vh]">
        <h2 className="text-2xl text-center mb-4">ROADMAP</h2>
        <h1 className="text-4xl  text-center mb-6 font-semibold ">
          Ozo Pay STRATEGY AND PROJECT PLAN
        </h1>
        <div className="w-full min-h-[80vh] px-32  overflow-scroll  overflow-x-auto ">
       
          <div className="flex  space-x-4 py-4 px-4 ">
            <div className="max-w-[450px] p-8 rounded-2xl shadow-lg   bg-purple-800 -700 -400">
              <h1 className="font-semibold  text-xl mb-3">Manpower</h1>
              <p className="">
                CEO Benjamin B Turbin is on the hunt for talent. Hiring
                potential members, reaching out the experts to discuss the
                business idea and leads. Finally forming a learned team from the
                best available options for the smooth flow of operations.
              </p>
            </div>
            <div className="max-w-[450px] p-8 rounded-2xl shadow-lg   bg-rose-400">
              <h1 className="font-semibold  text-xl mb-3">
                Upgrading Services
              </h1>
              <p className="">
                A lot of backend struggle finally gives way for AI software
                integration. Helping the website to improve and creating our own
                trading systems using the AI software to analyse and provide
                secure and risk-free trades.
              </p>
            </div>
            <div className="max-w-[450px] p-8 rounded-2xl shadow-lg   bg-red-400">
              <h1 className="font-semibold  text-xl mb-3">Global Services</h1>
              <p className="">
                A global platform seeking to setup multiple branches and offices
                to spread the business on a global scale. Reaching out to
                business ventures, experts and audiences for setting up services
                and encouraging people to gain financial strength.
              </p>
            </div>
            <div className="max-w-[450px] p-8 rounded-2xl shadow-lg   bg-orange-400">
              <h1 className="font-semibold  text-xl mb-3">The First Idea</h1>
              <p className="">
                Forming a business to setup services related to cryptocurrency.
                Providing quality inputs, completing the checklists and setting
                an online base for users to reach out for investments and
                financing options for a better-quality life.
              </p>
            </div>
          </div> */}

         
          {/* <div className="flex  space-x-4 py-4  px-4 ">
            <div className="max-w-[450px] p-8 rounded-2xl shadow-lg   bg-yellow-600">
              <h1 className="font-semibold  text-xl mb-3">
                Business Execution
              </h1>
              <p className="">
                The ideas, manpower and finances put together to execute a
                business like never before. Uploading the best software systems
                to generate fluent work systems. Protecting the integrity of the
                company against external issues.
              </p>
            </div>

            <div className="max-w-[450px] p-8 rounded-2xl shadow-lg   bg-brown-400">
              <h1 className="font-semibold  text-xl mb-3">
                A Website For Everyone
              </h1>
              <p className="">
                Acknowledging the changes and making improvements to help every
                user understand the website better. Making subtle changes to
                help users with easier options and reach global audience in
                their individual capacity.
              </p>
            </div>

            <div className="max-w-[450px] p-8 rounded-2xl shadow-lg   bg-light-green-500 -400">
              <h1 className="font-semibold  text-xl mb-3">A New Face</h1>
              <p className="">
                With different parameters in perfect synchronisation, we will
                look to strengthen the grip in the financial markets and be the
                complete business a user can access. Tecmactrade will be a new
              </p>
            </div>

            <div className="max-w-[450px] p-8 rounded-2xl shadow-lg   bg-light-blue-500 -400">
              <h1 className="font-semibold  text-xl mb-3">Manpower</h1>
              <p className="">
                CEO Benjamin B Turbin is on the hunt for talent. Hiring
                potential members, reaching out the experts to discuss the
                business idea and leads. Finally forming a learned team from the
                best available options for the smooth flow of operations.
              </p>
            </div>
          </div>
        </div>
      </div> */}

      {/* Testimonals  */}
      {/* <div class="py-16 w-full flex justify-center items-center h-full mb-20 ">
        <div class="container m-auto px-6 text-gray-600 dark:text-gray-300 md:px-12 xl:px-6">
          <div class="mb-20 space-y-4 px-6 md:px-0">
            <h2 class="text-center text-2xl font-bold font-poppins  text-white md:text-4xl">
              What's our customers say
            </h2>
          </div>
          <div class="md:columns-2 lg:columns-3 gap-8 space-y-8">
            <div class="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
              <div class="flex gap-4">
                <img
                  class="w-12 h-12 rounded-full"
                  src="https://pbs.twimg.com/profile_images/1362367807887974401/kuJ1OFT1_400x400.jpg"
                  alt=""
                  width=""
                  height=""
                  loading="lazy"
                />
                <div>
                  <h6 class="text-lg font-medium text-gray-900 dark:text-white">
                    Eric Ampire
                  </h6>
                  <p class="text-sm text-gray-700 dark:text-gray-400">
                    Mobile dev
                  </p>
                </div>
              </div>
              <p class="mt-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                aliquid quo eum quae quos illo earum ipsa doloribus nostrum
                minus libero aspernatur laborum cum, a suscipit, ratione ea
                totam ullam! Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Architecto laboriosam deleniti aperiam ab veniam sint non
                cumque quis tempore cupiditate. Sint libero voluptas veniam at
                reprehenderit, veritatis harum et rerum.
              </p>
            </div>
            <div class="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
              <div class="flex gap-4">
                <img
                  class="w-12 h-12 rounded-full"
                  src="https://pbs.twimg.com/profile_images/1372441824560771075/DTcuXT0Z_400x400.jpg"
                  alt=""
                  width=""
                  height=""
                  loading="lazy"
                />
                <div>
                  <h6 class="text-lg font-medium text-gray-900 dark:text-white">
                    Rodrigo Aguilar
                  </h6>
                  <p class="text-sm text-gray-700 dark:text-gray-400">
                    Creator of Tailwind Awesome
                  </p>
                </div>
              </div>
              <p class="mt-8">
                {" "}
                Lorem ipsum dolor laboriosam deleniti aperiam ab veniam sint non
                cumque quis tempore cupiditate. Sint libero voluptas veniam at
                reprehenderit, veritatis harum et rerum.
              </p>
            </div>

            <div class="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
              <div class="flex gap-4">
                <img
                  class="w-12 h-12 rounded-full"
                  src="https://pbs.twimg.com/profile_images/1362367807887974401/kuJ1OFT1_400x400.jpg"
                  alt=""
                  width=""
                  height=""
                  loading="lazy"
                />
                <div>
                  <h6 class="text-lg font-medium text-gray-900 dark:text-white">
                    Adam Wathan
                  </h6>
                  <p class="text-sm text-gray-700 dark:text-gray-400">
                    Creator of Tailwindcss
                  </p>
                </div>
              </div>
              <p class="mt-8">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Architecto laboriosam deleniti aperiam ab veniam sint non cumque
                quis tempore cupiditate. Sint libero voluptas veniam at
                reprehenderit, veritatis harum et rerum.
              </p>
            </div>
            <div class="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
              <div class="flex gap-4">
                <img
                  class="w-12 h-12 rounded-full"
                  src="./images/woman1.jpg"
                  alt=""
                  width=""
                  height=""
                  loading="lazy"
                />
                <div>
                  <h6 class="text-lg font-medium text-gray-900 dark:text-white">
                    Dan Kyungu
                  </h6>
                  <p class="text-sm text-gray-700 dark:text-gray-400">
                    Mobile dev
                  </p>
                </div>
              </div>
              <p class="mt-8">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Architecto laboriosam deleniti aperiam ab veniam sint non cumque
                quis tempore cupiditate. Sint libero voluptas veniam at
                reprehenderit, veritatis harum et rerum.
              </p>
            </div>

            <div class="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
              <div class="flex gap-4">
                <img
                  class="w-12 h-12 rounded-full"
                  src="./images/woman1.jpg"
                  alt=""
                  width=""
                  height=""
                  loading="lazy"
                />
                <div>
                  <h6 class="text-lg font-medium text-gray-900 dark:text-white">
                    John Doe
                  </h6>
                  <p class="text-sm text-gray-700 dark:text-gray-400">
                    Creator dev
                  </p>
                </div>
              </div>
              <p class="mt-8">
                {" "}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Architecto laboriosam deleniti aperiam ab veniam sint non cumque
                quis tempore cupiditate. Sint libero voluptas veniam at
                reprehenderit, veritatis harum et rerum.
              </p>
            </div>
            <div class="aspect-auto p-8 border border-gray-400 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
              <div class="flex gap-4">
                <img
                  class="w-12 h-12 rounded-full"
                  src="./images/man.jpg"
                  alt=""
                  width=""
                  height=""
                  loading="lazy"
                />
                <div>
                  <h6 class="text-lg font-medium text-gray-900 dark:text-white">
                    Randy Doe
                  </h6>
                  <p class="text-sm text-gray-700 dark:text-gray-400">
                    Mobile dev
                  </p>
                </div>
              </div>
              <p class="mt-8">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Architecto laboriosam deleniti aperiam ab veniam sint non cumque
                quis tempore cupiditate. Sint libero voluptas veniam at
                reprehenderit, veritatis harum et rerum.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
