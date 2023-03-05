import React from "react";

const SingleGrievance = () => {
  return (
    <div className="flex flex-col  justify-center items-center mt-20 mb-20 w-[100%]">
      <div className="bg-white p-4 rounded-lg">
        <p className="font-main font-semibold p-4 text-3xl ">
          <span className="text-blue-800">#1234:</span> Lack of Streetlights
        </p>
        <div className="flex ">
          <p className="flex  mt-3 flex-start mr-10 p-4 font-main">
            {" "}
            <span className="font-semibold">Created Date:</span> 05/03/2023
          </p>
          <p className=" mt-3 ml-[1000px] mb-5 flex flex-start rounded-lg bg-yellow-200 p-4">
            {" "}
            <span className="font-semibold">Status :</span> To be Address
          </p>
        </div>
        <p className="font-bold font-main mb-3">Description :</p>
        <p className=" container font-main font-normal text-md">
          Walking in the dark without proper lighting is a safety hazard that
          can lead to accidents, especially for those who are unfamiliar with
          the campus. Additionally, poorly lit areas can also make individuals
          more vulnerable to potential attacks or theft.
          <br /> Furthermore, lack of streetlights also affects the overall
          campus environment and quality of life for students, faculty, and
          staff. Poor lighting can create a gloomy and unwelcoming atmosphere,
          which may impact the mental health and well-being of the college
          community. <br /> I strongly urge the administration to take immediate
          action and install adequate streetlights across the campus to ensure
          the safety and well-being of students, faculty, and staff. It is the
          responsibility of the administration to provide a safe and conducive
          environment for learning and personal growth, and proper lighting is
          an essential part of that.
        </p>
      </div>
    </div>
  );
};

export default SingleGrievance;
