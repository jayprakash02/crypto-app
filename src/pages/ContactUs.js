import React from "react";
import { motion as m } from "framer-motion";
import "./contact.css";

const ContactUs = () => {
  return (
    <div className="overflow-x-hidden font-poppins w-full">
      {/* <div className="w-full flex flex-wrap items-center justify-center min-h-[450px] mx-0 px-30 space-x-10  bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-fuchsia-500"> */}
      <div className="text-center w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-fuchsia-500 section_top mt-32">
        <div>
          <m.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                delay: 0,
                ease: "anticipate",
              },
            }}
            className="text-6xl mb-6 font-semibold pl-3 pr-3 mx-2"
          >
            Contact Us
          </m.h1>
          <m.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                delay: 0.2,
                ease: "anticipate",
              },
            }}
            className="font-semibold mx-2 pl-2 pr-2"
          >
            Questions? Comments? Want to schedule <br />a demo? We'd love to
            chat!
          </m.p>
        </div>

        <div className="contact_card">
          <m.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                delay: 0.33,
                ease: "anticipate",
              },
            }}
            className="max-w-[380px] bg-black rounded-2xl flex justify-center items-center px-10 py-8"
          >
            <div className="w-14 bg-white p-2 rounded-full">
              <img src="./images/icons/gmail.png" className="w-16" />
            </div>
            <div className="pl-2">
              <h1 className="text-2xl">Email us</h1>
              <span className="text-lg">Support@Ozo.com</span>
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                delay: 0.39,
                ease: "anticipate",
              },
            }}
            className="max-w-[380px] bg-black  rounded-2xl flex justify-center items-center px-10 py-8"
          >
            <div className="w-14 bg-white p-2 rounded-full">
              <img src="./images/icons/call.png" className="w-16" />
            </div>
            <div className="pl-2">
              <h1 className="text-2xl">Phone number</h1>
              <span className="text-lg">(123) 456 789</span>
            </div>
          </m.div>
        </div>
      </div>
      {/* w-full max-w-7xl mt-24 mb-44 mx-auto flex space-x-10 */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row px-10 mt-24 py-5 ">
        <div className="text-left ">
          <m.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                delay: 0.33,
                ease: "anticipate",
              },
            }}
            className="text-5xl md:text-6xl font-semibold mb-6"
          >
            Send Us A <br /> Message
          </m.h1>
          <m.span
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                delay: 0.39,
                ease: "anticipate",
              },
            }}
            viewport={{ once: true }}
            className="text-xl text-gray-500"
          >
            Fill out the form and our team will get back to you as quickly as we
            can.
          </m.span>

          <div className=" w-full my-10 space-y-6">
            <m.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.46,
                  ease: "anticipate",
                },
              }}
              viewport={{ once: true }}
              className="flex justify-start items-center space-x-6 "
            >
              <img src="./images/icons/facebook.png" className="w-10 h-10" />
              <p className="text-xl">
                Facebook <br />
                <span className="text-base text-gray-500">One ozo</span>
              </p>
            </m.div>

            <m.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.49,
                  ease: "anticipate",
                },
              }}
              viewport={{ once: true }}
              className="flex justify-start items-center space-x-6 "
            >
              <img src="./images/icons/instagram.png" className="w-10 h-10" />
              <p className="text-xl text-gray-500 ">
                Instagram
                <br />
                <span className="text-base">One ozo</span>
              </p>
            </m.div>

            <m.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.53,
                  ease: "anticipate",
                },
              }}
              viewport={{ once: true }}
              className="flex justify-start items-center space-x-6 "
            >
              <img src="./images/icons/youtube.png" className="w-10 h-10" />
              <p className="text-xl">
                Youtube
                <br />
                <span className="text-base text-gray-500     ">One ozo</span>
              </p>
            </m.div>
          </div>
        </div>
        <div className="max-w-3xl w-full md:px-10">
          <div className=" grid grid-cols-2 gap-8">
            <m.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.49,
                  ease: "anticipate",
                },
              }}
              className="flex flex-col "
            >
              <label className="mb-4 text-xl pl-4">Full name</label>
              <input
                className="border-2 border-gray-200 py-4 w-full bg-gray-700 rounded-full px-6"
                placeholder="Your full name"
              />
            </m.div>
            <m.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.56,
                  ease: "anticipate",
                },
              }}
              className="flex flex-col "
            >
              <label className="mb-4 text-xl pl-4">Email address</label>
              <input
                className="border-2 border-gray-200 py-4 w-full bg-gray-700 rounded-full px-6"
                placeholder="Your email address"
              />
            </m.div>
            <m.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.62,
                  ease: "anticipate",
                },
              }}
              className="flex flex-col "
            >
              <label className="mb-4 text-xl pl-4">Phone number</label>
              <input
                className="border-2 border-gray-200 py-4 w-full bg-gray-700 rounded-full px-6"
                placeholder="12 3456 4789"
              />
            </m.div>
            <m.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.68,
                  ease: "anticipate",
                },
              }}
              className="flex flex-col "
            >
              <label className="mb-4 text-xl pl-4">Company name</label>
              <input
                className="border-2 border-gray-200 py-4 w-full bg-gray-700 rounded-full px-6"
                placeholder="Company Co"
              />
            </m.div>
          </div>
          <m.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                delay: 0.723,
                ease: "anticipate",
              },
            }}
            className="flex flex-col"
          >
            <label className="mt-10 mb-6 text-xl pl-4 ">Messages</label>
            <textarea
              className="border-2 border-gray-200 min-h-[20vh] py-4 w-full bg-gray-700 rounded-2xl px-6"
              placeholder=" Type you message here"
            ></textarea>

            <button className="px-4 py-4 text-xl hover:bg-purple-900 rounded-full bg-purple-800 mt-6 max-w-[300px] w-full">
              Send Message
            </button>
          </m.div>
        </div>
        </div>
        <div className="mx-10 my-28 px-3">
        <m.div  initial={{ opacity: 0,y:50,scale:0.5 }}
              whileInView={{
                scale:1,
                y:0,
                opacity: 1,
                transition: {
                  duration: 0.89,
                  delay: 0.23,
                  ease: "anticipate",
                },
              }}  className="w-full max-w-6xl mb-44 min-h-[450px] mx-auto border-4 shadow-2xl shadow-fuchsia-800 rounded-2xl bg-neutral-900 flex justify-center items-center flex-col text-center">
        <p className="text-xl px-3 py-2 my-6 bg-gray-300 text-black font-semibold rounded-full">
          Join us now
        </p>
        <h1 className="text-4xl font-semibold">
        Invest in the Digital <br/>Connected Era for Promising Returns 
        </h1>
        <p className="text-gray-400 font-medium max-w-[600px] mt-6"> 
        Unlock the potential of the digital connected era with a new investment opportunity. Explore growth 
prospects and maximize returns in this interconnected digital landscape.
        </p>

        <div className="flex flex-col md:flex-row w-full max-w-[450px] space-x-0 md:space-x-6 mb-20">
          <button className="px-4 py-4 text-xl hover:bg-purple-900 rounded-full bg-purple-800 mt-6  w-full">
            Start free
          </button>
          <button className="px-4 py-4 text-xl hover:bg-purple-900 rounded-full  border-2 mt-6  w-full">
            Learn more
          </button>
        </div>
      </m.div>
      </div>
    </div>
  );
};

export default ContactUs;
