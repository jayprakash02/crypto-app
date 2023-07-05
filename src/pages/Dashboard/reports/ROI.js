import axios from "axios";
import { baseURL } from "../../../constants/Constant";
import { toast } from "react-hot-toast";
import React, { useState } from "react";

const ROI = () => {
  // Dummy data for the table

  const [loading, setLoading] = useState(false);

  const dummyData = [
    {
      siNo: 1,
      date: "2023-06-01",
      package: "Package A",
      percentage: 10,
      amount: 1000,
    },
    {
      siNo: 2,
      date: "2023-06-02",
      package: "Package B",
      percentage: 15,
      amount: 1500,
    },
    {
      siNo: 3,
      date: "2023-06-03",
      package: "Package C",
      percentage: 12,
      amount: 1200,
    },
    // Add more rows as needed
  ];

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
          setLoading(false);
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
      {dummyData.map((row, index) => (
        <div
          key={index}
          className="bg-black w-full px-12 py-4 justify-between flex"
        >
          <div className="">{row.siNo}</div>
          <div className="">{row.date}</div>
          <div className="">{row.package}</div>
          <div className="">{row.percentage}%</div>
          <div className="">{row.amount}</div>
        </div>
      ))}
    </>
  );
};

export default ROI;
