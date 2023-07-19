import React from "react";
import { motion as m } from "framer-motion";
import "./Resources.css";

const Resources = () => {
  return (
    <div className="overflow-x-hidden w-full font-poppins pb-24 mx-auto   ">
      <div className="mt-28 explore">
        <div>
          <m.h1
            initial={{ opacity: 0, y: -50 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                delay: 0.4,
                ease: [0, 0.71, 0.2, 1.01],
              },
            }}
            className="max-w-lg w-full mb-12 text-5xl font-extrabold explore_heading lg:px-5 sm:px-3"
          >
            Visual Assets
            <br /> for Trust: One <br/>Ozo's Compelling Multimedia <br/>Support
          </m.h1>

          <m.button
            initial={{ opacity: 0, y: -50 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                delay: 0.599,
                ease: [0, 0.71, 0.2, 1.01],
              },
            }}
            className="px-12 py-3 border-4 bg-gradient-to-r from-purple-700 to-rose-800 shadow-2xl shadow-rose-500 rounded-3xl text-xl mx-6"
          >
            Explore
          </m.button>
        </div>
        <div className="max-w-[600px] w-full pt-5 explore_content ">
          <div className="flex space-x-6">
            <m.p
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.63,
                  delay: 0.52,
                  ease: "anticipate",
                },
              }}
              className="border-b-2 max-w-[60px] 
                 max-h-[5vh] flex justify-center items-center w-full"
            >
              {" "}
            </m.p>
            <m.p
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.63,
                  ease: "anticipate",
                },
              }}
              className="max-w-[400px] text-xs"
            >
              Elevate trust and confidence with One Ozo's extensive collection
              of visual assets. Immerse yourself in captivating images,
              compelling videos, attention-grabbing banners, and insightful
              business plan PDFs, reinforcing trust through engaging and
              informative multimedia support.
            </m.p>
          </div>

          <div className="mt-20 space-y-6">
            <div className="flex space-x-8">
              <m.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.7,
                    delay: 0.69,
                    ease: "anticipate",
                  },
                }}
                className="max-w-[150px] w-full min-h-[150px] bg-white "
              >
                <p className="text-transparent">lsfvs</p>
              </m.div>
              <m.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.7,
                    delay: 0.79,
                    ease: "anticipate",
                  },
                }}
                className="max-w-[150] min-h-[150px]  flex justify-center text-transparent  items-center rounded-full text-purple-500 bg-purple-500 "
              >
                "fsvvsdkmvlsdm,wmw f,me ,m ea m, s"
              </m.div>
            </div>
            <div className="flex space-x-8">
              <m.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.7,
                    delay: 0.89,
                    ease: "anticipate",
                  },
                }}
                className="max-w-[150] min-h-[150px] text-transparent flex justify-center  items-center rounded-l-full text-gray-500 bg-gray-500 "
              >
                sdvhbsdvknakvlk aslv akvksvkkkjnvkjs,
              </m.div>
              <m.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.7,
                    delay: 1.0,
                    ease: "anticipate",
                  },
                }}
                className="max-w-[150] min-h-[150px]  text-transparent flex justify-center  items-center rounded-full text-red-500 bg-red-500"
              >
                lkmcealmk;adnksvs
              </m.div>
            </div>
          </div>
        </div>
      </div>
      <m.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.7,
            delay: 0.66,
            ease: "anticipate",
          },
        }}
        className="text-3xl font-semibold mb-8 text-center mt-44"
      >
        Browse by Category
      </m.h1>

      <div className="">
        <div className="category_div">
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                delay: 0.75,
                ease: "anticipate",
              },
            }}
            className="category_card "
          >
            Videos
          </m.div>
          <m.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                delay: 0.96,
                ease: "anticipate",
              },
            }}
            className="category_card"
          >
            Photo
          </m.div>
          <m.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                delay: 0.86,
                ease: "anticipate",
              },
            }}
            className="category_card"
          >
            Posters
          </m.div>
        </div>
      </div>
    
      <div className="w-full relative mt-28">
        <img src="./images/trade2.jpg" />
        <div className="language_plan">
          <div className="w-[350px] mx-auto">
            <m.h1
              initial={{ opacity: 0, y: -50 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.34,
                  ease: "anticipate",
                },
              }}
              className="text-4xl font-semibold text-center"
            >
              Different Language Business Plan
            </m.h1>
          </div>
          <div className="px-16 py-24 max-w-[550px] overflow-y-auto no-scrollbar max-h-[550px] space-y-8 lang_choice">
            <m.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.22,
                  ease: "anticipate",
                },
              }}
              className="w-full  bg-neutral-900 shadow-lg shadow-black flex text-xl items-center font-semibold rounded-xl border-2 border-purple-800 px-6 py-4 "
            >
              <img src="./images/countries/unitedstates.png" className="w-12" />
              <p className="pl-6 text-2xl">United States</p>
            </m.div>
            <m.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.27,
                  ease: "anticipate",
                },
              }}
              className="w-full  bg-neutral-900 shadow-lg shadow-black flex text-xl items-center font-semibold rounded-xl border-2 border-purple-800 px-6 py-4 "
            >
              <img
                src="./images/countries/unitedkingdom.png"
                className="w-12"
              />
              <p className="pl-6 text-2xl">United Kingdom</p>
            </m.div>{" "}
            <m.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.32,
                  ease: "anticipate",
                },
              }}
              className="w-full  bg-neutral-900 shadow-lg shadow-black flex text-xl items-center font-semibold rounded-xl border-2 border-purple-800 px-6 py-4 "
            >
              <img src="./images/countries/canada.png" className="w-12" />
              <p className="pl-6 text-2xl">Canada</p>
            </m.div>{" "}
            <m.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.37,
                  ease: "anticipate",
                },
              }}
              className="w-full  bg-neutral-900 shadow-lg shadow-black flex text-xl items-center font-semibold rounded-xl border-2 border-purple-800 px-6 py-4 "
            >
              <img src="./images/countries/germany.png" className="w-12" />
              <p className="pl-6 text-2xl">Germany</p>
            </m.div>{" "}
            <m.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.22,
                  ease: "anticipate",
                },
              }}
              className="w-full  bg-neutral-900 shadow-lg shadow-black flex text-xl items-center font-semibold rounded-xl border-2 border-purple-800 px-6 py-4 "
            >
              <img src="./images/countries/france.png" className="w-12" />
              <p className="pl-6 text-2xl">France</p>
            </m.div>{" "}
            <m.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.27,
                  ease: "anticipate",
                },
              }}
              className="w-full  bg-neutral-900 shadow-lg shadow-black flex text-xl items-center font-semibold rounded-xl border-2 border-purple-800 px-6 py-4 "
            >
              <img src="./images/countries/china.png" className="w-12" />
              <p className="pl-6 text-2xl">China</p>
            </m.div>{" "}
            <m.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.32,
                  ease: "anticipate",
                },
              }}
              className="w-full  bg-neutral-900 shadow-lg shadow-black flex text-xl items-center font-semibold rounded-xl border-2 border-purple-800 px-6 py-4 "
            >
              <img src="./images/countries/italy.png" className="w-12" />
              <p className="pl-6 text-2xl">Italy</p>
            </m.div>{" "}
            <m.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.37,
                  ease: "anticipate",
                },
              }}
              className="w-full  bg-neutral-900 shadow-lg shadow-black flex text-xl items-center font-semibold rounded-xl border-2 border-purple-800 px-6 py-4 "
            >
              <img src="./images/countries/japan.png" className="w-12" />
              <p className="pl-6 text-2xl">Japan</p>
            </m.div>{" "}
            <m.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.22,
                  ease: "anticipate",
                },
              }}
              className="w-full  bg-neutral-900 shadow-lg shadow-black flex text-xl items-center font-semibold rounded-xl border-2 border-purple-800 px-6 py-4 "
            >
              <img src="./images/countries/norway.png" className="w-12" />
              <p className="pl-6 text-2xl">Norway</p>
            </m.div>{" "}
            <m.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.27,
                  ease: "anticipate",
                },
              }}
              className="w-full  bg-neutral-900 shadow-lg shadow-black flex text-xl items-center font-semibold rounded-xl border-2 border-purple-800 px-6 py-4 "
            >
              <img src="./images/countries/russia.png" className="w-12" />
              <p className="pl-6 text-2xl">Russia</p>
            </m.div>{" "}
            <m.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.32,
                  ease: "anticipate",
                },
              }}
              className="w-full  bg-neutral-900 shadow-lg shadow-black flex text-xl items-center font-semibold rounded-xl border-2 border-purple-800 px-6 py-4 "
            >
              <img src="./images/countries/southkorea.png" className="w-12" />
              <p className="pl-6 text-2xl">South Korea</p>
            </m.div>{" "}
            <m.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.37,
                  ease: "anticipate",
                },
              }}
              className="w-full  bg-neutral-900 shadow-lg shadow-black flex text-xl items-center font-semibold rounded-xl border-2 border-purple-800 px-6 py-4 "
            >
              <img src="./images/countries/singapore.png" className="w-12" />
              <p className="pl-6 text-2xl">Singapore</p>
            </m.div>{" "}
            <m.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.23,
                  ease: "anticipate",
                },
              }}
              className="w-full  bg-neutral-900 shadow-lg shadow-black flex text-xl items-center font-semibold rounded-xl border-2 border-purple-800 px-6 py-4 "
            >
              <img src="./images/countries/spain.png" className="w-12" />
              <p className="pl-6 text-2xl">Spain</p>
            </m.div>{" "}
            <m.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.27,
                  ease: "anticipate",
                },
              }}
              className="w-full  bg-neutral-900 shadow-lg shadow-black flex text-xl items-center font-semibold rounded-xl border-2 border-purple-800 px-6 py-4 "
            >
              <img src="./images/countries/sweden.png" className="w-12" />
              <p className="pl-6 text-2xl">Sweden</p>
            </m.div>{" "}
            <m.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.32,
                  ease: "anticipate",
                },
              }}
              className="w-full  bg-neutral-900 shadow-lg shadow-black flex text-xl items-center font-semibold rounded-xl border-2 border-purple-800 px-6 py-4 "
            >
              <img src="./images/countries/turkey.png" className="w-12" />
              <p className="pl-6 text-2xl">Turkey</p>
            </m.div>{" "}
            <m.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.37,
                  ease: "anticipate",
                },
              }}
              className="w-full  bg-neutral-900 shadow-lg shadow-black flex text-xl items-center font-semibold rounded-xl border-2 border-purple-800 px-6 py-4 "
            >
              <img src="./images/countries/ukraine.png" className="w-12" />
              <p className="pl-6 text-2xl">Ukraine</p>
            </m.div>{" "}
            <m.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.22,
                  ease: "anticipate",
                },
              }}
              className="w-full  bg-neutral-900 shadow-lg shadow-black flex text-xl items-center font-semibold rounded-xl border-2 border-purple-800 px-6 py-4 "
            >
              <img src="./images/countries/ireland.png" className="w-12" />
              <p className="pl-6 text-2xl">Ireland</p>
            </m.div>{" "}
            <m.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.27,
                  ease: "anticipate",
                },
              }}
              className="w-full  bg-neutral-900 shadow-lg shadow-black flex text-xl items-center font-semibold rounded-xl border-2 border-purple-800 px-6 py-4 "
            >
              <img src="./images/countries/finland.png" className="w-12" />
              <p className="pl-6 text-2xl">Finland</p>
            </m.div>{" "}
            <m.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.32,
                  ease: "anticipate",
                },
              }}
              className="w-full  bg-neutral-900 shadow-lg shadow-black flex text-xl items-center font-semibold rounded-xl border-2 border-purple-800 px-6 py-4 "
            >
              <img src="./images/countries/hong-kong.png" className="w-12" />
              <p className="pl-6 text-2xl">Hong Kong</p>
            </m.div>
          </div>
        </div>
      </div>
{/* 
      <m.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.7,
            delay: 0.66,
            ease: "anticipate",
          },
        }}
        className="text-3xl font-semibold mb-8 mt-24 text-center"
      >
        Tutorials
      </m.h1>
      <m.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.9,
            delay: 0.36,
            ease: "anticipate",
          },
        }}
        className="max-w-6xl my-44 rounded-3xl min-h-[70vh] text-3xl flex justify-center items-center bg-rose-700 mx-auto w-full "
      >
        Play
      </m.div> */}
    </div>
  );
};

export default Resources;
