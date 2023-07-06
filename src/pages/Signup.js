import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { baseURL } from "../constants/Constant";
import { FiLoader } from "react-icons/fi";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
const Signup = ({setIsLoggedIn}) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    sponsor: "",
    sponsorId: "",
    sponsorName: "",
    position: "",
    firstName: "",
    lastName: "",
    country: "",
    contactNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    confirmEmail: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    if (e.target.name === "sponsorId") {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        sponsorName: "", // Clear the sponsor name when the sponsor ID is changed
        userNotFound: false, // Reset the userNotFound state
      });

      if (e.target.value.length === 7) {
        console.log(e.target.value)
        fetchSponsorName(e.target.value);

      }
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Print the form data

    if (formData.confirmEmail === formData.email) {
      if (formData.password === formData.confirmPassword) {
        setLoading(true);
        const requestData = {
          referrer_id: formData.sponsorId,
          position: formData.position,
          username: `${formData.firstName} ${formData.lastName}`,
          country: formData.country,
          phone: formData.contactNumber,
          email: formData.email,
          password: formData.confirmPassword,
        };

        // Send the data to the backend API 
        axios
          .post(baseURL + "/api/users/signup", requestData)
          .then((response) => {
            setLoading(false); // Stop loading

            if (response.data.success) {
              const { token, userId } = response.data;
              const userData = {
                token: token,
                email: formData.email,
                userId: userId,
              };

              localStorage.setItem("user_data", JSON.stringify(userData));

              toast.success("Registration successful");
              setIsLoggedIn(true)
              navigate("/dashboard");
            } else {
              toast.error("Something went wromg");
            }
          })
          .catch((error) => {
            console.log(error);
            if (error?.response?.data?.message === "Email already in use") {
              toast.error("Email exists");
            } else {
              toast.error("Something went wromg");
            }
            setLoading(false);
          });
      } else {
        toast.error("Emails do not match");
      }
    }
  };

  const fetchSponsorName = (sponsorId) => {
    axios
      .get(baseURL + `/api/users/name/${sponsorId}`)
      .then((response) => {
        const { data } = response;
        console.log('response',response);

        if (data.success) {
          setFormData({
            ...formData,
            sponsorId: sponsorId,
            sponsorName: data.data.name,
            userNotFound: false, // Reset the userNotFound state when the user is found
          });
        } else {
          setFormData({
            ...formData,
            sponsorId: sponsorId,
            sponsorName: "", // Clear the sponsor name when the user is not found
            userNotFound: true, // Set the userNotFound state to true
          });
        }
      })
      .catch((error) => {
        setFormData({
          ...formData,
          sponsorId: sponsorId,
          sponsorName: "", // Clear the sponsor name in case of an error
          userNotFound: true, // Set the userNotFound state to true
        });
      });
  };

  return (
    <div className="w-full max-w-full font-poppins max-h-[100vh] relative">
      <img
        src="./images/signupbg.jpg"
        className="w-full object-cover max-h-[100vh]"
        alt="Signup Background"
      />
      <div className="w-1/2 px-24 text-center absolute top-20 ">
        <h1 className="mb-6 text-5xl font-semibold">Welcome to one ozo</h1>
        <p className="mb-6">
         
          <Link to="/login" className="font-semibold">Login</Link> if you already have an account
        </p>

        <div className="flex space-x-6 mb-4 max-w-[350px] text-center font-semibold items-center">
          <p className="">Do you have a sponsor?</p>
          <div className="space-x-3">
            <input
              type="radio"
              name="sponsor"
              id="yes"
              value="yes"
              className=""
              onChange={handleChange}
            />
            <label htmlFor="yes">Yes</label>
          </div>
          <div className="space-x-3">
            <input
              type="radio"
              name="sponsor"
              id="no"
              value="no"
              className=""
              onChange={handleChange}
            />

            <label htmlFor="no">No</label>
          </div>
        </div>

        <div className="max-w-1/2 w-full">
          <h1 className="text-xl text-left font-semibold">Sponsor Details</h1>

          <div className="flex space-x-6 mb-6 mt-2 w-full">
            <input
              placeholder="Sponsor ID"
              className="w-full rounded-md bg-neutral-900 py-1 px-4"
              name="sponsorId"
              value={formData.sponsorId}
              onChange={handleChange}
            />
            <input
              placeholder="Sponsor Name"
              className="w-full bg-neutral-900 rounded-md b py-1 px-4"
              name="sponsorName"
              value={formData.sponsorName}
              onChange={handleChange}
              readOnly
            />
          </div>

          {formData.userNotFound && (
            <p className="text-red-500">
              User not found. Please enter a valid Sponsor ID.
            </p>
          )}

          <div className="flex space-x-6 mb-6 max-w-[350px] font-semibold items-center">
            <p className="">Position</p>
            <div className="space-x-3">
              <input
                type="radio"
                name="position"
                id="right"
                value="right"
                className=""
                onChange={handleChange}
              />
              <label htmlFor="right">Right</label>
            </div>
            <div className="space-x-3">
              <input
                type="radio"
                name="position"
                id="left"
                value="left"
                className=""
                onChange={handleChange}
              />

              <label htmlFor="left">Left</label>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <input
              placeholder="First name"
              type="text"
              className="w-full rounded-md bg-neutral-900 py-1 px-4"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />

            <input
              placeholder="Last name"
              type="text"
              className="w-full rounded-md bg-neutral-900 py-1 px-4"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            <input
              placeholder="Choose your Country"
              type="text"
              className="w-full rounded-md bg-neutral-900 py-1 px-4"
              name="country"
              value={formData.country}
              onChange={handleChange}
            />
            <input
              placeholder="Contact number"
              type="text"
              className="w-full rounded-md bg-neutral-900 py-1 px-4"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
            />

            <input
              placeholder="Email"
              type="email"
              className="w-full rounded-md bg-neutral-900 py-1 px-4"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              placeholder="Confirm Email"
              type="email"
              className="w-full rounded-md bg-neutral-900 py-1 px-4"
              name="confirmEmail"
              value={formData.confirmEmail}
              onChange={handleChange}
            />
            <input
              placeholder="Create password"
              type="password"
              className="w-full rounded-md bg-neutral-900 py-1 px-4"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <input
              placeholder="Confirm password"
              type="password"
              className="w-full rounded-md bg-neutral-900 py-1 px-4"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <button
            className="w-full py-2 bg-gradient-to-tr from-indigo-400 to bg-fuchsia-500 rounded-lg"
            onClick={handleSubmit}
          >
            Sign up
            {loading && (
              <div className="flex items-center justify-center mt-4">
                <FiLoader className="animate-spin text-blue-500" size={24} />{" "}
                {/* Spinner icon */}
                <span className="ml-2">Loading...</span>
              </div>
            )}
          </button>
          <p className="text-center my-2 text-sm">
          <Link to="/login" className="font-semibold">  Already have an account? sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
