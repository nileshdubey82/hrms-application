import React from "react";
import { AiOutlineEye, AiOutlineEdit } from "react-icons/ai";
import { BsFillTrash3Fill } from "react-icons/bs";

type Props = {};

const AllEmp = (props: Props) => {
  const TableData = [
    {
      id: 1,
      emp_name: "Nilesh Dubey",
      emp_img: "https://picsum.photos/200/300.webp",
      emp_id: "EMP_1",
      emp_dep: "Software Development",
      emp_desi: "Wordpress Developer",
      emp_type: "Office",
      emp_status: "Permanent",
    },
  ];
  return (
    <div>
      <div className="overflow-x-auto border border-slate-200 mt-10">
        <div className="flex justify-between px-5 mt-2 items-center">
          <h1 className="font-bold text-xl">Attendance Overview</h1>
          <select className="select select-bordered w-auto max-w-xs">
            <option selected>View All</option>
            <option>Yesterday</option>
            <option>Week</option>
          </select>
        </div>

        <table className="table mt-10">
          {/* head */}
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Employee ID</th>
              <th>Department</th>
              <th>Designation</th>
              <th>Type</th>
              <th>Status</th>
              <th>Action</th>
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
                  <td>{items.emp_id}</td>
                  <td>{items.emp_dep}</td>
                  <td>{items.emp_desi}</td>
                  <td>{items.emp_type}</td>
                  <td> <span className="bg-[#7152F31A] p-1 text-[#7152F3]">{items.emp_status}</span></td>
                  <th>
                    <button className="btn btn-ghost btn-xs text-xl">
                      <AiOutlineEye />
                    </button>
                    <button className="btn btn-ghost btn-xs text-xl">
                      <AiOutlineEdit />
                    </button>
                    <button className="btn btn-ghost btn-xs text-xl">
                      <BsFillTrash3Fill />
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllEmp;
