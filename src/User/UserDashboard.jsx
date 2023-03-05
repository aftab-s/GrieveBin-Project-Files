import React from "react";
import RegisterIcon from "../assets/registerComplaint.png";
import AssistanceIcon from "../assets/assistance.png";
import tick from "../assets/tick.png";
import edit from "../assets/edit.png";
import toAddressIcon from "../assets/notaddresssed.png";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  return (
    <div className="flex items-center justify-center mb-20 mt-20 ">
      <p className="font-main font-bold  text-3xl  mt-10 justify-center items-center">
        Welcome Busy Sky,
        <div className="flex w-full mt-20 ">
          <div className="flex flex-col">
            <Link to="/user/new-grievance">
              <div className="w-[411px] flex p-4    h-[286px] cursor-pointer  rounded-xl bg-white border border-blue-600 shadow-xl">
                <p className="font-main font-bold mt-9 ml-9 text-4xl ">
                  Register a Complaint
                </p>
                <img
                  className="w-full mt-20 !mr-24"
                  src={RegisterIcon}
                  alt=""
                />
              </div>
            </Link>
            {/* Assistance Card */}
            <a
              href="https://chai.ml/chat/share/_bot_da0d4b3c-ce5f-4ff9-85c8-33335c227802"
              target="_blank"
              rel="noreferrer"
            >
              <div className="w-[404px] flex p-4 mt-4   h-[246px] cursor-pointer  rounded-xl bg-[#F6FEE0] border border-blue-600 shadow-xl">
                <p className="font-main font-bold mt-9 ml-9 text-4xl ">
                  Assistance
                </p>
                <img
                  className="w-[100%] mt-20 !mr-24"
                  src={AssistanceIcon}
                  alt=""
                />
              </div>
            </a>
          </div>
          <div className="flex flex-col w-[459px] h-[573px] ml-10 shadow-xl bg-black rounded-2xl text-white">
            <p className="font-main text-4xl ml-10 mt-10 ">Complaint Status</p>
            <div className="flex cursor-pointer mt-10 ml-10">
              <div className="bg-white p-2 rounded-lg mr-4 ">
                <img className="w-full " src={tick} alt="" />
              </div>
              <p className="font-main text-3xl ">Resolved</p>
            </div>
            <div className="flex cursor-pointer mt-10 ml-10">
              <div className="bg-[#F6FEE0;] p-2 rounded-lg mr-4 ">
                <img className="w-full " src={edit} alt="" />
              </div>
              <p className="font-main text-3xl ">In Progress</p>
            </div>
            <div className=" cursor-pointer flex mt-10 ml-10">
              <div className="bg-[#DAF4FE] p-2 rounded-lg mr-4 ">
                <img className="w-full " src={toAddressIcon} alt="" />
              </div>
              <p className="font-main text-3xl ">To Be Addressed</p>
            </div>
          </div>
        </div>
      </p>
    </div>
  );
};

export default UserDashboard;
