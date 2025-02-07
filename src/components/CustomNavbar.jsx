"use client";

import React, { useContext } from "react";
import Link from "next/link";
import UserContext from "@/context/userContext";
import { logout } from "@/services/userService";
import { Router } from "next/router";

const CustomNavbar = () => {
  const context = useContext(UserContext);

  async function doLogout() {
    try {
      const result = await logout();
      console.log(result);
      context.setUser(undefined);
      Router.push("/");
    } catch (error) {
      console.log(error);
      toast.error("failed to logout!!");
    }
  }

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
                  <button onClick={doLogout}>logout</button>
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
