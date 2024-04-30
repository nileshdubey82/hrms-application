import { BsFillTrash3Fill } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { CiMenuKebab } from "react-icons/ci";
import { CgNotes } from "react-icons/cg";
import { BiCalendarCheck } from "react-icons/bi";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import React from "react";
import DemoDate from "./DemoDate";
import AttendanceChart from "./AttendanceChart";

interface Props {}

const Dashboard = (props: Props) => {
  const ListData = [
    {
      date: "Wednesday, 06 July 2023",
      items: [
        {
          time: "09:30",
          desi: "UI/UX Designer",
          task: "Practical Task Review",
        },
        {
          time: "12:00",
          desi: "Magento Developer",
          task: "Resume Review",
        },
        {
          time: "01:30",
          desi: "Sales Manager",
          task: "Final HR Round",
        },
      ],
    },
    {
      date: "Thursday, 07 July 2023",
      items: [
        {
          time: "09:30",
          desi: "Front end Developer",
          task: "Practical Task Review",
        },
        {
          time: "11:00",
          desi: "React JS",
          task: "TL Meeting",
        },
      ],
    },
  ];

  const TableData = [
    {
      id: 1,
      emp_name: "Nilesh Dubey",
      emp_img: "https://picsum.photos/200/300.webp",
      desi: "Software Development",
      type: "Office",
      check: "09:27 AM",
      status: "On Time",
    },
  ];

  return (
    <section className="pt-5  pr-5">
      <div className="flex">
        <div className="first-section   w-[60%] ">
          <div className="report  grid-cols-2 gap-4 grid px-5 ">
            <div className="data-div  bg-white rounded border border-slate-200">
              <div className="gap-3 flex items-center px-5 py-2">
                <button className="btn btn-square text-[#7152F3] text-xl">
                  <FaUsers />
                </button>
                <span>Total Employee</span>
              </div>
              <div className="gap-3 flex items-center justify-between    px-5 py-2">
                <span className="font-bold text-2xl">560</span>
                <button className="bg-[#30BE821A] text-[#30BE82] text-sm flex w-15 ps-3 pe-3 pt-1 pb-1 items-center rounded">
                  <AiFillCaretUp /> <span>12%</span>
                </button>
              </div>
              <div className="border-t border-slate-200 px-5 py-2 ">
                <span className="text-slate-300 font-thin text-[12px]">
                  Update: July 16, 2023
                </span>
              </div>
            </div>
            <div className="data-div  bg-white rounded border border-slate-200">
              <div className="gap-3 flex items-center px-5 py-2">
                <button className="btn btn-square text-[#7152F3] text-xl">
                  <MdOutlineBusinessCenter />
                </button>
                <span>Total Applicant</span>
              </div>
              <div className="gap-3 flex items-center justify-between px-5 py-2">
                <span className="font-bold text-2xl">1050</span>
                <button className="bg-[#30BE821A] text-[#30BE82] text-sm flex w-15 ps-3 pe-3 pt-1 pb-1 items-center rounded">
                  <AiFillCaretUp /> <span>5%</span>
                </button>
              </div>
              <div className="border-t border-slate-200 px-5 py-2 ">
                <span className="text-slate-300 font-thin text-[12px]">
                  Update: July 14, 2023
                </span>
              </div>
            </div>
            <div className="data-div  bg-white rounded border border-slate-200">
              <div className="gap-3 flex items-center px-5 py-2">
                <button className="btn btn-square text-[#7152F3] text-xl">
                  <BiCalendarCheck />
                </button>
                <span>Today Attendance</span>
              </div>
              <div className="gap-3 flex items-center justify-between    px-5 py-2">
                <span className="font-bold text-2xl">1050</span>
                <button className="bg-[#F45B691A] text-[#F45B69] text-sm flex w-15 ps-3 pe-3 pt-1 pb-1 items-center rounded">
                  <AiFillCaretDown /> <span>8%</span>
                </button>
              </div>
              <div className="border-t border-slate-200 px-5 py-2 ">
                <span className="text-slate-300 font-thin text-[12px]">
                  Update: July 14, 2023
                </span>
              </div>
            </div>
            <div className="data-div  bg-white rounded border border-slate-200">
              <div className="gap-3 flex items-center px-5 py-2">
                <button className="btn btn-square text-[#7152F3] text-xl">
                  <CgNotes />
                </button>
                <span>Total Projects</span>
              </div>
              <div className="gap-3 flex items-center justify-between  px-5 py-2">
                <span className="font-bold text-2xl">250</span>
                <button className="bg-[#30BE821A] text-[#30BE82] text-sm flex w-15 ps-3 pe-3 pt-1 pb-1 items-center rounded">
                  <AiFillCaretDown /> <span>12%</span>
                </button>
              </div>
              <div className="border-t border-slate-200 px-5 py-2 ">
                <span className="text-slate-300 font-thin text-[12px]">
                  Update: July 14, 2023
                </span>
              </div>
            </div>
          </div>

          <div className="charts-attendance flex justify-center flex-col align-middle border m-5">
            <div className="flex justify-between px-5 mt-2 items-center">
              <h1 className="font-bold text-xl">Attendance Overview</h1>
              <select className="select select-bordered w-auto max-w-xs">
                <option selected>Today</option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>
            <div className="flex justify-center">
              <AttendanceChart />
            </div>
          </div>
        </div>

        <div className="second-section rounded   w-[40%] border border-slate-300 mb-5">
          <div className="gap-3 flex items-center px-5 py-2 justify-between">
            <span className="font-bold text-xl">My Schedule</span>
            <button className="btn btn-square text-[#7152F3] text-xl">
              <CgNotes />
            </button>
          </div>
          <div className="flex justify-center align-middle">
            <DemoDate />
          </div>
          <div className="schedules mt-10">
            {ListData.map((item) => {
              return (
                <div className="px-8">
                  <div className="flex justify-between ">
                    <h3>{item.date}</h3>
                    <CiMenuKebab />
                  </div>
                  <br />
                  {item.items.map((it) => {
                    return (
                      <div className="flex gap-10 items-start mb-5">
                        <div>
                          <h3 className="font-bold text-xl">{it.time}</h3>
                        </div>
                        <div className="gradient-border ps-5">
                          <h3>{it.desi}</h3>
                          <h3 className="font-bold">{it.task}</h3>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="overflow-x-auto border border-slate-200 mb-10">
        <div className="flex justify-between px-5 mt-2 items-center">
          <h1 className="font-bold text-xl">Attendance Overview</h1>
          <select className="select select-bordered w-auto max-w-xs">
            <option selected>View All</option>
            <option>Yesterday</option>
            <option>Week</option>
          </select>
        </div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Employee Name</th>

              <th>Designation</th>
              <th>Type</th>
              <th>Check In Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {TableData.map((items) => {
              return (
                <tr>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={items.emp_img}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{items.emp_name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{items.desi}</td>
                  <td>{items.type}</td>
                  <td>{items.check}</td>
                  <td> <span className="bg-[#3FC28A1A]  text-[#3FC28A] p-1">{items.status}</span></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Dashboard;
