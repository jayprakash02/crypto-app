import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-hot-toast";

const Overview = () => {
  useEffect(() => {}, []);

  // Overview state
  const [totalInvestmentRevenue, setTotalInvestmentRevenue] =
    useState("981.567.000");

  const [totalReturns, settotalReturns] = useState("129.897.000");
  const [totalReturnsTarget, settotalReturnsTarget] = useState("250.800.000");

  const [totalWithdrawal, settotalWithdrawal] = useState("450000");
  const [totalWithdrawalRemaining, settotalWithdrawalRemaining] =
    useState("999.980");

  const [totalEarning, settotalEarning] = useState("95851");
  const [totalEarningByPercentage, settotalEarningByPercentage] =
    useState("95");

  //wallets
  const [depositWallet, setdepositWallet] = useState("45.215.000");
  const [roiWallet, setroiWallet] = useState("50.215.000");
  const [rbWallet, setrbWallet] = useState("0.215.000");
  const [interestWallet, setinterestWallet] = useState("  60.215.000");
  const [ozoToken, setozoToken] = useState("70.215.000");

  // Referral Links
  // left link
  // right link
  const [LeftReferral, setLeftReferral] = useState(" Left Link dummy");
  const [RightReferral, setRightReferral] = useState(" Right Link dummy");
  const [copyState, setcopyState] = useState(false);

  //referral details
  // Dummy data
  const dummyDATA = [
    {
      siNo: 1,
      package: "Package A",
      days: 2,
      invested: 2000,
      email: "bourax@gmail.com",
      expiry: "22/11/2023",
      paymentThrough: "CoinBase",
      paymentType: "null",
    },
    {
      siNo: 2,
      package: "Package C",
      days: 4,
      invested: 20400,
      email: "bourax@gmail.com",
      expiry: "23/11/2023",
      paymentThrough: "CoinBase",
      paymentType: "null",
    },
    {
      siNo: 3,
      package: "Package B",
      days: 8,
      invested: 2300,
      email: "bourax@gmail.com",
      expiry: "2/9/2023",
      paymentThrough: "CoinBase",
      paymentType: "null",
    },
    {
      siNo: 4,
      package: "Package D",
      days: 1,
      invested: 8000,
      email: "bourax@gmail.com",
      expiry: "2/11/2023",
      paymentThrough: "CoinBase",
      paymentType: "null",
    },
  ];

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
                <h2 className="text-2xl font-medium mb-2">
                  ${totalInvestmentRevenue}
                </h2>
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
                <h2 className="text-2xl font-medium mb-2">${totalReturns}</h2>
                <p className="text-gray-500">
                  Target:{" "}
                  <span className="text-gray-500">${totalReturnsTarget}</span>
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
                <h2 className="text-2xl font-medium mb-2">
                  -${totalWithdrawal}
                </h2>
                <p className="text-gray-500">
                  Remaining{" "}
                  <span className="text-gray-500">
                    {totalWithdrawalRemaining}
                  </span>
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
                <h2 className="font-medium mb-5">${depositWallet}</h2>
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
                <h2 className="font-medium mb-5">${roiWallet}</h2>
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
                <h2 className="font-medium mb-5">${rbWallet}</h2>
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
                <h2 className="font-medium mb-5">${interestWallet}</h2>
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
                <h2 className="font-semibold mb-5">${ozoToken}</h2>
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
              <h1 className="text-2xl font-semibold pl-4 pt-4 mb-8">
                Referral link
              </h1>
              {/* 1st button  */}
              <CopyToClipboard
                text={LeftReferral}
                onCopy={() => {
                  setcopyState(true);
                  if (copyState) toast.success("Link Link Copy Successfully");
                  console.log("left referral", LeftReferral);
                }}
              >
                {/* button to copy text  */}
                <button className="w-full ml-4 max-w-[540px] text-left mb-4 relative flex">
                  <div className="bg-neutral-900 text-2xl text-white rounded-lg px-6 py-1">
                    Left link
                  </div>
                  <div className="border-t-2 w-full max-w-[410px]  text-neutral-900 font-medium absolute left-32 top-0 py-[6px] border-r-2 border-b-2 bg-transparent px-4 border-neutral-900 rounded-t-lg  rounded-r-lg  rounded-b-lg">
                    {LeftReferral}
                  </div>
                </button>
              </CopyToClipboard>
              {/* 2nd button  */}
              <CopyToClipboard
                text={RightReferral}
                onCopy={() => {
                  setcopyState(true);
                  if (copyState) toast.success("Right Link Copy Successfully");
                  console.log("right referral", RightReferral);
                }}
              >
                {/* button to copy text  */}

                <button className="w-full max-w-[540px] text-left  ml-4 relative flex">
                  <div className="bg-neutral-900 text-2xl text-white rounded-lg px-6 py-1">
                    Right link
                  </div>
                  <div className="border-t-2 w-full font-medium text-neutral-900 max-w-[400px]  absolute left-36 top-0 py-[6px] border-r-2 border-b-2 bg-transparent px-4 border-neutral-900 rounded-t-lg  rounded-r-lg  rounded-b-lg">
                    {RightReferral}
                  </div>
                </button>
              </CopyToClipboard>
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
            <p className="text-xl ">${totalEarning}</p>
          </div>

          <div className="w-full p-2 flex justify-center my-8 ">
            <div className="rounded-full border-4 min-h-[220px] border-fuchsia-700 w-full max-w-[220px] flex justify-center items-center">
              <h2 className="text-4xl">{totalEarningByPercentage}%</h2>
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
                  <span className="text-gray-500 font-medium">
                    Binary Bonus
                  </span>
                </li>
                <li className="text-fuchsia-500">
                  <span className="text-gray-500 font-medium">Others</span>
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
        <table className="w-full">
          <h1 className="text-4xl my-8 font-semibold">Referral Details</h1>

          <thead className="bg-neutral-900 w-full text-left items-center px-12 py-4 justify-between flex ">
            <th>
              <input
                type="checkbox"
                className="rounded-sm bg-black border-2 p-2"
                name="referral"
                id="referralDetail"
              />
            </th>
            <th className="w-full   max-w-[80px] ">SI No</th>
            <th className="w-full max-w-[100px] ">Package</th>
            <th className="w-full max-w-[100px] ">Days</th>
            <th className="w-full max-w-[100px] ">Invested</th>
            <th className="w-full max-w-[200px] ">Email</th>
            <th className="w-full max-w-[100px] ">Expiry</th>
            <th className="w-full max-w-[100px]">Payment through</th>
            <th className="w-full max-w-[100px]">Payment type</th>
          </thead>
          <tbody className="w-full">
            {dummyDATA.map((e, key) => {
              return (
                <tr
                  key={key}
                  className="bg-neutral-900 text-left w-full items-center px-12 py-4  flex "
                >
                  <td>
                    {" "}
                    <input
                      type="checkbox"
                      className="rounded-sm bg-black border-2 p-2 mr-12"
                      name="referral"
                      id="referralDetail"
                    />
                  </td>
                  <td className="w-full max-w-[80px] ml-4 ">{e.siNo}</td>
                  <td className="w-full max-w-[100px]  ml-10 ">{e.package}</td>
                  <td className="w-full max-w-[100px]  ml-14  ">
                    {e.days} days
                  </td>
                  <td className="w-full max-w-[100px]  ml-14  ">
                    {e.invested}
                  </td>
                  <td className="w-full max-w-[250px]  ml-12 overflow-hidden  ">
                    {e.email}
                  </td>
                  <td className="w-full max-w-[100px]  ml-6 ">{e.expiry}</td>
                  <td className="w-full max-w-[100px] ml-14 ">
                    {" "}
                    {e.paymentThrough}
                  </td>
                  <td className="w-full max-w-[100px] ml-16 ">
                    {e.paymentType}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Overview;
