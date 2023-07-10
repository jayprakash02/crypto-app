import axios from "axios";
import { baseURL } from "../../../constants/Constant";
import { toast } from "react-hot-toast";
import React, { useState, useEffect } from "react";

const ROI = () => {
  // Dummy data for the table

  const [data, setData] = useState([]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user_data"));
    if (userData && userData.token && userData.email && userData.userId) {
      const headers = {
        Authorization: userData.token,
      };

      axios
        .get(
          `${baseURL}/api/roi-transactions/${userData.userId}?email=${userData.email}`,
          { headers }
        )
        .then((response) => {
          if (response.data.success) {
            setData(response.data.data);
          } else {
            toast.error("Something went wrong");
          }
        })
        .catch((error) => {
          if (
            error?.response?.data?.message ===
            "Token email does not match request email"
          ) {
            toast.error("Invalid Request");
          } else {
            toast.error("Something went wromg");
          }
        });
    } else {
      toast.error("Please sign in again");
    }
  }, []);

  return (
    <>
      <h1 className="text-4xl px-12 mb-8">ROI Report</h1>

      <div className="bg-black w-full px-12 py-4 justify-between flex">
        <div className="">SI No</div>
        <div className="">Date</div>
        <div className="">Package</div>
        <div className="">Percentage</div>
        <div className="">Amount</div>
      </div>

      {/* Render the table rows */}
      {data.length === 0 ? (
        <div>No entries</div>
      ) : (
        data.map((row, index) => (
          <div
            key={index}
            className="bg-black w-full px-12 py-4 justify-between flex"
          >
            <div className="">{row.txn_id}</div>
            <div className="">{row.date}</div>
            <div className="">{row.investment.package.package_name}</div>
            <div className="">{row.investment.package.max_roi}%</div>
            <div className="">{row.amount}</div>
          </div>
        ))
      )}
    </>
  );
};

export default ROI;
