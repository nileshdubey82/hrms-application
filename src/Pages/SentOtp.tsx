import { IoIosArrowBack } from "react-icons/io";
import { AiTwotoneEyeInvisible } from "react-icons/ai";
import React, { useRef, useState } from "react";

import { Link } from "react-router-dom";

interface Props {}

interface Cred {
  email: string | number | null;
}
export default function SendOtp({}: Props) {
  return (
    <section className="flex flex-row flex-grow " id="login-main">
      <div className="image-div flex justify-end items-center  ">
        <img
          src="./src/assets/Light/dashboard.png"
          className="dashboard-image w-[70%]"
        />
      </div>
      <div className="login-form form-div-login ps-[50px] ">
        <div className=" w-[400px]">
          <Link to={"/login"} className="flex items-center text-xl mb-[20px]">
            {" "}
            <IoIosArrowBack />
            Back
          </Link>
          <h1 className="font-bold text-3xl">Enter OTP</h1>
          <span className="text-gray-400 w-[300px] text-sm">
            We have share a code of your registered email address
            robertallen@example.com
          </span>
          <form className="mt-2 flex gap-5">
            <label className="input input-bordered flex items-center gap-2 w-[50px]  input-lable">
              <input type="text" className="" />
            </label>
            <label className="input input-bordered flex items-center gap-2 w-[50px]  input-lable">
              <input type="text" className="" />
            </label>
            <label className="input input-bordered flex items-center gap-2 w-[50px]  input-lable">
              <input type="text" className="" />
            </label>
            <label className="input input-bordered flex items-center gap-2 w-[50px]  input-lable">
              <input type="text" className="" />
            </label>
            <label className="input input-bordered flex items-center gap-2 w-[50px]  input-lable">
              <input type="text" className="" />
            </label>
          </form>
          <button
            className="btn btn-block bg-[#7152f3] hover:bg-[#7152f3] hover:scale-90 mt-[20px] font-normal text-white"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Varify
          </button>
        </div>
      </div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box flex justify-center flex-col w-[380px]">
          <h3 className="font-bold text-lg text-center flex justify-center">
            <img src="./src/assets/light/ModelPng.png" />
          </h3>
          <p className="py-4 text-center font-black text-2xl">
            Password Update Successfully
          </p>
          <p className="text-gray-400  text-sm text-center">
            Your password has been update successfully
          </p>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            {/* <button className="btn btn-block bg-[#7152f3] hover:bg-[#7152f3] hover:scale-90 mt-[10px] font-normal text-white"> */}
            <Link
              to={"/login"}
              className="btn btn-block bg-[#7152f3] hover:bg-[#7152f3] hover:scale-90 mt-[10px] font-normal text-white"
            >
              Back to Login
            </Link>
            {/* </button> */}
          </div>
        </div>
      </dialog>
    </section>
  );
}
