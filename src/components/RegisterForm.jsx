import React from "react";
import logo from "../vite.svg";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
const RegisterForm = () => {
  const registerValidate = (values) => {};
  const registerFunc = () => {};
  const register = useFormik({
    initialValues: {
      registerUserName: "",
      registerPassword: "",
      registerFullName: "",
      registerPhone: "",
      maNhom: "GP01",
      registerEmail: "",
    },
    validate: registerValidate,
    onSubmit: registerFunc,
  });

  return (
    <section className="flex justify-center items-start w-full transition-all z-10">
      <div className="max-w-lg bg-white py-10 px-14 rounded-lg">
        <div className="mb-6 flex flex-col justify-between gap-3 ">
          <img className="mx-auto" src={logo} alt="" />
          <h4 className="text-center text-2xl font-semibold">Register</h4>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            animi?
          </p>
        </div>

        <div>
          <form onSubmit={register.handleSubmit}>
            <div className="mb-3">
              <label htmlFor="registerUserName">User Name</label>
              <input
                id="registerUserName"
                className="input-field"
                type="text"
                name="registerUserName"
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="registerPassword">Password</label>
              <input
                id="registerPassword"
                className="input-field"
                type="password"
                name="registerPassword"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="registerFullName">Full Name</label>
              <input
                id="registerFullName"
                className="input-field"
                type="email"
                name="registerUserName"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="registerPhone">Phone Number</label>
              <input
                id="registerPhone"
                className="input-field"
                type="tel"
                name="registerPhone"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="registerEmail">Email</label>
              <input
                id="registerEmail"
                className="input-field"
                type="email"
                name="registerEmail"
                required
              />
            </div>
            <button
              className="w-full py-3 px-6 mb-5 rounded-lg uppercase text-white font-semibold bg-slate-700 hover:bg-slate-500 transition-all duration-500"
              type="submit"
            >
              Register
            </button>
          </form>
          <p className="text-center">
            Already have an account?{" "}
            <NavLink
              to="/sign-in"
              className="text-blue-700 hover:cursor-pointer hover:text-blue-500 transition-all duration-500"
            >
              Sign In
            </NavLink>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
