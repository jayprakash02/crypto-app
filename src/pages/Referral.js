import React, { useState } from "react";
import { motion as m } from "framer-motion";
const Referral = () => {
  const [referral,setReferral] = useState("Plain")
  return (
   <div>
       <div className="w-full flex justify-center bg-gradient-to-r from-deep-purple-900 to-fuchsia-800 items-center min-h-[15vh]">
            <div className="max-w-[20rem]   flex justify-between w-full rounded-full border-2  ">
              <button
                onClick={() => setReferral("Plain")}
                className=" rounded-full py-2 px-8  focus-within:bg-gradient-to-r focus-within:from-neutral-900 focus-within:to-black"
              >
                Referral
              </button>
              <button
                onClick={() =>  setReferral("Binary")}
                className=" rounded-full py-2 px-8  focus-within:bg-gradient-to-r  focus-within:from-neutral-900 focus-within:to-black"
              >
               Binary Referral
              </button>
            </div>
          </div>

         {referral == "Plain" && <Plain/>}
         {referral == "Binary" && <Binary/>}

   </div>
  );
};

export default Referral;


const Binary  = () =>{
  return(
    <div>

    </div>
  );
}
const Plain  = ()=>{
  return(
    <div className="font-poppins">
    <div className="w-full relative    ">
      <img src="./images/designbg1.jpg" className="w-full max-h-[110vh]" />
      <div className="absolute  left-44 top-52 w-full">
        <h1 className="text-6xl mb-6  ">Refer Your Friends</h1>
        <h1 className="text-6xl mb-6 ">
          Earn up to{" "}
          <span className="bg-purple-900 px-2 py-1 text-[68px] rounded-xl  mt-1 ">
            US$2,000
          </span>
        </h1>
        <h2 className="text-xl mb-4 ">
          Enjoy 12 months of trading fee commissions and <br />a referral
          bonus of up to US$2,000 in CRO
        </h2>
        <button className="text-xl px-6 py-3 bg-red-900 rounded-lg mt-1">
          Refer now
        </button>
      </div>
    </div>

    <div className="my-40  w-full max-w-6xl mx-auto">
      <h3 className="text-3xl mb-3">How Do I Make A Referral?</h3>
      <p>
        Referring your friends to the world's fastest and most secure
        cryptocurrency exchange takes just seconds. Here's how:
      </p>

      <div className="w-full max-w-6xl mx-auto text-white flex justify-between space-x-10 items-center mt-24">
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
          className="max-w-[350px] min-h-[312px] py-6 rounded-xl   px-6"
        >
          <div className="max-w-[110px] mb-2 h-[110px] rounded-full  bg-white w-full flex justify-center items-center">
            {" "}
            <img
              src="./images/icons/signup1.png"
              className="  w-16 "
            />
          </div>
          <h1 className="text-2xl mb-4 font-bold">Sign Up</h1>
          <p className="text-gray-500 text-[16px]">
            Sign up or sign in to the Crypto.com Exchange
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
          className="max-w-[350px] min-h-[312px] py-6 rounded-xl text-left  px-6"
        >
          <div className="max-w-[110px] mb-2 h-[110px] rounded-full  bg-white w-full flex justify-center items-center">
            {" "}
            <img
              src="./images/icons/link.png"
              className="  w-16 "
            />
          </div>
          <h1 className="text-2xl mb-4 font-bold">Referral Page</h1>
          <p className="text-gray-500 text-[16px]">
            Navigate to the Referral page under Events & Rewards to get your
            unique referral code or link
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
          className="max-w-[350px] min-h-[312px] py-6 rounded-xl text-left  px-6"
        >
           <div className="max-w-[110px] mb-2 h-[110px] rounded-full  bg-white w-full flex justify-center items-center">
            {" "}
            <img
              src="./images/icons/email.png"
              className="  w-16 "
            />
          </div>
          <h1 className="text-2xl mb-4 font-bold">Send To Your Friends</h1>
          <p className="text-gray-500 text-[16px]">
            Copy these in one click and easily share them with your friends on
            social media or your favourite messaging apps
          </p>
        </m.div>
      </div>

      <div className="mt-32 flex ">
        <h1 className="text-3xl font-bold">
          What You Stand
          <br />
          to Gain
        </h1>
        <div className="space-y-4 ml-16">
          <div className="bg-blue-gray-900 rounded-xl border-2 px-6 py-4">
            <img
              src="./images/icons/check.png"
              className="w-10 bg-green-500  rounded-full p-2 flex justify-center items-center"
            />
            <p>
              12 months of trading fee commissions and a bonus of up to
              US$2,000 in CRO for each friend successfully referred
            </p>
          </div>
          <div className="bg-blue-gray-900 rounded-xl border-2 px-6 py-4">
            <img
              src="./images/icons/check.png"
              className="w-10 bg-green-500  rounded-full p-2 flex justify-center items-center"
            />
            <p>
              chevron Your friend receives up to US$50 of CRO and there are no
              referral limits at all
            </p>
          </div>

          <div className="bg-blue-gray-900 rounded-xl border-2 px-6 py-4">
            <img
              src="./images/icons/check.png"
              className="w-10 bg-green-500  rounded-full p-2 flex justify-center items-center"
            />
            <p>
              Bonuses are credited instantly once all qualifying conditions
              are met
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6 mt-44">
        <h1 className="text-3xl">Referral Bonus</h1>
        <p>Everyone who signs up using your referral code can earn up to US$50 of CRO when they make their first CRO lockup</p>
        <p>
        The more CRO your referee locks up, the larger your referral bonus. Here's a quick overview of how the referral bonus tiers work:
        </p>
        <p>

          <div className="flex justify-between items-center">
            <div className="max-w-[250px] min-h-[300px] flex flex-col justify-center items-center space-y-4 text-center  p-6">
              <img src="./images/icons/referralbonus.svg" />
              <p>

              You earn US$50 when your referral locks up 5,000 CRO
              </p>
            </div>
            <div className="max-w-[250px] min-h-[300px] flex flex-col justify-center items-center space-y-2 text-center p-6">
              <img src="./images/icons/referralbonus.svg" />
              <p>

              You earn US$200 when your referral locks up 50,000 CRO
              </p>
            </div>

            <div className="max-w-[250px] min-h-[300px] flex flex-col justify-center items-center space-y-2 text-center p-6">
              <img src="./images/icons/referralbonus.svg" />
              <p>

              You earn US$2,000 when your referral locks up 5 million CRO
              </p>
            </div>
          </div>
        Refer here for the full referral bonus tier list. Remember, there are no limits and your bonus is credited instantly!
        </p>
      </div>
    </div>
    <div className="w-full mt-24 mb-44 relative">
      <img
        src="./images/designbg3.jpg"
        className="w-full max-h-[60vh] opacity-90"
      />

      <div className="flex flex-col absolute max-w-5xl w-full top-44 left-64 justify-between items-center">
        <div className="">
          <h2 className="text-3xl mb-6 font-bold">
            A community of over 50 million crypto traders await
          </h2>
        </div>

        <div>
          <button className="px-6 py-3 text-2xl font-bold bg-purple-900 rounded-md">
            Invite now
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}