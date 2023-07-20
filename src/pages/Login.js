import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiLoader } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { baseURL } from "../constants/Constant";
import { toast } from "react-hot-toast";
import './Login.css'

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [loginForm, setLoginState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginState({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(loginForm, "login data ");
    try {
      await axios
        .post(`${baseURL}/api/users/signin`, loginForm)
        .then((res) => {
          console.log("res", res);
          if (res.data.success && res.data.token) {
            toast.success("Login successful");
            console.log("response", res);
            const userData = {
              token: res.data.token,
              email: loginForm.email,
              userId: res.data.data.userId,
            };
            localStorage.setItem("user_data", JSON.stringify(userData));
            navigate("/dashboard"); // Redirect to the dashboard upon successful login
            setIsLoggedIn(true);
          } else {
            toast.error("Invalid email or password");
          }
        })
        .catch((err) => {
          console.log(err);
          if (
            err.response.data.message === "Invalid email or you are a new user"
          ) {
            toast.error("Invalid email. Please register if you are a new user");
          } else if (err.response.data.message === "Password is incorrect.") {
            toast.error("Incorrect Password");
          } else {
            toast.error("Something went wrong, Please try again.");
          }
        });
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="overflow-hiddden">
    <div className="Login_div font-poppins">
      <img
        src="./images/signupbg.jpg"
        className="w-full object-cover max-h-[100vh] h-auto"
        alt="Signup Background"
      />
      <div className="login_content xl:px-60  sm:px-0">
        <h1 className="mb-6 text-5xl font-semibold md:px-10 sm:px-0">Welcome to one ozo</h1>
        <p className="mb-6">
          Please{" "}
          <Link to="/signup" className="font-semibold">
            register
          </Link>{" "}
          if you don't have an account
        </p>

        <div className="login_info">
          <h1 className="font-poppins text-left  font-semibold text-4xl ">
            Ozo Login
          </h1>

          <input
            placeholder="Enter your email address"
            type="text"
            className="w-full rounded-md font-thin
               bg-neutral-900 py-2 px-4"
            name="email"
            value={loginForm.email}
            onChange={handleChange}
          />
          <input
            placeholder="Enter your password "
            type="text"
            className="w-full rounded-md font-thin
               bg-neutral-900 py-2 px-4"
            name="password"
            value={loginForm.password}
            onChange={handleChange}
          />
          <button
            className="w-full py-3 bg-gradient-to-tr from-indigo-400 to bg-fuchsia-500 rounded-lg"
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
