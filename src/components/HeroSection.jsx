import React from "react";
import { NavLink } from "react-router-dom";
import heroImg from "../assets/undraw_undraw_undraw_undraw_selection_f3no_jw9h_-1-_nxfh_-1-_6d1x.svg";

const HeroSection = () => {
  return (
    <>
      <section id="hero">
        <div className="container mx-auto mt-10 flex flex-col-reverse items-center space-y-0 px-6 md:mb-32 md:flex-row">
          <div className="mb-32 flex flex-col space-y-12 md:mb-0 md:w-1/2">
            <h1 className="max-w-md text-center text-4xl font-bold text-polarnight4 md:text-left md:text-5xl">
              Lorem ipsum dolor sit amet consectetur.{" "}
            </h1>
            <p className="max-w-md text-center text-gray-500 md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              illo reprehenderit voluptas nam, nesciunt repellendus sit, dolor,
              recusandae culpa aut ea ad accusamus molestias reiciendis autem?
              Veritatis nobis sequi enim.
            </p>
            <div className="flex justify-center md:justify-start">
              <NavLink
                to="/"
                className="rounded-full bg-polarnight2 px-6 py-2 text-snowstorm1 transition-all duration-500 hover:bg-frost4 md:self-end"
              >
                Get Started
              </NavLink>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src={heroImg} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
