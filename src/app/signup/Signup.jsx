"use client";
import React, { useState } from "react";
import Image from "next/image";
import SignupBanner from "../../assets/signup.svg";
import { toast } from "react-toastify";
import { singUp } from "@/services/userService";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    profileURL:
      "https://media.istockphoto.com/id/1327592449/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=yqoos7g9jmufJhfkbQsk-mdhKEsih6Di4WZ66t_ib7I=",
  });

  const doSignup = async (e) => {
    e.preventDefault();
    console.log(data);
    if (data.name.trim() === "" || data.name == null) {
      toast.warning("Name is required!", {
        position: "top-center",
      });
      return;
    }
    if (data.password.trim() === "" || data.name == null) {
      toast.warning("Password is required!", {
        position: "top-center",
      });

      return;
    }
    if (data.about.trim() === "" || data.name == null) {
      toast.warning("About is required!", {
        position: "top-center",
      });

      return;
    }

    try {
      const result = await singUp(data);
      console.log(result);
      toast.success("User is registered!!", {
        position: "top-center",
      });
      setData({
        name: "",
        email: "",
        password: "",
        about: "",
        profileURL:
          "https://media.istockphoto.com/id/1327592449/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=yqoos7g9jmufJhfkbQsk-mdhKEsih6Di4WZ66t_ib7I=",
      });
    } catch (error) {
      console.log(error);
      console.log(error.response.data.message);
      toast.error("Signup error!! " + error.response.data.message, {
        position: "top-center",
      });
    }
  };
  const resetForm = () => {
    setData({
      name: "",
      email: "",
      password: "",
      about: "",
      profileURL:
        "https://media.istockphoto.com/id/1327592449/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=yqoos7g9jmufJhfkbQsk-mdhKEsih6Di4WZ66t_ib7I=",
    });
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
          <h1 className="text-2xl text-center">Signup Here</h1>
          <form action="#" onSubmit={doSignup}>
            <div className="mt-3">
              <label
                htmlFor="name"
                className="block mb-2 text-sm ps-2 font-medium"
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Enter Yor Name Here"
                id="name"
                name="user_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => {
                  setData({
                    ...data,
                    name: e.target.value,
                  });
                }}
                value={data.name}
              />
            </div>
            <div className="mt-3">
              <label
                htmlFor="email"
                className="block mb-2 text-sm ps-2 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Yor Email Here"
                id="email"
                name="user_email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => {
                  setData({
                    ...data,
                    email: e.target.value,
                  });
                }}
                value={data.email}
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
                  setData({
                    ...data,
                    password: e.target.value,
                  });
                }}
                value={data.password}
              />
            </div>
            <div className="mt-3">
              <label
                htmlFor="user_about"
                className="block mb-2 text-sm ps-2 font-medium"
              >
                About
              </label>
              <textarea
                type="text"
                placeholder="Enter About Your Self"
                id="user_about"
                rows={5}
                name="about"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => {
                  setData({
                    ...data,
                    about: e.target.value,
                  });
                }}
                value={data.about}
              />
            </div>
            <div className="mt-3 flex justify-center ">
              <button
                type="submit"
                className="px-7 py-3 rounded text-white bg-green-600 hover:bg-green-400"
              >
                Signup
              </button>
              <button
                onClick={resetForm}
                type="button"
                className="px-7 py-3 ms-3 rounded text-white bg-orange-600 hover:bg-orange-400"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
