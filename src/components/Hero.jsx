import React from "react";
import grieveLogo from "../assets/GrieveBin.png";
import heroImage from "../assets/hero.png";
const Hero = () => {
  return (
    <div>
      <div className="lg:mx-[6%] mx-[7%] md:flex md:flex-col justify-center md:w-[80%] lg:w-[50%] lg:my-24 hidden ">
        <img
          className="hidden md:block absolute z-[-80] w-full mt-[-20px]  lg:mt-[-0px] left-0 bg-opacity-50"
          src={heroImage}
          alt=""
        />
        <div className="flex flex-1/2">
          <div className="flex flex-col whitespace-nowrap text-white mt-16">
            <h1 className=" flex font-sans font-bold text-5xl md:text-5xl lg:text-7xl text-secondary lg:text-secondary my-5 z-20 ">
              Empowering Voices.
            </h1>
            <h1 className="mt-[-10px] flex font-sans font-bold text-4xl md:text-5xl lg:text-7xl text-secondary lg:text-secondary my-5 z-20">
              Resolving{"   "}
              <span className="ml-2   bg-gradient-to-r from-[#75EEFF] to-[#FF1EA5] bg-clip-text text-transparent">
                Grievances
              </span>
            </h1>
            <p className=" mt-3 flex items-center justify-center w-60 font-main text-lg cursor-pointer  btnBg ml-3 rounded-3xl p-3 text-black  bg-white">
              Know More
            </p>
          </div>
          <div className="ml-28">
            <img className="" src={grieveLogo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
