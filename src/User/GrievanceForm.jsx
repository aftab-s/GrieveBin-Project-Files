import React from "react";

const GrievanceForm = () => {
  return (
    <div className="flex flex-col items-center ml-36  mt-20 rounded-lg justify-center w-[80%] mb-20 ">
      <p className="font-main text-5xl font-semibold   items-center mt-20 ">
        Report Grievance
      </p>
      <form>
        <div className="flex flex-col mt-7">
          <label
            className="font-main font-medium mb-3  text-2xl "
            htmlFor="Subject"
          >
            Topic
          </label>
          <input
            className="p-4 focus:outline-none border rounded-lg font-main text-xl"
            size="50"
            type="text"
            required
            placeholder="what the grievance about ? eg: staff-service"
          />
        </div>
        <div className="flex flex-col">
          <label
            className="font-main font-medium mb-3  mt-3 text-2xl "
            htmlFor="Subject"
          >
            Description
          </label>
          <textarea
            className="p-4 focus:outline-none border w-[1000px] rounded-lg font-main text-xl"
            size="50"
            rows="5"
            type="text"
            required
            placeholder="Describe your Grievance here"
          />
        </div>
        <p className=" cursor-pointer  bg-black rounded-xl font-main  ml-36 mt-5 mb-5 items-center justify-center text-center w-[60%] text-xl p-4 text-white">
          Submit your Grievance
        </p>
      </form>
    </div>
  );
};

export default GrievanceForm;
