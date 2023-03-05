import React from "react";
import { ComplaintCard } from "../components";
import edit from "../assets/edit.png";
import tobeAddressedIcon from "../assets/notaddresssed.png";
import tick from "../assets/tick.png";
import { Link } from "react-router-dom";
const Grievances = () => {
  return (
    <div className="flex w-[80%]  items-center justify-center mt-32 ml-28 mb-40">
      <div className="containe">
        <ComplaintCard />
      </div>
      <div className="flex ml-10 flex-col rounded-2xl p-4 bg-white border boder-[#0080FF]">
        <Link to="/user/grievance/1234">
          <div className="flex mb-2 rounded-lg p-4 bg-[#D2F7FF] border border-blue-500 ">
            <div className="flex flex-col ml-2">
              <p>
                <span className="font-semibold">Complaint ID</span>: 12345
              </p>
              <p>
                <span className="font-semibold">Date of Submission:</span>{" "}
                22/01/2023
              </p>
            </div>
            <p className="ml-2 font-main  mr-5">
              <span className="font-semibold">Title :</span> Lack of
              Streetlights
            </p>
            <div>
              <img src={edit} alt="edit icon" />
            </div>
          </div>
        </Link>
        <Link to="/user/grievance/1234">
          <div className="flex mb-2 rounded-lg p-4 bg-[#D2F7FF] border border-blue-500 ">
            <div className="flex flex-col ml-2">
              <p>
                <span className="font-semibold">Complaint ID</span>: 12345
              </p>
              <p>
                <span className="font-semibold">Date of Submission:</span>{" "}
                22/01/2023
              </p>
            </div>
            <p className="ml-2 font-main  mr-5">
              <span className="font-semibold">Title :</span> Lack of
              Streetlights
            </p>
            <div>
              <img src={tobeAddressedIcon} alt="edit icon" />
            </div>
          </div>
        </Link>
        <Link to="/user/grievance/1234">
          <div className="flex mb-2 rounded-lg p-4 bg-[#D2F7FF] border border-blue-500 ">
            <div className="flex flex-col ml-2">
              <p>
                <span className="font-semibold">Complaint ID</span>: 12345
              </p>
              <p>
                <span className="font-semibold">Date of Submission:</span>{" "}
                22/01/2023
              </p>
            </div>
            <p className="ml-2 font-main  mr-5">
              <span className="font-semibold">Title :</span> Lack of
              Streetlights
            </p>
            <div className="bg-green-300 text-transparent bg-clip-text">
              <img src={tick} alt="edit icon" />
            </div>
          </div>
        </Link>
        <Link to="/user/grievance/1234">
          <div className="flex mb-2 rounded-lg p-4 bg-[#D2F7FF] border border-blue-500 ">
            <div className="flex flex-col ml-2">
              <p>
                <span className="font-semibold">Complaint ID</span>: 12345
              </p>
              <p>
                <span className="font-semibold">Date of Submission:</span>{" "}
                22/01/2023
              </p>
            </div>
            <p className="ml-2 font-main  mr-5">
              <span className="font-semibold">Title :</span> Lack of
              Streetlights
            </p>
            <div>
              <img src={tick} alt="edit icon" />
            </div>
          </div>
        </Link>
        <Link to="/user/grievance/1234">
          <div className="flex mb-2 rounded-lg p-4 bg-[#D2F7FF] border border-blue-500 ">
            <div className="flex flex-col ml-2">
              <p>
                <span className="font-semibold">Complaint ID</span>: 12345
              </p>
              <p>
                <span className="font-semibold">Date of Submission:</span>{" "}
                22/01/2023
              </p>
            </div>
            <p className="ml-2 font-main  mr-5">
              <span className="font-semibold">Title :</span> Lack of
              Streetlights
            </p>
            <div>
              <img src={edit} alt="edit icon" />
            </div>
          </div>
        </Link>
        <Link to="/user/grievance/1234">
          <div className="flex mb-2 rounded-lg p-4 bg-[#D2F7FF] border border-blue-500 ">
            <div className="flex flex-col ml-2">
              <p>
                <span className="font-semibold">Complaint ID</span>: 12345
              </p>
              <p>
                <span className="font-semibold">Date of Submission:</span>{" "}
                22/01/2023
              </p>
            </div>
            <p className="ml-2 font-main  mr-5">
              <span className="font-semibold">Title :</span> Lack of
              Streetlights
            </p>
            <div>
              <img src={edit} alt="edit icon" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Grievances;
