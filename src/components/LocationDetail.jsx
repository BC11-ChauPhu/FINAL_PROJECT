import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { http } from "../service/config.js";
import { TbAirConditioning, TbIroning3 } from "react-icons/tb";
import {
  FaBed,
  FaKitchenSet,
  FaPersonSwimming,
  FaSquareParking,
  FaWifi,
} from "react-icons/fa6";
import { GiWashingMachine } from "react-icons/gi";
import { PiTelevision } from "react-icons/pi";

const LocationDetail = () => {
  const { id } = useParams();
  const [room, setRoom] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await http.get(`/api/phong-thue/${id}`);
        setRoom(res.data.content);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(room);
    // window.scrollTo(0, 0);
  }, [id]);

  return (
    <section className="pb-20">
      {/* IMAGE */}
      <div className="flex flex-col md:flex-col-reverse md:pt-14">
        <div className="h-52 md:h-80 md:px-6">
          <img src={room.hinhAnh} alt="" className="h-full w-full" />
        </div>
        <div className="p-6 pb-3">
          <h1 className="text-2xl font-semibold">{room.tenPhong}</h1>
        </div>
      </div>
      {/* CONTENT */}
      <div className="container flex flex-col space-y-4 px-6 text-sm">
        <div className="flex flex-col">
          <div>
            <h2 className="text-base font-semibold">Available rooms</h2>
            <p className="flex items-center text-gray-500">
              <span>{room.khach} guests </span>
              <span className="mx-1"> · </span>
              <span>{room.phongNgu} bedroom </span>
              <span className="mx-1"> · </span>
              <span>{room.phongTam} bathroom</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <p className="text-xl font-semibold">About this place</p>
          <div>
            <p className="text-base text-gray-700">{room.moTa}</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold">Anemities</h2>
          <div className="flex flex-col">
            {room.banLa && (
              <div className="border-b border-b-gray-300 py-6 text-base">
                <div className="flex items-center">
                  <TbIroning3 className="mr-4 h-6 w-6" /> Ironing
                </div>
              </div>
            )}
            {room.bep && (
              <div className="border-b border-b-gray-300 py-6 text-base">
                <div className="flex items-center">
                  <FaKitchenSet className="mr-4 h-6 w-6" /> Kitchen
                </div>
              </div>
            )}
            {room.dieuHoa && (
              <div className="border-b border-b-gray-300 py-6 text-base">
                <div className="flex items-center">
                  <TbAirConditioning className="mr-4 h-6 w-6" /> Air
                  conditioning
                </div>
              </div>
            )}
            {room.doXe && (
              <div className="border-b border-b-gray-300 py-6 text-base">
                <div className="flex items-center">
                  <FaSquareParking className="mr-4 h-6 w-6" /> Parking
                </div>
              </div>
            )}
            {room.hoBoi && (
              <div className="border-b border-b-gray-300 py-6 text-base">
                <div className="flex items-center">
                  <FaPersonSwimming className="mr-4 h-6 w-6" /> Swimming pool
                </div>
              </div>
            )}
            {room.mayGiat && (
              <div className="border-b border-b-gray-300 py-6 text-base">
                <div className="flex items-center">
                  <GiWashingMachine className="mr-4 h-6 w-6" />
                  Washing machine
                </div>
              </div>
            )}
            {room.tivi && (
              <div className="border-b border-b-gray-300 py-6 text-base">
                <div className="flex items-center">
                  <PiTelevision className="mr-4 h-6 w-6" />
                  Television
                </div>
              </div>
            )}
            {room.wifi && (
              <div className="border-b border-b-gray-300 py-6 text-base">
                <div className="flex items-center">
                  <FaWifi className="mr-4 h-6 w-6" />
                  Wifi
                </div>
              </div>
            )}
            {room.giuong && (
              <div className="border-b border-b-gray-300 py-6 text-base">
                <div className="flex items-center">
                  <FaBed className="mr-4 h-6 w-6" />
                  {room.bed} Beds
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* STICKY RESERVE */}
      <div className="fixed bottom-0 min-h-20 w-full border-t border-t-gray-300 bg-white md:hidden">
        <div className="h-full w-full items-center px-4">
          <div>
            <div className="py-4">
              <div className="flex justify-between">
                <div className="flex font-semibold">
                  <button className="">
                    <div>
                      <span>${room.giaTien}/night</span>
                    </div>
                    <div>
                      <span className="text-sm underline">Sep.9 ~ 14</span>
                    </div>
                  </button>
                </div>
                <div className="min-w-36">
                  <div className="min-w-50 rounded-lg bg-brand px-6 py-[14px] text-center font-semibold text-white">
                    <span>Reserve</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LocationDetail;
