import React, { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

const Earning = () => {
  const [open, setOpen] = useState(false);
  const [openCRO, setOpenCro] = useState(false);
  const [openTOKEN, setOpenTOKEN] = useState(false);

  const [term, setTerm] = useState("3 Months");
  const [cro, setCRO] = useState("4,000 to 40,000");
  const [token, setToken] = useState("Bitcoin");

  const [readMore, setreadMore] = useState(false);
  return (
    <div className="overflow-x-hidden w-full font-poppins">
      {/* section 1 */}
      <div className="w-full text-center space-y-10 my-10 py-20 max-w-7xl px-6">
        <h1 className="text-5xl md:text-6xl font-bold">Ozo Investment </h1>
        <p className="max-w-[700px] text-center w-full mx-auto">
          Earn up to 252% returns on your investment. Explore our
          cryptocurrency, forex, commodities, and casino gaming options.
          Experience lucrative opportunities and financial growth with one Ozo.
          Invest wisely for a prosperous future.
        </p>
        <div className="rounded-2xl  bg-neutral-800 p-8 flex gap-6 flex-col md:flex-row items-center justify-between">
          {!readMore && (
            <>
              {" "}
              <div className="text-left flex justify-center items-start space-y-3 flex-col">
                <p className="text-purple-900 text-xl">Services</p>
                <h2 className="text-3xl font-bold">
                  Invest with One Ozo:
                  <br /> Lucrative Packages, High Returns,
                  <br /> and Generous Referral Bonuses
                </h2>
              </div>
              <div className="w-full md:w-1/2 space-y-3 flex  pt-5 justify-center items-start flex-col ">
                <p className="max-w-[200px] w-full border-t-2 border-purple-900"></p>
                <p className="text-justify">
                  Unlock the potential of your investments with One Ozo, a
                  trusted platform offering a range of lucrative packages
                  designed to suit your financial goals. With our transparent
                  and secure investment system, you can maximize your returns
                  and enjoy an impressive array of benefits.
                </p>
                <button
                  onClick={() => setreadMore((prev) => !prev)}
                  className="px-6 py-3 font-bold bg-purple-900 rounded-md"
                >
                  Read more
                </button>
              </div>
            </>
          )}
          {readMore && (
            <>
              <div className="text-center w-full">
                {" "}
                <p className="text-purple-900 text-xl mb-4">Services</p>
                <h2 className="text-3xl font-bold mb-6 ">
                  Invest with One Ozo:
                  <br /> Lucrative Packages, High Returns,
                  <br /> and Generous Referral Bonuses
                </h2>
                <div className="text-justify max-w-5xl mx-auto w-full mb-2">
                  Unlock the potential of your investments with One Ozo, a
                  trusted platform offering a range of lucrative packages
                  designed to suit your financial goals. With our transparent
                  and secure investment system, you can maximize your returns
                  and enjoy an impressive array of benefits. Choose from our
                  carefully crafted packages tailored to different investment
                  levels. Package 1, with a minimum deposit of $100 to $3,999,
                  offers a package duration of 200 days and a return on
                  investment (ROI) of 1.2%. You will receive a total return of
                  240%, plus your initial investment back. The capping limit for
                  this package is $600. But that's not all! One Ozo values its
                  members and offers generous referral bonuses. Earn a referral
                  bonus of 5% on level 1, 3% on level 2, and 1.5% on level 3.
                  From level 4 to level 7, enjoy 5% Ozo tokens, which will be
                  created and deposited into your Ozo token wallet. As your
                  investment commitment grows, so do the rewards. Package 2,
                  with a minimum deposit of $4,000 to $14,999, offers a higher
                  ROI of 1.4% and a total return of 252% plus principle amount
                  back, with a capping limit of $2,100. Likewise, Package 3 and
                  Package 4 offer even more substantial returns and attractive
                  referral bonuses, providing you with an opportunity for
                  significant financial growth. Investing with One Ozo is not
                  only financially rewarding but also secure. Our platform
                  ensures the safety and privacy of your investments, backed by
                  advanced security measures. Start your prosperous journey
                  today and experience the potential of investing with One Ozo.
                </div>
                <button
                  onClick={() => setreadMore((prev) => !prev)}
                  className="px-6 py-3 font-bold bg-purple-900 rounded-md"
                >
                  Read Less
                </button>
              </div>
            </>
          )}
        </div>
      </div>

{/* img section */}
      <div className="w-full flex-col  relative flex object-cover justify-center  items-center">
        <img src="./images/package.png" />
      </div>

{/* section 2 */}

      <div className="w-full mt-44  text-center px-6 ">
        <h1 className="text-5xl font-medium mb-6">Calculate Your Rewards</h1>
        <h3 className="text-3xl font-medium">
          Select a Package, amount, CRO lockup and term
          <br /> to calculate your rewards *
        </h3>

        <div className="max-w-5xl text-xl mt-16 mb-6 text-left bg-neutral-900 px-16 mx-auto rounded-3xl divide-x-2 py-2 flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-center font-medium uppercase">
          <div className="flex flex-col relative px-2">
            <span>Packages</span>
            <button
              onClick={() => setOpenTOKEN((prev) => !prev)}
              className="flex items-center space-x-2"
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
          <div className="flex flex-col px-6">
            <span>AMOUNT (USD)</span>
            <input
              type="text"
              className="bg-transparent border-0 focus-within:border-none"
            />
          </div>
          <div className="flex flex-row md:flex-col px-6 relative">
            <span>Package Details</span>
            <div>
              <button
                onClick={() => setOpenCro((prev) => !prev)}
                className="flex items-center space-x-2"
              >
                <span> {cro} USD</span>
                {!openCRO ? (
                  <AiOutlineCaretDown className="h-8 text-white" />
                ) : (
                  <AiOutlineCaretUp className="h-8 text-white" />
                )}
              </button>
            </div>

            {openCRO && (
              <div className="absolute z-10 text-xl  font-medium  min-w-[200px]  space-y-2  w-full rounded-lg   bg-neutral-900 top-24 text-white">
                <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                  <button
                    onClick={() => {
                      setCRO("Less than 4,000");
                      setOpenCro((prev) => !prev);
                    }}
                  >
                    Less than 4,000
                  </button>
                </div>
                <div className="hover:bg-gray-900 px-4  py-3  rounded-lg">
                  <button
                    onClick={() => {
                      setCRO("4,000 to 40,000");
                      setOpenCro((prev) => !prev);
                    }}
                    to="refferal"
                  >
                    4,000 to 40,000
                  </button>
                </div>
                <div
                  onClick={() => {
                    setCRO("40,000 or more");
                    setOpenCro((prev) => !prev);
                  }}
                  className="hover:bg-gray-900 px-4  py-3  rounded-lg"
                >
                  <button to="extrabonus">40,000 or more</button>
                </div>
              </div>
            )}
          </div>
          <div className="px-6 flex flex-row md:flex-col relative">
            <span>dURATION</span>
            <div>
              <button
                onClick={() => setOpen((prev) => !prev)}
                className="flex items-center space-x-2"
              >
                <span> {term}</span>
                {!open ? (
                  <AiOutlineCaretDown className="h-8 text-white" />
                ) : (
                  <AiOutlineCaretUp className="h-8 text-white" />
                )}
              </button>
            </div>
            {open && (
              <div className="absolute z-10 text-xl  font-medium  min-w-[200px]  space-y-2  w-full rounded-lg   bg-neutral-900 top-24 text-white">
                <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                  <button
                    onClick={() => {
                      setTerm("Flexible");
                      setOpen((prev) => !prev);
                    }}
                  >
                    Flexible
                  </button>
                </div>
                <div className="hover:bg-gray-900 px-4  py-3  rounded-lg">
                  <button
                    onClick={() => {
                      setTerm("1 Months");
                      setOpen((prev) => !prev);
                    }}
                    to="refferal"
                  >
                    1 Months
                  </button>
                </div>
                <div
                  onClick={() => {
                    setTerm("3 Months");
                    setOpen((prev) => !prev);
                  }}
                  className="hover:bg-gray-900 px-4  py-3  rounded-lg"
                >
                  <button to="extrabonus">3 Months</button>
                </div>
              </div>
            )}
          </div>
        </div>

        <p className="text-center text-sm mb-10">
          Click here to learn more about our tiered rewards rate structure.
        </p>

                  {/* section 3 */}

        <div className="max-w-4xl mb-20 w-full mx-auto  flex flex-col md:flex-row justify-between py-8 px-5">
          <div>
            <h2 className="text-7xl  font-medium">Earn</h2>
            <p className="text-9xl font-semibold">
              $451<span className="text-xs">usd</span>
            </p>
            <p className="text-2xl font-medium">total returns </p>
          </div>

          <div className="space-y-16">
            <div>
              <h2 className="text-5xl font-medium">0.97%</h2>

              <p className="text-2xl">Daily returns </p>
            </div>
            <div>
              <h2 className="text-5xl font-medium">
                $186.92<span className="text-xs">USD</span>
              </h2>
              <p className="text-2xl">Monthly returns </p>
            </div>
          </div>
        </div>

        <button className="border mb-6 px-12 text-xl py-3 font-medium rounded-full">
          Start Earning Today
        </button>
      </div>

{/* section 4 */}

<div className="w-full mt-24 mb-44 relative">
  <img
    src="./images/contact.jpg"
    className="w-full h-[60vh] md:h-auto object-cover opacity-90"
    alt="Contact"
  />

  <div className="flex flex-col md:flex-row absolute max-w-5xl w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:top-64 md:left-101 justify-between items-center px-4 md:px-8">
    <div className="mb-4 md:mb-0 md:mr-4">
      <h2 className="text-3xl font-bold">
        Contact us for deeply
        <br />
        information and services
        <br />
        customize.
      </h2>
    </div>

    <div>
      <button className="px-6 py-3 text-2xl font-bold bg-purple-900 rounded-md">
        Contact Us
      </button>
    </div>
  </div>
</div>

    </div>
  );
};

export default Earning;
