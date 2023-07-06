import React, { useState } from "react";
import axios from "axios";
import { baseURL } from "../../constants/Constant";
import { toast } from "react-hot-toast";
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
  const [popupVisible, setPopupVisible] = useState(false);

  const handlePurchase = () => {
    setPopupVisible(true);
  };

  return (
    <div className="min-h-[80vh] bg-neutral-900 pt-16   w-full">
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
              className="w-full max-w-[250px] bg-gradient-to-r text-white from-indigo-700 to-fuchsia-700 rounded-xl p-3"
              onClick={handlePurchase}
            >
              Purchase
            </button>
          </div>
          {popupVisible && <Popup />}
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
            <button className="w-full max-w-[250px] bg-gradient-to-r text-white from-indigo-700 to-fuchsia-700 rounded-xl p-3">
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
            <button className="w-full max-w-[250px] bg-gradient-to-r text-white from-indigo-700 to-fuchsia-700 rounded-xl p-3">
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
            <button className="w-full max-w-[250px] bg-black text-white rounded-xl p-3">
              Purchase
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto pb-24">
        <h1 className="text-4xl my-8 font-semibold">Referral Details</h1>

        <div className="bg-black w-full items-center px-12 py-4 justify-between flex ">
          <input
            type="checkbox"
            className="rounded-sm bg-black border-2 p-2"
            name="referral"
            id="referralDetail"
          />
          <div className="">SI No</div>
          <div className="">Package</div>
          <div className="">Days</div>
          <div className="">Invested</div>
          <div className="">Email</div>
          <div className="">Expiry</div>
          <div className="">Payment through</div>
          <div className="">Payment type</div>
        </div>
      </div>
    </div>
  );
};

const Offline = () => {
  return (
    <div className="min-h-[80vh] bg-neutral-900 w-full ">
      <div className="max-w-6xl flex justify-center items-center flex-col mx-auto w-full">
        <div className="max-w-[380px] mt-14 w-full flex rounded-2xl bg-neutral-800">
          <div className="max-w-[150px] w-full"></div>
          <div className="ml-6 p-6">
            <h1 className="text-lg font-bold ">
              Perfect Money ID
              <br />
              123456789
            </h1>
          </div>
        </div>

        <div className="max-w-4xl w-full mx-auto ">
          <h1 className="text-3xl font-semibold my-10">Offline activation</h1>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="mb-2">Downline ID</p>
              <input className="px-2 py-2 rounded-lg bg-black w-full" />
            </div>

            <div>
              <p className="mb-2">Downline Name</p>
              <input className="px-2 py-2 rounded-lg bg-black w-full" />
            </div>

            <div>
              <p className="mb-2">Enter Amount</p>
              <input className="px-2 py-2 rounded-lg bg-black w-full" />
            </div>

            <div>
              <p className="mb-2">Package Name</p>
              <input className="px-2 py-2 rounded-lg bg-black w-full" />
            </div>
          </div>
          <div className="mt-4 mb-4">
            <p className="mb-2">Perfect Money Transaction ID</p>
            <input className="px-2 py-4 rounded-lg bg-black w-full" />
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

            <button className="w-full max-w-[250px] bg-gradient-to-r text-black from-blue-500 to-fuchsia-700 rounded-xl p-3">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Downline = () => {
  return (
    <div className="min-h-[80vh] bg-neutral-900 pt-16   w-full">
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
            <button className="w-full max-w-[250px] bg-gradient-to-r text-white from-indigo-700 to-fuchsia-700 rounded-xl p-3">
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
            <button className="w-full max-w-[250px] bg-gradient-to-r text-white from-indigo-700 to-fuchsia-700 rounded-xl p-3">
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
            <button className="w-full max-w-[250px] bg-gradient-to-r text-white from-indigo-700 to-fuchsia-700 rounded-xl p-3">
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
            <button className="w-full max-w-[250px] bg-black text-white rounded-xl p-3">
              Purchase
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto pb-24">
        <h1 className="text-4xl my-8 font-semibold">Referral Details</h1>

        <div className="bg-black w-full items-center px-12 py-4 justify-between flex ">
          <input
            type="checkbox"
            className="rounded-sm bg-black border-2 p-2"
            name="referral"
            id="referralDetail"
          />
          <div className="">SI No</div>
          <div className="">Package</div>
          <div className="">Days</div>
          <div className="">Invested</div>
          <div className="">Email</div>
          <div className="">Expiry</div>
          <div className="">Payment through</div>
          <div className="">Payment type</div>
        </div>
      </div>
    </div>
  );
};
const Popup = () => {
  const [popupVisible, setPopupVisible] = useState(false);

  const [purchaseDetails, setPurchaseDetails] = useState({
    amount: "",
    buyerName: "",
    buyerEmail: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPurchaseDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem("user_data"));
    if (userData && userData?.token && userData?.email && userData?.userId) {
      const headers = {
        Authorization: `${userData?.token}`,
      };
      console.log(headers);
      try {
        // Make the API call with the purchase details
        const response = await axios.post(
          baseURL + `/api/payment/create_transaction`,
          {
            from_currency: "LTCT",
            to_currency: "LTCT",
            amount: purchaseDetails.amount,
            email: userData?.email,
            custom: `[${userData?.userId},null,1,175,'online','LTCT']`,
            buyer_name: "Rishi", //required
            buyer_email: "pelaf55668@anwarb.com", //required
            ipn_endpoint: "/payment/ipn", //required
          },
          {
            headers: headers, // Include the headers here
          }
        );
        if (response?.data?.data?.checkout_url) {
          window.open(response.data.data.checkout_url, "_blank");
        } else {
          toast.error("Something went wrong");
        }
        // Process the response or perform any necessary actions

        // Close the popup
        setPopupVisible(false);
      } catch (error) {
        console.error(error);
        // Handle any error that occurred during the API call
      }
    }
  };
  return (
    <div className="popup">
      <form onSubmit={handleSubmit}>
        <label htmlFor="amount">Amount:</label>
        <input
          type="text"
          id="amount"
          name="amount"
          value={purchaseDetails.amount}
          onChange={handleInputChange}
        />

        <button type="submit">Purchase</button>
      </form>
    </div>
  );
};
