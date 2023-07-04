import React, { useState } from "react";
import {motion as m } from "framer-motion"
const AboutUs = () => {
  const [values, setValues] = useState("think");
  return (
    <div className="bg-black w-full flex justify-center items-center flex-col">
      <m.h1  initial={{ opacity: 0,y:-50 }}
              whileInView={{
                y:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.23,
                  ease: "anticipate",
                },
              }}  className="text-xl mt-16 text-fuchsia-800  mb-6 font-semibold uppercase font-poppins">
        Our Vision
      </m.h1>
      <m.h1  initial={{ opacity: 0,y:-50 }}
              whileInView={{
                y:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.38,
                  ease: "anticipate",
                },
              }}  className="text-5xl text-center mb-12 font-semibold  font-poppins">
       Empowering <br/>Financial Success,<br/> Innovatively
      </m.h1>

      <m.img  initial={{ opacity: 0,y:-20 }}
              whileInView={{
                y:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.51,
                  ease: "anticipate",
                },
              }}  src="./images/logo.png" className="w-[550px] " />
      <m.h1 initial={{ opacity: 0,y:-50 }}
              whileInView={{
                y:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.23,
                  ease: "anticipate",
                },
              }}  className="text-xl mt-16 text-fuchsia-800 text-center   mb-6 font-semibold uppercase font-poppins">
        Our Mission
      </m.h1>
      <m.h1  initial={{ opacity: 0,y:-50 }}
              whileInView={{
                y:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.38,
                  ease: "anticipate",
                },
              }}  className="text-5xl text-center  mb-20 font-semibold  font-poppins">
       Empowering Investors with<br/> Innovative Solutions in Cryptocurrency<br/> for Financial Prosperity
      </m.h1>

      <div className="w-full min-h-[110vh] mt-12 relative  flex justify-center items-center flex-col ">
        <img src="./images/aboutusbg.jpg" className="opacity-60" />
        <div className="mx-auto max-w-6xl  w-full flex justify-center items-center flex-col absolute">
          <m.p  initial={{ opacity: 0,y:-50 }}
              whileInView={{
                y:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.2,
                  ease: "anticipate",
                },
              }}  className="text-xl mt-16 text-fuchsia-800 text-center mb-6 font-semibold uppercase font-poppins">
            WHY it Matters
          </m.p>
          <m.h1  initial={{ opacity: 0,y:50 }}
              whileInView={{
                y:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.34,
                  ease: "anticipate",
                },
              }}  className="text-4xl text-center  mb-20 font-semibold  font-poppins">
            Diversify your portfolio and<br/> maximize returns with cryptocurrency<br/> and forex investments
            <br /> <br />
            Tap into the growth potential<br/> of cryptocurrency and forex markets.

          
            <br /> <br />
            Achieve financial independence by investing<br/> in cryptocurrency and forex
            
            <br /> <br /> Participate in global investing opportunities with accessible cryptocurrency and forex market
          </m.h1>
          <m.button  initial={{ opacity: 0,y:50 }}
              whileInView={{
                y:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.41,
                  ease: "anticipate",
                },
              }}  className="text-white w-56 border-2 font-poppins hover:bg-black hover:opacity-80 hover:border-2 py-4 shadow-grey-700 shadow-2xl  transition ease-in-out delay-150 hover:scale-95  hover:translate-y-1 rounded-full  font-semibold text-lg tracking-wide">
            Start the Journey
          </m.button>
        </div>
      </div>

      <div className="w-full min-h-[110vh] relative  flex justify-center items-center flex-col ">
        <video
          src="./images/video/aboutusvideo.mp4"
          autoplay="true"
          loop="true"
          muted="true"
          class="absolute z-0 w-auto opacity-80
            min-w-full object-cover max-h-[110vh] max-w-none"
        />
        <div className="mx-auto max-w-7xl  w-full flex justify-center items-center flex-col absolute">
          <m.p  initial={{ opacity: 0,y:-50 }}
              whileInView={{
                y:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.2,
                  ease: "anticipate",
                },
              }}  className="text-xl mt-16 text-fuchsia-900 text-center mb-6 font-semibold uppercase font-poppins">
           Commitment to Excellence
          </m.p>
          <m.h1  initial={{ opacity: 0,y:50 }}
              whileInView={{
                y:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.32,
                  ease: "anticipate",
                },
              }}  className="text-5xl text-center  mb-20 font-semibold  font-poppins">
           At One Ozo, we strive for excellence in everything we do, continuously improving our services to deliver 
unparalleled value and satisfaction to our investors.

          </m.h1>
          <m.button  initial={{ opacity: 0,y:50 }}
              whileInView={{
                y:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.32,
                  ease: "anticipate",
                },
              }}  className="text-white w-56 border-2 font-poppins hover:bg-black hover:opacity-80 hover:border-2 py-4 shadow-grey-700 shadow-2xl  transition ease-in-out delay-150 hover:scale-95  hover:translate-y-1 rounded-full  font-semibold text-lg tracking-wide">
            Learn More
          </m.button>
        </div>
      </div>

      {/* Parent  */}
      {/* <div className="flex max-w-7xl p-8 mb-12 w-full  justify-center items-center">
    
        <div className="w-1/2 text-left ">
          <h1 className="font-semibold font-poppins text-4xl mb-6">
            Stunning Crypto Platform <br />
            <span>It's Great For Your Icon</span>{" "}
          </h1>
          <p className=" font-poppins text-lg mb-6">
            From day one we designed and built a modern crypto template for
            beginners and experts alike. Make easy deposits and withdrawals,
            measure the performance of your portfolio, and track all your
            cryptocurrencies in one place.
          </p>

          <div className="space-y-2 px-4">
            <li className="">
              
                You can follow cryptos by investing from all banking platforms.
            
            </li>
            <li>
             
              
                You can quickly buy and transfer cryptocurrencies with your
                credit card.
              
            </li>
            <li>
            
              
                You can exchange and send tokens in complete safety.
             
            </li>
          </div>
        </div>

    
        <div className="w-1/2 pl-2  flex justify-center items-center">
          <img src="./images/aboutusImage.png" className="w-4/5 " />
        </div>
      </div> */}

      {/* <div className="flex justify-center px-16  min-h-[90vh] flex-col items-center w-full">
        
          <div className="w-full max-w-7xl relative  object-cover">
            <h1 className=" text-4xl absolute top-10 left-1/2  -translate-x-1/2 my-12 font-poppins'">
              WHO WE ARE
            </h1>

            <img src="./images/about.jpg" className="-z-10  " />
            <div className="font-poppins max-w-5xl w-full absolute top-1/2 left-1/2  bg-black/10  backdrop-blur-md p-16 rounded-xl -translate-x-1/2 -translate-y-1/2 ">
              <p className=" text-xl text-white ">
                {" "}
                A complete platform offering opportunities for financial success
                on a global scale. Our primary business is trading in
                cryptocurrencies and foreign exchange, with potential expansion
                across a variety of industries.The revolutionary trading
                approach is based on constant personal development. This system
                will be excellent for people looking for a straightforward but
                reliable way to invest in forex and cryptocurrencies. Each user
                who signs up with TecmacTrade receives two personalised referral
                links that give them access to the dashboard. Copy the link to
                your referral give your network access to your individual
                referral connections. Watch out for your recommendations keep
                track of your referral system to manage them effectively.
                Receive benefits and rewards if your referrals bring business to
                Tecmactrade, you'll get upto 15% of their deposits. Meet the
                requirements, establish new relationships.
              </p>
            </div>
          
        </div>
      </div> */}

      {/* <div className="w-full min-h-[100vh] font-poppins  relative  ">
        <img
          src="./images/holobg.jpg"
          className="z-0  object-cover opacity-90 "
        />
        <div className="absolute  flex justify-around items-center top-32 min-h-[80vh] w-full">
          <div className="w-1/2 flex justify-center items-center  py-12 px-10 ">
            <img
              src="./images/hologrambg.png"
              className="w-4/5 relative opacity-90 animate-pulse "
            />
            <img src="./images/navlogo.png" className="absolute w-96 mt-8" />
          </div>
          <div className=" w-1/2 min-h-[80vh] py-16 px-16  flex flex-col justify-center ">
            <m.h1  initial={{ opacity: 0,y:50 }}
              whileInView={{
                y:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.25,
                  ease: "anticipate",
                },
              }}  className="text-3xl mb-3  ">PERKS OF CONNECTING</m.h1>
            <m.p initial={{ opacity: 0,y:50 }}
              whileInView={{
                y:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.31,
                  ease: "anticipate",
                },
              }}  className="text-6xl mb-8">with Ozo One</m.p>
            <div className="text-lg space-y-3">
              {" "}
              <m.li initial={{ opacity: 0,x:50 }}
              whileInView={{
                x:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.37,
                  ease: "anticipate",
                },
              }} >Minimum investment starting from $100 for accessible entry.
              </m.li>
              <m.li initial={{ opacity: 0,x:50 }}
              whileInView={{
                x:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.41,
                  ease: "anticipate",
                },
              }} >Earn up to 1.8% daily ROI, maximizing investment growth.</m.li>
              <m.li initial={{ opacity: 0,x:50 }}
              whileInView={{
                x:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.47,
                  ease: "anticipate",
                },
              }}>
                Enjoy 100% principle returns on all investment packages.
              </m.li>
              <m.li initial={{ opacity: 0,x:50 }}
              whileInView={{
                x:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.52,
                  ease: "anticipate",
                },
              }}>Benefit from high capping limits for ample earning opportunities.
              </m.li>
              <m.li initial={{ opacity: 0,x:50 }}
              whileInView={{
                x:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.57,
                  ease: "anticipate",
                },
              }}>Lucrative referral program, earning bonuses on multiple levels.</m.li>
              <m.li initial={{ opacity: 0,x:50 }}
              whileInView={{
                x:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.61,
                  ease: "anticipate",
                },
              }}>Transparent and well-defined investment structure for clarity and confidence.</m.li>
              <m.li initial={{ opacity: 0,x:50 }}
              whileInView={{
                x:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.67,
                  ease: "anticipate",
                },
              }}>Flexible package durations from 140 to 200 days for convenience.</m.li>
              <m.li initial={{ opacity: 0,x:50 }}
              whileInView={{
                x:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.71,
                  ease: "anticipate",
                },
              }}>Additional benefits with transferable Ozo Tokens to Ozo Token Wallet.
              </m.li>
              <m.li initial={{ opacity: 0,x:50 }}
              whileInView={{
                x:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.77,
                  ease: "anticipate",
                },
              }}>24/7 professional and responsive customer support for assistance.
              </m.li>
              <m.li initial={{ opacity: 0,x:50 }}
              whileInView={{
                x:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.81,
                  ease: "anticipate",
                },
              }}>Registered business in multiple countries, establishing credibility and trust
              </m.li>
            </div>
          </div>
        </div>
      </div> */}

      <div className="w-full min-h-[110vh] relative  flex justify-center items-center flex-col ">
        <div className="mx-auto max-w-6xl  w-full flex justify-center items-center flex-col absolute">
          <m.p initial={{ opacity: 0,y:-50 }}
              whileInView={{
                y:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.21,
                  ease: "anticipate",
                },
              }} className="text-xl mt-16 text-fuchsia-800 text-center mb-6 font-semibold uppercase font-poppins">
            Our Team
          </m.p>
          <m.h1 initial={{ opacity: 0,y:50 }}
              whileInView={{
                y:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.27,
                  ease: "anticipate",
                },
              }} className="text-5xl text-center mb-6 font-semibold uppercase font-poppins">
            One vision.
            <br />
          </m.h1>
          <m.span initial={{ opacity: 0,y:50 }}
              whileInView={{
                y:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.32,
                  ease: "anticipate",
                },
              }} className=" text-5xl text-center  mb-12 font-semibold uppercase font-poppins">
            One global team.
          </m.span>
          <m.h1 initial={{ opacity: 0,y:50 }}
              whileInView={{
                y:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.37,
                  ease: "anticipate",
                },
              }} className="text-xl text-center mb-6 font-semibold  font-poppins">
         Driven team of experts behind One Ozo's <br/>revolutionary investment platform
          </m.h1>

          <div
            className=" my-16
          flex space-x-24 text-light-blue-700"
          >
            <div className="text-center">
              <m.h1 initial={{ opacity: 0,y:50 }}
              whileInView={{
                y:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.42,
                  ease: "anticipate",
                },
              }} className="text-8xl text-center font-semibold uppercase font-poppins">
               50,000
              </m.h1>
              <m.span initial={{ opacity: 0,x:-50 }}
              whileInView={{
                x:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.47,
                  ease: "anticipate",
                },
              }} className="text-lg text-white text-center   font-poppins">
                Active Investors
              </m.span>
            </div>
            <div className="text-center">
              <m.h1 initial={{ opacity: 0,y:50 }}
              whileInView={{
                y:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.46,
                  ease: "anticipate",
                },
              }} className="text-8xl text-center font-semibold uppercase font-poppins">
                120
              </m.h1>
              <m.span initial={{ opacity: 0,x:50 }}
              whileInView={{
                x:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.52,
                  ease: "anticipate",
                },
              }} className="text-lg text-white text-center   font-poppins">
                Countries
              </m.span>
            </div>
          </div>

          <m.button initial={{ opacity: 0,y:50 }}
              whileInView={{
                x:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.52,
                  ease: "anticipate",
                },
              }} className="text-white w-56 border-2 font-poppins hover:bg-black hover:opacity-80 hover:border-2 py-4 shadow-grey-700 shadow-2xl  transition ease-in-out delay-150 hover:scale-95  hover:translate-y-1 rounded-full  font-semibold text-lg tracking-wide">
            Start the Journey
          </m.button>
        </div>
      </div>
      {/* Leadership  */}
      <div className=" py-20">
        <div className="xl:container mx-auto px-6 md:px-12">
          <div className="mb-28">
            <m.h2 initial={{ opacity: 0,y:-50 }}
              whileInView={{
                y:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.21,
                  ease: "anticipate",
                },
              }} className="mb-4 text-center text-2xl  font-poppins font-bold text-white md:text-5xl">
              Meet Our Executive Team
            </m.h2>
          </div>
          <div className="grid gap-24 md:grid-cols-5 md:gap-12 font-poppins">
            <m.div initial={{ opacity: 0,x:50 }}
              whileInView={{
                x:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.25,
                  ease: "anticipate",
                },
              }} className="group space-y-4 text-center">
              <div className="mx-auto h-56 w-56  overflow-hidden rounded-2xl md:h-40 md:w-40 lg:h-56 lg:w-56">
                <img
                  className="mx-auto h-full w-full  scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
                  src="images/woman.jpg"
                  alt="woman"
                  loading="lazy"
                  width="640"
                  height="805"
                />
              </div>
              <div className="pt-4">
                <h4 className="text-2xl text-gray-400 font-semibold dark:text-white">
                  Hentoni Doe
                </h4>
                <span className="block text-sm text-gray-500 font-semibold ">
                  CEO-Founder
                </span>
              </div>
              <div className="flex justify-center space-x-4 text-gray-500">
                <a href="#" target="_blank" aria-label="facebook">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 hover:text-primary"
                    fill="currentColor"
                    class="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
                <a href="#" target="_blank" aria-label="instagram">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 hover:text-primary"
                    fill="currentColor"
                    class="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </a>
                <a href="#" target="_blank" aria-label="instagram">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 hover:text-primary"
                    fill="currentColor"
                    class="bi bi-twitter"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </a>
                <a href="#" target="_blank" aria-label="instagram">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 hover:text-primary"
                    fill="currentColor"
                    class="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
              </div>
            </m.div>
            <m.div initial={{ opacity: 0,x:50 }}
              whileInView={{
                x:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.30,
                  ease: "anticipate",
                },
              }} className="group space-y-4 text-center">
              <div className="mx-auto h-56 w-56  overflow-hidden rounded-2xl md:h-40 md:w-40 lg:h-56 lg:w-56">
                <img
                  className="mx-auto h-full w-full - scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
                  src="images/man.jpg"
                  alt="man"
                  loading="lazy"
                  width="1000"
                  height="667"
                />
              </div>
              <div className="pt-4">
                <h4 className="text-2xl text-gray-400 font-semibold dark:text-white">
                  Dan Orton
                </h4>
                <span className="block text-sm text-gray-500 font-semibold">
                  Designer
                </span>
              </div>
              <div className="flex justify-center space-x-4 text-gray-500">
                <a href="#" target="_blank" aria-label="facebook">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 hover:text-primary"
                    fill="currentColor"
                    class="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
                <a href="#" target="_blank" aria-label="instagram">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 hover:text-primary"
                    fill="currentColor"
                    class="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </a>
                <a href="#" target="_blank" aria-label="instagram">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 hover:text-primary"
                    fill="currentColor"
                    class="bi bi-twitter"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </a>
                <a href="#" target="_blank" aria-label="instagram">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 hover:text-primary"
                    fill="currentColor"
                    class="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
              </div>
            </m.div>
            <m.div initial={{ opacity: 0,x:50 }}
              whileInView={{
                x:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.35,
                  ease: "anticipate",
                },
              }} className="group space-y-4 text-center">
              <div className="mx-auto h-56 w-56  overflow-hidden rounded-2xl md:h-40 md:w-40 lg:h-56 lg:w-56">
                <img
                  className="mx-auto h-full w-full - scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
                  src="images/woman1.jpg"
                  alt="woman"
                  loading="lazy"
                  width="640"
                  height="805"
                />
              </div>
              <div className="pt-4">
                <h4 className="text-2xl  text-gray-400 font-semibold dark:text-white">
                  Ortance Doe
                </h4>
                <span className="block text-sm text-gray-500 font-semibold">
                  Marketing
                </span>
              </div>
              <div className="flex justify-center space-x-4 text-gray-500">
                <a href="#" target="_blank" aria-label="facebook">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 hover:text-primary"
                    fill="currentColor"
                    class="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
                <a href="#" target="_blank" aria-label="instagram">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 hover:text-primary"
                    fill="currentColor"
                    class="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </a>
                <a href="#" target="_blank" aria-label="instagram">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 hover:text-primary"
                    fill="currentColor"
                    class="bi bi-twitter"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </a>
                <a href="#" target="_blank" aria-label="instagram">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 hover:text-primary"
                    fill="currentColor"
                    class="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
              </div>
            </m.div>
            <m.div initial={{ opacity: 0,x:50 }}
              whileInView={{
                x:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.40,
                  ease: "anticipate",
                },
              }} className="group space-y-4 text-center">
              <div className="mx-auto h-56 w-56  overflow-hidden rounded-2xl md:h-40 md:w-40 lg:h-56 lg:w-56">
                <img
                  className="mx-auto h-full w-full - scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
                  src="images/woman1.jpg"
                  alt="woman"
                  loading="lazy"
                  width="640"
                  height="805"
                />
              </div>
              <div className="pt-4">
                <h4 className="text-2xl  text-gray-400 font-semibold dark:text-white">
                  Mariana
                </h4>
                <span className="block text-sm text-gray-500 font-semibold">
                  Marketing
                </span>
              </div>
              <div className="flex justify-center space-x-4 text-gray-500">
                <a href="#" target="_blank" aria-label="facebook">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 hover:text-primary"
                    fill="currentColor"
                    class="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
                <a href="#" target="_blank" aria-label="instagram">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 hover:text-primary"
                    fill="currentColor"
                    class="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </a>
                <a href="#" target="_blank" aria-label="instagram">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 hover:text-primary"
                    fill="currentColor"
                    class="bi bi-twitter"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </a>
                <a href="#" target="_blank" aria-label="instagram">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 hover:text-primary"
                    fill="currentColor"
                    class="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
              </div>
            </m.div>

            <m.div initial={{ opacity: 0,x:50 }}
              whileInView={{
                x:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.45,
                  ease: "anticipate",
                },
              }} className="group space-y-4 text-center">
              <div className="mx-auto h-56 w-56  overflow-hidden rounded-2xl md:h-40 md:w-40 lg:h-56 lg:w-56">
                <img
                  className="mx-auto h-full w-full - scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
                  src="images/woman1.jpg"
                  alt="woman"
                  loading="lazy"
                  width="640"
                  height="805"
                />
              </div>
              <div className="pt-4">
                <h4 className="text-2xl  text-gray-400 font-semibold dark:text-white">
                  Chloe Yung
                </h4>
                <span className="block text-sm text-gray-500 font-semibold">
                  Marketing
                </span>
              </div>
              <div className="flex justify-center space-x-4 text-gray-500">
                <a href="#" target="_blank" aria-label="facebook">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 hover:text-primary"
                    fill="currentColor"
                    class="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
                <a href="#" target="_blank" aria-label="instagram">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 hover:text-primary"
                    fill="currentColor"
                    class="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </a>
                <a href="#" target="_blank" aria-label="instagram">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 hover:text-primary"
                    fill="currentColor"
                    class="bi bi-twitter"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </a>
                <a href="#" target="_blank" aria-label="instagram">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 hover:text-primary"
                    fill="currentColor"
                    class="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
              </div>
            </m.div>
          </div>
        </div>
      </div>

      <div className="w-full min-h-[120vh] mb-24 font-poppins">
        <div className="w-full max-w-5xl mx-auto flex justify-center items-center flex-col">
          <h1 className="text-5xl font-semibold mb-20">Our Values</h1>
          <div className="w-full flex space-x-10">
            <div className="max-w-[380px] border-l-2 text-[28px] font-semibold">
              <ul className="space-y-6 px-8 text-gray-600 ">
                <button
                  className="text-left hover:text-white focus:text-white "
                  onClick={() => setValues("think")}
                >
                  Efficient Communication
                </button>
                <button
                  className="text-left hover:text-white  focus:text-white"
                  onClick={() => setValues("resource")}
                >
                   Innovative Problem Solving
                </button>
                <button
                  className="text-left hover:text-white  focus:text-white"
                  onClick={() => setValues("stay")}
                >
                  Unwavering Resolve
                </button>
                <button
                  className="text-left hover:text-white focus:text-white "
                  onClick={() => setValues("big")}
                >
                  Bold Innovation
                </button>
                <button
                  className="text-left hover:text-white focus:text-white "
                  onClick={() => setValues("take")}
                >
                  Empowered Ownership
                </button>{" "}
                <button
                  className="text-left hover:text-white focus:text-white "
                  onClick={() => setValues("remain")}
                >
                 Humility First
                </button>
              </ul>
            </div>

            <div className="text-3xl flex justify-center items-center font-semibold min-h-[380px]">
              {values == "think" && (
                <m.p initial={{ opacity: 0,x:50 }}
                whileInView={{
                  x:0,
                  opacity: 1,
                  transition: {
                    duration: 0.7,
                  
                    ease: "anticipate",
                  },
                }}>
            Clear, concise, and articulate communication drives our collaborative 
environment. <br/><br/>We prioritize delivering messages with clarity, simplicity, and effectiveness,   <br/><br/>
fostering understanding and driving impactful outcomes.
                </m.p>
              )}
              {values == "resource" && (
                <m.p  initial={{ opacity: 0,x:50 }}
                whileInView={{
                  x:0,
                  opacity: 1,
                  transition: {
                    duration: 0.7,
                  
                    ease: "anticipate",
                  },
                }}  >
                  Resourcefulness is our superpower. <br/><br/>We dive deep, seeking a 
comprehensive understanding of challenges. With creativity and determination, we leverage available 
resources and collaborate,<br/><br/> recognizing that valuable ideas can originate from anyone, regardless of rank 
or experience.
               </m.p>
              )}

              {values == "stay" && (
                <m.p  initial={{ opacity: 0,x:50 }}
                whileInView={{
                  x:0,
                  opacity: 1,
                  transition: {
                    duration: 0.7,
                  
                    ease: "anticipate",
                  },
                }}>
                  {" "}
                   We persevere, supporting one another through challenges, acknowledging 
resilience in our team. 
                  <br />
                  <br />
                  We embrace the enormity of building an impactful company, finding joy 
in the journey.
                  <br />
                  <br />
                  Together, we commemorate milestones, recharge, and recommit to our shared 
purpose
               </m.p>
              )}
              {values == "big" && (
                <m.p  initial={{ opacity: 0,x:50 }}
                whileInView={{
                  x:0,
                  opacity: 1,
                  transition: {
                    duration: 0.7,
                  
                    ease: "anticipate",
                  },
                }}>
                  {" "}
                  We dream big, daring to envision the extraordinary.
                  <br />
                  <br />
                  With calculated risks, we 
pioneer uncharted territories, fearlessly making tough decisions aligned with our long-term 
goals.
                  <br />
                  <br />
                  We understand that what appears impossible at first becomes a reality through 
unwavering determination
               </m.p>
              )}
              {values == "take" && (
                <m.p  initial={{ opacity: 0,x:50 }}
                whileInView={{
                  x:0,
                  opacity: 1,
                  transition: {
                    duration: 0.7,
                  
                    ease: "anticipate",
                  },
                }}>
                  {" "}
                  We embrace initiative, acting decisively and taking ownership of our 
actions.
                  <br />
                  <br />
                  Safeguarding our vibrant culture, we attract exceptional talent, uniting the best minds.
                  <br />
                  <br />
                  We strive to astonish and ignite, delivering swift, high-quality decision-making that exceeds 
expectations.

               </m.p>
              )}
              {values == "remain" && (
                <m.p  initial={{ opacity: 0,x:50 }}
                whileInView={{
                  x:0,
                  opacity: 1,
                  transition: {
                    duration: 0.7,
                  
                    ease: "anticipate",
                  },
                }}>
                  {" "}
                 We prioritize the company and users, shunning the spotlight.
                  <br />
                  <br />
                  Egos stay outside as 
we embrace lessons from missteps, recognizing our collective strength.

                  <br />
                  <br />
                  We exercise prudence in 
expenditures, yet boldly invest in what holds significance, fostering growth and prosperity.


               </m.p>
              )}
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
