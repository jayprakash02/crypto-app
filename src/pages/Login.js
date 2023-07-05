import axios from "axios";
import React, { useState } from "react";
import { FiLoader } from "react-icons/fi";
import { Link } from "react-router-dom";
import { baseURL } from "../constants/Constant";

const Login = () => {
  const [loginForm, setLoginState] = useState({
    email: "",
    password: "",
  });
 const  handleChange = (e )=>{
        setLoginState({
          ...loginForm,[e.target.name]: e.target.value,

        })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginForm,"login data ")


    // axios.post(baseURL + "/api/users/signup",loginForm).then((res) =>)
  };


  return (
    <div className="w-full max-w-full font-poppins max-h-[100vh] relative">
      <img
        src="./images/signupbg.jpg"
        className="w-full object-cover max-h-[100vh]"
        alt="Signup Background"
      />
      <div className="w-1/2 px-24 flex flex-col items-center text-center absolute top-32 ">
        <h1 className="mb-6 text-5xl font-semibold">Welcome to one ozo</h1>
        <p className="mb-6">
          Please{" "}
          <Link to="/signup" className="font-semibold">
            register
          </Link>{" "}
          if you don't have an account
        </p>

        <div className="flex flex-col mb-4 space-y-8 max-w-[380px] w-full justify-center text-center font-semibold items-center">
        <h1 className="font-poppins text-left  font-semibold text-4xl ">Ozo Login</h1>

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
  );
};

export default Login;
