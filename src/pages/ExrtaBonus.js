import React from "react";
import { motion as m } from "framer-motion";

const ExrtaBonus = () => {
  return (
    <div className="w-full font-poppins">
      <div className="w-full relative">
        <img src="./images/storybg.jpg" className="w-full max-h-[100vh] opacity-60" />
        <div className="max-w-5xl left-72 absolute top-28 mx-auto w-full">
          <h1 className="text-7xl mb-4 font-bold ">
            Market
            <br /> Maker
            <br /> Programme
          </h1>
          <p className="max-w-[520px] font-semibold">
            Rewarding institutional liquidity providers with bespoke services
            and privileges, including exclusive trading fee rebates, increased
            API rate limits, and much more.
          </p>
          <div className="my-6 space-x-2">
            <button className="px-8 py-3 bg-purple-900 rounded-md">
              Apply now
            </button>
            <button className="px-8 py-3 bg-black bg-opacity-30 rounded-md">
              Get in touch
            </button>
          </div>
        </div>
      </div>


      <div className="my-12 pt-8 text-center w-full">
        <h1 className="text-5xl mb-4 font-bold">Why trade with us?</h1>
        <p className="max-w-4xl mx-auto w-full">We understand a market maker's unique position. That's why we've designed the Crypto.com Exchange Market Maker Programme to be a tailor-made solution for liquidity providers of all sizes.</p>
      
        <div className="w-full max-w-6xl mx-auto text-left text-white flex justify-between space-x-10 items-center mt-24">
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
            <img
              src="./images/icons/download.svg"
              className="  w-16 "
            />
          </div>
          <h1 className="text-2xl mb-4 font-bold">Exclusive Trading Fee Incentives</h1>
          <p className="text-gray-500 text-[16px]">
          Let trading fees be your last worry, with maker fee rebates and taker fees as low as 0.02%
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
            <img
              src="./images/icons/join.svg"
              className="  w-16 "
            />
          </div>
          <h1 className="text-2xl mb-4 font-bold">Join the Programme With Ease</h1>
          <p className="text-gray-500 text-[16px]">
          Qualify for the Market Maker Programme with a trading volume as low as 0.1% of the Exchange's total volume
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
            <img
              src="./images/icons/api.svg"
              className="  w-16 "
            />
          </div>
          <h1 className="text-2xl mb-4  font-bold">Robust API <br/>Connectivity</h1>
          <p className="text-gray-500 text-[16px]">
          Enjoy a fast and stable connection at any hour with increased rate limits for FIX, REST, and WebSockets
          </p>
        </m.div>
      </div>

      </div>

      <div className="mt-44">
        <h1 className="text-5xl text-center font-medium">Programme Benefits & Perks</h1>
        <div className="w-full max-w-6xl mx-auto text-left text-white grid grid-cols-3  mt-24">
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
            <img
              src="./images/icons/available.svg"
              className="  w-16 "
            />
          </div>
          <h1 className="text-sm mb-4 font-medium ">AVAILABLE CAPITAL EFFICIENCY PROGRAMME <span className="text-red-800">*</span></h1>
          <p className="text-gray-500 font-semibold text-[16px]">
          Optimise your capital utilisation and achieve the best results with your funds allocation thanks to our capital efficiency programme
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
            <img
              src="./images/icons/limit.svg"
              className="  w-16 "
            />
          </div>
          <h1 className="text-sm mb-4 font-medium">INCREASED RATE LIMITS</h1>
          <p className="text-gray-500 font-semibold text-[16px]">
          Swiftly execute trades with precision, even in the most volatile market conditions


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
            <img
              src="./images/icons/cloud.svg"
              className="  w-16 "
            />
          </div>
          <h1 className="text-sm mb-4 font-medium">VIRTUAL PRIVATE LINK</h1>
          <p className="text-gray-500 font-semibold text-[16px]">
          Cloud based co-location for increased stability and reduced latency
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
            <img
              src="./images/icons/round.svg"
              className="  w-16 "
            />
          </div>
          <h1 className="text-sm mb-4 font-medium">ROUND-THE-CLOCK SUPPORT</h1>
          <p className="text-gray-500 font-semibold text-[16px]">
          Our dedicated global account management team is available 24/7
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
            <img
              src="./images/icons/report.svg"
              className="  w-16 "
            />
          </div>
          <h1 className="text-sm mb-4 font-medium">PERSONALISED REPORTS</h1>
          <p className="text-gray-500 font-semibold text-[16px]">
          With fully transparent records and KPIs, the path to your success is clearly laid out
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
            <img
              src="./images/icons/edge.svg"
              className="  w-16 "
            />
          </div>
          <h1 className="text-sm mb-4 font-medium">CUTTING-EDGE MARKET INSIGHTS</h1>
          <p className="text-gray-500 font-semibold text-[16px]">
          Receive crucial updates from the Crypto.com Research & Insights Team


          </p>
        </m.div>
      </div>
      <h2 className="text-sm text-center"><span className="text-red-800">*</span> Subject to jurisdictional limitations</h2>
      </div>

      <div className="my-20 flex flex-col justify-center items-center">
        <h2 className="text-center font-medium text-3xl">Ready to be a Market Maker?</h2>
        <p className="text-xl font-medium text-center mb-16">Complete a short form to access the Market Maker Programme Termsheet</p>
          <button className="bg-purple-800 px-8 py-3 rounded">Apply now</button>
        </div>
    </div>
  );
};

export default ExrtaBonus;
