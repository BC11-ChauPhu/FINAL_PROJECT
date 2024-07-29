import React from "react";
import bannerBg from "../assets/img/hoi-an-8104131_1280.jpg";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Banner = () => {
  return (
    <section
      id="banner"
      className="relative z-0 h-[500px] bg-cover bg-center md:h-[700px]"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <div className="container relative h-96 max-w-full p-6 md:mx-auto md:max-w-7xl">
        <div className="mx-auto mt-20 h-14 max-w-md rounded-full bg-white">
          <div className="grid h-full">
            <div className="grid grid-cols-6 items-center">
              <span>
                <FaMagnifyingGlass className="mx-auto text-xl" />
              </span>
              <span className="col-span-5 grid">
                <div>Location</div>
                <div className="text-sm">
                  <span>Where are you planning to go to?</span>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
