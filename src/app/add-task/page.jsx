"use client";

import React, { useState } from "react";
import Image from "next/image";
import loginSvg from "../../assets/login.svg";

// export const metadata = {
//   title: "Add Task: Work Manager",
// };

const page = () => {
  const [task, setTask] = useState({
    title: "",
    content: "",
    userId: "",
    status: "",
  });

  const handleAddTask = (event) => {
    event.preventDefault();
    console.log(task);
  };

  return (
    <>
      <div className="grid grid-cols-12 mt-2 justify-center">
        <div className="col-span-4 col-start-5 ">
          <div className="flex justify-center">
            <Image src={loginSvg} alt="login banner" style={{ width: "20%" }} />
          </div>
          <h1 className="text-2xl text-center mt-3">Add your Task !!!</h1>
          <form action="#" onSubmit={handleAddTask}>
            <div className="mt-4">
              <label
                for="task_titke"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Title
              </label>
              <input
                type="text"
                id="task_titke"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="write title of your task"
                required
                onChange={(event) => {
                  setTask({
                    ...task,
                    title: event.target.value,
                  });
                }}
                value={task.title}
              />
            </div>

            <div className="mt-4">
              <label
                for="task_content"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Title
              </label>
              <textarea
                type="text"
                id="task_content"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="write content of your task"
                required
                rows={3}
                onChange={(event) => {
                  setTask({
                    ...task,
                    content: event.target.value,
                  });
                }}
                value={task.content}
              />
            </div>

            <div className="mt-4">
              <label
                for="task_status"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Status
              </label>

              <select
                id="task_status"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
            rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
            p-2.5 dark:bg-gray-700 dark:border-gray-600
            dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
            dark:focus:border-blue-500"
                onChange={(event) => {
                  setTask({
                    ...task,
                    status: event.target.value,
                  });
                }}
                value={task.status}
              >
                <option value="none" disabled>
                  ---select status---
                </option>
                <option value="Pending">Pending</option>
                <option value="Complete">Complete</option>
              </select>
            </div>
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Add Task
              </button>
              <button
                type="button"
                class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Clear
              </button>
            </div>
            {JSON.stringify(task)}
          </form>
        </div>
      </div>
    </>
  );
};

export default page;
