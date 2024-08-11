import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { http } from "../service/config";
import { IoIosStar } from "react-icons/io";

const SelectedLocation = () => {
  const { id } = useParams();
  const [location, setLocation] = useState([]);
  useEffect(() => {
    http
      .get(`/api/phong-thue/lay-phong-theo-vi-tri?maViTri=${id}`)
      .then((res) => setLocation(res.data.content))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <section>
      <div className="px-6 py-20">
        <div className="py-8">
          <p className="text-center text-xl font-semibold">Selected location</p>
        </div>
        {/* CONTENT */}
        <div>
          <div className="grid gap-10 md:grid-cols-3">
            {location?.map((item, index) => (
              <div key={index}>
                <div className="flex flex-col gap-3">
                  <div className="h-56">
                    <img className="h-full w-full" src={item.hinhAnh} alt="" />
                  </div>
                  {/* DESCRIPTION */}
                  <div className="flex">
                    {/* LEFT DESCRIPTION */}
                    <div>
                      <p className="font-semibold">{item.tenPhong}</p>
                      <p>{item.moTa}</p>
                    </div>

                    {/* RIGHT DESCRIPTION */}
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectedLocation;
