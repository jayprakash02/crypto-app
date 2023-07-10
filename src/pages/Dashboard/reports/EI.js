import axios from "axios";
import { baseURL } from "../../../constants/Constant";
import { toast } from "react-hot-toast";
import React, { useState, useEffect } from "react";

export const EI = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user_data"));
    if (userData && userData.token && userData.email && userData.userId) {
      const headers = {
        Authorization: userData.token,
      };

      axios
        .get(
          `${baseURL}/api/career-rewards/${userData.userId}?email=${userData.email}`,
          { headers }
        )
        .then((response) => {
          if (response.data) {
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
      <h1 className="text-4xl px-12 mb-8">Extra Income Report</h1>

      <div className="bg-black w-full px-12 py-4 justify-between flex ">
        <div className="">SI No</div>
        <div className="">Achievement</div>
        <div className="">Reward</div>
        <div className="">Date</div>
      </div>

      {data.length > 0 ? (
        data.map((entry, index) => (
          <div
            key={index}
            className="bg-black w-full px-12 py-4 justify-between flex"
          >
            <div className="">{index + 1}</div>
            <div className="">{entry.achievement}</div>
            <div className="">{entry.reward_amount}</div>
            <div className="">{entry.date}</div>
          </div>
        ))
      ) : (
        <p>No career rewards found.</p>
      )}
    </>
  );
};
