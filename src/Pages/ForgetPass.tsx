import { IoIosArrowBack } from "react-icons/io";
import { AiTwotoneEyeInvisible } from "react-icons/ai";
import React, { useRef, useState } from "react";

import { Link } from "react-router-dom";

interface Props {}

interface Cred {
  email: string | number | null;
}
export default function ForgetPass({}: Props) {
  return (
    <section className="flex flex-row flex-grow " id="login-main">
      <div className="image-div flex justify-end items-center   h-screen">
        <img
          src="./src/assets/Light/dashboard.png"
          className="dashboard-image w-[70%]"
        />
      </div>
      <div className="login-form form-div-login h-screen ps-[50px] ">
        <div className=" w-[400px]">
          <Link to={"/login"} className="flex items-center text-xl mb-[20px]">
            {" "}
            <IoIosArrowBack />
            Back
          </Link>
          <h1 className="font-bold text-3xl">Forgot Password</h1>
          <span className="text-gray-400 w-[300px]">
            Enter your registered email address. we’ll send you a code to reset
            your password.
          </span>
          <form className="mt-2">
            <label className="input input-bordered flex items-center gap-2 w-[400px] input-lable">
              <input
                type="text"
                className="grow"
                placeholder="Enter Email Id"
              />
            </label>

            {/* <button > */}
              <Link to={"/sendotp"} className="btn btn-block bg-[#7152f3] hover:bg-[#7152f3] hover:scale-90 mt-[20px] text-white">Send OTP</Link>
            {/* </button> */}
          </form>
        </div>
      </div>
    </section>
  );
}
