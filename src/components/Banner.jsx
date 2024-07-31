import React from "react";
import bannerBg from "../assets/img/hoi-an-8104131_1280.jpg";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Banner = () => {
  return (
    <section
      id="banner"
      className="relative z-0 h-[500px] bg-cover bg-center md:h-[700px]"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <div className="container relative h-96 max-w-full p-6 md:mx-auto md:max-w-7xl">
        <div className="mx-auto mt-20 h-14 max-w-md rounded-full bg-white shadow-xl transition-all duration-500 hover:bg-gray-200">
          <div
            className="grid h-full"
            onClick={() => {
              document
                .getElementById("popup-location")
                .classList.toggle("hidden");
              document
                .getElementById("popup-location")
                .classList.toggle("flex");
              document.getElementById("header").classList.toggle("hidden");
            }}
          >
            <div className="grid grid-cols-6 items-center">
              <span>
                <FaMagnifyingGlass className="mx-auto text-xl" />
              </span>
              <span className="col-span-5 grid items-center">
                <div className="text-sm font-semibold">Where to?</div>
                <div className="text-[12px] text-gray-400">
                  <span>Choose your destination</span>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        id="popup-location"
        className="fixed top-0 z-[2] hidden h-screen w-screen flex-col bg-white"
      >
        <div className="z-[2] px-5 py-3">
          <IoClose
            onClick={() => {
              document
                .getElementById("popup-location")
                .classList.toggle("flex");
              document
                .getElementById("popup-location")
                .classList.toggle("hidden");
              document.getElementById("header").classList.toggle("hidden");
            }}
            className="rounded-full border border-gray-300 p-1 text-3xl"
          />
        </div>
        <div className="mx-3 mt-4 rounded-3xl border border-gray-300 p-6 shadow-lg">
          <div>
            <span className="text-xl font-bold">Where to?</span>
          </div>
          <button className="mt-5 max-w-full rounded-lg border border-gray-500">
            <form>
              <div>
                <label
                  htmlFor=""
                  className="flex h-14 items-center justify-between space-x-4 px-5"
                >
                  <div className="flex h-full items-center">
                    <FaMagnifyingGlass />
                  </div>
                  <input
                    type="search"
                    placeholder="Search destinations"
                    className="h-full w-full focus-visible:outline-none"
                  />
                </label>
              </div>
            </form>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
