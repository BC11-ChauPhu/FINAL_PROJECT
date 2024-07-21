import React from "react";
import logo from "../vite.svg";
import { FaMagnifyingGlass } from "react-icons/fa6";
import PopUpForm from "./PopUpForm";

const Header = () => {
  return (
    <>
      <PopUpForm />
      <nav className="fixed left-0 top-0 w-screen m-0 py-4 text-black border-b border-b-gray-300 z-0">
        <div className="h-full container  m-auto flex justify-between items-center">
          <div className="flex justify-between items-center">
            <a href="">
              <img src={logo} alt="" />
            </a>
            <div className="ml-6 border border-gray-300 rounded-lg">
              <form action="">
                <div className="relative flex items-center">
                  <div className="absolute left-0 pl-3">
                    <FaMagnifyingGlass className="text-gray-400" />
                  </div>
                  <input
                    className="transition-all duration-500 rounded-lg border border-white px-10 py-2 text-black focus-visible:border-black outline-none"
                    type="text"
                    placeholder="Search"
                  />
                </div>
              </form>
            </div>
          </div>

          <ul className="">
            <li className="transition-all duration-500 ease-linear display: inline px-4 font-semibold hover:text-blue-500">
              <a className="" href="">
                Placeholder
              </a>
            </li>
            <li className="transition-all duration-500 ease-linear display: inline px-4 font-semibold hover:text-blue-500">
              <a href="">Placeholder</a>
            </li>
            <li className="transition-all duration-500 ease-linear display: inline px-4 font-semibold hover:text-blue-500">
              <a href="">Placeholder</a>
            </li>
            <li className="transition-all duration-500 ease-linear display: inline px-4 font-semibold hover:text-blue-500">
              <a href="">Sign in</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
