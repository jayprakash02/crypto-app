import React from "react";
import ROI from "./reports/ROI";

const Reports = ({ reportState }) => {
  return (
    <div className="min-h-[100vh] py-20 w-full bg-neutral-900 px-12">
      {reportState === "roi" && <ROI />}
      {reportState === "bi" && <BI />}
      {reportState === "ri" && <RI />}
      {reportState === "ei" && <EI />}
    </div>
  );
};

export default Reports;

const RI = () => {
  return (
    <>
      <h1 className="text-4xl px-12 mb-8">RI Report</h1>

      <div className="bg-black w-full px-12 py-4 justify-between flex ">
        <div className="">SI No</div>
        <div className="">Date</div>
        <div className="">Referral User</div>
        <div className="">Position</div>
        <div className="">Package</div>
        <div className="">Percentage</div>
        <div className="">Referral Amount</div>
      </div>
    </>
  );
};

const BI = () => {
  return (
    <>
      <h1 className="text-4xl px-12 mb-8">Binary Referral Report</h1>

      <div className="bg-black w-full px-12 py-4 justify-between flex ">
        <div className="">SI No</div>
        <div className="">Date</div>
        <div className="">Left Business</div>
        <div className="">Right Business</div>
        <div className="">Binary</div>
        <div className="">Percentage</div>
        <div className="">Amount</div>
        <div className="">Left Carry</div>
        <div className="">Right Carry</div>
      </div>
    </>
  );
};

const EI = () => {
  return (
    <>
      <h1 className="text-4xl px-12 mb-8">Extra Income Report</h1>

      <div className="bg-black w-full px-12 py-4 justify-between flex ">
        <div className="">SI No</div>
        <div className="">Achievement</div>
        <div className="">Reward</div>
        <div className="">Date</div>
      </div>
    </>
  );
};
