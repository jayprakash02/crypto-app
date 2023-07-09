import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-hot-toast";
import FinalTree from "./FinalTree";

const Genealogy = ({ genealogyState }) => {
  return (
    <div>
      {genealogyState === "Referral" && <Referral />}
      {genealogyState === "Binary" && <FinalTree />}
    </div>
  );
};
export default Genealogy;
const Referral = () => {
  // Referral Links
  // left link
  // right link
  const [LeftReferral, setLeftReferral] = useState(" Left Link dummy");
  const [RightReferral, setRightReferral] = useState(" Right Link dummy");
  const [copyState, setcopyState] = useState(false);

  const dummyData = [
    {
      siNO: "1",
      registred: "no",
      network: "online",
      user: "2",
      email: "bourasx@fjflka.com",
      country: "israel",
      position: "right",
      status: "active",
      investment: "4200",
    },
    {
      siNO: "1",
      registred: "no",
      network: "online",
      user: "2",
      email: "bourasx@fjflka.com",
      country: "israel",
      position: "right",
      status: "active",
      investment: "4200",
    },

    {
      siNO: "1",
      registred: "no",
      network: "online",
      user: "2",
      email: "bourasx@fjflka.com",
      country: "israel",
      position: "right",
      status: "active",
      investment: "4200",
    },

    {
      siNO: "1",
      registred: "no",
      network: "online",
      user: "2",
      email: "bourasx@fjflka.com",
      country: "israel",
      position: "right",
      status: "active",
      investment: "4200",
    },

    {
      siNO: "1",
      registred: "no",
      network: "online",
      user: "2",
      email: "bourasx@fjflka.com",
      country: "israel",
      position: "right",
      status: "active",
      investment: "4200",
    },
  ];
  return (
    <div className="min-h-[90vh] bg-neutral-900 pt-4 pb-16   w-full">
      <div className="w-full max-w-6xl mx-auto">
        <h1 className="text-5xl mt-12 mb-6 font-semibold">Invite Friends</h1>

        <div className="w-full grid grid-cols-2 gap-x-8">
          <div>
            <p className="mb-4">Left Referral Link</p>
            <CopyToClipboard
              text={LeftReferral}
              onCopy={() => {
                setcopyState(true);
                if (copyState) toast.success("Left Link Copy Successfully");
                console.log("left referral", LeftReferral);
              }}
            >
              <button className=" text-left px-6 py-4 rounded-lg bg-black w-full">
                {LeftReferral}
              </button>
            </CopyToClipboard>{" "}
          </div>
          <div>
            <p className="mb-4">Right Referral Link</p>
            <CopyToClipboard
              text={RightReferral}
              onCopy={() => {
                setcopyState(true);
                if (copyState) toast.success("Right Link Copy Successfully");
                console.log("left referral", RightReferral);
              }}
            >
              <button className=" text-left px-6 py-4 rounded-lg bg-black w-full">
                {LeftReferral}
              </button>
            </CopyToClipboard>{" "}
          </div>
        </div>
      </div>
      <div className="px-12">
        <h1 className="text-4xl mt-12 mb-6 font-semibold">Referral Details</h1>

        <table className="w-full">
          <thead className="bg-black w-full items-center text-left px-4 py-4 flex ">
            <th className="">
              {" "}
              <input
                type="checkbox"
                className="rounded-sm bg-black border-2 p-2"
                name="referral"
                id="referralDetail"
              />
            </th>
            <th className=" w-full max-w-[80px] ml-4">SI No</th>
            <th className=" w-full max-w-[140px] ml-4">Registered</th>
            <th className=" w-full max-w-[140px] ml-4">Network</th>
            <th className=" w-full max-w-[140px] ml-4 overflow-hidden">User</th>
            <th className=" w-full max-w-[180px] ml-4 overflow-hidden">
              Email
            </th>
            <th className=" w-full max-w-[160px] ml-4">Country/phone</th>
            <th className=" w-full max-w-[140px] ml-4">Position</th>
            <th className=" w-full max-w-[140px] ml-4">Status</th>
            <th className=" w-full max-w-[140px] ml-4">Investment</th>
          </thead>
          <tbody className="w-full">
            {dummyData.map((e, key) => {
              return (
                <tr
                  key={key}
                  className="bg-black w-full items-center text-left px-4 py-4 flex "
                >
                  <td className="">
                    {" "}
                    <input
                      type="checkbox"
                      className="rounded-sm bg-black border-2 p-2"
                      name="referral"
                      id="referralDetail"
                    />
                  </td>
                  <td className=" w-full max-w-[80px] ml-4">{e.siNO}</td>
                  <td className=" w-full max-w-[140px] ml-4">{e.registred}</td>
                  <td className=" w-full max-w-[140px] ml-4">{e.network}</td>
                  <td className=" w-full max-w-[140px] ml-4 overflow-hidden">
                    {e.user}
                  </td>
                  <td className=" w-full max-w-[180px] ml-4 overflow-hidden">
                    {e.email}
                  </td>
                  <td className=" w-full max-w-[160px] ml-4">{e.country}</td>
                  <td className=" w-full max-w-[140px] ml-4">{e.position}</td>
                  <td className=" w-full max-w-[140px] ml-4">{e.status}</td>
                  <td className=" w-full max-w-[140px] ml-4">{e.investment}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// const Tree = () => (
//   <table className="border-collapse w-full">
//     <thead>
//       <tr>
//         <th className="w-1/3 text-center">#</th>
//         <th className="text-center">Left</th>
//         <th className="text-center">Right</th>
//       </tr>
//     </thead>
//     <tbody>
//       <TreeNode name="Users" leftCount={6} rightCount={0} />
//       <TreeNode name="Business" leftCount="$0.00" rightCount="$0.00" />
//       <TreeNode name="Carry" leftCount="$0" rightCount="$0" />
//       <TreeNode name="Capping" leftCount="$1500" />
//       <TreeNode name="Binary" leftCount="$0" />
//     </tbody>
//   </table>
// );

// const TreeNode = ({ name, leftCount, rightCount }) => (
//   <tr>
//     <td>{name}</td>
//     <td>{leftCount}</td>
//     <td>{rightCount}</td>
//   </tr>
// );

// const Binary = ({ last, first }) => {
//   const [showTree, setShowTree] = useState(false);
//   const handleImageClick = () => {
//     setShowTree(!showTree);
//   };
//   const handleImageHover = () => {
//     setShowTree(true);
//   };

//   const handleImageLeave = () => {
//     setShowTree(false);
//   };

//   return (
//     <div
//       className="flex items-center justify-center flex-col relative"
//       onMouseEnter={handleImageHover}
//       onMouseLeave={handleImageLeave}
//       onClick={handleImageClick}
//     >
//       {!first && <div className="h-separator"></div>}
//       <div className="bg-gray-200 w-20 h-20 rounded-full"></div>
//       {showTree && (
//         <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full">
//           <Tree />
//         </div>
//       )}
//       <p>John Smith</p>
//       {!last && <div className="h-separator"></div>}
//     </div>
//   );
// };

// const FinalTree = () => {
//   return (
//     <div className="flex flex-col items-center">
//       <Binary first={true} />

//       <div className="w-separator"></div>
//       <div className="flex gap-400">
//         <Binary />
//         <Binary />
//       </div>

//       <div className="flex gap-275">
//         <div className="w-separator"></div>
//         <div className="w-separator"></div>
//       </div>
//       <div className="flex gap-200">
//         <Binary />
//         <Binary />
//         <Binary />
//         <Binary />
//       </div>

//       <div className="flex gap-150">
//         {Array.from({ length: 4 }, (_, i) => (
//           <div className="w-separator" key={i}></div>
//         ))}
//       </div>

//       <div className="flex gap-80">
//         {Array.from({ length: 8 }, (_, i) => (
//           <Binary last={true} key={i} />
//         ))}
//       </div>
//     </div>
//   );
// };
