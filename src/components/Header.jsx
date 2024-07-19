import React from "react";
import logo from "../../public/vite.svg";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Header = () => {
  return (
    <nav className="h-16 w-screen m-0 bg-slate-700 text-white">
      <div className="h-full max-w-7xl m-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="">
            <img src={logo} alt="" />
          </a>
          <ul className="">
            <li className="display: inline px-4">
              <a href="">Placeholder</a>
            </li>
            <li className="display: inline px-4">
              <a href="">Placeholder</a>
            </li>
            <li className="display: inline px-4">
              <a href="">Placeholder</a>
            </li>
            <li className="display: inline px-4">
              <a href="">Placeholder</a>
            </li>
          </ul>
        </div>
        <div>
          <form action="">
            <div className="relative flex items-center">
              <div className="absolute left-0 pl-3">
                <FaMagnifyingGlass className="text-gray-400" />
              </div>
              <input
                className="rounded-lg px-10 py-2 text-gray-400"
                type="text"
                placeholder="Search"
              />
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
