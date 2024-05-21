"use client";
// components/Sidebar.js
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-blue-200">
      <div
        className={`fixed top-0 left-0 h-full bg-gray-900  text-white transition-all flex flex-col ${
          isOpen ? "w-64" : "w-16"
        }`}
      >
        <button
          onClick={toggleSidebar}
          className="bg-gray-800 p-4 focus:outline-none"
        >
          {isOpen ? "<" : ">"}
        </button>
        <nav className="flex-1 mt-10">
          <ul className="space-y-2 flex flex-col h-full">
            <li>
              <a href="/about" className="block px-4 py-2 hover:bg-gray-700">
                {isOpen ? "bulding 1" : ""}
              </a>
            </li>
            <li>
              <a href="/contact" className="block px-4 py-2 hover:bg-gray-700">
                {isOpen ? "bulding 2" : ""}
              </a>
            </li>
            <li className="">
              <a href="/" className="block px-4 py-2 hover:bg-gray-700">
                {isOpen ? "bulding 3" : ""}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
