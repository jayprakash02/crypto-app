import React from "react";

const Overview = () => {
  return (
    <div className="bg-black max-w-full">
      <div className="flex w-full  py-4 px-8">
        {/* left  */}
        <div className="w-full px-4">
          <div className="flex w-full space-x-3  mb-3 ">
            {/* 1 */}
            <div className="rounded-xl max-w-[360px] max-h-[200px] w-full bg-neutral-900 space-y-8 p-4">
              <div className="w-full flex items-center space-x-4">
                <div className="p-1 border-4 border-fuchsia-600 -400 w-[70px] flex justify-center items-center rounded-full">
                  <img
                    src="./images/dashboard/investment.png"
                    className="p-2"
                  />
                </div>
                <h3 className="font-medium text-lg">Total investment</h3>
              </div>
              <div className="pl-2">
                <h2 className="text-2xl font-medium mb-2">$981.567.000</h2>
                <p className="text-gray-500">
                  90-Day <span className="text-[#29CD0E]">+5.599</span>
                </p>
              </div>
            </div>
            {/* 2 */}
            <div className="rounded-xl max-w-[360px] max-h-[200px]  w-full bg-neutral-900 space-y-8 p-4">
              <div className="w-full flex items-center space-x-4">
                <div className="p-1 border-4 flex justify-center items-center  border-fuchsia-600 -400 w-[70px] rounded-full">
                  <img
                    src="./images/dashboard/growth.png"
                    className="p-[10px]"
                  />
                </div>
                <h3 className="font-medium text-lg">Total returns</h3>
              </div>
              <div className="pl-2">
                <h2 className="text-2xl font-medium mb-2">$129.897.000</h2>
                <p className="text-gray-500">
                  Target: <span className="text-gray-500">$250.800.000</span>
                </p>
              </div>
            </div>
            {/* 3 */}
            <div className="rounded-xl max-w-[360px] max-h-[200px] w-full bg-neutral-900 space-y-8 p-4">
              <div className="w-full flex items-center space-x-4">
                <div className="p-1 border-4 flex justify-center items-center  border-fuchsia-600 -400 w-[70px] rounded-full">
                  <img
                    src="./images/dashboard/withdrawal.png"
                    className="p-[10px]"
                  />
                </div>
                <h3 className="font-medium text-lg">Total withdrawal</h3>
              </div>
              <div className="pl-2">
                <h2 className="text-2xl font-medium mb-2">-$450.000</h2>
                <p className="text-gray-500">
                  Remaining <span className="text-gray-500">999.980</span>
                </p>
              </div>
            </div>
          </div>

          {/* 2nd row  */}
          <div className="w-full flex justify-around ">
            {/* 1 */}
            <div className="rounded-xl max-w-[210px] max-h-[220px] w-full bg-zinc-900  p-4">
              <div className="w-full flex items-center justify-between ">
                <h3 className="font-medium ">Deposit wallet</h3>

                <div className="p-1 -400 w-[50px] flex justify-center items-center rounded-full">
                  <img src="./images/dashboard/wallet.png" className="p-2" />
                </div>
              </div>
              <div className="">
                <h2 className="font-medium mb-5">$45.215.000</h2>
                <button className=" bg-gradient-to-b from-fuchsia-300 to-purple-800 rounded-full px-3 py-1 text-xs ">
                  Recharge
                </button>
              </div>
            </div>
            {/* 2 */}
            <div className="rounded-xl max-w-[210px] max-h-[220px] w-full bg-zinc-900  p-4">
              <div className="w-full flex items-center justify-between ">
                <h3 className="font-medium ">ROI wallet</h3>

                <div className="p-1 -400 w-[50px] flex justify-center items-center rounded-full">
                  <img src="./images/dashboard/return.png" className="p-2" />
                </div>
              </div>
              <div className="">
                <h2 className="font-medium mb-5">$50.215.000</h2>
                <div className="flex space-x-2">
                  <button className=" bg-gradient-to-b from-fuchsia-300 to-purple-800 rounded-full px-3 py-1 text-xs ">
                    Invest
                  </button>
                  <button className=" bg-gradient-to-b from-fuchsia-300 to-purple-800 rounded-full px-3 py-1 text-xs ">
                    Transfer
                  </button>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="rounded-xl max-w-[210px] max-h-[220px] w-full bg-zinc-900  p-4">
              <div className="w-full flex items-center justify-between ">
                <h3 className="font-medium ">R&B wallet</h3>

                <div className="p-1 -400 w-[50px] flex justify-center items-center rounded-full">
                  <img src="./images/dashboard/interest.png" className="p-2" />
                </div>
              </div>
              <div className="">
                <h2 className="font-medium mb-5">$0.215.000</h2>
                <button className=" bg-gradient-to-b from-fuchsia-300 to-purple-800 rounded-full px-3 py-1 text-xs ">
                  Withdraw
                </button>
              </div>
            </div>
            {/* 4 */}
            <div className="rounded-xl max-w-[210px] max-h-[220px] w-full bg-zinc-900  p-4">
              <div className="w-full flex items-center justify-between ">
                <h3 className="font-medium ">Interest wallet</h3>

                <div className="p-1 -400 w-[50px] flex justify-center items-center rounded-full">
                  <img src="./images/dashboard/deposit.png" className="p-2" />
                </div>
              </div>
              <div className="">
                <h2 className="font-medium mb-5">$60.215.000</h2>
                <div className="flex space-x-2">
                  <button className=" bg-gradient-to-b from-fuchsia-300 to-purple-800 rounded-full px-3 py-1 text-xs ">
                    Invest
                  </button>
                  <button className=" bg-gradient-to-b from-fuchsia-300 to-purple-800 rounded-full px-3 py-1 text-xs ">
                    Transfer
                  </button>
                </div>
              </div>
            </div>

            {/* 5 */}
            <div className="rounded-xl max-w-[210px] text-gray-900 max-h-[220px] w-full bg-gradient-to-r from-indigo-400 to-fuchsia-500   p-4">
              <div className="w-full flex items-center justify-between ">
                <h3 className="font-semibold ">OZO Token</h3>

                <div className="p-1 pt-2 -400 w-[70px] flex justify-center items-center rounded-full">
                  <img
                    src="./images/navlogo.png"
                    className="p-2 text-gray-900 "
                  />
                </div>
              </div>
              <div className="">
                <h2 className="font-semibold mb-5">$70.215.000</h2>
                <button className="bg-black rounded-full px-3 py-1 text-xs text-white ">
                  Reinvest
                </button>
              </div>
            </div>
          </div>

          {/* Refer and earn  */}
          <h1 className="text-xl pl-2 mb-2 mt-8 ">Refer and earn</h1>
          <div className="w-full flex px-2  justify-between">
            {/* left  */}
            <div className="rounded-xl p-4 max-w-[600px]  max-h-[250px]  w-full bg-gradient-to-r from-indigo-400 to-fuchsia-500  text-gray-900">
              <h1 className="text-2xl font-semibold pl-4 pt-4 mb-8">Referral link</h1>
              <div className="w-full pl-4 mb-4 relative flex">
                <div className="bg-neutral-900 text-2xl text-white rounded-lg px-4 py-1">
                  Left link
                </div>
                <button className="border-t-2 w-full max-w-[430px]  text-transparent absolute left-28 top-0 py-[6px] border-r-2 border-b-2 bg-transparent px-4 border-neutral-900 rounded-t-lg  rounded-r-lg  rounded-b-lg">
                  {"n"}
                </button>
              </div>
              <div className="w-full pl-4 relative flex">
                <div className="bg-neutral-900 text-2xl text-white rounded-lg px-4 py-1">
                  Right link
                </div>
                <button className="border-t-2 w-full  max-w-[430px] text-transparent absolute left-28 top-0 py-[6px] border-r-2 border-b-2 bg-transparent px-4 border-neutral-900 rounded-t-lg  rounded-r-lg  rounded-b-lg">
                  {" n"}
                </button>
              </div>
            </div>
            {/* right  */}
            <div className="bg-zinc-900 p-4 rounded-3xl">
              <h1 className="text-xl pl-2 mb-2">Quick Actions</h1>
              <div className="flex space-x-3 mb-2">
                <button className="border-2 px-4 py-2 rounded-xl flex justify-between w-full items-center  border-neutral-600">
                  <img
                    src="./images/dashboard/investment2.png"
                    className="w-6 "
                  />{" "}
                  <p className="">Deposit</p>{" "}
                  <img src="./images/dashboard/next.png" className="w-5 h-5 " />
                </button>
                <button className="border-2 px-4 py-2 rounded-xl flex justify-between w-full items-center border-neutral-600">
                  <img
                    src="./images/dashboard/investment2.png"
                    className="w-6 "
                  />{" "}
                  <p className="">Package</p>{" "}
                  <img src="./images/dashboard/next.png" className="w-5 h-5 " />
                </button>
              </div>
              <div className="grid grid-cols-4 gap-2 text-[15px] ">
                <button className="border-2 px-[3px] py-[6px] rounded-xl flex flex-col justify-center items-center  border-neutral-600">
                  <img
                    src="./images/dashboard/investment2.png"
                    className="w-6 "
                  />
                  Withdraw
                </button>
                <button className="border-2 px-[3px] py-[6px] rounded-xl flex flex-col justify-center items-center  border-neutral-600">
                  <img
                    src="./images/dashboard/investment2.png"
                    className="w-6 "
                  />
                  Transfer
                </button>
                <button className="border-2 px-[3px] py-[6px] rounded-xl flex flex-col justify-center items-center  border-neutral-600">
                  <img
                    src="./images/dashboard/investment2.png"
                    className="w-6 "
                  />{" "}
                  ROI wallet
                </button>
                <button className="border-2 px-[3px] py-[6px] rounded-xl flex flex-col justify-center items-center  border-neutral-600">
                  <img
                    src="./images/dashboard/investment2.png"
                    className="w-6 "
                  />
                  Wallet
                </button>

                <button className="border-2 px-[3px] py-[6px] rounded-xl flex flex-col justify-center items-center  border-neutral-600">
                  <img
                    src="./images/dashboard/investment2.png"
                    className="w-6 "
                  />
                  Ticket
                </button>
                <button className="border-2 px-[3px] py-[6px] rounded-xl flex flex-col justify-center items-center  border-neutral-600">
                  <img
                    src="./images/dashboard/investment2.png"
                    className="w-6 "
                  />
                  Binary tree
                </button>
                <button className="border-2 px-[3px] py-[6px] rounded-xl flex flex-col justify-center items-center  border-neutral-600">
                  <img
                    src="./images/dashboard/investment2.png"
                    className="w-6 "
                  />
                  Invite
                </button>
                <button className="border-2 px-[3px] py-[6px] rounded-xl flex flex-col justify-center items-center  border-neutral-600">
                  <img
                    src="./images/dashboard/investment2.png"
                    className="w-6 "
                  />
                  Support
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* right  */}
        <div className="px-6 py-8 max-w-[330px] w-full bg-neutral-950 rounded-xl ">
          <h2 className="font-medium text-xl">
            Total earning
            <br />
            through one ozo
          </h2>
          <div className="bg-gray-800 border-2 text-center rounded-xl my-6 max-w-[200px] w-full mx-auto py-4 border-zinc-400  ">
            <p>Total Earning</p>
            <p className="text-xl ">$989.450</p>
          </div>

          <div className="w-full p-2 flex justify-center my-8 ">
          <div className="rounded-full border-4 min-h-[220px] border-fuchsia-700 w-full max-w-[220px] flex justify-center items-center">
          <h2 className="text-4xl">95%</h2>
          </div>
            </div>
          <div className="w-full space-y-10">
            <div className="w-full space-y-2  px-6">
              <div className="flex space-x-2 px-2 text-sm">
                <li className="text-fuchsia-500">
                  <span className="text-gray-500 font-medium">ROI</span>
                </li>
                <li className="text-fuchsia-500">
                  <span className="text-gray-500 font-medium">
                    Referral bonus
                  </span>
                </li>
              </div>
              <div className="flex space-x-4 text-sm">
                <li className="text-fuchsia-500">
                  <span className="text-gray-500 font-medium">Binary Bonus</span>
                </li>
                <li className="text-fuchsia-500">
                  <span className="text-gray-500 font-medium">
                    Others
                  </span>
                </li>
              </div>
            </div>
            <button className="bg-gradient-to-r from-indigo-400 to-fuchsia-500 rounded-xl px-3 py-3 w-full  text-white ">
              Withdrawal
            </button>
          </div>
        </div>
      </div>

      <div className=" w-full max-w-full px-12 pb-24 ">
        <h1 className="text-4xl my-8 font-semibold">Referral Details</h1>

        <div className="bg-neutral-900 w-full items-center px-12 py-4 justify-between flex ">
          <input
            type="checkbox"
            className="rounded-sm bg-black border-2 p-2"
            name="referral"
            id="referralDetail"
          />
          <div className="">SI No</div>
          <div className="">Package</div>
          <div className="">Days</div>
          <div className="">Invested</div>
          <div className="">Email</div>
          <div className="">Expiry</div>
          <div className="">Payment through</div>
          <div className="">Payment type</div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
