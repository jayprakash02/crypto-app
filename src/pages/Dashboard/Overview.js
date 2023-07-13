import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-hot-toast";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { baseURL } from "../../constants/Constant";
import axios from "axios";
const Overview = ({ setNav }) => {
  const [data, setData] = useState([]);
  // Overview state
  const [referralData, setReferralData] = useState([]);

  const [totalInvestmentRevenue, setTotalInvestmentRevenue] =
    useState("981.567.000");

  const [totalReturns, settotalReturns] = useState("129.897.000");
  const [totalReturnsTarget, settotalReturnsTarget] = useState("250.800.000");

  const [totalWithdrawal, settotalWithdrawal] = useState("450000");
  const [totalWithdrawalRemaining, settotalWithdrawalRemaining] =
    useState("999.980");

  const [totalEarning, settotalEarning] = useState("95851");
  const [totalEarningByPercentage, settotalEarningByPercentage] =
    useState("95");

  //wallets
  const [depositWallet, setdepositWallet] = useState("0");
  const [roiWallet, setroiWallet] = useState("50.215.000");
  const [rbWallet, setrbWallet] = useState("0.215.000");
  const [interestWallet, setinterestWallet] = useState("  60.215.000");
  const [ozoToken, setozoToken] = useState("70.215.000");
  const [LeftReferral, setLeftReferral] = useState(" Left Link dummy");
  const [RightReferral, setRightReferral] = useState(" Right Link dummy");
  const [copyState, setcopyState] = useState(false);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user_data"));
    if (userData && userData.token && userData.email && userData.userId) {
      const headers = {
        Authorization: userData.token,
      };

      axios
        .get(
          `${baseURL}/api/wallets/${userData.userId}?email=${userData.email}`,
          { headers }
        )
        .then((response) => {
          console.log(response);
          if (response.data.success) {
            setData(response.data.data);
            setdepositWallet(response.data.data[0].deposit_wallet_tec);
            setroiWallet(response.data.data[0].roi_wallet_mac);
            setrbWallet(response.data.data[0].binary_wallet);
            setinterestWallet(response.data.data[0].referral_wallet_trade);
            setozoToken(response.data.data[0].ozo_wallet);
            setTotalInvestmentRevenue(response.data.data[0].total_investment);
            settotalReturns(response.data.data[0].total_earning);
            settotalWithdrawal(response.data.data[0].total_withdrawal);
            settotalWithdrawalRemaining(
              response.data.data[0].total_withdrawal_remaining
            );
            settotalEarning(response.data.data[0].total_earning);
            settotalEarningByPercentage(
              response.data.data[0].total_earning_percentage
            );
            setLeftReferral(response.data.data[0].left_level_1_earning);
            setRightReferral(response.data.data[0].right_level_1_earning);
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

  // Referral Links
  // left link
  // right link

  //referral details
  // Dummy data
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

  // Deposit buttons
  const [depositWalletModel, setDepositWalletModel] = useState(false);

  const [amount, setamount] = useState("");
  const [token, setToken] = useState("");
  const [openTOKEN, setOpenTOKEN] = useState(false);

  const [withdrawWalletModel, setWithdrawWalletModel] = useState(false);

  const [withdrawModalForm, setwithdrawModalForm] = useState({
    withdrawAmount: "",
    walletAddress: "",
    cryptoCurrency: token,
    securityPin: "",
  });

  const withdrawHandleChange = (e) => {
    setwithdrawModalForm({
      ...withdrawModalForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitWithDraw = (e) => {
    e.preventDefault();
    if (
      withdrawModalForm.walletAddress &&
      withdrawModalForm.withdrawAmount &&
      withdrawModalForm.securityPin
    ) {
      console.log(withdrawModalForm, "withdraw");
      setWithdrawWalletModel((prev) => !prev);
      setotpModal((prev) => !prev);
      setwithdrawModalForm({
        withdrawAmount: "",
        walletAddress: "",
        cryptoCurrency: token,
        securityPin: "",
      });
    } else {
      toast.error("Something is missing");
    }
  };

  const [otpModal, setotpModal] = useState(false);

  const [otp, setOtp] = useState("");

  const [transferModalOpen, settransferModalOpen] = useState(false);

  const [transferForm, settransferForm] = useState({
    from: "",
    to: "",
    amount: "",
    amountrecieve: "",
  });

  const transferHandleChange = (e) => {
    settransferForm({
      ...transferForm,
      [e.target.name]: e.target.value,
    });
  };

  const [Transferfrom, setTransferfrom] = useState("");
  const [Transferto, setTransferto] = useState("");
  const [transferToOpen, settransferToOpen] = useState(false);
  const handleDeposit = async () => {
    const userData = JSON.parse(localStorage.getItem("user_data"));
    if (userData && userData.token && userData.email && userData.userId) {
      const headers = {
        Authorization: userData.token,
      };
      try {
        const formData = {
          from_currency: "LTCT",
          to_currency: "LTCT",
          amount,
          buyer_name: "Ri",
          buyer_email: userData?.email,
          custom: `["${userData?.userId}","LTCT"]`,
          ipn_endpoint: "/api/payment/deposit/ipn",
          email: userData?.email,
        };

        const response = await axios.post(
          `${baseURL}/api/payment/create_transaction`,
          formData,
          {
            headers,
          }
        );

        if (response.data.success) {
          console.log(response.data.data.checkout_url);
          // Open the checkout window in a new window/tab
          window.open(response.data.data.checkout_url);
        } else {
          console.error("Error creating transaction:", data);
        }
      } catch (error) {
        console.error("Error creating transaction:", error);
      }
    }
  };
  return (
    <div className="bg-black relative max-w-full">
      {/* Modals  */}

      {/* Deposit Modal  */}
      {depositWalletModel && (
        <div className="w-full flex justify-center absolute top-0 left-0 max-h-full z-40 h-full   bg-black bg-opacity-70  ">
          <div className="max-w-[450px] rounded-2xl bg-neutral-900 p-6 max-h-[400px] relative">
            <button
              onClick={() => setDepositWalletModel((prev) => !prev)}
              className="rounded-full absolute -top-4 -right-4 w-10 p-3  bg-gradient-to-r text-white from-indigo-600 to-fuchsia-600  "
            >
              <img src="./images/icons/close.png" className="w-8" />
            </button>

            <h1 className="text-4xl font-medium mb-10">Payment</h1>

            <label htmlFor="depositAmount" className="">
              Enter amount
            </label>
            <input
              id="depositAmount"
              name="depositAmount"
              value={amount}
              onChange={(e) => setamount(e.target.value)}
              className="bg-black px-6 py-3 mt-4 mb-6  rounded-2xl w-full"
            />
            <label htmlFor="crypto" className="">
              Choose CryptoCurrency
            </label>
            <div className="flex flex-col relative px-2">
              <button
                onClick={() => setOpenTOKEN((prev) => !prev)}
                className="flex items-center space-x-2 bg-black px-6 py-3 mt-4 mb-6  rounded-2xl w-full "
              >
                <span> {token}</span>
                {!token ? (
                  <AiOutlineCaretDown className="h-8 text-white" />
                ) : (
                  <AiOutlineCaretUp className="h-8 text-white" />
                )}
              </button>
              {openTOKEN && (
                <div className="absolute z-10 text-sm font-light no-scrollbar font-medium  min-w-[200px]  space-y-2  w-full rounded-lg  bg-neutral-900 top-24 max-h-[400px] overflow-y-scroll  text-white">
                  <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                    <button
                      onClick={() => {
                        setOpenTOKEN((prev) => !prev);
                        setToken("Bitcoin");
                      }}
                      to="earning"
                    >
                      Bitcoin
                    </button>
                  </div>
                  <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                    <button
                      onClick={() => {
                        setOpenTOKEN((prev) => !prev);
                        setToken("Cronos");
                      }}
                      to="earning"
                    >
                      Cronos
                    </button>
                  </div>{" "}
                  <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                    <button
                      onClick={() => {
                        setOpenTOKEN((prev) => !prev);
                        setToken("Ethereum");
                      }}
                      to="earning"
                    >
                      Ethereum
                    </button>
                  </div>{" "}
                  <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                    <button
                      onClick={() => {
                        setOpenTOKEN((prev) => !prev);
                        setToken("Tether");
                      }}
                      to="earning"
                    >
                      Tether
                    </button>
                  </div>{" "}
                  <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                    <button
                      onClick={() => {
                        setOpenTOKEN((prev) => !prev);
                        setToken("USD Coin");
                      }}
                      to="earning"
                    >
                      USD Coin
                    </button>
                  </div>{" "}
                  <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                    <button
                      onClick={() => {
                        setOpenTOKEN((prev) => !prev);
                        setToken("Dai");
                      }}
                      to="earning"
                    >
                      Dai
                    </button>
                  </div>{" "}
                  <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                    <button
                      onClick={() => {
                        setOpenTOKEN((prev) => !prev);
                        setToken("Pax Dollar");
                      }}
                      to="earning"
                    >
                      Pax Dollar
                    </button>
                  </div>{" "}
                  <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                    <button
                      onClick={() => {
                        setOpenTOKEN((prev) => !prev);
                        setToken("Algorand");
                      }}
                      to="earning"
                    >
                      Algorand
                    </button>
                  </div>{" "}
                  <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                    <button
                      onClick={() => {
                        setOpenTOKEN((prev) => !prev);
                        setToken("Avalanche");
                      }}
                      to="earning"
                    >
                      Avalanche
                    </button>
                  </div>{" "}
                  <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                    <button
                      onClick={() => {
                        setOpenTOKEN((prev) => !prev);
                        setToken("Binanace Coin");
                      }}
                      to="earning"
                    >
                      Binanace Coin
                    </button>
                  </div>{" "}
                  <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                    <button
                      onClick={() => {
                        setOpenTOKEN((prev) => !prev);
                        setToken("Cardano");
                      }}
                      to="earning"
                    >
                      Cardano
                    </button>
                  </div>{" "}
                  <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                    <button
                      onClick={() => {
                        setOpenTOKEN((prev) => !prev);
                        setToken("Celer Network");
                      }}
                      to="earning"
                    >
                      Celer Network
                    </button>
                  </div>{" "}
                  <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                    <button
                      onClick={() => {
                        setOpenTOKEN((prev) => !prev);
                        setToken("COSMOS");
                      }}
                      to="earning"
                    >
                      COSMOS
                    </button>
                  </div>{" "}
                  <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                    <button
                      onClick={() => {
                        setOpenTOKEN((prev) => !prev);
                        setToken("Elrond");
                      }}
                      to="earning"
                    >
                      Elrond
                    </button>
                  </div>{" "}
                  <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                    <button
                      onClick={() => {
                        setOpenTOKEN((prev) => !prev);
                        setToken("Fantom");
                      }}
                      to="earning"
                    >
                      Fantom
                    </button>
                  </div>{" "}
                  <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                    <button
                      onClick={() => {
                        setOpenTOKEN((prev) => !prev);
                        setToken("NEAR Protocol");
                      }}
                      to="earning"
                    >
                      NEAR Protocol
                    </button>
                  </div>{" "}
                  <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                    <button
                      onClick={() => {
                        setOpenTOKEN((prev) => !prev);
                        setToken("Polkadot");
                      }}
                      to="earning"
                    >
                      Polkadot
                    </button>
                  </div>{" "}
                  <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                    <button
                      onClick={() => {
                        setOpenTOKEN((prev) => !prev);
                        setToken("Polygon");
                      }}
                      to="earning"
                    >
                      Polygon
                    </button>
                  </div>{" "}
                  <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                    <button
                      onClick={() => {
                        setOpenTOKEN((prev) => !prev);
                        setToken("Solana");
                      }}
                      to="earning"
                    >
                      Solana
                    </button>
                  </div>{" "}
                  <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                    <button
                      onClick={() => {
                        setOpenTOKEN((prev) => !prev);
                        setToken("VeChain");
                      }}
                      to="earning"
                    >
                      VeChain
                    </button>
                  </div>{" "}
                  <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                    <button
                      onClick={() => {
                        setOpenTOKEN((prev) => !prev);
                        setToken("Zilliqa");
                      }}
                      to="earning"
                    >
                      Zilliqa
                    </button>
                  </div>
                </div>
              )}
            </div>
            <button
              onClick={handleDeposit}
              className="w-full  bg-gradient-to-r text-white from-indigo-700 to-fuchsia-700 rounded-xl p-3"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Withdraw modal  */}

      {withdrawWalletModel && (
        <div className="w-full flex justify-center absolute top-0 left-0 max-h-full z-40 h-full  bg-black bg-opacity-70  ">
          <div className="max-w-[450px] rounded-2xl bg-neutral-900 p-6 max-h-[550px] relative">
            <button
              onClick={() => setWithdrawWalletModel((prev) => !prev)}
              className="rounded-full absolute -top-4 -right-4 w-10 p-3  bg-gradient-to-r text-white from-indigo-600 to-fuchsia-600  "
            >
              <img src="./images/icons/close.png" className="w-8" />
            </button>

            <h1 className="text-4xl font-medium mb-6">Withdraw fund</h1>

            <label htmlFor="withdrawAmount" className="text-sm ">
              Enter amount
            </label>
            <input
              id="withdrawAmount"
              name="withdrawAmount"
              onChange={withdrawHandleChange}
              value={withdrawModalForm.withdrawAmount}
              className="bg-black px-6 py-2 mt-2 mb-4  rounded-2xl w-full"
            />

            <label htmlFor="walletAddress" className="text-sm ">
              Enter wallet address
            </label>
            <input
              id="walletAddress"
              onChange={withdrawHandleChange}
              name="walletAddress"
              value={withdrawModalForm.walletAddress}
              className="bg-black px-6 py-2 mt-2 mb-4  rounded-2xl w-full"
            />

            <label htmlFor="cryptoCurrenyWithdraw" className="text-sm ">
              Choose CryptoCurrency
            </label>

            <div className="flex flex-col relative ">
              <button
                onClick={() => setOpenTOKEN((prev) => !prev)}
                className="flex items-center space-x-2 bg-black px-6 py-3 mt-4 mb-6  rounded-2xl w-full "
              >
                <span> {token}</span>
                {!token ? (
                  <AiOutlineCaretDown className="h-8 text-white" />
                ) : (
                  <AiOutlineCaretUp className="h-8 text-white" />
                )}
              </button>
              {openTOKEN && (
                <div className="absolute z-10 text-sm no-scrollbar font-medium  min-w-[200px]  space-y-2  w-full rounded-lg  bg-neutral-900 top-24 max-h-[400px] overflow-y-scroll  text-white">
                  <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                    <button
                      onClick={() => {
                        setOpenTOKEN((prev) => !prev);
                        setToken("Bitcoin");
                      }}
                      to="earning"
                    >
                      Bitcoin
                    </button>
                  </div>
                  <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                    <button
                      onClick={() => {
                        setOpenTOKEN((prev) => !prev);
                        setToken("Cronos");
                      }}
                      to="earning"
                    >
                      Cronos
                    </button>
                  </div>{" "}
                  <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                    <button
                      onClick={() => {
                        setOpenTOKEN((prev) => !prev);
                        setToken("Ethereum");
                      }}
                      to="earning"
                    >
                      Ethereum
                    </button>
                  </div>{" "}
                  <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                    <button
                      onClick={() => {
                        setOpenTOKEN((prev) => !prev);
                        setToken("Tether");
                      }}
                      to="earning"
                    >
                      Tether
                    </button>
                  </div>{" "}
                  <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                    <button
                      onClick={() => {
                        setOpenTOKEN((prev) => !prev);
                        setToken("USD Coin");
                      }}
                      to="earning"
                    >
                      USD Coin
                    </button>
                  </div>{" "}
                  <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                    <button
                      onClick={() => {
                        setOpenTOKEN((prev) => !prev);
                        setToken("Dai");
                      }}
                      to="earning"
                    >
                      Dai
                    </button>
                  </div>{" "}
                  <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                    <button
                      onClick={() => {
                        setOpenTOKEN((prev) => !prev);
                        setToken("Pax Dollar");
                      }}
                      to="earning"
                    >
                      Pax Dollar
                    </button>
                  </div>{" "}
                  <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                    <button
                      onClick={() => {
                        setOpenTOKEN((prev) => !prev);
                        setToken("Algorand");
                      }}
                      to="earning"
                    >
                      Algorand
                    </button>
                  </div>{" "}
                  <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                    <button
                      onClick={() => {
                        setOpenTOKEN((prev) => !prev);
                        setToken("Avalanche");
                      }}
                      to="earning"
                    >
                      Avalanche
                    </button>
                  </div>{" "}
                  <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                    <button
                      onClick={() => {
                        setOpenTOKEN((prev) => !prev);
                        setToken("Binanace Coin");
                      }}
                      to="earning"
                    >
                      Binanace Coin
                    </button>
                  </div>{" "}
                  <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                    <button
                      onClick={() => {
                        setOpenTOKEN((prev) => !prev);
                        setToken("Cardano");
                      }}
                      to="earning"
                    >
                      Cardano
                    </button>
                  </div>{" "}
                  <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                    <button
                      onClick={() => {
                        setOpenTOKEN((prev) => !prev);
                        setToken("Celer Network");
                      }}
                      to="earning"
                    >
                      Celer Network
                    </button>
                  </div>{" "}
                  <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                    <button
                      onClick={() => {
                        setOpenTOKEN((prev) => !prev);
                        setToken("COSMOS");
                      }}
                      to="earning"
                    >
                      COSMOS
                    </button>
                  </div>{" "}
                  <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                    <button
                      onClick={() => {
                        setOpenTOKEN((prev) => !prev);
                        setToken("Elrond");
                      }}
                      to="earning"
                    >
                      Elrond
                    </button>
                  </div>{" "}
                  <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                    <button
                      onClick={() => {
                        setOpenTOKEN((prev) => !prev);
                        setToken("Fantom");
                      }}
                      to="earning"
                    >
                      Fantom
                    </button>
                  </div>{" "}
                  <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                    <button
                      onClick={() => {
                        setOpenTOKEN((prev) => !prev);
                        setToken("NEAR Protocol");
                      }}
                      to="earning"
                    >
                      NEAR Protocol
                    </button>
                  </div>{" "}
                  <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                    <button
                      onClick={() => {
                        setOpenTOKEN((prev) => !prev);
                        setToken("Polkadot");
                      }}
                      to="earning"
                    >
                      Polkadot
                    </button>
                  </div>{" "}
                  <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                    <button
                      onClick={() => {
                        setOpenTOKEN((prev) => !prev);
                        setToken("Polygon");
                      }}
                      to="earning"
                    >
                      Polygon
                    </button>
                  </div>{" "}
                  <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                    <button
                      onClick={() => {
                        setOpenTOKEN((prev) => !prev);
                        setToken("Solana");
                      }}
                      to="earning"
                    >
                      Solana
                    </button>
                  </div>{" "}
                  <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                    <button
                      onClick={() => {
                        setOpenTOKEN((prev) => !prev);
                        setToken("VeChain");
                      }}
                      to="earning"
                    >
                      VeChain
                    </button>
                  </div>{" "}
                  <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                    <button
                      onClick={() => {
                        setOpenTOKEN((prev) => !prev);
                        setToken("Zilliqa");
                      }}
                      to="earning"
                    >
                      Zilliqa
                    </button>
                  </div>
                </div>
              )}
            </div>

            <label htmlFor="securityPin" className="text-sm ">
              Security Pin
            </label>
            <input
              id="securityPin"
              onChange={withdrawHandleChange}
              name="securityPin"
              value={withdrawModalForm.securityPin}
              className="bg-black px-6 py-2 mt-2 mb-4  rounded-2xl w-full"
            />

            <button
              onClick={handleSubmitWithDraw}
              className="w-full  bg-gradient-to-r text-white from-indigo-700 to-fuchsia-700 rounded-xl p-3"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* OTP MODAL   */}
      {otpModal && (
        <div className="w-full flex justify-center absolute top-0 left-0 max-h-full h-full  z-40  bg-black bg-opacity-70  ">
          <div className="max-w-[450px] rounded-2xl bg-neutral-900 p-6 max-h-[350px]  relative">
            <button
              onClick={() => setotpModal((prev) => !prev)}
              className="rounded-full absolute -top-4 -right-4 w-10 p-3  bg-gradient-to-r text-white from-indigo-600 to-fuchsia-600  "
            >
              <img src="./images/icons/close.png" className="w-8" />
            </button>

            <h1 className="text-4xl font-medium mb-10">Enter OTP</h1>
            <p className="font-medium text-sm tracking-wider text-center mb-6">
              One time password is send to you registered email inbox check it
            </p>

            <label htmlFor="otp" className="">
              Enter OTP
            </label>
            <input
              id="otp"
              name="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="bg-black px-6 py-3 mt-4 mb-6  rounded-2xl w-full"
            />
            <button
              // onClick={handleModal}
              className="w-full  bg-gradient-to-r text-white from-indigo-700 to-fuchsia-700 rounded-xl p-3"
            >
              Withdraw
            </button>
          </div>
        </div>
      )}

      {/* Transfer fund modal  */}
      {transferModalOpen && (
        <div className="w-full flex justify-center absolute top-0 left-0 max-h-full z-40 h-full  bg-black bg-opacity-70  ">
          <div className="max-w-[450px] rounded-2xl bg-neutral-900 p-6 max-h-[450px] relative">
            <button
              onClick={() => settransferModalOpen((prev) => !prev)}
              className="rounded-full absolute -top-4 -right-4 w-10 p-3  bg-gradient-to-r text-white from-indigo-600 to-fuchsia-600  "
            >
              <img src="./images/icons/close.png" className="w-8" />
            </button>

            <h1 className="text-4xl font-medium mb-6">Transfer fund</h1>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="from" className="text-sm ">
                  From
                </label>
                <div className="flex flex-col relative ">
                  <button
                    onClick={() => setOpenTOKEN((prev) => !prev)}
                    className="flex items-center space-x-2 bg-black px-6 py-3 mt-4 mb-6  rounded-2xl w-full "
                  >
                    <span> {Transferfrom}</span>
                    {!token ? (
                      <AiOutlineCaretDown className="h-8 text-white" />
                    ) : (
                      <AiOutlineCaretUp className="h-8 text-white" />
                    )}
                  </button>
                  {openTOKEN && (
                    <div className="absolute z-10 text-sm no-scrollbar font-medium  min-w-[200px]  space-y-2  w-full rounded-lg  bg-neutral-900 top-24 max-h-[400px] overflow-y-scroll  text-white">
                      <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                        <button
                          onClick={() => {
                            setOpenTOKEN((prev) => !prev);
                            setTransferfrom("Deposit");
                          }}
                        >
                          Deposit Wallet
                        </button>
                      </div>
                      <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                        <button
                          onClick={() => {
                            setOpenTOKEN((prev) => !prev);
                            setTransferfrom("ROI");
                          }}
                        >
                          ROI Wallet
                        </button>
                      </div>{" "}
                      <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                        <button
                          onClick={() => {
                            setOpenTOKEN((prev) => !prev);
                            setTransferfrom("R&B");
                          }}
                        >
                          R&B Wallet
                        </button>
                      </div>{" "}
                      <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                        <button
                          onClick={() => {
                            setOpenTOKEN((prev) => !prev);
                            setTransferfrom("Interest");
                          }}
                        >
                          Interest Wallet
                        </button>
                      </div>{" "}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="to" className="text-sm ">
                  to
                </label>
                <div className="flex flex-col relative ">
                  <button
                    onClick={() => settransferToOpen((prev) => !prev)}
                    className="flex items-center space-x-2 bg-black px-6 py-3 mt-4 mb-6  rounded-2xl w-full "
                  >
                    <span> {Transferto}</span>
                    {!token ? (
                      <AiOutlineCaretDown className="h-8 text-white" />
                    ) : (
                      <AiOutlineCaretUp className="h-8 text-white" />
                    )}
                  </button>
                  {transferToOpen && (
                    <div className="absolute z-10 text-sm no-scrollbar font-medium  min-w-[200px]  space-y-2  w-full rounded-lg  bg-neutral-900 top-24 max-h-[400px] overflow-y-scroll  text-white">
                      <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                        <button
                          onClick={() => {
                            settransferToOpen((prev) => !prev);
                            setTransferto("Deposit");
                          }}
                        >
                          Deposit Wallet
                        </button>
                      </div>
                      <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                        <button
                          onClick={() => {
                            settransferToOpen((prev) => !prev);
                            setTransferto("ROI");
                          }}
                        >
                          ROI Wallet
                        </button>
                      </div>{" "}
                      <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                        <button
                          onClick={() => {
                            settransferToOpen((prev) => !prev);
                            setTransferto("R&B");
                          }}
                        >
                          R&B Wallet
                        </button>
                      </div>{" "}
                      <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                        <button
                          onClick={() => {
                            settransferToOpen((prev) => !prev);
                            setTransferto("Interest");
                          }}
                        >
                          Interest Wallet
                        </button>
                      </div>{" "}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="amount" className="text-sm ">
                  Enter amount
                </label>
                <input
                  id="amount"
                  name="amount"
                  onChange={transferHandleChange}
                  value={transferForm.amount}
                  className="bg-black px-4 py-2 mt-2 mb-4  rounded-2xl w-full"
                />
              </div>

              <div>
                <label htmlFor="amountrecieve" className="text-sm ">
                  amount you recieve
                </label>
                <input
                  id="amountrecieve"
                  name="amountrecieve"
                  onChange={transferHandleChange}
                  value={transferForm.amountrecieve}
                  className="bg-black px-4 py-2 mt-2 mb-4  rounded-2xl w-full"
                />
              </div>
            </div>

            <div className="mb-4">
              <p className="text-xs">Available amount</p>
              <p className="text-xs font-semibold">ROI wallet: $12345678</p>
              <p className="text-xs text-purple-500 ">
                (you can transfer your ROI wallet money only on sunday)
              </p>
              <p className="text-xs">Interest wallet: $12345678</p>
            </div>

            <button
              // onClick={}
              className="w-full  bg-gradient-to-r text-white from-indigo-700 to-fuchsia-700 rounded-xl p-3"
            >
              Transfer
            </button>
          </div>
        </div>
      )}

      <div className="flex w-full  py-4 px-8">
        {/* left  */}
        <div className="w-full px-4">
          <div className="flex w-full space-x-3  mb-3 ">
            {/* 1 */}
            <div className="rounded-xl max-w-[360px] max-h-[200px] w-full bg-neutral-900 space-y-8 p-4">
              <div className="w-full flex items-center space-x-4">
                <div className="p-1 border-4 border-fuchsia-600 -400 w-[70px] flex justify-center items-center rounded-full">
                  <img
                    src="./images/dashboard/investment.png"
                    className="p-2"
                  />
                </div>
                <h3 className="font-medium text-lg">Total investment</h3>
              </div>
              <div className="pl-2">
                <h2 className="text-2xl font-medium mb-2">
                  ${totalInvestmentRevenue}
                </h2>
                <p className="text-gray-500">
                  90-Day <span className="text-[#29CD0E]">+5.599</span>
                </p>
              </div>
            </div>
            {/* 2 */}
            <div className="rounded-xl max-w-[360px] max-h-[200px]  w-full bg-neutral-900 space-y-8 p-4">
              <div className="w-full flex items-center space-x-4">
                <div className="p-1 border-4 flex justify-center items-center  border-fuchsia-600 -400 w-[70px] rounded-full">
                  <img
                    src="./images/dashboard/growth.png"
                    className="p-[10px]"
                  />
                </div>
                <h3 className="font-medium text-lg">Total returns</h3>
              </div>
              <div className="pl-2">
                <h2 className="text-2xl font-medium mb-2">${totalReturns}</h2>
                <p className="text-gray-500">
                  Target:{" "}
                  <span className="text-gray-500">${totalReturnsTarget}</span>
                </p>
              </div>
            </div>
            {/* 3 */}
            <div className="rounded-xl max-w-[360px] max-h-[200px] w-full bg-neutral-900 space-y-8 p-4">
              <div className="w-full flex items-center space-x-4">
                <div className="p-1 border-4 flex justify-center items-center  border-fuchsia-600 -400 w-[70px] rounded-full">
                  <img
                    src="./images/dashboard/withdrawal.png"
                    className="p-[10px]"
                  />
                </div>
                <h3 className="font-medium text-lg">Total withdrawal</h3>
              </div>
              <div className="pl-2">
                <h2 className="text-2xl font-medium mb-2">
                  -${totalWithdrawal}
                </h2>
                <p className="text-gray-500">
                  Remaining{" "}
                  <span className="text-gray-500">
                    {totalWithdrawalRemaining}
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* 2nd row  */}
          <div className="w-full flex justify-around ">
            {/* 1 */}
            <div className="rounded-xl max-w-[210px] max-h-[220px] w-full bg-zinc-900  p-4">
              <div className="w-full flex items-center justify-between ">
                <h3 className="font-medium ">Deposit wallet</h3>

                <div className="p-1 -400 w-[50px] flex justify-center items-center rounded-full">
                  <img src="./images/dashboard/wallet.png" className="p-2" />
                </div>
              </div>
              <div className="">
                <h2 className="font-medium mb-5">${depositWallet}</h2>
                <button
                  onClick={() => setDepositWalletModel((prev) => !prev)}
                  className=" bg-gradient-to-b from-fuchsia-300 to-purple-800 rounded-full px-3 py-1 text-xs "
                >
                  Recharge
                </button>
              </div>
            </div>
            {/* 2 */}
            <div className="rounded-xl max-w-[210px] max-h-[220px] w-full bg-zinc-900  p-4">
              <div className="w-full flex items-center justify-between ">
                <h3 className="font-medium ">ROI wallet</h3>

                <div className="p-1 -400 w-[50px] flex justify-center items-center rounded-full">
                  <img src="./images/dashboard/return.png" className="p-2" />
                </div>
              </div>
              <div className="">
                <h2 className="font-medium mb-5">${roiWallet}</h2>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setNav("Investment")}
                    className=" bg-gradient-to-b from-fuchsia-300 to-purple-800 rounded-full px-3 py-1 text-xs "
                  >
                    Invest
                  </button>
                  <button
                    onClick={() => settransferModalOpen((prev) => !prev)}
                    className=" bg-gradient-to-b from-fuchsia-300 to-purple-800 rounded-full px-3 py-1 text-xs "
                  >
                    Transfer
                  </button>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="rounded-xl max-w-[210px] max-h-[220px] w-full bg-zinc-900  p-4">
              <div className="w-full flex items-center justify-between ">
                <h3 className="font-medium ">R&B wallet</h3>

                <div className="p-1 -400 w-[50px] flex justify-center items-center rounded-full">
                  <img src="./images/dashboard/interest.png" className="p-2" />
                </div>
              </div>
              <div className="">
                <h2 className="font-medium mb-5">${rbWallet}</h2>
                <button
                  onClick={() => setWithdrawWalletModel((prev) => !prev)}
                  className=" bg-gradient-to-b from-fuchsia-300 to-purple-800 rounded-full px-3 py-1 text-xs "
                >
                  Withdraw
                </button>
              </div>
            </div>
            {/* 4 */}
            <div className="rounded-xl max-w-[210px] max-h-[220px] w-full bg-zinc-900  p-4">
              <div className="w-full flex items-center justify-between ">
                <h3 className="font-medium ">Interest wallet</h3>

                <div className="p-1 -400 w-[50px] flex justify-center items-center rounded-full">
                  <img src="./images/dashboard/deposit.png" className="p-2" />
                </div>
              </div>
              <div className="">
                <h2 className="font-medium mb-5">${interestWallet}</h2>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setNav("Investment")}
                    className=" bg-gradient-to-b from-fuchsia-300 to-purple-800 rounded-full px-3 py-1 text-xs "
                  >
                    Invest
                  </button>
                  <button
                    onClick={() => settransferModalOpen((prev) => !prev)}
                    className=" bg-gradient-to-b from-fuchsia-300 to-purple-800 rounded-full px-3 py-1 text-xs "
                  >
                    Transfer
                  </button>
                </div>
              </div>
            </div>

            {/* 5 */}
            <div className="rounded-xl max-w-[210px] text-gray-900 max-h-[220px] w-full bg-gradient-to-r from-indigo-400 to-fuchsia-500   p-4">
              <div className="w-full flex items-center justify-between ">
                <h3 className="font-semibold ">OZO Token</h3>

                <div className="p-1 pt-2 -400 w-[70px] flex justify-center items-center rounded-full">
                  <img
                    src="./images/navlogo.png"
                    className="p-2 text-gray-900 "
                  />
                </div>
              </div>
              <div className="">
                <h2 className="font-semibold mb-5">${ozoToken}</h2>
                <button
                  onClick={() => setNav("Investment")}
                  className="bg-black rounded-full px-3 py-1 text-xs text-white "
                >
                  Reinvest
                </button>
              </div>
            </div>
          </div>

          {/* Refer and earn  */}
          <h1 className="text-xl pl-2 mb-2 mt-8 ">Refer and earn</h1>
          <div className="w-full flex px-2  justify-between">
            {/* left  */}
            <div className="rounded-xl p-4 max-w-[600px]  max-h-[250px]  w-full bg-gradient-to-r from-indigo-400 to-fuchsia-500  text-gray-900">
              <h1 className="text-2xl font-semibold pl-4 pt-4 mb-8">
                Referral link
              </h1>
              {/* 1st button  */}
              <CopyToClipboard
                text={LeftReferral}
                onCopy={() => {
                  setcopyState(true);
                  if (copyState) toast.success("Link Link Copy Successfully");
                  console.log("left referral", LeftReferral);
                }}
              >
                {/* button to copy text  */}
                <button className="w-full ml-4 max-w-[540px] text-left mb-4 relative flex">
                  <div className="bg-neutral-900 text-2xl text-white rounded-lg px-6 py-1">
                    Left link
                  </div>
                  <div className="border-t-2 w-full max-w-[410px]  text-neutral-900 font-medium absolute left-32 top-0 py-[6px] border-r-2 border-b-2 bg-transparent px-4 border-neutral-900 rounded-t-lg  rounded-r-lg  rounded-b-lg">
                    {LeftReferral}
                  </div>
                </button>
              </CopyToClipboard>
              {/* 2nd button  */}
              <CopyToClipboard
                text={RightReferral}
                onCopy={() => {
                  setcopyState(true);
                  if (copyState) toast.success("Right Link Copy Successfully");
                  console.log("right referral", RightReferral);
                }}
              >
                {/* button to copy text  */}

                <button className="w-full max-w-[540px] text-left  ml-4 relative flex">
                  <div className="bg-neutral-900 text-2xl text-white rounded-lg px-6 py-1">
                    Right link
                  </div>
                  <div className="border-t-2 w-full font-medium text-neutral-900 max-w-[400px]  absolute left-36 top-0 py-[6px] border-r-2 border-b-2 bg-transparent px-4 border-neutral-900 rounded-t-lg  rounded-r-lg  rounded-b-lg">
                    {RightReferral}
                  </div>
                </button>
              </CopyToClipboard>
            </div>
            {/* right  */}
            <div className="bg-zinc-900 p-4 rounded-3xl">
              <h1 className="text-xl pl-2 mb-2">Quick Actions</h1>
              <div className="flex space-x-3 mb-2">
                <button
                  onClick={() => setDepositWalletModel((prev) => !prev)}
                  className="border-2 px-4 py-2 rounded-xl flex justify-between w-full items-center  border-neutral-600"
                >
                  <img
                    src="./images/dashboard/investment2.png"
                    className="w-6 "
                  />{" "}
                  <p className="">Deposit</p>{" "}
                  <img src="./images/dashboard/next.png" className="w-5 h-5 " />
                </button>
                <button
                  onClick={() => setNav("Investment")}
                  className="border-2 px-4 py-2 rounded-xl flex justify-between w-full items-center border-neutral-600"
                >
                  <img
                    src="./images/dashboard/investment2.png"
                    className="w-6 "
                  />{" "}
                  <p className="">Package</p>{" "}
                  <img src="./images/dashboard/next.png" className="w-5 h-5 " />
                </button>
              </div>
              <div className="grid grid-cols-4 gap-2 text-[15px] ">
                <button
                  onClick={() => setWithdrawWalletModel((prev) => !prev)}
                  className="border-2 px-[3px] py-[6px] rounded-xl flex flex-col justify-center items-center  border-neutral-600"
                >
                  <img
                    src="./images/dashboard/investment2.png"
                    className="w-6 "
                  />
                  Withdraw
                </button>
                <button
                  onClick={() => settransferModalOpen((prev) => !prev)}
                  className="border-2 px-[3px] py-[6px] rounded-xl flex flex-col justify-center items-center  border-neutral-600"
                >
                  <img
                    src="./images/dashboard/investment2.png"
                    className="w-6 "
                  />
                  Transfer
                </button>
                <button className="border-2 px-[3px] py-[6px] rounded-xl flex flex-col justify-center items-center  border-neutral-600">
                  <img
                    src="./images/dashboard/investment2.png"
                    className="w-6 "
                  />{" "}
                  ROI wallet
                </button>
                <button className="border-2 px-[3px] py-[6px] rounded-xl flex flex-col justify-center items-center  border-neutral-600">
                  <img
                    src="./images/dashboard/investment2.png"
                    className="w-6 "
                  />
                  Wallet
                </button>

                <button
                  onClick={() => setNav("Tickets")}
                  className="border-2 px-[3px] py-[6px] rounded-xl flex flex-col justify-center items-center  border-neutral-600"
                >
                  <img
                    src="./images/dashboard/investment2.png"
                    className="w-6 "
                  />
                  Ticket
                </button>
                <button
                  onClick={() => setNav("Genealogy")}
                  className="border-2 px-[3px] py-[6px] rounded-xl flex flex-col justify-center items-center  border-neutral-600"
                >
                  <img
                    src="./images/dashboard/investment2.png"
                    className="w-6 "
                  />
                  Binary tree
                </button>
                <button
                  onClick={() => setNav("Genealogy")}
                  className="border-2 px-[3px] py-[6px] rounded-xl flex flex-col justify-center items-center  border-neutral-600"
                >
                  <img
                    src="./images/dashboard/investment2.png"
                    className="w-6 "
                  />
                  Invite
                </button>
                <button className="border-2 px-[3px] py-[6px] rounded-xl flex flex-col justify-center items-center  border-neutral-600">
                  <img
                    src="./images/dashboard/investment2.png"
                    className="w-6 "
                  />
                  Support
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* right  */}
        <div className="px-6 py-8 max-w-[330px] w-full bg-neutral-950 rounded-xl ">
          <h2 className="font-medium text-xl">
            Total earning
            <br />
            through one ozo
          </h2>
          <div className="bg-gray-800 border-2 text-center rounded-xl my-6 max-w-[200px] w-full mx-auto py-4 border-zinc-400  ">
            <p>Total Earning</p>
            <p className="text-xl ">${totalEarning}</p>
          </div>

          <div className="w-full p-2 flex justify-center my-8 ">
            <div className="rounded-full border-4 min-h-[220px] border-fuchsia-700 w-full max-w-[220px] flex justify-center items-center">
              <h2 className="text-4xl">{totalEarningByPercentage}%</h2>
            </div>
          </div>
          <div className="w-full space-y-10">
            <div className="w-full space-y-2  px-6">
              <div className="flex space-x-2 px-2 text-sm">
                <li className="text-fuchsia-500">
                  <span className="text-gray-500 font-medium">ROI</span>
                </li>
                <li className="text-fuchsia-500">
                  <span className="text-gray-500 font-medium">
                    Referral bonus
                  </span>
                </li>
              </div>
              <div className="flex space-x-4 text-sm">
                <li className="text-fuchsia-500">
                  <span className="text-gray-500 font-medium">
                    Binary Bonus
                  </span>
                </li>
                <li className="text-fuchsia-500">
                  <span className="text-gray-500 font-medium">Others</span>
                </li>
              </div>
            </div>
            <button className="bg-gradient-to-r from-indigo-400 to-fuchsia-500 rounded-xl px-3 py-3 w-full  text-white ">
              Withdrawal
            </button>
          </div>
        </div>
      </div>
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

export default Overview;
