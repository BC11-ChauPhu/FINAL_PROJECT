import React from "react";
import logo from "../vite.svg";
import { NavLink } from "react-router-dom";

const SignInForm = () => {
  return (
    <section className="flex justify-center items-start w-full transition-all z-10">
      <div className="max-w-lg bg-white py-10 px-14 rounded-lg">
        <div className="mb-6 flex flex-col justify-between gap-3 ">
          <img className="mx-auto" src={logo} alt="" />
          <h4 className="text-center text-2xl font-semibold">
            Sign in with your account
          </h4>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            animi?
          </p>
        </div>

        <div>
          <form action="">
            <div className="mb-3">
              <label htmlFor="signInEmail">Email</label>
              <input
                className="input-field"
                type="email"
                name="signInEmail"
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="signInPassword">Password</label>
              <input
                className="input-field"
                type="password"
                name="signInPassword"
                required
              />
            </div>
            <button
              className="w-full py-3 px-6 mb-5 rounded-lg uppercase text-white font-semibold bg-slate-700 hover:bg-slate-500 transition-all duration-500"
              type="submit"
            >
              Sign In
            </button>
          </form>
          <p className="text-center">
            Don't have an account yet?{" "}
            <NavLink
              to="/register"
              className="text-blue-700 hover:cursor-pointer hover:text-blue-500 transition-all duration-500"
            >
              Register
            </NavLink>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignInForm;
