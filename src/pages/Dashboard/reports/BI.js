import axios from "axios";
import { baseURL } from "../../../constants/Constant";
import { toast } from "react-hot-toast";
import React, { useState, useEffect } from "react";

export const BI = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user_data"));
    if (userData && userData.token && userData.email && userData.userId) {
      const headers = {
        Authorization: userData.token,
      };

      axios
        .get(
          `${baseURL}/api/binary-transactions/user/${userData.userId}?email=${userData.email}`,
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
      <h1 className="text-4xl px-12 mb-8">Binary Referral Report</h1>

      <div className="bg-black w-full px-12 py-4 justify-between flex ">
        <div className="">SI No</div>
        <div className="">Referred User</div>

        <div className="">Date</div>
        <div className="">Left Business</div>
        <div className="">Right Business</div>
        <div className="">Binary</div>
        <div className="">Percentage</div>
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
            <div className="">{row.user_id}</div>
            <div className="">{row.date}</div>
            <div className="">{row.position === "left" ? row.amount : "0"}</div>
            <div className="">
              {row.position === "right" ? row.amount : "0"}
            </div>
            <div className="">{row.position}</div>
            <div className="">{row.percentage}</div>
          </div>
        ))
      )}
    </>
  );
};
