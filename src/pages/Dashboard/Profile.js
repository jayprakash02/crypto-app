import React, { useState } from "react";
import "./Profile.css";

import * as yup from "yup";
import { Field, Form, Formik } from "formik";
const Profile = ({ profileStateNav }) => {
  const [profileState, setprofileState] = useState("pi");

  // profileformstate
  const [profileForm, setprofileForm] = useState({
    fName: "Bourax",
    lName: "Pavelion",
    email: "bourax@fknf.com",
    phoneNo: "546513181",
    country: "israel",
    pinCode: "4520",
  });

  // Profile Card
  const [userID, setuserID] = useState("546153");
  const [securityPIN, setsecurityPIN] = useState("4520");
  const [sponsorName, setsponsorName] = useState("Pavelion");
  const [sponsorID, setsponsorID] = useState("OP-AAAA");

  // cardinvestment
  const [totalInvestment, settotalInvestment] = useState("3859000");
  const [totalprofit, settotalprofit] = useState("38000");
  const [netincome, setnetincome] = useState("38000");

  // referral
  const [left, setLeft] = useState("4");
  const [right, setRight] = useState("2");
  const [total, setTotal] = useState("6");

  //model state
  const [open, setopen] = useState(false);

  const handleChange = (e) => {
    setprofileForm({ ...profileForm, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile Form", profileForm);
  };

  return (
    <>
      {profileStateNav == "Profile" && (
        <div className="bg-neutral-950 w-full px-16 pt-20 pb-10  font-poppins">
          <div className="flex">
            <div className="max-w-[420px] space-y-4 w-full">
              <div className="max-w-[300px] w-full rounded-xl space-y-2 bg-neutral-900  p-4">
                <h1 className="text-xl font-semibold">
                  {profileForm.fName} {profileForm.lName}
                </h1>
                <div className="flex justify-between">
                  <div>
                    <p>User ID</p>
                    <p> PIN</p>
                    <p>Sponsor name</p>
                    <p>Sponsor ID</p>
                  </div>
                  <div className="text-right">
                    <p>{userID}</p>
                    <p>{securityPIN}</p>
                    <p>{sponsorName}</p>
                    <p>{sponsorID}</p>
                  </div>
                </div>
              </div>
              <div className="max-w-[300px] w-full rounded-xl space-y-4 bg-neutral-900  p-4">
                <div>
                  <h1 className=" font-semibold">Total Invest</h1>
                  <p>${totalInvestment}</p>
                </div>
                <div className="flex font-semibold justify-between">
                  {" "}
                  <p>
                    Total Profit
                    <br /> <span>${totalprofit}</span>
                  </p>
                  <p>
                    Net Income
                    <br /> <span>${netincome}</span>
                  </p>
                </div>
              </div>
              <div className="max-w-[300px] space-y-5 flex-col flex items-center text-center w-full rounded-xl bg-neutral-900  p-4">
                <h1 className="text-3xl font-semibold">
                  {" "}
                  {left} <br />
                  <span className="text-xl">Left User</span>
                </h1>
                <h1 className="text-3xl font-semibold">
                  {" "}
                  {right} <br />
                  <span className="text-xl">Right User</span>
                </h1>

                <h1 className="text-3xl font-semibold">
                  {total} <br />
                  <span className="text-xl">Total User</span>
                </h1>
              </div>
            </div>
            <div className="w-full">
              <div className="flex items-center space-x-4 border-b-2 pb-8">
                <img
                  src="./images/dashboard/image.png"
                  className="w-20 rounded-full h-20 bg-gray-700 p-6"
                />
                <div className="">
                  <h1 className="text-xl font-semibold">
                    {" "}
                    {profileForm.fName} {profileForm.lName}
                  </h1>
                  <p className="text-gray-600">New York, USA</p>
                </div>
              </div>
              <div className="py-8 flex space-x-10 ">
                <button
                  onClick={() => setprofileState("pi")}
                  className="font-semibold"
                >
                  Personal information
                </button>
                <button
                  onClick={() => setprofileState("security")}
                  className="font-semibold"
                >
                  Security
                </button>
                <button
                  onClick={() => setprofileState("notification")}
                  className="font-semibold"
                >
                  Notification
                </button>
              </div>
              {profileState === "pi" && (
                <PI
                  profileForm={profileForm}
                  open={open}
                  setopen={setopen}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                />
              )}
              {profileState === "security" && <Security />}
              {profileState === "notification" && <Notification />}
            </div>
          </div>
        </div>
      )}

      {profileStateNav == "kyc" && (
        <div className="w-full  px-16 pb-16 bg-neutral-900 font-poppins">
          <h1 className="uppercase text-4xl pt-10  font-semibold text-center">
            User Verification
          </h1>
          <div className="my-8 font-medium text-lg">
            <h3 className="text-2xl font-semibold my-8 ">
              Verify your identity
            </h3>
            <p className="text-justify mb-5">
              To comply with regulation each participant will have to go through
              identity verification to prevent fraud causes. you have not
              submitted your necessary documents to verify your identity. In
              order to continue investing, please verify your identity.
            </p>
            <p className="mb-3 text-indigo-700">
              In order to complete, please upload any one of the following
              personal documents
            </p>

            <p className="mb-3">
              To avoid delays when verifying account, Please make sure follow:
            </p>
            <p>
              Documents should be good condition and clearly visible.
              <br />
              Make sure that there is no light glare on the card.
            </p>
          </div>

          <div className="w-full flex justify-center mb-12 items-center min-h-[10vh]">
            <div className="max-w-2xl mt-6 text-xl flex justify-between w-full rounded-full border-2  ">
              <button className=" rounded-full py-2 px-12  focus-within:bg-gradient-to-r focus-within:from-indigo-800 focus-within:to-purple-700">
                Passport
              </button>
              <button className=" rounded-full py-2 px-12  focus-within:bg-gradient-to-r focus-within:from-indigo-800 focus-within:to-purple-700">
                National ID
              </button>
              <button className=" rounded-full py-2 px-12  focus-within:bg-gradient-to-r focus-within:from-indigo-800 focus-within:to-purple-700">
                Driving License
              </button>
            </div>
          </div>

          <div className="w-full rounded-lg bg-neutral-800 p-3 px-10">
            <h2 className="font-medium">Upload your document here</h2>
            <div className="flex w-full my-5">
              <div className="w-3/4 border-dotted border-4 rounded-lg   flex items-center">
                <div className="w-full px-8">
                  <input
                    type="file"
                    className="mt-2 px-4 py-2 border rounded-xl bg-black w-full"
                    id="document"
                    name="document"
                  />
                </div>
              </div>
              <div className="w-1/4 mx-auto">
                <img src="./images/document.png" className="max-w-[280px]" />
              </div>
              <div></div>
            </div>
          </div>

          <div className="my-6 px-10 ">
            <div className="flex  items-center mb-4 ">
              <input type="checkbox" className="rounded-sm p-2 mr-4 border-2" />
              <p>I Have Read The Terms and Condition And Privacy Policy</p>
            </div>
            <div className="flex items-center mb-6">
              <input type="checkbox" className="rounded-sm p-2 mr-4 border-2" />

              <p>All The Personal Information I have Entered Is Correct.</p>
            </div>

            <button className="px-12 rounded-full py-2 bg-gradient-to-r from-indigo-400 to-fuchsia-700">
              Verify
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;

const FormPasswordComponent = ()=>{
  const [currentpassword, setcurrentpassword] = useState("");
  const [newpassword, setnewpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");

  const handleChangePassword = () => {

  };
  const FormSchema = yup.object().shape({
    pass: yup
      .string()
      .min(8, "Password must be 8 characters long")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[A-Z]/, "Password requires an uppercase letter")
      .matches(/[^\w]/, "Password requires a symbol"),
    confirm: yup
      .string()
      .oneOf([yup.ref("pass"), null], 'Must match "password" field value'),
  });
  return(
    <Formik
    initialValues={{
      name: "",
    }}
    validationSchema={FormSchema}
    onSubmit={(values) => {
      console.log(values);
    }}
  >
    {({ errors }) => {
      return <Form className="space-y-4">
        
      <div>
        <label className="" htmlFor="currentpassword">
          Current Password
        </label>
        <input
          type="password"
          className="mt-2 px-4 py-2 rounded-xl bg-black w-full"
          id="currentpassword"
          value={currentpassword}
          onChange={(e) => setcurrentpassword(e.target.value)}
          name="currentpassword"
        />
      </div>
      <div>
        <label className="" htmlFor="newpassword">
          New Password
          <Field
            type="password"
            name="pass"
            className="mt-2 px-4 py-2 rounded-xl bg-black w-full"
            // value={newpassword}
            // onChange={(e) => setnewpassword(e.target.value)}
          />
        </label>
        {errors.pass && <p>{errors.pass}</p>}
       
      </div>
      <div>
        <label className="" htmlFor="confirmpassword">
          Confirm Password
          <Field
            type="password"
            name="confirm"
            className="mt-2 px-4 py-2 rounded-xl bg-black w-full"
            // value={confirmpassword}
            // onChange={handleChangePassword}
          />
        </label>
        {errors.confirm && <p>{errors.confirm}</p>}
     
      </div>
      <button
        type="submit"
        className="bg-gradient-to-r from-indigo-400 to-fuchsia-500 rounded-xl px-12 py-3   text-white "
      >
        Save
      </button>
    </Form>
    }}
  </Formik>
  );
}

const SecurityPasswordComponent = ()=>{
  const FormSchema = yup.object().shape({
    pin: yup
      .number().min(4),
 

  
  confirmPin: yup
      .number()
      .oneOf([yup.ref("pin"), null], 'Must match " New Pin" field value'),
  });
  return(
    <Formik
    initialValues={{
     
    }}
    validationSchema={FormSchema}
    onSubmit={(values) => {
      console.log(values);
    }}>
   {
    ({errors}) =>(
      <Form className="space-y-4">
      <h1 className="text-xl font-medium mb-4">Security Pin</h1>
  
        <div>
          <label className="" htmlFor="currentsecurity">
            Current Security Pin
          </label>
          <input
            type="password"
            className="mt-2 px-4 py-2 rounded-xl bg-black w-full"
            id="currentsecurity"
            name="currentsecurity"
          />
        </div>
        <div>
          <label className="" htmlFor="pin">
            New Security Pin
            <Field
            type="password"
            className="mt-2 px-4 py-2 rounded-xl bg-black w-full"
            id="pin"
            name="pin"
          />
          </label>
          {errors.pin && <p>{errors.pin}</p>}
       
        </div>
        <div>
          <label className="" htmlFor="confirmPin">
            Confirm Security Pin
            <Field
            type="password"
            className="mt-2 px-4 py-2 rounded-xl bg-black w-full"
            id="confirmPin"
            name="confirmPin"
          />
          </label>
          {errors.confirmPin && <p>{errors.confirmPin}</p>}

        
        </div>
        <button  type="submit" className="bg-gradient-to-r from-indigo-400 to-fuchsia-500 rounded-xl px-12 py-3   text-white ">
          Save
        </button>
      </Form>
    )
   }
  </Formik>
  )
}
const Security = () => {



  return (
    <div className="space-y-4">
      <div>
        {console.log
        ("1")}
    <FormPasswordComponent />
      </div>
     <SecurityPasswordComponent/>
    </div>
  );
};

const PI = ({ profileForm, open, setopen, handleChange, handleSubmit }) => {
  return (
    <div>
      <div className="w-full grid grid-cols-2 gap-4">
        <div>
          <label className="text-gray-600" htmlFor="fn">
            First name
          </label>
          <input
            name="fName"
            value={profileForm.fName}
            readOnly
            className=" px-4 py-1 rounded-lg text-black font-medium w-full"
            id="fName"
          />
        </div>
        <div>
          <label className="text-gray-600" htmlFor="ln">
            Last name
          </label>
          <input
            name="lName"
            readOnly
            value={profileForm.lName}
            className=" px-4 py-1 rounded-lg text-black font-medium w-full"
            id="lName"
          />
        </div>
        <div>
          <label className="text-gray-600" htmlFor="fn">
            Email
          </label>
          <input
            name="email"
            readOnly
            value={profileForm.email}
            className=" px-4 py-1 rounded-lg text-black font-medium w-full"
            id="email"
          />
        </div>
        <div>
          <label className="text-gray-600" htmlFor="fn">
            Phone number
          </label>
          <input
            name="phoneNo"
            readOnly
            value={profileForm.phoneNo}
            className=" px-4 py-1 rounded-lg text-black font-medium w-full"
            id="phoneNo"
          />
        </div>
        <div>
          <label className="text-gray-600" htmlFor="fn">
            Country
          </label>
          <input
            name="country"
            readOnly
            value={profileForm.country}
            className=" px-4 py-1 rounded-lg text-black font-medium w-full"
            id="country"
          />
        </div>
        <div>
          <label className="text-gray-600" htmlFor="fn">
            Pin Code
          </label>
          <input
            name="pinCode"
            readOnly
            value={profileForm.pinCode}
            className=" px-4 py-1 rounded-lg text-black font-medium w-full"
            id="pinCode"
          />
        </div>
      </div>
      <div className="w-full flex justify-end space-x-6 mt-4 ">
        <button
          onClick={() => setopen((prev) => !prev)}
          className="px-6 py-2 bg-blue-600 rounded-lg text-white"
        >
          Edit
        </button>
      </div>

      {open && (
        <div className="w-full flex justify-center absolute top-0 left-0 max-h-full h-full  items-center bg-black bg-opacity-70  ">
          <div className="max-w-[550px] rounded-2xl bg-neutral-900 p-6  relative">
            <h1 className="text-4xl font-medium mb-10">Edit Your Profile</h1>

            <div className="w-full grid grid-cols-2 gap-4">
              <div>
                <label className="text-gray-600" htmlFor="fn">
                  First name
                </label>
                <input
                  name="fName"
                  value={profileForm.fName}
                  onChange={handleChange}
                  className=" px-4 py-1 rounded-lg text-black font-medium w-full"
                  id="fName"
                />
              </div>
              <div>
                <label className="text-gray-600" htmlFor="ln">
                  Last name
                </label>
                <input
                  name="lName"
                  onChange={handleChange}
                  value={profileForm.lName}
                  className=" px-4 py-1 rounded-lg text-black font-medium w-full"
                  id="lName"
                />
              </div>
              <div>
                <label className="text-gray-600" htmlFor="fn">
                  Email
                </label>
                <input
                  name="email"
                  onChange={handleChange}
                  value={profileForm.email}
                  className=" px-4 py-1 rounded-lg text-black font-medium w-full"
                  id="email"
                />
              </div>
              <div>
                <label className="text-gray-600" htmlFor="fn">
                  Phone number
                </label>
                <input
                  name="phoneNo"
                  onChange={handleChange}
                  value={profileForm.phoneNo}
                  className=" px-4 py-1 rounded-lg text-black font-medium w-full"
                  id="phoneNo"
                />
              </div>
              <div>
                <label className="text-gray-600" htmlFor="fn">
                  Country
                </label>
                <input
                  name="country"
                  onChange={handleChange}
                  value={profileForm.country}
                  className=" px-4 py-1 rounded-lg text-black font-medium w-full"
                  id="country"
                />
              </div>
              <div>
                <label className="text-gray-600" htmlFor="fn">
                  Pin Code
                </label>
                <input
                  name="pinCode"
                  onChange={handleChange}
                  value={profileForm.pinCode}
                  className=" px-4 py-1 rounded-lg text-black font-medium w-full"
                  id="pinCode"
                />
              </div>
            </div>
            <div className="w-full flex justify-end space-x-6 mt-4 ">
              <button
                onClick={() => setopen((prev) => !prev)}
                className="px-6 py-2 bg-rose-600 rounded-lg text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Notification = () => {
  return (
    <div>
      <div>
        <h1 className="text-xl font-medium">Security Alerts</h1>
        <p className="text-gray-600 text-sm">
          You will get only those email notification what you want
        </p>
        {/* first  */}
        <div class="flex items-center  w-full my-4">
          <label for="toggleA" class="flex items-center cursor-pointer">
            <div class="relative">
              <input type="checkbox" id="toggleA" class="sr-only" />

              <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>

              <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
            </div>

            <div class="ml-3 text-gray-700 font-medium">
              Email me whenever encounter unusual activity
            </div>
          </label>
        </div>
        {/* second  */}
        <div class="flex items-center  w-full my-4">
          <label for="toggleB" class="flex items-center cursor-pointer">
            <div class="relative">
              <input type="checkbox" id="toggleB" class="sr-only" />

              <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>

              <div class="dot2 absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
            </div>

            <div class="ml-3 text-gray-700 font-medium">
              Email me if the suspicious browser is used to sign in
            </div>
          </label>
        </div>
      </div>
      <div>
        <h1 className="text-xl font-medium">News</h1>
        <p className="text-gray-600 text-sm">
          You will get only those email notification what you want
        </p>
        {/* first  */}
        <div class="flex items-center  w-full my-4">
          <label for="toggleC" class="flex items-center cursor-pointer">
            <div class="relative">
              <input type="checkbox" id="toggleC" class="sr-only" />

              <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>

              <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
            </div>

            <div class="ml-3 text-gray-700 font-medium">
              Notify me by email about sales and latest news
            </div>
          </label>
        </div>
        {/* second  */}
        <div class="flex items-center  w-full my-4">
          <label for="toggleD" class="flex items-center cursor-pointer">
            <div class="relative">
              <input type="checkbox" id="toggleD" class="sr-only" />

              <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>

              <div class="dot2 absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
            </div>

            <div class="ml-3 text-gray-700 font-medium">
              Email me about new features and updates
            </div>
          </label>
        </div>
        {/* third  */}
        <div class="flex items-center  w-full my-4">
          <label for="toggleE" class="flex items-center cursor-pointer">
            <div class="relative">
              <input type="checkbox" id="toggleE" class="sr-only" />

              <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>

              <div class="dot2 absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
            </div>

            <div class="ml-3 text-gray-700 font-medium">
              Email me about tips on using account
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};
