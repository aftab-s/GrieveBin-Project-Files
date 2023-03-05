import React from "react";
import facebook from "../assets/facebook.png";
import apple from "../assets/apple.png";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="flex flex-col w-[40%] ml-[500px] mb-14 mt-10 p-4">
      <p className="justify-center items-center font-main  text-5xl mb-28 mt-10 ml-60">
        Login here!
      </p>

      <div className="flex flex-col justify-center ">
        <label htmlFor="mail" className="font-main font-semibold text-2xl mb-2">
          Enter your Mail
        </label>
        <input
          type="mail"
          required
          className="rounded-lg p-4 text-black font-main  "
          placeholder="example@mail.com"
        />
      </div>
      <div className="flex flex-col justify-center mt-9 ">
        <label htmlFor="mail" className="font-main font-semibold text-2xl mb-2">
          Password
        </label>
        <input
          type="password"
          required
          className="rounded-lg p-4 text-black font-main  "
          placeholder="*********"
        />
        <p className="ml-[550px] mt-2 text-black cursor-pointer">
          forgot your password?
        </p>
      </div>
      <div className="flex flex-col justify-center mb-10 mt-10  w-[100%]   ">
        <p className=" bg-black text-white font-main text-xl text-center items-center p-4 rounded-lg cursor-pointer justify-center">
          {" "}
          <Link to="/user/dashboard"> Login</Link>
        </p>
      </div>
      <div className="flex items-center justify-center mb-12">
        <dir className="border-2 border-white  w-60 "></dir>
        <p className=" ml-2 mr-2 font-medium text-2xl  font-main">
          OR Login with{" "}
        </p>
        <dir className="border-white border-2   w-60 "></dir>
      </div>
      <div className="flex flex-wrap items-center justify-between ">
        <div className="bg-white rounded-lg items-center w-36 justify-center p-4 ml-10 cursor-pointer   ">
          <img
            className="items-center justify-center ml-10 w-4"
            src={facebook}
            alt=""
          />
        </div>
        <div className="bg-white rounded-lg items-center w-36 justify-center p-4 mr-10 ml-8 cursor-pointer">
          <img
            className="items-center justify-center ml-10  w-7 "
            src={apple}
            alt=""
          />
        </div>
        <div className="bg-white rounded-lg items-center w-36 justify-center p-4 mr-9 cursor-pointer ">
          <img
            className="items-center justify-center ml-10 w-4"
            src={facebook}
            alt=""
          />
        </div>
        <p className="mt-14 ml-52 font-main text-xl">
          Don't have any account ?{" "}
          <span className="font-bold underline cursor-pointer">
            <Link to="/sign-up">SignUp here</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
