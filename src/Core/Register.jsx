import React from "react";
import { Link } from "react-router-dom";

import facebook from "../assets/facebook.png";
import apple from "../assets/apple.png";
const Register = () => {
  return (
    <div className="flex flex-col w-[80%] mt-10 p-4 ">
      <p className="justify-center items-center   font-main  text-5xl mb-28 mt-10 ml-[700px]">
        Register Here!
      </p>
      <div className="flex flex-col ml-80  items-center justify-between  ">
        <div className="flex">
          <div className="flex flex-col p-4">
            <label
              htmlFor="mail"
              className="font-main font-medium text-2xl mb-2"
            >
              Enter your Mail
            </label>
            <input
              type="mail"
              required
              className="rounded-lg p-4 text-black font-main  "
              placeholder="example@mail.com"
            />
          </div>
          <div className="flex flex-col p-4">
            <label
              htmlFor="mail"
              className="font-main font-medium text-2xl mb-2"
            >
              College/University Name
            </label>
            <input
              type="text"
              required
              className="rounded-lg p-4 text-black font-main  "
              placeholder="ABC College"
            />
          </div>
        </div>

        <div className="flex">
          <div className="flex flex-col p-4">
            <label
              htmlFor="mail"
              className="font-main font-medium text-2xl mb-2"
            >
              Create Your Password
            </label>
            <input
              type="password"
              required
              className="rounded-lg p-4 text-black font-main  "
              placeholder="*******"
            />
          </div>
          <div className="flex flex-col p-4">
            <label
              htmlFor="mail"
              className="font-main font-medium text-2xl mb-2"
            >
              Student Registation No.
            </label>
            <input
              type="text"
              required
              className="rounded-lg p-4 text-black font-main  "
              placeholder="UN10234"
            />
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col p-4">
            <label
              htmlFor="mail"
              className="font-main font-medium text-2xl mb-2"
            >
              Confirm Your Password
            </label>
            <input
              type="password"
              required
              className="rounded-lg p-4 text-black font-main  "
              placeholder="******"
            />
          </div>
          <div className="flex flex-col p-4">
            <label
              htmlFor="mail"
              className="font-main font-medium text-2xl mb-2"
            >
              University Mail Id
            </label>
            <input
              type="mail"
              required
              className="rounded-lg p-4 text-black font-main  "
              placeholder="college@mail.com"
            />
          </div>
        </div>

        <p className=" w-[60%] mt-10 bg-black text-white font-main text-xl p-4 text-center items-center  rounded-lg cursor-pointer ">
          Register
        </p>
        <div className="flex items-center mt-10 justify-center mb-12">
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
        </div>
        <p className="mt-10 font-medium text-xl mb-10">
          Already Have an Account ?{" "}
          <span className="underline font-semibold">
            {" "}
            <Link to="/login">Login Here</Link>{" "}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
