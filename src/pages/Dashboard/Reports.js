import React from "react";
import ROI from "./reports/ROI";
import { BI } from "./reports/BI";
import { RI } from "./reports/RI";
import { EI } from "./reports/EI";

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
