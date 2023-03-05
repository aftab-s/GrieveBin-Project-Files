import React from "react";
import { Hero } from "../components";

const Home = () => {
  return (
    <div className=" ">
      <Hero />
      <div className="flex w-[80%] container ml-56 flex-col mt-96  font-main justify-center items-center">
        <p className="font-main font-semibold mt-14 text-4xl">
          What is Grieve-Bin ?
        </p>
        <p className="font-main mb-60 container mt-6 text-2xl w-[60%] items-center ">
          Grieve-Bin is a user-friendly online platform designed to receive,
          manage and resolve grievances of different levels. With Grieve-Bin,
          users can report any issues they face and rest assured that their
          concerns will be promptly addressed by the appropriate parties.
        </p>
      </div>
    </div>
  );
};

export default Home;
