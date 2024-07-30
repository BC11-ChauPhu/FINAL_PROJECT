import React, { useState, useEffect } from "react";
import { http } from "../service/config";

const NearbyLocation = () => {
  const [locations, setLocation] = useState([]);
  useEffect(() => {
    http
      .get("/api/vi-tri/phan-trang-tim-kiem?pageIndex=1&pageSize=8")
      .then((res) => {
        console.log(res.data.content.data);
        setLocation(res.data.content.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section id="nearbyLocation">
      <div className="container mx-auto mt-10 px-6">
        <div className="mb-10">
          <h1 className="text-center text-3xl font-bold">
            Discover nearby destinations
          </h1>
        </div>
        <div className="flex flex-col space-y-6">
          {locations?.map((item, index) => {
            return (
              <div key={index}>
                <img className="rounded-lg" src={item.hinhAnh} alt="" />
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
