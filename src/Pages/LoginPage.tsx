import { AiTwotoneEyeInvisible } from "react-icons/ai";
import React, { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../Redux/Hooks/CounterHook";
import { setTheme } from "../Redux/Slices/ThemeSlice";
import { Link } from "react-router-dom";

interface Props {}

interface Cred {
  username: string | number | null;
  password: string | number | null;
}
export default function LoginPage({}: Props) {
  const theme = useAppSelector((state) => state.ThemeSlice.theme);
  const dispatch = useAppDispatch();
  console.log(theme);
  const toggleTheme = () => {
    dispatch(setTheme());
  };

  const [password, setpassword] = useState<Cred>({
    username: null,
    password: null,
  });
  const handleShowPass = () => {};

  const passwordRef = useRef();
  const userRef = useRef();
  return (
    <section className="flex flex-row flex-grow " id="login-main">
      <div className="image-div flex justify-end items-center   h-screen">
        <img
          src="./src/assets/Light/dashboard.png"
          className="dashboard-image w-[70%]"
        />
      </div>
      <div className="login-form form-div-login h-screen ps-[50px]">
        <div className="w-[100%]">
          <img src="./src/assets/Light/LogoHrMS.png" className=" mb-[40px]" />
          <h1 className="font-bold text-3xl">Welcome 👋</h1>
          <span className="text-gray-400 ">Please login here</span>
          <form className="mt-2">
            <label className="input input-bordered flex items-center gap-2 w-[400px] input-lable">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="#7152f3"
                className="w-4 h-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input type="text" className="grow" placeholder="Username" />
            </label>
            <br />
            <label className="input input-bordered flex items-center gap-2 input-lable">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="#7152f3"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow"
                placeholder="Password"
                
              />

              <button type="button">
                {" "}
                <AiTwotoneEyeInvisible />
              </button>
            </label>
            <div className="flex justify-between pt-[15px]">
              <label className="flex align-middle items-center gap-1">
                {" "}
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="checkbox border-[#7152f3] checked:bg-[#7152f3]"
                />
                Remember Me
              </label>
              <Link to={"/forgetpass"} className="text-[#7152f3]">
                Forget Password ?
              </Link>
            </div>
            <button className="btn btn-block bg-[#7152f3] hover:bg-[#7152f3] hover:scale-90 mt-[20px] text-white">
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
