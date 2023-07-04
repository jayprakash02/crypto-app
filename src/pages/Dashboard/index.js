import React, { useState } from "react";
import Overview from "./Overview";
import Investment from "./Investment";
import Genealogy from "./Genealogy";
import Tickets from "./Tickets";
import Reports from "./Reports";
import Profile from "./Profile";

const Dashboard = () => {
  const [nav, setNav] = useState("Overview");
  const [investmentState, setinvestmentState] = useState("Package");
  const [genealogyState, setgenealogyState] = useState("Referral");
  const [tickets, setTickets] = useState("Submit");
  const [reportState, setReportState] = useState("roi");
  const [profileStateNav, setprofileStateNav] = useState("Profile");


  return (
    <div className="w-full bg-[#0d0d0d] min-h-[110vh] font-poppins">
      <div className="w-full flex flex-col  items-center mb-16  max-h-[180px] relative ">
        <img src="./images/dashboard/header.png" className="max-h-[240px] object-cover w-full" />
        <div className="rounded-full  absolute top-12 z-0 flex justify-between items-center bg-neutral-900 py-2 w-full max-w-7xl px-6 mx-auto">
          <div className="flex ">
            <img src="./images/logo.png" className="w-12" />
            <h1 className="text-2xl z-10 font-medium text-white">ONE OZO</h1>
          </div>

          <div className="">
            <ul className="flex  text-[14px]  items-center font-medium space-x-6">
              <li className="  focus-within:bg-white focus-within:text-gray-900 rounded-full  px-2 py-1 ">
                <button onClick={() => setNav("Overview")}> Overview </button>
              </li>
              <li className="  focus-within:bg-white focus-within:text-gray-900 rounded-full  px-2 py-1 ">
                <button onClick={() => setNav("Investment")}>
                  {" "}
                  Investment{" "}
                </button>
              </li>
              <li className=" focus-within:bg-white focus-within:text-gray-900 rounded-full  px-2 py-1 ">
                <button onClick={() => setNav("Genealogy")}> Genealogy </button>
              </li>
             

              {/* <li className=" focus-within:bg-white focus-within:text-gray-900 rounded-full  px-2 py-1 ">
                <button onClick={() => setNav("Transfers")}> Transfers </button>
              </li> */}
              {/* <li className="  focus-within:bg-white focus-within:text-gray-900 rounded-full  px-2 py-1 ">
                <button onClick={() => setNav("Withdrawals")}>
                  {" "}
                  Withdrawals{" "}
                </button>
              </li> */}
              <li className="focus-within:bg-white focus-within:text-gray-900  rounded-full  px-2 py-1 ">
                <button onClick={() => setNav("Tickets")}> Tickets </button>
              </li>
              <li className="  focus-within:bg-white focus-within:text-gray-900 rounded-full  px-2 py-1 ">
                <button onClick={() => setNav("Reports")}> Reports </button>
              </li>
            </ul>
          </div>
          <div className="flex space-x-2">
            <div className="rounded-full flex justify-center items-center w-10 bg-black">
              <img src="./images/dashboard/search.png" className=" p-[10px]" />
            </div>
            <div className="rounded-full flex justify-center items-center w-10 bg-black">
              <img
                src="./images/dashboard/notification.png"
                className=" p-[10px]"
              />
            </div>

            <div className="rounded-full flex justify-center items-center w-10  bg-black">
             
             
            <button onClick={() => setNav("Profile")}>
              <img src="./images/dashboard/user.png" className=" p-[10px]" />
              </button>
            </div>

          </div>
        </div>
        {nav == "Investment" && (
          <div className="w-full absolute top-32 flex justify-center items-center min-h-[10vh]">
            <div className="max-w-[38rem] mt-6  flex space-x-10 w-full rounded-full border-2  ">
              <button
                onClick={() => setinvestmentState("Package")}
                className=" rounded-full py-2 px-3 focus-within:bg-gradient-to-r focus-within:from-indigo-800 focus-within:to-purple-700"
              >
                Package activation
              </button>
              <button
                onClick={() => setinvestmentState("Offline")}
                className=" rounded-full py-2 px-3 focus-within:bg-gradient-to-r focus-within:from-indigo-800 focus-within:to-purple-700"
              >
                Offline activation
              </button>
              <button
                onClick={() => setinvestmentState("Downline")}
                className=" rounded-full py-2 pl-3 pr-4 focus-within:bg-gradient-to-r focus-within:from-indigo-800 focus-within:to-purple-700"
              >
                Downline activation
              </button>
            </div>
          </div>
        )}
        {nav == "Genealogy" && (
          <div className="w-full  absolute top-32 flex justify-center items-center min-h-[10vh]">
            <div className="max-w-[18rem] mt-6  flex justify-between w-full rounded-full border-2  ">
              <button
                onClick={() => setgenealogyState("Referral")}
                className=" rounded-full py-2 px-8  focus-within:bg-gradient-to-r focus-within:from-indigo-800 focus-within:to-purple-700"
              >
                Referral
              </button>
              <button
                onClick={() => setgenealogyState("Binary")}
                className=" rounded-full py-2 px-8  focus-within:bg-gradient-to-r focus-within:from-indigo-800 focus-within:to-purple-700"
              >
                Binary tree
              </button>
            </div>
          </div>
        )}

        {nav == "Tickets" && (
          <div className="w-full  absolute top-32 flex justify-center items-center pb-5 min-h-[10vh]">
            <div className="max-w-[20rem] mt-6  flex justify-between w-full rounded-full border-2  ">
              <button
                onClick={() => setTickets("Submit")}
                className=" rounded-full py-2 px-6  focus-within:bg-gradient-to-r focus-within:from-indigo-800 focus-within:to-purple-700"
              >
                Submit a Ticket
              </button>
              <button
                onClick={() => setTickets("list")}
                className=" rounded-full py-2 px-6  focus-within:bg-gradient-to-r focus-within:from-indigo-800 focus-within:to-purple-700"
              >
               Ticket list
              </button>
            </div>
          </div>
        )}



{nav == "Reports" && (
          <div className="w-full  absolute top-32 flex justify-center items-center min-h-[10vh]">
            <div className="max-w-[40rem] mt-6  flex justify-between w-full rounded-full border-2  ">
              <button
                onClick={() => setReportState("roi")}
                className=" rounded-full py-2 px-8 text-sm focus-within:bg-gradient-to-r focus-within:from-indigo-800 focus-within:to-purple-700"
              >
                ROI Report
              </button>
              <button
                onClick={() => setReportState("bi")}
                className=" rounded-full py-2 px-8 text-sm focus-within:bg-gradient-to-r focus-within:from-indigo-800 focus-within:to-purple-700"
              >
               BI Report
              </button>
              <button
                onClick={() => setReportState("ri")}
                className=" rounded-full py-2 px-8 text-sm focus-within:bg-gradient-to-r focus-within:from-indigo-800 focus-within:to-purple-700"
              >
               RI Report
              </button>
              <button
                onClick={() => setReportState("ei")}
                className=" rounded-full py-2 px-8 text-sm focus-within:bg-gradient-to-r focus-within:from-indigo-800 focus-within:to-purple-700"
              >
               Extra Income Report
              </button>
            </div>
          </div>
        )}

{nav == "Profile" && (
          <div className="w-full flex justify-center items-center min-h-[10vh]">
            <div className="max-w-[14rem] mt-6  flex justify-between w-full rounded-full border-2  ">
              <button
                onClick={() => setprofileStateNav("Profile")}
                className=" rounded-full py-2 px-8  focus-within:bg-gradient-to-r focus-within:from-indigo-800 focus-within:to-purple-700"
              >
                Profile
              </button>
              <button
                onClick={() =>  setprofileStateNav("kyc")}
                className=" rounded-full py-2 px-8  focus-within:bg-gradient-to-r focus-within:from-indigo-800 focus-within:to-purple-700"
              >
               KYC
              </button>
            </div>
          </div>
        )}
      </div>
      {nav == "Overview" && <Overview />}
      {nav == "Investment" && <Investment investmentState={investmentState} />}
      {nav == "Genealogy" && <Genealogy genealogyState={genealogyState} />}
      {nav == "Tickets" && <Tickets tickets={tickets}/>}
      {nav == "Reports" && <Reports reportState={reportState}/>}
      {nav == "Profile" && <Profile profileStateNav={profileStateNav}/>}
    </div>
  );
};

export default Dashboard;
