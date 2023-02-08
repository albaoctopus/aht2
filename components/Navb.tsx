import React from "react";

const Navb = () => {
  return (
    <header className="bg-white border-b border-gray-300">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <img
            src="logo.png"
            alt="Logo"
            className="h-12 w-12 rounded-full"
          />
          <h1 className="ml-2 text-xl font-bold">My Website</h1>
        </div>
        <nav>
          <ul className="flex">
            <li className="mr-6">
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                Home
              </a>
            </li>
            <li className="mr-6">
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                About
              </a>
            </li>
            <li className="relative">
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                Services
              </a>
              <div className="absolute bg-white border border-gray-300 py-2 rounded-lg shadow-xl">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Service 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Service 2
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Service 3
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Service 4
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Service 5
                </a>
              </div>
            </li>
            <li>
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg">
                Contact Us
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navb;

