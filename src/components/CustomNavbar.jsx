"use client";

import React, { useContext } from "react";
import Link from "next/link";
import UserContext from "@/context/userContext";

const CustomNavbar = () => {
  const context = useContext(UserContext);
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
            {context.user && (
              <>
                <li>
                  <Link href={"/"}>Home</Link>
                </li>
                <li>
                  <Link href={"/add-task"}>Add Task</Link>
                </li>
                <li>
                  <Link href={"/show-tasks"}>Show Tasks</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div>
          <ul className="flex space-x-4">
            {context.user && (
              <>
                <li>
                  <a href={"#"}>{context.user.name}</a>
                </li>
                <li>
                  <Link href={"#"}>logout</Link>
                </li>
              </>
            )}
            {!context.user && (
              <>
                <li>
                  <a href={"/login"}>login</a>
                </li>
                <li>
                  <Link href={"/signup"}>signup</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default CustomNavbar;
