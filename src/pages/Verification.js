import React from "react";
import { useNavigate } from "react-router";

const Verification = ({ setIsLoggedIn }) => {

  const navigate  = useNavigate()
  return (
    <div className="w-full font-poppins py-40">
      <div className="w-full max-w-5xl mx-auto ">
        <div className="w-full flex mb-44">
          <div className="w-1/2 flex flex-col  justify-center ">
            <h1 className="text-5xl font-medium mb-4">
              Welcome to a <br /> World Where
              <br /> <span className="text-blue-500">
                Dreams
              </span> Transform <br />
              into{" "}
              <span className="text-purple-500">
                Investment <br />
                Success
              </span>
            </h1>
            <p className="text-xl mb-4">
              You're just a step away from getting
              <br /> started! Please click the button below to
              <br /> confirm your email. In case of issues, copy
              <br /> and paste the URL into your browser
            </p>
            <button onClick={()=>navigate("/dashboard")} className="px-6 py-3 max-w-[250px] text-xl  rounded-lg font-semibold uppercase bg-purple-700">
              Click to Verify
            </button>
          </div>
          <div className="w-1/2"></div>
        </div>

        <div className="w-full">
          <div className="flex justify-between w-full">
            {" "}
            <h2 className="text-4xl mb-4">Why choose one ozo</h2>{" "}
            <button className="px-8 border rounded-full py-1">
              Invest now
            </button>
          </div>

          <p className="text-xl">
            Choose One Ozo for unparallel investment opportunities, <br />
            exceptional rewards, trust reliability, and dedicated support.
          </p>

          <div className="w-full my-24  flex justify-between ">
            <div className="max-w-[250px] w-full">

              <div className="bg-purple-700 rounded-xl p-2 max-w-[60px] w-full max-h-[60px]  mb-4 flex justify-center items-center">
              <img src="./images/icons/wallet.png" className="w-9 h-9"/>

              </div>
              <p className="font-semibold text-lg mb-2">Trust</p>
              <p className="text-gray-500">
                {" "}
                Experience a trusted investment platform with a <br /> proven
                track record.
              </p>
            </div>
            <div className="max-w-[250px] w-full">
            <div className="bg-purple-700 rounded-xl p-2 max-w-[60px] w-full max-h-[60px]  mb-4 flex justify-center items-center">
              <img src="./images/icons/image.png" className="w-9 h-9"/>

              </div>
              <p className="font-semibold text-lg mb-2">Rewards</p>
              <p className="text-gray-500">
                {" "}
                Enjoy attractive
                <br /> rewards and bonuses <br /> for your investments
                <br /> and loyalty.
              </p>
            </div>

            <div className="max-w-[250px] w-full">
            <div className="bg-purple-700 rounded-xl p-2 max-w-[60px] w-full max-h-[60px]  mb-4 flex justify-center items-center">
              <img src="./images/icons/flexible.png" className="w-9 h-9"/>

              </div>
              <p className="font-semibold text-lg mb-2">Flexibility</p>
              <p className="text-gray-500">
            
                Receive expert guidance <br />  and
             personalized support <br /> throughout to your
                <br /> preferences.
              </p>
            </div>

            <div className="max-w-[250px] w-full">
            <div className="bg-purple-700 rounded-xl p-2 max-w-[60px] w-full max-h-[60px]  mb-4 flex justify-center items-center">
              <img src="./images/icons/support.png" className="w-9 h-9"/>

              </div>
              <p className="font-semibold text-lg mb-2">Support</p>
              <p className="text-gray-500">
                {" "}
                Experience a trusted investment platform with a <br /> proven
                track record.
              </p>
            </div>
          </div>
          
          <div className="rounded-2xl  bg-gradient-to-tr  from-blue-gray-800 to-neutral-900 w-full  p-12">

            <div className="w-full flex justify-between items-center mb-8"> 
              <h1 className="text-4xl font-semibold">Limitless Earning through<br/>One Ozo's Referral Program</h1>
              <button className="px-6 py-4  max-w-[250px] text-xl  rounded-lg font-semibold uppercase bg-purple-700">
           Refer now
            </button> </div>

            <p className="text-xl font-medium"> Join our referral progra, earn up to 7 levels of bonuses,<br/> and unlock limitless income potential.</p>


          </div>
          
        </div>

        
      </div>
    </div>
  );
};

export default Verification;
