import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState(false);

  const pathCheck = () => {
    if (window.location.pathname === "/user/dashboard") {
      return setUser(true);
    }
  };
  useEffect(() => {
    pathCheck();
  }, [window.location]);
  return (
    <div className="flex w-[90%] items-center ml-20 mt-4 p-4 shadow-md  mr-4 bg-white   rounded-2xl ">
      <p className=" w-1/2 text-3xl font-bold font-main ml-8 cursor-pointer  ">
        <Link to="/">Greive-Bin</Link>
      </p>
      <div className="flex w-1/2  justify-end ml-28 ">
        <Link to={user ? "/user/dashboard" : "/login"}>
          <p className="  bg-[#F8CCF3] rounded-xl p-3 font-semibold mr-4   font-main  cursor-pointer ">
            {user ? "Home" : "Login"}
          </p>
        </Link>
        <Link to={user ? "/user/settings" : "/sign-up"}>
          <p className=" bg-[#F8CCF3] font-semibold rounded-xl p-3 font-main cursor-pointer ">
            {user ? "User #Busy-Sky" : "Register"}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
