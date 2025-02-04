"use client";
import React, { useState } from "react";
import SignupBanner from "../../assets/signup.svg";
import Image from "next/image";
import { toast } from "react-toastify";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  // dsaadmakldja
  const loginDataSubmited = (e) => {
    e.preventDefault();
    console.log(loginData);
    if (loginData.email.trim() === "" || loginData.password.trim() === "") {
      toast.info("Invalid email!!", {
        position: "top-center",
      });
      return;
    }
  };

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 col-start-5">
        <div className="py-5">
          <div className="flex justify-center m-5">
            <Image
              src={SignupBanner}
              style={{
                width: "30%",
              }}
              alt="signup banner"
            />
          </div>
          <h1 className="text-2xl text-center">Login Here</h1>
          <form action="#" onSubmit={loginDataSubmited}>
            <div className="mt-3">
              <label
                htmlFor="email"
                className="block mb-2 text-sm ps-2 font-medium"
              >
                Email / UserName
              </label>
              <input
                type="email"
                placeholder="Enter Yor Email Here"
                id="email"
                name="user_email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => {
                  setLoginData({
                    ...loginData,
                    email: e.target.value,
                  });
                }}
                value={loginData.email}
              />
            </div>
            <div className="mt-3">
              <label
                htmlFor="password"
                className="block mb-2 text-sm ps-2 font-medium"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="Enter Yor password"
                id="password"
                name="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => {
                  setLoginData({
                    ...loginData,
                    password: e.target.value,
                  });
                }}
                value={loginData.password}
              />
            </div>
            <div className="mt-3 flex justify-center ">
              <button
                type="submit"
                className="px-8 py-3 rounded text-white bg-green-600 hover:bg-green-400"
              >
                login
              </button>
              <button
                type="button"
                className="px-7 py-3 ms-3 rounded text-white bg-orange-600 hover:bg-orange-400"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
        {JSON.stringify(loginData)}
      </div>
    </div>
  );
};

export default Login;
