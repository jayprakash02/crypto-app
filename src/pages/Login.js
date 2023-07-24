import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiLoader } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { baseURL } from "../constants/Constant";
import { toast } from "react-hot-toast";

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
    <div className="overflow-y-hidden w-full max-w-full font-poppins max-h-[100vh] relative">
  <img
    src="./images/signupbg.jpg"
    class="w-full h-screen object-cover"
    alt="Signup Background"
  />
  <div className="w-full px-8 py-8 text-center absolute top-8 mx-auto my-0 max-w-[380px] max-h-[100vh] md:left-80 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
    <h1 className="mb-6 text-5xl font-semibold">Welcome to one ozo</h1>
    <p className="mb-4">
      Please <a href="/signup" className="font-semibold">register</a> if you don't have an account
    </p>

    <div className="flex flex-col mb-4 w-full">

      <h1 className="font-poppins text-leftfont-semibold text-4xl mb-4">Ozo Login</h1>

      <input
        placeholder="Enter your email address"
        type="text"
        className="w-full rounded-md font-thin
               bg-neutral-900 py-2 px-4 mb-4"
        name="email"
        value={loginForm.email}
        onChange={handleChange}
      />
      <input
        placeholder="Enter your password"
        type="password"
        className="w-full rounded-md font-thin
               bg-neutral-900 py-2 px-4 mb-4"
        name="password"
        value={loginForm.password}
        onChange={handleChange}
      />
      <button
        class="w-full py-3 bg-gradient-to-tr from-indigo-400 to bg-fuchsia-500 rounded-lg"
        onClick={handleSubmit}
      >
        Login
      </button>
    </div>
  </div>
</div>

  );
};

export default Login;
