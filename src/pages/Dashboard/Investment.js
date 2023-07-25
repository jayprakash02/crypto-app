import React, { useState, useEffect } from "react";
import { baseURL } from "../../constants/Constant";
import { toast } from "react-hot-toast";
import axios from "axios";

const Investment = ({ investmentState }) => {
  return (
    <div>
      {investmentState === "Package" && <Package />}
      {investmentState === "Offline" && <Offline />}
      {investmentState === "Downline" && <Downline />}
    </div>
  );
};

export default Investment;

const Package = () => {
  const dummyDATA = [
    {
      siNo: 1,
      package: "Package A",
      days: 2,
      invested: 2000,
      email: "bourax@gmail.com",
      expiry: "22/11/2023",
      paymentThrough: "CoinBase",
      paymentType: "null",
    },
    {
      siNo: 2,
      package: "Package C",
      days: 4,
      invested: 20400,
      email: "bourax@gmail.com",
      expiry: "23/11/2023",
      paymentThrough: "CoinBase",
      paymentType: "null",
    },
    {
      siNo: 3,
      package: "Package B",
      days: 8,
      invested: 2300,
      email: "bourax@gmail.com",
      expiry: "2/9/2023",
      paymentThrough: "CoinBase",
      paymentType: "null",
    },
    {
      siNo: 4,
      package: "Package D",
      days: 1,
      invested: 8000,
      email: "bourax@gmail.com",
      expiry: "2/11/2023",
      paymentThrough: "CoinBase",
      paymentType: "null",
    },
  ];

  // Modal state
  const [open, setopen] = useState(false);
  // package Name
  const [packageName, setPackageName] = useState("");

  const [paymentAmount, setpaymentAmount] = useState("");
  const [packageDetailModal, setpackageDetailModal] = useState(false);

  const handleModal = () => {
    if (paymentAmount !== "") {
      setopen((prev) => !prev);
      setpackageDetailModal((prev) => !prev);
    }
  };

  const [packageDetailsForm, setpackageDetailsForm] = useState({
    packageNameField: " ",
    dailyReturnsFeild: "",
    durationField: "",
    amountToPay: "",
    earning: "",
  });

  const handlePackageDetail = () => {
    setpackageDetailModal((prev) => !prev);
  };

  const [referralData, setReferralData] = useState([]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user_data"));
    if (userData && userData.token && userData.email && userData.userId) {
      const headers = {
        Authorization: userData.token,
      };

      axios
        .get(
          `${baseURL}/api/investments/user/${userData.userId}?email=${userData.email}`,
          { headers }
        )
        .then((response) => {
          console.log(response);
          if (response.data.success) {
            setReferralData(response.data.data);
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
    <div className="overflow-x-hidden min-h-[80vh] bg-neutral-900 pt-16   w-full">
      <h1 className="font-semibold text-4xl  text-center text-white">
        Affordable Pricing List
      </h1>
      <div className="w-full flex space-x-6 max-w-7xl mx-auto px-6 py-12">
        <div className="border-2 border-zinc-400 bg-black  max-w-[340px] max-h-[500px]  rounded-2xl p-4">
          <p className="font-semibold text-white ">EXPLORER PACKAGE</p>
          <h2 className="text-[26px]  font-semibold mb-6">$30-$2999</h2>
          <div className="space-y-5">
            <div className="W-full flex space-x-4">
              <img src="./images/icons/checkbox.png" className="w-6 h-6" />
              <p className="font-semibold">ROI: 1.4%- 1.8%</p>
            </div>
            <div className="W-full flex space-x-4">
              <img src="./images/icons/checkbox.png" className="w-6  h-6" />
              <p className="font-semibold">Duration: 175 working days</p>
            </div>
            <div className="W-full flex space-x-4">
              <img src="./images/icons/checkbox.png" className="w-6 h-6" />
              <p className="font-semibold">Direct Referral: 8%</p>
            </div>
            <div className="W-full flex space-x-4">
              <img src="./images/icons/checkbox.png" className="w-6 h-6" />
              <p className="font-semibold">Binary Bonus: 10%</p>
            </div>
            <div className="W-full flex space-x-4">
              <img src="./images/icons/checkbox.png" className="w-6 h-6" />
              <p className="font-semibold">Capping Limit: $1200</p>
            </div>
            <div className="W-full flex space-x-4">
              <img src="./images/icons/checkbox.png" className="w-6 h-6" />
              <p className="font-semibold">Principle Returns: 30%</p>
            </div>
            <button
              onClick={() => {
                setopen((prev) => !prev);
                setPackageName("EXPLORER");
              }}
              className="w-full max-w-[250px] bg-gradient-to-r text-white from-indigo-700 to-fuchsia-700 rounded-xl p-3"
            >
              Purchase
            </button>
          </div>
        </div>

        <div className="border-2 border-zinc-400 bg-black  max-w-[340px]  rounded-2xl p-4">
          <p className="font-semibold text-white ">MAVERICK PACKAGE</p>
          <h2 className="text-[26px]  font-semibold mb-6">$3000-$19,999</h2>
          <div className="space-y-5">
            <div className="W-full flex space-x-4">
              <img src="./images/icons/checkbox.png" className="w-6 h-6" />
              <p className="font-semibold">ROI: 1.7%- 2.2%</p>
            </div>
            <div className="W-full flex space-x-4">
              <img src="./images/icons/checkbox.png" className="w-6  h-6" />
              <p className="font-semibold">Duration: 165 working days</p>
            </div>
            <div className="W-full flex space-x-4">
              <img src="./images/icons/checkbox.png" className="w-6 h-6" />
              <p className="font-semibold">Direct Referral: 12%</p>
            </div>
            <div className="W-full flex space-x-4">
              <img src="./images/icons/checkbox.png" className="w-6 h-6" />
              <p className="font-semibold">Binary Bonus: 10%</p>
            </div>
            <div className="W-full flex space-x-4">
              <img src="./images/icons/checkbox.png" className="w-6 h-6" />
              <p className="font-semibold">Capping Limit: $2500</p>
            </div>
            <div className="W-full flex space-x-4">
              <img src="./images/icons/checkbox.png" className="w-6 h-6" />
              <p className="font-semibold">Principle Returns: 40%</p>
            </div>
            <button
              name="MAVERICK"
              onClick={() => {
                setopen((prev) => !prev);
                setPackageName("MAVERICK");
              }}
              className="w-full max-w-[250px] bg-gradient-to-r text-white from-indigo-700 to-fuchsia-700 rounded-xl p-3"
            >
              Purchase
            </button>
          </div>
        </div>

        <div className="border-2 border-zinc-400 bg-black  max-w-[340px]  rounded-2xl p-4">
          <p className="font-semibold text-white ">VANQUARD PACKAGE</p>
          <h2 className="text-[26px]  font-semibold mb-6">$30-$2999</h2>
          <div className="space-y-5">
            <div className="W-full flex space-x-4">
              <img src="./images/icons/checkbox.png" className="w-6 h-6" />
              <p className="font-semibold">ROI: 2%- 2.6%</p>
            </div>
            <div className="W-full flex space-x-4">
              <img src="./images/icons/checkbox.png" className="w-6  h-6" />
              <p className="font-semibold">Duration: 155 working days</p>
            </div>
            <div className="W-full flex space-x-4">
              <img src="./images/icons/checkbox.png" className="w-6 h-6" />
              <p className="font-semibold">Direct Referral: 16%</p>
            </div>
            <div className="W-full flex space-x-4">
              <img src="./images/icons/checkbox.png" className="w-6 h-6" />
              <p className="font-semibold">Binary Bonus: 10%</p>
            </div>
            <div className="W-full flex space-x-4">
              <img src="./images/icons/checkbox.png" className="w-6 h-6" />
              <p className="font-semibold">Capping Limit: $6000</p>
            </div>
            <div className="W-full flex space-x-4">
              <img src="./images/icons/checkbox.png" className="w-6 h-6" />
              <p className="font-semibold">Principle Returns: 50%</p>
            </div>
            <button
              onClick={() => {
                setopen((prev) => !prev);
                setPackageName("VANQUARD");
              }}
              className="w-full max-w-[250px] bg-gradient-to-r text-white from-indigo-700 to-fuchsia-700 rounded-xl p-3"
            >
              Purchase
            </button>
          </div>
        </div>

        <div className="border-2 border-zinc-400 bg-gradient-to-bl from-indigo-900 to-fuchsia-700  max-w-[340px]  rounded-2xl p-4">
          <p className="font-semibold text-white ">LEGACY PACKAGE</p>
          <h2 className="text-[26px]  font-semibold mb-6">$60,000-$100,000</h2>
          <div className="space-y-5">
            <div className="W-full flex space-x-4">
              <img src="./images/icons/checkbox.png" className="w-6" />
              <p className="font-semibold">ROI: 2.3%- 3%</p>
            </div>
            <div className="W-full flex space-x-4">
              <img src="./images/icons/checkbox.png" className="w-6 h-6" />
              <p className="font-semibold">Duration: 165 working days</p>
            </div>
            <div className="W-full flex space-x-4">
              <img src="./images/icons/checkbox.png" className="w-6" />
              <p className="font-semibold">Direct Referral: 20%</p>
            </div>
            <div className="W-full flex space-x-4">
              <img src="./images/icons/checkbox.png" className="w-6" />
              <p className="font-semibold">Binary Bonus: 10%</p>
            </div>
            <div className="W-full flex space-x-4">
              <img src="./images/icons/checkbox.png" className="w-6" />
              <p className="font-semibold">Capping Limit: $10,000</p>
            </div>
            <div className="W-full flex space-x-4">
              <img src="./images/icons/checkbox.png" className="w-6" />
              <p className="font-semibold">Principle Returns: 75%</p>
            </div>
            <button
              onClick={() => {
                setopen((prev) => !prev);
                setPackageName("LEGACY");
              }}
              className="w-full max-w-[250px] bg-black text-white rounded-xl p-3"
            >
              Purchase
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="w-full flex justify-center absolute top-0 left-0 max-h-full h-full  z-40  items-center bg-black bg-opacity-70  ">
          <div className="max-w-[450px] rounded-2xl bg-neutral-900 p-6 min-h-[280px] relative">
            <button
              onClick={() => setopen((prev) => !prev)}
              className="rounded-full absolute -top-4 -right-4 w-10 p-3  bg-gradient-to-r text-white from-indigo-600 to-fuchsia-600  "
            >
              <img src="./images/icons/close.png" className="w-8" />
            </button>
            <p className="font-medium text-sm tracking-wider">{packageName}</p>

            <h1 className="text-4xl font-medium mb-10">Payment</h1>

            <label htmlFor="paymentamount" className="">
              Enter amount
            </label>
            <input
              id="paymentamount"
              name=""
              value={paymentAmount}
              onChange={(e) => setpaymentAmount(e.target.value)}
              className="bg-black px-6 py-3 mt-4 mb-6  rounded-2xl w-full"
            />
            <button
              onClick={handleModal}
              className="w-full  bg-gradient-to-r text-white from-indigo-700 to-fuchsia-700 rounded-xl p-3"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {packageDetailModal && (
        <div className="w-full flex justify-center absolute top-0 left-0 max-h-full z-40 h-full  items-center bg-black bg-opacity-70  ">
          <div className="max-w-[450px] rounded-2xl bg-neutral-900 p-6 min-h-[280px] relative">
            <button
              onClick={() => setpackageDetailModal((prev) => !prev)}
              className="rounded-full absolute -top-4 -right-4 w-10 p-3  bg-gradient-to-r text-white from-indigo-600 to-fuchsia-600  "
            >
              <img src="./images/icons/close.png" className="w-8" />
            </button>

            <h1 className="text-4xl font-medium mb-6">Package Detail</h1>

            <label htmlFor="packageName" className="text-sm ">
              Package name
            </label>
            <input
              id="packageName"
              name="packageNameField"
              value={packageDetailsForm.packageNameField}
              className="bg-black px-6 py-2 mt-2 mb-4  rounded-2xl w-full"
            />

            <label htmlFor="dailyReturnsFeild" className="text-sm ">
              Daily returns
            </label>
            <input
              id="dailyReturnsFeild"
              name="dailyReturnsFeild"
              value={packageDetailsForm.dailyReturnsFeild}
              className="bg-black px-6 py-2 mt-2 mb-4  rounded-2xl w-full"
            />

            <label htmlFor="durationField" className="text-sm ">
              Package duration
            </label>
            <input
              id="durationField"
              name="durationField"
              value={packageDetailsForm.durationField}
              className="bg-black px-6 py-2 mt-2 mb-4  rounded-2xl w-full"
            />

            <label htmlFor="amountToPay" className="text-sm ">
              Amount to pay
            </label>
            <input
              id="amountToPay"
              name="amountToPay"
              value={packageDetailsForm.amountToPay}
              className="bg-black px-6 py-2 mt-2 mb-4  rounded-2xl w-full"
            />

            <label htmlFor="earning" className="text-sm ">
              Earning
            </label>
            <input
              id="earning"
              name="earning"
              value={packageDetailsForm.earning}
              className="bg-black px-6 py-2 mt-2 mb-4  rounded-2xl w-full"
            />
            <button
              onClick={handlePackageDetail}
              className="w-full  bg-gradient-to-r text-white from-indigo-700 to-fuchsia-700 rounded-xl p-3"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      <div className="w-full max-w-full px-12 pb-24">
        <table className="w-full">
          <h1 className="text-4xl my-8 font-semibold">Investment Details</h1>

          <thead className="bg-black w-full text-left items-center px-12 py-4 justify-between flex">
            <th>
              <input
                type="checkbox"
                className="rounded-sm bg-black border-2 p-2"
                name="referral"
                id="referralDetail"
              />
            </th>
            <th className="w-full max-w-[80px]">SI No</th>
            <th className="w-full max-w-[100px]">Package</th>
            <th className="w-full max-w-[100px]">Days</th>
            <th className="w-full max-w-[100px]">Invested</th>
            <th className="w-full max-w-[200px]">Email</th>
            <th className="w-full max-w-[100px]">Expiry</th>
            <th className="w-full max-w-[100px]">Payment through</th>
            <th className="w-full max-w-[100px]">Payment type</th>
          </thead>
          <tbody className="w-full">
            {referralData.map((e, key) => {
              return (
                <tr
                  key={key}
                  className="bg-black text-left w-full items-center px-12 py-4  flex"
                >
                  <td>
                    <input
                      type="checkbox"
                      className="rounded-sm bg-black border-2 p-2 mr-12"
                      name="referral"
                      id="referralDetail"
                    />
                  </td>
                  <td className="w-full max-w-[80px] ml-4">
                    {e.investment_id}
                  </td>
                  <td className="w-full max-w-[100px] ml-10">{e.package}</td>
                  <td className="w-full max-w-[100px] ml-14">
                    {e.daysPassed} days
                  </td>
                  <td className="w-full max-w-[100px] ml-14">
                    {e.invested_amount}
                  </td>
                  <td className="w-full max-w-[250px] ml-12 overflow-hidden">
                    {e.user_id}
                  </td>
                  <td className="w-full max-w-[100px] ml-6">{e.expires_on}</td>
                  <td className="w-full max-w-[100px] ml-14">
                    {e.payment_through}
                  </td>
                  <td className="w-full max-w-[100px] ml-16">
                    {e.payment_type}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Offline = () => {
  // form state
  const [offlineInvestmentForm, setofflineInvestmentForm] = useState({
    downlineID: "",
    downlineName: "",
    amount: "",
    packageName: "",
    perfectMoneyID: "",
  });

  const handleChange = (e) => {
    setofflineInvestmentForm({
      ...offlineInvestmentForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(offlineInvestmentForm, "offline Data");
  };

  //perfectMoneyID
  const [perfectMoneyID, setperfectMoneyID] = useState("123456789");
  return (
    <div className="overflow-x-hidden min-h-[80vh] bg-neutral-900 w-full ">
      <div className="max-w-6xl flex justify-center items-center flex-col mx-auto w-full">
        <div className="max-w-[380px] mt-14 w-full flex rounded-2xl bg-neutral-800">
          <div className="max-w-[150px] w-full"></div>
          <div className="ml-6 p-6">
            <h1 className="text-lg font-bold ">
              Perfect Money ID
              <br />
              {perfectMoneyID}
            </h1>
          </div>
        </div>

        <div className="max-w-4xl w-full mx-auto ">
          <h1 className="text-3xl font-semibold my-10">Offline activation</h1>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="mb-2">Downline ID</p>
              <input
                onChange={handleChange}
                name="downlineID"
                value={offlineInvestmentForm.downlineID}
                className="px-2 py-2 rounded-lg bg-black w-full"
              />
            </div>

            <div>
              <p className="mb-2">Downline Name</p>
              <input
                onChange={handleChange}
                name="downlineName"
                value={offlineInvestmentForm.downlineName}
                className="px-2 py-2 rounded-lg bg-black w-full"
              />
            </div>

            <div>
              <p className="mb-2">Enter Amount</p>
              <input
                onChange={handleChange}
                name="amount"
                value={offlineInvestmentForm.amount}
                className="px-2 py-2 rounded-lg bg-black w-full"
              />
            </div>

            <div>
              <p className="mb-2">Package Name</p>
              <input
                onChange={handleChange}
                name="packageName"
                value={offlineInvestmentForm.packageName}
                className="px-2 py-2 rounded-lg bg-black w-full"
              />
            </div>
          </div>
          <div className="mt-4 mb-4">
            <p className="mb-2">Perfect Money Transaction ID</p>
            <input
              onChange={handleChange}
              name="perfectMoneyID"
              value={offlineInvestmentForm.perfectMoneyID}
              className="px-2 py-4 rounded-lg bg-black w-full"
            />
          </div>

          <div className="w-full flex flex-col max-w-[400px] mb-24 mx-auto  mt-10 justify-center items-center">
            <div className="flex mb-2 items-center  space-x-2 w-full pb-4 ">
              <input
                type="radio"
                className="rounded-full p-2"
                name="investment"
                id="voucher"
              />
              <label htmlFor="voucher" className="text-lg">
                Click here for ozo token investment
              </label>
            </div>

            <div className="flex mb-2 items-center space-x-2 w-full pb-4">
              <input
                type="radio"
                className="rounded-full p-2"
                name="investment"
                id="downline"
              />
              <label htmlFor="downline" className="text-lg ">
                Click here for downline activation
              </label>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full max-w-[250px] bg-gradient-to-r text-black from-blue-500 to-fuchsia-700 rounded-xl p-3"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Downline = () => {
  // Modal state
  const [open, setopen] = useState(false);

  // package Name
  const [packageName, setPackageName] = useState("");
  const [paymentAmount, setpaymentAmount] = useState("");
  const [packageDetailModal, setpackageDetailModal] = useState(false);

  const handleModal = () => {
    if (paymentAmount !== "") {
      setopen((prev) => !prev);
      setpackageDetailModal((prev) => !prev);
    }
  };

  const [packageDetailsForm, setpackageDetailsForm] = useState({
    packageNameField: " ",
    dailyReturnsFeild: "",
    durationField: "",
    amountToPay: "",
    earning: "",
  });

  const handlePackageDetail = () => {
    setpackageDetailModal((prev) => !prev);
  };

  const dummyDATA = [
    {
      siNo: 1,
      package: "Package A",
      days: 2,
      invested: 2000,
      email: "bourax@gmail.com",
      expiry: "22/11/2023",
      paymentThrough: "CoinBase",
      paymentType: "null",
    },
    {
      siNo: 2,
      package: "Package C",
      days: 4,
      invested: 20400,
      email: "bourax@gmail.com",
      expiry: "23/11/2023",
      paymentThrough: "CoinBase",
      paymentType: "null",
    },
    {
      siNo: 3,
      package: "Package B",
      days: 8,
      invested: 2300,
      email: "bourax@gmail.com",
      expiry: "2/9/2023",
      paymentThrough: "CoinBase",
      paymentType: "null",
    },
    {
      siNo: 4,
      package: "Package D",
      days: 1,
      invested: 8000,
      email: "bourax@gmail.com",
      expiry: "2/11/2023",
      paymentThrough: "CoinBase",
      paymentType: "null",
    },
  ];

  return (
    <div className="overflow-x-hidden min-h-[80vh] bg-neutral-900 pt-16   w-full">
      <h1 className="font-semibold text-4xl  text-center text-white">
        Affordable Pricing List
      </h1>

      {open && (
        <div className="w-full flex justify-center absolute top-0 left-0 max-h-full h-full  items-center bg-black bg-opacity-70  ">
          <div className="max-w-[450px] rounded-2xl bg-neutral-900 p-6 min-h-[280px] relative">
            <button
              onClick={() => setopen((prev) => !prev)}
              className="rounded-full absolute -top-4 -right-4 w-10 p-3  bg-gradient-to-r text-white from-indigo-600 to-fuchsia-600  "
            >
              <img src="./images/icons/close.png" className="w-8" />
            </button>
            <p className="font-medium text-sm tracking-wider">{packageName}</p>

            <h1 className="text-4xl font-medium mb-10">Payment</h1>

            <label htmlFor="paymentamount" className="">
              Enter amount
            </label>
            <input
              id="paymentamount"
              name=""
              value={paymentAmount}
              onChange={(e) => setpaymentAmount(e.target.value)}
              className="bg-black px-6 py-3 mt-4 mb-6  rounded-2xl w-full"
            />
            <button
              onClick={handleModal}
              className="w-full  bg-gradient-to-r text-white from-indigo-700 to-fuchsia-700 rounded-xl p-3"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {packageDetailModal && (
        <div className="w-full flex justify-center absolute top-0 left-0 min-h-[120vh] h-full  items-center bg-black bg-opacity-70  ">
          <div className="max-w-[450px] rounded-2xl bg-neutral-900 p-6 min-h-[280px] relative">
            <button
              onClick={() => setpackageDetailModal((prev) => !prev)}
              className="rounded-full absolute -top-4 -right-4 w-10 p-3  bg-gradient-to-r text-white from-indigo-600 to-fuchsia-600  "
            >
              <img src="./images/icons/close.png" className="w-8" />
            </button>

            <h1 className="text-4xl font-medium mb-6">Package Detail</h1>

            <label htmlFor="packageName" className="text-sm ">
              Package name
            </label>
            <input
              id="packageName"
              name="packageNameField"
              value={packageDetailsForm.packageNameField}
              className="bg-black px-6 py-2 mt-2 mb-4  rounded-2xl w-full"
            />

            <label htmlFor="dailyReturnsFeild" className="text-sm ">
              Daily returns
            </label>
            <input
              id="dailyReturnsFeild"
              name="dailyReturnsFeild"
              value={packageDetailsForm.dailyReturnsFeild}
              className="bg-black px-6 py-2 mt-2 mb-4  rounded-2xl w-full"
            />

            <label htmlFor="durationField" className="text-sm ">
              Package duration
            </label>
            <input
              id="durationField"
              name="durationField"
              value={packageDetailsForm.durationField}
              className="bg-black px-6 py-2 mt-2 mb-4  rounded-2xl w-full"
            />

            <label htmlFor="amountToPay" className="text-sm ">
              Amount to pay
            </label>
            <input
              id="amountToPay"
              name="amountToPay"
              value={packageDetailsForm.amountToPay}
              className="bg-black px-6 py-2 mt-2 mb-4  rounded-2xl w-full"
            />

            <label htmlFor="earning" className="text-sm ">
              Earning
            </label>
            <input
              id="earning"
              name="earning"
              value={packageDetailsForm.earning}
              className="bg-black px-6 py-2 mt-2 mb-4  rounded-2xl w-full"
            />
            <button
              onClick={handlePackageDetail}
              className="w-full  bg-gradient-to-r text-white from-indigo-700 to-fuchsia-700 rounded-xl p-3"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      <div className="w-full flex space-x-6 max-w-7xl mx-auto px-6 py-12">
        <div className="border-2 border-zinc-400 bg-black  max-w-[340px] max-h-[500px]  rounded-2xl p-4">
          <p className="font-semibold text-white ">EXPLORER PACKAGE</p>
          <h2 className="text-[26px]  font-semibold mb-6">$30-$2999</h2>
          <div className="space-y-5">
            <div className="W-full flex space-x-4">
              <img src="./images/icons/checkbox.png" className="w-6 h-6" />
              <p className="font-semibold">ROI: 1.4%- 1.8%</p>
            </div>
            <div className="W-full flex space-x-4">
              <img src="./images/icons/checkbox.png" className="w-6  h-6" />
              <p className="font-semibold">Duration: 175 working days</p>
            </div>
            <div className="W-full flex space-x-4">
              <img src="./images/icons/checkbox.png" className="w-6 h-6" />
              <p className="font-semibold">Direct Referral: 8%</p>
            </div>
            <div className="W-full flex space-x-4">
              <img src="./images/icons/checkbox.png" className="w-6 h-6" />
              <p className="font-semibold">Binary Bonus: 10%</p>
            </div>
            <div className="W-full flex space-x-4">
              <img src="./images/icons/checkbox.png" className="w-6 h-6" />
              <p className="font-semibold">Capping Limit: $1200</p>
            </div>
            <div className="W-full flex space-x-4">
              <img src="./images/icons/checkbox.png" className="w-6 h-6" />
              <p className="font-semibold">Principle Returns: 30%</p>
            </div>
            <button
              onClick={() => {
                setopen((prev) => !prev);
                setPackageName("EXPLORER");
              }}
              className="w-full max-w-[250px] bg-gradient-to-r text-white from-indigo-700 to-fuchsia-700 rounded-xl p-3"
            >
              Purchase
            </button>
          </div>
        </div>

        <div className="border-2 border-zinc-400 bg-black  max-w-[340px]  rounded-2xl p-4">
          <p className="font-semibold text-white ">MAVERICK PACKAGE</p>
          <h2 className="text-[26px]  font-semibold mb-6">$3000-$19,999</h2>
          <div className="space-y-5">
            <div className="W-full flex space-x-4">
              <img src="./images/icons/checkbox.png" className="w-6 h-6" />
              <p className="font-semibold">ROI: 1.7%- 2.2%</p>
            </div>
            <div className="W-full flex space-x-4">
              <img src="./images/icons/checkbox.png" className="w-6  h-6" />
              <p className="font-semibold">Duration: 165 working days</p>
            </div>
            <div className="W-full flex space-x-4">
              <img src="./images/icons/checkbox.png" className="w-6 h-6" />
              <p className="font-semibold">Direct Referral: 12%</p>
            </div>
            <div className="W-full flex space-x-4">
              <img src="./images/icons/checkbox.png" className="w-6 h-6" />
              <p className="font-semibold">Binary Bonus: 10%</p>
            </div>
            <div className="W-full flex space-x-4">
              <img src="./images/icons/checkbox.png" className="w-6 h-6" />
              <p className="font-semibold">Capping Limit: $2500</p>
            </div>
            <div className="W-full flex space-x-4">
              <img src="./images/icons/checkbox.png" className="w-6 h-6" />
              <p className="font-semibold">Principle Returns: 40%</p>
            </div>
            <button
              onClick={() => {
                setopen((prev) => !prev);
                setPackageName("MAVERICK");
              }}
              className="w-full max-w-[250px] bg-gradient-to-r text-white from-indigo-700 to-fuchsia-700 rounded-xl p-3"
            >
              Purchase
            </button>
          </div>
        </div>

        <div className="border-2 border-zinc-400 bg-black  max-w-[340px]  rounded-2xl p-4">
          <p className="font-semibold text-white ">VANQUARD PACKAGE</p>
          <h2 className="text-[26px]  font-semibold mb-6">$30-$2999</h2>
          <div className="space-y-5">
            <div className="W-full flex space-x-4">
              <img src="./images/icons/checkbox.png" className="w-6 h-6" />
              <p className="font-semibold">ROI: 2%- 2.6%</p>
            </div>
            <div className="W-full flex space-x-4">
              <img src="./images/icons/checkbox.png" className="w-6  h-6" />
              <p className="font-semibold">Duration: 155 working days</p>
            </div>
            <div className="W-full flex space-x-4">
              <img src="./images/icons/checkbox.png" className="w-6 h-6" />
              <p className="font-semibold">Direct Referral: 16%</p>
            </div>
            <div className="W-full flex space-x-4">
              <img src="./images/icons/checkbox.png" className="w-6 h-6" />
              <p className="font-semibold">Binary Bonus: 10%</p>
            </div>
            <div className="W-full flex space-x-4">
              <img src="./images/icons/checkbox.png" className="w-6 h-6" />
              <p className="font-semibold">Capping Limit: $6000</p>
            </div>
            <div className="W-full flex space-x-4">
              <img src="./images/icons/checkbox.png" className="w-6 h-6" />
              <p className="font-semibold">Principle Returns: 50%</p>
            </div>
            <button
              onClick={() => {
                setopen((prev) => !prev);
                setPackageName("VANQUARD");
              }}
              className="w-full max-w-[250px] bg-gradient-to-r text-white from-indigo-700 to-fuchsia-700 rounded-xl p-3"
            >
              Purchase
            </button>
          </div>
        </div>

        <div className="border-2 border-zinc-400 bg-gradient-to-bl from-indigo-900 to-fuchsia-700  max-w-[340px]  rounded-2xl p-4">
          <p className="font-semibold text-white ">LEGACY PACKAGE</p>
          <h2 className="text-[26px]  font-semibold mb-6">$60,000-$100,000</h2>
          <div className="space-y-5">
            <div className="W-full flex space-x-4">
              <img src="./images/icons/checkbox.png" className="w-6" />
              <p className="font-semibold">ROI: 2.3%- 3%</p>
            </div>
            <div className="W-full flex space-x-4">
              <img src="./images/icons/checkbox.png" className="w-6 h-6" />
              <p className="font-semibold">Duration: 165 working days</p>
            </div>
            <div className="W-full flex space-x-4">
              <img src="./images/icons/checkbox.png" className="w-6" />
              <p className="font-semibold">Direct Referral: 20%</p>
            </div>
            <div className="W-full flex space-x-4">
              <img src="./images/icons/checkbox.png" className="w-6" />
              <p className="font-semibold">Binary Bonus: 10%</p>
            </div>
            <div className="W-full flex space-x-4">
              <img src="./images/icons/checkbox.png" className="w-6" />
              <p className="font-semibold">Capping Limit: $10,000</p>
            </div>
            <div className="W-full flex space-x-4">
              <img src="./images/icons/checkbox.png" className="w-6" />
              <p className="font-semibold">Principle Returns: 75%</p>
            </div>
            <button
              onClick={() => {
                setopen((prev) => !prev);
                setPackageName("LEGACY");
              }}
              className="w-full max-w-[250px] bg-black text-white rounded-xl p-3"
            >
              Purchase
            </button>
          </div>
        </div>
      </div>

      <div className=" w-full max-w-full px-12 pb-24 ">
        <table className="w-full">
          <h1 className="text-4xl my-8 font-semibold">Referral Details</h1>

          <thead className="bg-black w-full text-left items-center px-12 py-4 justify-between flex ">
            <th>
              <input
                type="checkbox"
                className="rounded-sm bg-black border-2 p-2"
                name="referral"
                id="referralDetail"
              />
            </th>
            <th className="w-full   max-w-[80px] ">SI No</th>
            <th className="w-full max-w-[100px] ">Package</th>
            <th className="w-full max-w-[100px] ">Days</th>
            <th className="w-full max-w-[100px] ">Invested</th>
            <th className="w-full max-w-[200px] ">Email</th>
            <th className="w-full max-w-[100px] ">Expiry</th>
            <th className="w-full max-w-[100px]">Payment through</th>
            <th className="w-full max-w-[100px]">Payment type</th>
          </thead>
          <tbody className="w-full">
            {dummyDATA.map((e, key) => {
              return (
                <tr
                  key={key}
                  className="bg-black text-left w-full items-center px-12 py-4  flex "
                >
                  <td>
                    {" "}
                    <input
                      type="checkbox"
                      className="rounded-sm bg-black border-2 p-2 mr-12"
                      name="referral"
                      id="referralDetail"
                    />
                  </td>
                  <td className="w-full max-w-[80px] ml-4 ">{e.siNo}</td>
                  <td className="w-full max-w-[100px]  ml-10 ">{e.package}</td>
                  <td className="w-full max-w-[100px]  ml-14  ">
                    {e.days} days
                  </td>
                  <td className="w-full max-w-[100px]  ml-14  ">
                    {e.invested}
                  </td>
                  <td className="w-full max-w-[250px]  ml-12 overflow-hidden  ">
                    {e.email}
                  </td>
                  <td className="w-full max-w-[100px]  ml-6 ">{e.expiry}</td>
                  <td className="w-full max-w-[100px] ml-14 ">
                    {" "}
                    {e.paymentThrough}
                  </td>
                  <td className="w-full max-w-[100px] ml-16 ">
                    {e.paymentType}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
