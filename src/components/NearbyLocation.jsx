import React, { useState, useEffect } from "react";
import { http } from "../service/config";

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
                <div>
                  <p className="mt-2 text-center font-semibold">
                    {item.tenViTri} - {item.tinhThanh} - {item.quocGia}
                  </p>
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
