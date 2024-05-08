import React from "react";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between border items-center rounded-full py-[10.97px] pr-[13.89px] pl-[38.22px] sm:px-6 mx-0 sm:mx-8 my-3">
      <Link to="/">
        <img src="./logo.svg" alt="logo" style={{ height: "27.39px" }} />
      </Link>
      <div className="flex justify-end items-center gap-4 text-[15px] font-semibold">
        <Link
          to="/register"
          className=" py-[18.11px] px-[30.78px] md:font-semibold sm:font-normal rounded-full border hover:bg-[#F1F1F1]"
        >
          Get Projects
        </Link>
        <button className="py-[18.11px] px-[30.78px] sm:block hidden text-white bg-black rounded-full border hover:bg-[#4E4E4E] ">
          Onboard Talent
        </button>
      </div>
    </div>
  );
}

export default Navbar;
