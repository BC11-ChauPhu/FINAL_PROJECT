import React from "react";
import logo from "../vite.svg";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav id="header" className="fixed left-0 top-0 z-10 w-screen">
        <div className="container relative p-6 sm:max-w-full md:mx-auto md:max-w-7xl">
          <div className="flex items-center justify-between">
            <div className="py-2">
              <img src={logo} alt="" />
            </div>
            <div className="hidden space-x-6 md:flex">
              <NavLink
                className="font-semibold text-polarnight4 transition-all duration-500 hover:text-polarnight4"
                to="/"
              >
                Locations
              </NavLink>
              <NavLink
                className="font-semibold text-polarnight4 transition-all duration-500 hover:text-polarnight4"
                to="/"
              >
                Expeiences
              </NavLink>
              <NavLink
                className="font-semibold text-polarnight4 transition-all duration-500 hover:text-polarnight4"
                to="/"
              >
                Online Experiences
              </NavLink>
              <NavLink
                className="font-semibold text-polarnight4 transition-all duration-500 hover:text-polarnight4"
                to="/"
              >
                Community
              </NavLink>
              <NavLink
                className="font-semibold text-polarnight4 transition-all duration-500 hover:text-polarnight4"
                to="/sign-in"
              >
                Pricing
              </NavLink>
            </div>
            <NavLink
              className="hidden rounded-full bg-polarnight2 px-6 py-2 text-white transition-all duration-500 hover:bg-frost4 md:block"
              to="/sign-in"
            >
              Sign In
            </NavLink>
            <div className="flex items-center md:hidden">
              <button
                id="menu-btn"
                className="hamburger block focus:outline-none md:hidden"
                onClick={() => {
                  document.querySelector("#menu-btn").classList.toggle("open");
                  document.querySelector("#menu").classList.toggle("flex");
                  document.querySelector("#menu").classList.toggle("hidden");
                }}
              >
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
              </button>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <div
            id="menu"
            className="absolute left-6 right-6 hidden w-auto flex-col items-center space-y-6 self-center bg-polarnight1 py-8 font-bold text-snowstorm1 drop-shadow-md transition-all duration-300 md:mt-10 md:hidden md:self-end"
          >
            <NavLink to="/">Locations</NavLink>
            <NavLink to="/">Experiences</NavLink>
            <NavLink to="/">Online Experiences</NavLink>
            <NavLink to="/sign-in">Sign In</NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
