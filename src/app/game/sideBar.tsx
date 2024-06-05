// components/Sidebar.js
import React, { useState } from "react";

const Sidebar: React.FC<{ onSelectOption: (option: string) => void }> = ({
  onSelectOption,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const ClickSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-blue-200">
      <div className="bg-gray-600 h-screen"></div>
      <div
        className={`fixed top-0 left-0 h-full bg-gray-900 text-white transition-all flex flex-col ${
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
          <ul className="flex flex-col h-full">
            <li>
              <button
                onClick={() => onSelectOption("House")}
                disabled={!isOpen}
                className="block px-4 py-2"
              >
                <p
                  className={`transition-opacity duration-300 ${
                    isOpen ? "opacity-100" : "opacity-0"
                  }`}
                >
                  House -10♦
                </p>
              </button>
            </li>
            <li>
              <button
                onClick={() => onSelectOption("Worker")}
                disabled={!isOpen}
                className="block px-4 py-2"
              >
                <p
                  className={`transition-opacity duration-300 ${
                    isOpen ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Worker -30♦
                </p>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
