import React from "react";
import { motion as m } from "framer-motion";

const ExrtaBonus = () => {
  return (
    <div className="overflow-x-hidden w-full font-poppins">
      {/* section 1 */}
      <div className="flex mx-auto min-h-screen font-poppins relative w-full justify-end md:justify-center items-center my-44 md:my-0">
        <img
          src="./images/extrabonus.jpg"
          className="z-0 object-cover w-full h-full md:max-w-full md:h-auto "
        />
        <div className="absolute px-8 md:px-52 w-full bg-opacity-40 py-8 md:py-[202px]">
          <h1 className="text-4xl md:text-5xl mb-4 font-bold ">
            Accelerate
            <br /> Your Earnings:
            <br /> Unlock Ozo's
            <br /> Investment Advantage!
          </h1>
          <p className="max-w-[520px] font-semibold">
            Maximize Your Investments with One Ozo's Rewarding Investment
            Levels. Earn Ozo Tokens based on your investment amount, enjoy
            weekly withdrawals, and unlock bonus rewards for not withdrawing.
            Start earning today!
          </p>
          <div className="my-6 flex flex-col md:flex-row gap-8">
            <button className="px-8 py-3 bg-purple-900 rounded-md">
              Apply now
            </button>
            <button className="px-8 py-3 bg-black bg-opacity-30 rounded-md">
              Get in touch
            </button>
          </div>
        </div>
      </div>

      {/* section 2 */}

      <div className="my-12 pt-8 text-center w-full px-6">
        <h1 className="text-4xl mb-4 font-bold">
          {" "}
          Investment Advantages at One Ozo
        </h1>
        <p className="max-w-4xl mx-auto w-full">
          Discover the benefits of investing with One Ozo. Earn Ozo Tokens based
          on your investment level, enjoy weekly withdrawals, and unlock bonus
          rewards for not withdrawing. Maximize your earnings today!
        </p>

        <div className="max-w-6xl text-white grid my-10 mx-auto lg:grid-cols-3 gap-6 sm:grid-cols-2 gap-3">
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 1.0,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              },
            }}
            className="max-w-[350px] border  min-h-[350px] py-6 rounded-xl   px-6"
          >
            <div className="max-w-[110px] mb-5 h-[110px] rounded-full  bg-white w-full flex justify-center items-center">
              {" "}
              <img src="./images/icons/download.svg" className="  w-16 " />
            </div>
            <h1 className="text-2xl mb-4 font-bold">Ozo Token Rewards</h1>
            <p className="text-gray-500 text-[16px]">
              Earn Ozo Tokens equivalent to a percentage of your investment,
              based on your investment level.
            </p>
          </m.div>
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 1.0,
                delay: 0.6,
                ease: [0, 0.71, 0.2, 1.01],
              },
            }}
            className="max-w-[350px] border  min-h-[350px] py-6 rounded-xl text-left  px-6"
          >
            <div className="max-w-[110px] mb-5 h-[110px] rounded-full  bg-white w-full flex justify-center items-center">
              {" "}
              <img src="./images/icons/join.svg" className="  w-16 " />
            </div>
            <h1 className="text-2xl mb-4 font-bold">Weekly Withdrawals</h1>
            <p className="text-gray-500 text-[16px]">
              Access and withdraw your earnings on a weekly basis, allowing you
              to manage and utilize your returns effectively.
            </p>
          </m.div>
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 1.0,
                delay: 0.7,
                ease: [0, 0.71, 0.2, 1.01],
              },
            }}
            className="max-w-[350px] border  min-h-[350px] py-6 rounded-xl text-left  px-6"
          >
            <div className="max-w-[110px] mb-5 h-[110px] rounded-full  bg-white w-full flex justify-center items-center">
              {" "}
              <img src="./images/icons/api.svg" className="  w-16 " />
            </div>
            <h1 className="text-2xl mb-4  font-bold">Bonus for Holding</h1>
            <p className="text-gray-500 text-[16px]">
              Opt to keep your ROI amount in the ROI wallet without making
              withdrawals to receive bonus rewards, accumulating in your Extra
              Income wallet.
            </p>
          </m.div>
        </div>
      </div>

      {/* section 3 */}

      <div className="mt-44 px-6">
        <h1 className="text-5xl text-center font-medium">
          Unlocking Exclusive Programme Benefits & Perks
        </h1>
        <div className="max-w-6xl text-white grid my-10 mx-auto lg:grid-cols-3 gap-6 sm:grid-cols-2 gap-3">
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 1.0,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              },
            }}
            className="max-w-[350px]   min-h-[350px] py-6 rounded-xl   px-6"
          >
            <div className="max-w-[80px] mb-5 h-[110px] rounded-full   w-full flex justify-center items-center">
              {" "}
              <img src="./images/icons/available.svg" className="  w-16 " />
            </div>
            <h1 className="text-sm mb-4 font-medium  uppercase">
              Token Bonuses <span className="text-red-800">*</span>
            </h1>
            <p className="text-gray-500 font-semibold text-[16px]">
              Earn additional Ozo Tokens through exclusive bonus offers,
              maximizing your overall investment returns.
            </p>
          </m.div>
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 1.0,
                delay: 0.6,
                ease: [0, 0.71, 0.2, 1.01],
              },
            }}
            className="max-w-[350px]   min-h-[350px] py-6 rounded-xl text-left  px-6"
          >
            <div className="max-w-[80px] mb-5 h-[110px] rounded-full   w-full flex justify-center items-center">
              {" "}
              <img src="./images/icons/limit.svg" className="  w-16 " />
            </div>
            <h1 className="text-sm mb-4 font-medium uppercase">
              Priority Access
            </h1>
            <p className="text-gray-500 font-semibold text-[16px]">
              Gain early access to new investment opportunities, ensuring you
              stay ahead in the market.
            </p>
          </m.div>
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 1.0,
                delay: 0.7,
                ease: [0, 0.71, 0.2, 1.01],
              },
            }}
            className="max-w-[350px]   min-h-[350px] py-6 rounded-xl text-left  px-6"
          >
            <div className="max-w-[80px] mb-5 h-[110px] rounded-full   w-full flex justify-center items-center">
              {" "}
              <img src="./images/icons/cloud.svg" className="  w-16 " />
            </div>
            <h1 className="text-sm mb-4 uppercase font-medium">
              Personalized Support
            </h1>
            <p className="text-gray-500 font-semibold text-[16px]">
              Receive dedicated assistance from our team of experts, guiding you
              throughout your investment journey.
            </p>
          </m.div>

          <m.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 1.0,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              },
            }}
            className="max-w-[350px]   min-h-[350px] py-6 rounded-xl   px-6"
          >
            <div className="max-w-[80px] mb-5 h-[110px] rounded-full   w-full flex justify-center items-center">
              {" "}
              <img src="./images/icons/round.svg" className="  w-16 " />
            </div>
            <h1 className="text-sm mb-4  uppercase font-medium">
              Exclusive Events
            </h1>
            <p className="text-gray-500 font-semibold text-[16px]">
              Enjoy invitations to exclusive events, networking opportunities,
              and industry insights.
            </p>
          </m.div>

          <m.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 1.0,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              },
            }}
            className="max-w-[350px]   min-h-[350px] py-6 rounded-xl   px-6"
          >
            <div className="max-w-[80px] mb-5 h-[110px] rounded-full   w-full flex justify-center items-center">
              {" "}
              <img src="./images/icons/report.svg" className="  w-16 " />
            </div>
            <h1 className="text-sm mb-4 uppercase font-medium">
              Flexible Withdrawals
            </h1>
            <p className="text-gray-500 font-semibold text-[16px]">
              Benefit from flexible withdrawal options, allowing you to access
              your earnings when needed.
            </p>
          </m.div>

          <m.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 1.0,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              },
            }}
            className="max-w-[350px]   min-h-[350px] py-6 rounded-xl   px-6"
          >
            <div className="max-w-[80px] mb-5 h-[110px] rounded-full   w-full flex justify-center items-center">
              {" "}
              <img src="./images/icons/edge.svg" className="  w-16 " />
            </div>
            <h1 className="text-sm mb-4 uppercase font-medium">
              Referral Rewards
            </h1>
            <p className="text-gray-500 font-semibold text-[16px]">
              Earn rewards by referring others to join the programme, expanding
              your earning potential.
            </p>
          </m.div>
        </div>
        <h2 className="text-sm text-center">
          <span className="text-red-800">*</span> Subject to jurisdictional
          limitations
        </h2>
      </div>

      {/* section 4 */}

      <div className="my-20 flex flex-col justify-center items-center px-6">
        <h2 className="text-center font-medium text-3xl">
          Take the Leap to Become a Top Investor{" "}
        </h2>
        <p className="text-xl font-medium text-center mb-16">
          Join Us Today and Sign Up Now!
        </p>
        <button className="bg-purple-800 px-8 py-3 rounded">
          Register now
        </button>
      </div>
    </div>
  );
};

export default ExrtaBonus;
