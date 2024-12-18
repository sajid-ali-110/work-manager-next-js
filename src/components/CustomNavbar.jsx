"use client";

import React from "react";
import Link from "next/link";

const CustomNavbar = () => {
  return (
    <>
      <nav className="bg-blue-600 h-14 py-2 px-10 flex justify-between items-center text-white">
        <div className="brand">
          <h1 className="text-2xl font-semibold">
            <a href="#">work manager</a>
          </h1>
        </div>
        <div>
          <ul className="flex space-x-7">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/add-task"}>Add Task</Link>
            </li>
            <li>
              <Link href={"/show-tasks"}>Show Tasks</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <a href="#">login</a>
            </li>
            <li>
              <Link href={"/signup"}>signup</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default CustomNavbar;
