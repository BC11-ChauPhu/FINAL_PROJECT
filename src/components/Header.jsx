import React from "react";
import logo from "../vite.svg";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav id="header" className="container relative mx-auto p-6">
        <div className="flex items-center justify-between">
          <div className="py-2">
            <img src={logo} alt="" />
          </div>
          <div className="hidden space-x-6 md:flex">
            <NavLink
              className="text-polarnight4 hover:text-polarnight4 font-semibold transition-all duration-500"
              to="/"
            >
              Pricing
            </NavLink>
            <NavLink
              className="text-polarnight4 hover:text-polarnight4 font-semibold transition-all duration-500"
              to="/"
            >
              Product
            </NavLink>
            <NavLink
              className="text-polarnight4 hover:text-polarnight4 font-semibold transition-all duration-500"
              to="/"
            >
              About Us
            </NavLink>
            <NavLink
              className="text-polarnight4 hover:text-polarnight4 font-semibold transition-all duration-500"
              to="/"
            >
              Community
            </NavLink>
            <NavLink
              className="text-polarnight4 hover:text-polarnight4 font-semibold transition-all duration-500"
              to="/sign-in"
            >
              Sign In
            </NavLink>
          </div>
          <NavLink
            className="bg-polarnight2 hover:bg-frost4 hidden rounded-full px-6 py-2 text-white transition-all duration-500 md:block"
            to="/"
          >
            Get Started
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Header;
