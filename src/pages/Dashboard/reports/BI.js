import axios from "axios";
import { baseURL } from "../../../constants/Constant";
import { toast } from "react-hot-toast";
import React, { useState } from "react";
export const BI = () => {
  React.useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user_data"));
    if (userData && userData?.token && userData?.email && userData?.userId) {
      const headers = {
        Authorization: `${userData?.token}`,
      };

      axios
        .get(
          baseURL +
            `/api/roi-transactions/${userData.userId}?email=${userData.email}`,
          {
            headers,
          }
        )

        .then((response) => {
          if (response.data.success) {
            // amount
            if (response.data.data?.amount) {
              console.log(response.data.data.amount);
            } else {
              toast.error("Something went wrong");
            }

            // date
            if (response.data.data?.date) {
              console.log(response.data.data.date);
            } else {
              toast.error("Something went wrong");
            }

            // package name
            if (response.data.data?.investment?.package?.package_name) {
              console.log(response.data.data.investment.package.package_name);
            } else {
              toast.error("Something went wrong");
            }

            // percent
            if (response.data.data?.investment?.package?.min_roi_low) {
              console.log(response.data.data.investment.package.min_roi_low);
            } else {
              toast.error("Something went wrong");
            }
          } else {
            toast.error("Something went wromg");
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
