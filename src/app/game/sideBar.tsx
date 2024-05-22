"use client";
// components/Sidebar.js
import { useState, useEffect } from "react";
import Image from "next/image";
import building1 from "./imagenes/image3.webp";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showArea, setShowArea] = useState(false);

  const ClickSideBar = () => {
    setIsOpen(!isOpen);
  };

  const ClickArea = () => {
    setShowArea(!showArea);
  };

  const Square = () => {
    return (
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "blue",
        }}
      ></div>
    );
  };

  return (
    <div className="bg-blue-200">
      <div className="bg-gray-600 h-screen">
        <div className=" flex  justify-center">{showArea && <Square />}</div>
      </div>
      <div
        className={`fixed top-0 left-0 h-full bg-gray-900  text-white transition-all flex flex-col ${
          isOpen ? "w-64" : "w-16"
        }`}
      >
        <button
          onClick={ClickSideBar}
          className="bg-gray-800 p-4 focus:outline-none"
        >
          {isOpen ? "<" : ">"}
        </button>
        <nav className="flex-1 mt-10">
          <ul className=" flex flex-col h-full">
            <li>
              <button onClick={ClickArea} className="block px-4 py-2 ">
                <Image
                  src="/image3.webp"
                  alt="Building 1"
                  width={30}
                  height={30}
                  className={`transition-opacity duration-300 ${
                    isOpen ? "opacity-100" : "opacity-0"
                  }`}
                ></Image>
              </button>
            </li>
            <li>
              <a href="/contact" className="block px-4 py-2 ">
                <Image
                  src="/image3"
                  alt="Building 1"
                  width={30}
                  height={30}
                  className={`transition-opacity duration-300 ${
                    isOpen ? "opacity-100" : "opacity-0"
                  }`}
                ></Image>
              </a>
            </li>
            <li className="">
              <a href="/" className="block px-4 py-2 ">
                <Image
                  src="/image3"
                  alt="Building 1"
                  width={30}
                  height={30}
                  className={`transition-opacity duration-300 ${
                    isOpen ? "opacity-100" : "opacity-0"
                  }`}
                ></Image>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
