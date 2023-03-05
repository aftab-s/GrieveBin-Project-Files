import React from "react";
import tick from "../assets/tick.png";
import edit from "../assets/edit.png";
import toAddressIcon from "../assets/notaddresssed.png";
import { Link } from "react-router-dom";

const ComplaintCard = () => {
  return (
    <div className="flex flex-col w-[459px] h-[573px] ml-10 shadow-xl bg-black rounded-2xl text-white">
      <p className="font-main text-4xl ml-10 mt-10 ">Complaint Status</p>
      <div className="flex cursor-pointer mt-10 ml-10">
        <div className="bg-white p-2 rounded-lg mr-4 ">
          <img className="w-full " src={tick} alt="" />
        </div>
        <p className="font-main text-3xl ">
          {" "}
          <Link to="/user/grievances">Resolved</Link>{" "}
        </p>
      </div>
      <div className="flex cursor-pointer mt-10 ml-10">
        <div className="bg-[#F6FEE0;] p-2 rounded-lg mr-4 ">
          <img className="w-full " src={edit} alt="" />
        </div>
        <p className="font-main text-3xl ">
          {" "}
          <Link to="/user/grievances">In Progress</Link>
        </p>
      </div>
      <div className=" cursor-pointer flex mt-10 ml-10">
        <div className="bg-[#DAF4FE] p-2 rounded-lg mr-4 ">
          <img className="w-full " src={toAddressIcon} alt="" />
        </div>
        <p className="font-main text-3xl ">
          <Link to="/user/grievances">To Be Addressed</Link>
        </p>
      </div>
    </div>
  );
};

export default ComplaintCard;
