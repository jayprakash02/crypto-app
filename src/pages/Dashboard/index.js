import React, { useEffect, useState } from "react";
import Overview from "./Overview";
import Investment from "./Investment";
import Genealogy from "./Genealogy";
import Tickets from "./Tickets";
import Reports from "./Reports";
import Profile from "./Profile";
import { toast } from "react-hot-toast";
import { Link } from 'react-router-dom';

const Dashboard = () => {



  const [nav, setNav] = useState("Overview");
  const [investmentState, setinvestmentState] = useState("Package");
  const [genealogyState, setgenealogyState] = useState("Referral");
  const [tickets, setTickets] = useState("Submit");
  const [reportState, setReportState] = useState("roi");
  const [profileStateNav, setprofileStateNav] = useState("Profile");

  const [OpenNotification, setOpenNotification] = useState(false);

  const dummyDATA = ["notification ","notify","November december ","wallet"," abe 123456789","dec","Pavelion2","ASUS APPKE IZI"]
  return (
    <div className="w-full bg-[#0d0d0d] min-h-screen font-poppins">
  {/* notification modal */}
  {OpenNotification && (
    <div className="w-full md:max-w-[250px] absolute top-28 right-0 left-0 md:right-40 md:left-auto min-h-[280px] max-h-[280px] z-50 no-scrollbar h-full overflow-y-scroll bg-neutral-800 rounded-xl px-6 py-2">
      <div className="space-y-2 text-xs relative">
        <button
          onClick={() => setOpenNotification((prev) => !prev)}
          className="absolute -top-1 right-0 rounded-full bg-neutral-900 p-2"
        >
          <img src="./images/icons/close.png" className="w-4" alt="Close" />
        </button>
        <h1 className="text-lg">Notification</h1>
        {dummyDATA.map((e) => (
          <p className="border-b pb-2 border-gray-600" key={e}>
            {e}
          </p>
        ))}
      </div>
    </div>
  )}
      <div className="overflow-x-hidden w-full md:mb-0 mb-44 flex justify-center ietms-center">
        <img
          src="./images/dashboard/header.png"
          className="max-h-[240px] object-cover w-full relative "
        />
        <div className="lg:rounded-full lg:bg-neutral-900 lg:py-2 lg:px-6 absolute lg:top-12 z-0 flex flex-col md:flex-row justify-center items-center px-6 gap-4 md:gap-24 mx-0">
          <div className="flex md:pt-0 pt-3">
          <Link to="/">
          <img
            className="max-h-10 min-w-10 pt-2 pl-2 w-12 cursor-pointer"
            src="./images/navlogo.png"
            alt="logo"
          />
          </Link>
            <h1 className="text-2xl z-10 font-medium text-white">ONE OZO</h1>
          </div>

          <div className="pt-3 md:pt-0">
            <ul className="pt-2 lg:pt-0 flex flex-wrap flex-row text-[14px]  items-center font-medium lg:gap-4 gap-2">
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
          <div className="flex md:gap-6 gap-3 h-full md:pb-0 pb-6">
         
            <div className="rounded-full flex justify-center items-center w-10 bg-black">
              <img src="./images/dashboard/search.png" className=" p-[10px]" />
            </div>
            <button
              onClick={() => setOpenNotification((prev) => !prev)}
              className="rounded-full  flex justify-center items-center w-10 bg-black"
            >
              <img
                src="./images/dashboard/notification.png"
                className=" p-[10px]"
              />
            
            </button>

            <div className="rounded-full flex justify-center items-center w-10  bg-black">
              <button onClick={() => setNav("Profile")}>
                <img src="./images/dashboard/user.png" className=" p-[10px]" />
              </button>
            </div>
         
          </div>
        </div>
        {nav == "Investment" && (
          <div className="px-1.5 w-full md:w-auto absolute top-32 md:top-12 flex justify-center  min-h-[10vh] pt-24 pb-20 mb-44">
          <div className="max-w-[38rem] md:max-w-full md:mx-0 flex items-start flex-row justify-center w-full rounded-full border-2">
            <button
              onClick={() => setinvestmentState("Package")}
              className="rounded-full py-2 px-3 mb-2 md:mb-0 mr-0 md:mr-2 focus:bg-gradient-to-r focus:from-indigo-800 focus:to-purple-700"
            >
              Package activation
            </button>
            <button
              onClick={() => setinvestmentState("Offline")}
              className="rounded-full py-2 px-3 mb-2 md:mb-0 mr-0 md:mr-2 focus:bg-gradient-to-r focus:from-indigo-800 focus:to-purple-700"
            >
              Offline activation
            </button>
            <button
              onClick={() => setinvestmentState("Downline")}
              className="rounded-full py-2 pl-3 pr-4 focus:bg-gradient-to-r focus:from-indigo-800 focus:to-purple-700"
            >
              Downline activation
            </button>
          </div>
        </div>
        
        )}
        {nav == "Genealogy" && (
          <div className="px-1.5 w-full md:w-auto absolute top-32 md:top-12 flex justify-center  min-h-[10vh] pt-24 pb-20 mb-44">
            <div className="max-w-[38rem] md:max-w-full md:mx-0 flex items-start flex-row justify-center w-full rounded-full border-2">
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
          <div className="px-1.5 w-full md:w-auto absolute top-32 md:top-12 flex justify-center  min-h-[10vh] pt-24 pb-20 mb-44">
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
          <div className="px-1.5 w-full md:w-auto absolute top-32 md:top-12 flex justify-center  min-h-[10vh] pt-24 pb-20 mb-44">
            <div className="max-w-[40rem] mt-6 gap-0 flex flex-wrap  w-full rounded-full border-2  ">
              <button
                onClick={() => setReportState("roi")}
                className=" rounded-full py-1 px-4 text-sm focus-within:bg-gradient-to-r focus-within:from-indigo-800 focus-within:to-purple-700"
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
                className=" rounded-full py-1 px-4 text-sm focus-within:bg-gradient-to-r focus-within:from-indigo-800 focus-within:to-purple-700"
              >
                Extra Income Report
              </button>
            </div>
          </div>
        )}

        {nav == "Profile" && (
          <div className="px-1.5 w-full md:w-auto absolute top-32 md:top-12 flex justify-center  min-h-[10vh] pt-24 pb-20 mb-44">
            <div className="max-w-[40rem] mt-6 gap-0 flex flex-wrap  w-full rounded-full border-2 justify-center">
              <button
                onClick={() => setprofileStateNav("Profile")}
                className=" rounded-full py-2 px-8  focus-within:bg-gradient-to-r focus-within:from-indigo-800 focus-within:to-purple-700"
              >
                Profile
              </button>
              <button
                onClick={() => setprofileStateNav("kyc")}
                className=" rounded-full py-2 px-8  focus-within:bg-gradient-to-r focus-within:from-indigo-800 focus-within:to-purple-700"
              >
                KYC
              </button>
            </div>
          </div>
        )}
      </div>
      {nav == "Overview" && <Overview setNav={setNav} />}
      {nav == "Investment" && <Investment investmentState={investmentState} />}
      {nav == "Genealogy" && <Genealogy genealogyState={genealogyState} />}
      {nav == "Tickets" && <Tickets tickets={tickets} />}
      {nav == "Reports" && <Reports reportState={reportState} />}
      {nav == "Profile" && <Profile profileStateNav={profileStateNav} />}
    </div>
  );
};

export default Dashboard;
