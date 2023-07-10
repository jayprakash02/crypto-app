import axios from "axios";
import { baseURL } from "../../../constants/Constant";
import { toast } from "react-hot-toast";
import React, { useState, useEffect } from "react";

export const RI = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user_data"));
    if (userData && userData.token && userData.email && userData.userId) {
      const headers = {
        Authorization: userData.token,
      };

      axios
        .get(
          `${baseURL}/api/referral-transactions/user/${userData.userId}?email=${userData.email}`,
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
            toast.error("Something went wrong");
          }
        });
    } else {
      toast.error("Please sign in again");
    }
  }, []);

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

      {data.length === 0 ? (
        <div>No entries</div>
      ) : (
        data.map((row, index) => (
          <div
            key={index}
            className="bg-black w-full px-12 py-4 justify-between flex"
          >
            <div className="">{row.id}</div>
            <div className="">{row.date}</div>
            <div className="">{row.referral_user_id}</div>
            <div className="">{row.position}</div>
            <div className="">{row.package_id}</div>
            <div className="">{row.percentage}</div>
            <div className="">{row.amount}</div>
          </div>
        ))
      )}
    </>
  );
};
