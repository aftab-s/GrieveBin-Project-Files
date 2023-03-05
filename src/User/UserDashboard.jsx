import React from "react";
import RegisterIcon from "../assets/registerComplaint.png";
import AssistanceIcon from "../assets/assistance.png";
import { Link } from "react-router-dom";
import { ComplaintCard } from "../components";

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
          <ComplaintCard />
        </div>
      </p>
    </div>
  );
};

export default UserDashboard;
