"use client";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="h-40 bg-blue-600 text-white flex justify-around items-center text-center mt-5">
        <div>
          <h1 className="text-2xl">Welcome to work manager</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
            natus!
          </p>
        </div>
        <div>
          <h1>important links</h1>
          <ul>
            <li>
              <a href="#">facebook</a>
            </li>
            <li>
              <a href="#">whatsapp</a>
            </li>
            <li>
              <a href="#">twitter</a>
            </li>
            <li>
              <a href="#">instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
