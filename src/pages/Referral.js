import React, { useState } from "react";
import { motion as m } from "framer-motion";
const Referral = () => {
  const [referral, setReferral] = useState("Plain");
  return (
    <div className="overflow-x-hidden py-36">
      {/* section top */}
      <div className="w-full flex justify-center bg-gradient-to-r from-deep-purple-900 to-fuchsia-800 items-center min-h-[15vh] px-6 py-6">
        <div className="max-w-[20rem]   flex justify-between w-full rounded-full border-2  ">
          <button
            onClick={() => setReferral("Plain")}
            className=" rounded-full py-2 px-8  focus-within:bg-gradient-to-r focus-within:from-neutral-900 focus-within:to-black"
          >
            Referral
          </button>
          <button
            onClick={() => setReferral("Binary")}
            className=" rounded-full py-2 px-8  focus-within:bg-gradient-to-r  focus-within:from-neutral-900 focus-within:to-black"
          >
            Binary Referral
          </button>
        </div>
      </div>
      {referral == "Plain" && <Plain />}
      {referral == "Binary" && <Binary />}
    </div>
  );
};

export default Referral;

const Binary = () => {
  return (
    <div className="overflow-x-hidden font-poppins">
      <div className="relative mb-64 md:mb-0">
        <img
          src="./images/binary.jpg"
          className="w-full max-h-[90vh] object-cover"
        />
        <div className="pt-44 md:pt-0 absolute flex flex-col gap-6 px-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center px-4">
          <div className="py-10 max-w-4xl mx-auto space-y-6">
            <h1 className="text-5xl font-bold">Unlock Exclusive Rewards</h1>
            <p className="font-medium text-3xl">
              Affiliates Earn Lucrative Commissions and <br /> More with One Ozo
            </p>
            <button className="border px-8 py-3 rounded-lg">
              Become an Affiliate
            </button>
          </div>
        </div>
      </div>

      {/* section 2 */}

      <div className="text-center my-16 w-full px-6">
        <h2 className="text-4xl mb-9 font-medium">
          Affiliate Programme Commissions
        </h2>
        {/* w-full max-w-5xl text-left font-medium mx-auto flex space-x-6 items-center */}
        <div className="flex flex-col md:flex-row gap-24 justify-center text-left items-center mt-12">
          <div className="w-full md:w-1/2  min-h-[250px] h-full border-2 border-gray-800 rounded-xl p-6">
            <h2 className="text-2xl mb-4 px-2">Ozo Ventures</h2>
            <div className="mb-6 space-y-5 ">
              <div className="flex space-x-2">
                <img src="./images/download.png" className="w-6 h-6" />
                <p>
                  Unlock Growth with the World's Fastest-Growing Investment
                  Firm: One Ozo
                </p>
              </div>
              <div className="flex space-x-2">
                <img src="./images/download.png" className="w-6 h-6" />
                <p>
                  Diversify Your Portfolio with One Ozo: Invest in
                  Cryptocurrency, Forex, Commodities, and Casino Gaming.10%
                  Binary: Multiply Your Profits with One Ozo's Opportunity.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 min-h-[282px] h-full border-2 border-gray-800 rounded-xl p-6">
            <h2 className="text-2xl mb-4 px-2">Securely Fast</h2>
            <div className="mb-6 space-y-5 ">
              <div className="flex space-x-2">
                <img src="./images/download.png" className="w-6 h-6" />
                <p>
                  Fastest and Most Secure: One Ozo, Your Trusted Investment
                  Firm.
                </p>
              </div>
              <div className="flex space-x-2">
                <img src="./images/download.png" className="w-6 h-6" />
                <p>
                  Invest with Confidence: Let Our Advanced AI Handle the Rest
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 3 */}

      <div className="w-full my-28 font-medium flex items-center max-w-6xl mx-auto px-6">
        <div>
          <h2 className="text-4xl mb-12">Benefits For Your Community</h2>
          <h3 className="text-3xl mb-6">Accelerated Earnings</h3>
          <h3 className="text-3xl mb-6">
            With the binary plan, you have the opportunity to earn accelerated
            returns on your investments, boosting your overall profitability.
          </h3>
          <div className="space-y-4 mb-10">
            <div className="flex space-x-2">
              <img src="./images/download.png" className="w-6 h-6" />
              <span>
                Dual Team Synergy: The binary plan promotes teamwork and
                collaboration as you build two separate teams. This synergy can
                lead to enhanced support and motivation from your team members.
              </span>
            </div>
            <div className="flex space-x-2">
              <img src="./images/download.png" className="w-6 h-6" />
              <span>
                Unlimited Depth: Unlike some other compensation plans, the
                binary plan allows for unlimited depth in your organization.
                This means there is no limit to how many levels deep you can
                build your binary network.
              </span>
            </div>

            <div className="flex space-x-2">
              <img src="./images/download.png" className="w-6 h-6" />
              <span>
                Spillover Benefits: With the binary plan, you can benefit from
                spillover, where your upline may place new members under you.
                This can help you grow your network faster and increase your
                earning potential.
              </span>
            </div>

            <div className="flex space-x-2">
              <img src="./images/download.png" className="w-6 h-6" />
              <span>
                Balanced Structure: The binary plan promotes balance in your
                organization as you strive to build and maintain equal strength
                in both legs of your binary structure. This balance ensures
                stability and steady growth.
              </span>
            </div>
          </div>
        </div>
        <div className="w-full">
          <img className="./images/section.webp" />
        </div>
      </div>

      {/* section 4 */}

      <div className="flex max-w-2xl text-center my-24 mx-auto w-full px-6">
        <div className="w-full  flex flex-col items-center">
          <h3 className="text-4xl font-bold mb-6">
            Join Our Global Affiliate Team
          </h3>
          <p className="mb-6">
            If you have an established following on social media, come join us
            on our mission to accelerate the world’s transition to
            cryptocurrency
          </p>
          <button className="border px-8 py-3 rounded-lg">
            Become an Affiliate
          </button>
        </div>
      </div>

      {/* section 5 */}

      <div className="w-full max-w-6xl mx-auto text-center px-6">
        <h1 className="text-3xl font-medium mb-6">Getting Started</h1>
        <p className="mb-6">
          It takes just 3 steps to become a Crypto.com affiliate
        </p>
        <div className="flex flex-col md:flex-row w-full justify-around mb-6">
          <div className="max-w-[300px] w-full min-h-[250px] text-center md:text-left mb-6 md:mb-0">
            <img
              src="./images/icons/register.png"
              className="w-32 mb-6 mx-auto md:mx-0"
            />
            <h2 className="text-xl font-medium mb-2">Register</h2>
            <p>Sign up to the one ozo</p>
          </div>

          <div className="max-w-[300px] w-full min-h-[250px] text-center md:text-left mb-6 md:mb-0">
            <img
              src="./images/icons/promote.png"
              className="w-32 mb-6 mx-auto md:mx-0"
            />
            <h2 className="text-xl font-medium mb-2">Promote one Ozo.com</h2>
            <p>Introduce the one ozo platform to your community</p>
          </div>

          <div className="max-w-[300px] w-full min-h-[250px] text-center md:text-left">
            <img
              src="./images/icons/rewards.png"
              className="w-32 mb-6 mx-auto md:mx-0"
            />
            <h2 className="text-xl font-medium mb-2">Get Rewarded</h2>
            <p>Earn commission and enjoy your exclusive rewards</p>
          </div>
        </div>
        <button className="border my-6 px-8 py-3 rounded-lg">
          Become an Affiliate
        </button>
        <p className="max-w-xl mb-24 mx-auto text-xs text-center w-full">
          Rest assured, One Ozo prioritizes the security of your information,
          ensuring the utmost confidentiality and protection in our binary plan.
        </p>
      </div>
    </div>
  );
};

const Plain = () => {
  return (
    <div className="overflow-x-hidden font-poppins">
      {/* section 1 */}

      {/* <div className="w-full my-44 relative">
  <img
    src="./images/earningreferral.jpg"
    className="w-full max-h-[110vh] bg-opacity-60"
  />
  <div className="px-6 absolute left-4 md:left-44 top-0 md:top-52 w-full text-center md:text-left">
    <h1 className="text-4xl md:text-6xl mb-6 font-semibold text-black max-w-[650px]">
      Multiply Your Earnings with One Ozo's Lucrative Referral Program
    </h1>
    <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
      Earn up to 8% Referral Bonuses and Unlock Exciting Rewards
    </h2>
    <button className="text-xl px-6 py-3 bg-red-900 rounded-lg mt-1">
      Refer now
    </button>
  </div>
</div> */}

{/* section 2 */}

      <div className="my-40  w-full max-w-6xl mx-auto px-6">
        <h3 className="text-3xl mb-3">How Do I Make A Referral?</h3>
        <p>
          Referring your friends to the world's fastest and most secure
          cryptocurrency exchange takes just seconds. Here's how:
        </p>

        <div className="flex flex-col md:flex-row gap-0 justify-center items-center mt-3">
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
              <img src="./images/icons/signup1.png" className="  w-16 " />
            </div>
            <h1 className="text-2xl mb-4 font-bold">Sign Up</h1>
            <p className="text-gray-500 text-[16px]">
              Sign up or sign in to the oneozo.com platform
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
              <img src="./images/icons/link.png" className="  w-16 " />
            </div>
            <h1 className="text-2xl mb-4 font-bold">Referral Page</h1>
            <p className="text-gray-500 text-[16px]">
              Navigate to the Referral page under Events & Rewards to get your
              referral link.
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
              <img src="./images/icons/email.png" className="  w-16 " />
            </div>
            <h1 className="text-2xl mb-4 font-bold">Send To Your Friends</h1>
            <p className="text-gray-500 text-[16px]">
              Copy these in one click and easily share them with your friends on
              social media or your favourite messaging apps
            </p>
          </m.div>
        </div>

        <div className="mt-32 flex flex-col md:flex-row gap-12 ">
          <h1 className="text-3xl font-bold">
            What You Stand
            <br />
            to Gain
          </h1>
          <div className="space-y-4">
            <div className="bg-blue-gray-900 flex items-center rounded-xl border-2 px-6 py-4">
              <img
                src="./images/download.png"
                className="w-10  h-10 rounded-full p-2 flex justify-center items-center"
              />
              <p>
                Earn up to 18% referral bonuses on each successful referral,
                boosting your earnings.
              </p>
            </div>
            <div className="bg-blue-gray-900 items-center flex rounded-xl border-2 px-6 py-4">
              <img
                src="./images/download.png"
                className="w-10 h-10  rounded-full p-2 flex justify-center items-center"
              />
              <p>
                Enjoy exciting rewards and incentives through One Ozo's referral
                program.
              </p>
            </div>

            <div className="bg-blue-gray-900 rounded-xl  items-center flex border-2 px-6 py-4">
              <img
                src="./images/download.png"
                className="w-10  h-10 rounded-full p-2 flex justify-center items-center"
              />
              <p>
                Withdrawal gate for referral rewards is open 24/7, giving you
                the flexibility to access your earned bonuses whenever you need
                them.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6 mt-44">
          <h1 className="text-3xl">Referral Bonus</h1>
          <p>
            Unlock Rewards at Every Level: One Ozo's Three-Tier Referral Program
          </p>
          <p>
            One Ozo's three-tier referral program allows you to earn generous
            bonuses at each level. With 5% on Level 1, 3% on Level 2, and 1.5%
            on Level 3, your earnings multiply as you expand your network and
            introduce others to One Ozo's rewarding investment opportunities.
          </p>
          <p>
            <div className="flex flex-wrap justify-between items-center mb-5">
              <div className="max-w-[280px] max-h-[320px] h-full flex flex-col justify-center items-center  text-center  p-6">
                <img src="./images/logo.png" />
                <span className="font-semibold">Level 1</span>
                <p>
                  Earn 5% referral bonus on direct referrals and expand your
                  network.
                </p>
              </div>
              <div className="max-w-[280px] max-h-[320px] h-full flex flex-col justify-center items-center  text-center p-6">
                <img src="./images/logo.png" />
                <span className="font-semibold"> Level 2</span>
                <p>
                  Enjoy 3% referral bonus on indirect referrals, increasing your
                  earnings further.
                </p>
              </div>

              <div className="max-w-[280px] max-h-[340px] h-full  pt-5 flex flex-col justify-center  items-stretch text-center  px-6">
                <img src="./images/logo.png" className=" mb-2" />
                <span className="font-semibold"> Level 3</span>
                <p className="">
                  Earn 1.5% referral bonus on referrals made by your Level 2
                  referrals, maximizing your rewards.
                </p>
              </div>
            </div>
            Refer here for the full referral bonus tier list. Remember, there
            are no limits and your bonus is credited instantly!
          </p>
        </div>
      </div>

      {/* section 2 */}

      <div className="w-full my-44 relative">
        <img
          src="./images/community.jpg"
          className="w-full object-cover opacity-90"
        />

        <div className="px-6 flex flex-col absolute max-w-5xl w-full top-0 md:top-44 left-0 md:left-44 justify-between items-center">
          <h2 className="md:text-3xl text-center mb-6 font-bold">
            Join a thriving community of over 50 million passionate crypto
            investors, where knowledge, insights, and exciting opportunities
            converge.
          </h2>
          <div>
            <button className="px-6 py-3 text-2xl font-bold bg-purple-900 rounded-md">
              Invite now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
