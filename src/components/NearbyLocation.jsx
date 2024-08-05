import React, { useState, useEffect } from "react";
import { http } from "../service/config";
import { IoIosStar } from "react-icons/io";

const NearbyLocation = () => {
  const [locations, setLocation] = useState([]);
  useEffect(() => {
    http
      .get("/api/vi-tri/phan-trang-tim-kiem?pageIndex=1&pageSize=8")
      .then((res) => {
        setLocation(res.data.content.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section id="nearbyLocation">
      <div className="container mx-auto mt-10 px-6 lg:mb-10">
        <div className="mb-10">
          <h1 className="text-center text-3xl font-bold md:text-left">
            Discover nearby destinations
          </h1>
        </div>
        <div className="grid space-y-6 md:grid-cols-2 md:gap-6 md:gap-y-10 md:space-y-0 lg:grid-cols-4">
          {locations?.map((item, index) => {
            return (
              <div key={index} className="flex flex-col">
                <div className="md:h-96 lg:h-full">
                  <img
                    className="rounded-lg md:h-full md:w-full"
                    src={item.hinhAnh}
                    alt=""
                  />
                </div>
                <div className="mt-2 grid grid-cols-[87%_13%] items-start text-left text-sm">
                  <div>
                    <p className="font-semibold">
                      {item.tenViTri}, {item.tinhThanh}, {item.quocGia}
                    </p>
                    <p className="mt text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                    </p>
                  </div>
                  <div>
                    <span className="flex items-baseline justify-between">
                      <span>
                        <IoIosStar className="block h-3 w-3" />
                      </span>
                      <span>4.5</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NearbyLocation;
