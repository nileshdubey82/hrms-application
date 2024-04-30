import { BsFillGearFill } from "react-icons/bs";
import { BsFillClipboardCheckFill } from "react-icons/bs";
import { BiNotepad } from "react-icons/bi";
import { HiOutlineUsers } from "react-icons/hi";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { BiCalendarCheck } from "react-icons/bi";
import { BiGroup } from "react-icons/bi";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { FaUsers } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";

import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Redux/Hooks/CounterHook";
import { setTheme } from "../../Redux/Slices/ThemeSlice";
import { useEffect, useState } from "react";

interface Props {}

const Sidebar = (props: Props) => {
  const sidebarItem = [
    {
      id: 1,
      name: "Dashboard",
      to: "/",
      isActive: true,
      Icon: <MdSpaceDashboard />,
    },
    {
      id: 2,
      name: "All Employee",
      to: "/All-Employee",
      isActive: false,
      Icon: <FaUsers />,
    },
    {
      id: 3,
      name: "All Department",
      to: "/All-Department",
      isActive: false,
      Icon: <BiGroup />,
    },
    {
      id: 4,
      name: "Attendance",
      to: "/Attendance",
      isActive: false,
      Icon: <BiCalendarCheck />,
    },
    {
      id: 5,
      name: "Payroll",
      to: "/Payroll",
      isActive: false,
      Icon: <AiOutlineDollarCircle />,
    },
    {
      id: 6,
      name: "jobs",
      to: "/jobs",
      isActive: false,
      Icon: <MdOutlineBusinessCenter />,
    },
    {
      id: 7,
      name: "Candidates",
      to: "/Candidates",
      isActive: false,
      Icon: <HiOutlineUsers />,
    },
    {
      id: 8,
      name: "Leaves",
      to: "/leaves",
      isActive: false,
      Icon: <BsFillClipboardCheckFill />,
    },
    {
      id: 9,
      name: "Holidays",
      to: "/holidays",
      isActive: false,
      Icon: <BiNotepad />,
    },
    {
      id: 10,
      name: "Settngs",
      to: "/Settngs",
      isActive: false,
      Icon: <BsFillGearFill />,
    },
  ];

  useEffect(() => {
    setpathUrl();
  });
  const [path, setpath] = useState("");

  const setpathUrl = () => {
    const currentPath = window.location.pathname;

    // Split the path by '/'
    const pathParts = currentPath.split("/");

    // Get the last part of the path
    const lastPath = "/" + pathParts[pathParts.length - 1];
    setpath(lastPath);
  };

  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.ThemeSlice.theme);
  return (
    <section
      id="sidebar"
      className="w-[300px] p-[10px] ps-[20px] bg-[#a2a1a80d] m-[10px] rounded relative"
    >
      <div className="dark:bg-black    ">
        <div className="sticky top-1 bg-[#fafafb] w-[100%]">
          <img src="./src/assets/light/LogoHrMS.png " className="w-[60%]" />
        </div>
        <div className="sidebar-items mt-[20px] p-5 ">
          <ul>
            {sidebarItem.map((items) => {
              return (
                <li
                  key={items.id} // Assuming each item has a unique 'id' field
                  className={`${items.to === path ? "active" : ""}`}
                  onClick={() => {
                    setpathUrl();
                  }}
                >
                  <Link
                    to={items.to}
                    className={
                      "flex align-middle flex-row items-center gap-2 text-[16px]"
                    }
                  >
                    {items.Icon}
                    <span>{items.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="theme-button   absolute bottom-2">
          <button
            onClick={() => {
              dispatch(setTheme());
            }}
            className={`${theme ? "swith-light" : "swith-dark"} dark:text-white text-black`}
          >
            <span className="flex items-center text-md gap-2 p-2">
              <CiLight />
              Light
            </span>
          </button>
          <button
            onClick={() => {
              dispatch(setTheme());
            }}
            className={`  ${theme ? "swith-dark" : "swith-light"} dark:text-white text-black`}
          >
            <span className="flex items-center text-md gap-2 p-2">
              <MdDarkMode /> Dark{" "}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
