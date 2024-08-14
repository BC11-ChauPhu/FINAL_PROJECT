import React, { useEffect, useState } from "react";
import { http } from "../service/config";
import { IoIosStar } from "react-icons/io";

const LocationComments = ({ localeId }) => {
  const [comment, setComment] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await http.get(
          `/api/binh-luan/lay-binh-luan-theo-phong/${localeId}`,
        );
        setComment(res.data.content);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(comment);
  }, [comment]);

  return (
    <div className="px-6">
      {comment?.map((item, index) => (
        <div className="mx-2" key={index}>
          <div className="my-6 flex h-60 flex-col justify-between rounded-xl border border-gray-300 p-5 shadow-xl">
            {/* COMMENT-TEXT */}
            <div>
              <div className="flex items-center text-xs">
                <div className="flex">
                  {Array.from({ length: item.saoBinhLuan }, (_) => (
                    <span>
                      <IoIosStar className="h-[9px] w-[9px]" />
                    </span>
                  ))}
                </div>
                <div className="px-2"> · </div>
                <div>{item.ngayBinhLuan}</div>
              </div>
              <div>
                <p>{item.noiDung}</p>
              </div>
            </div>
            {/* AVATAR */}
            <div>
              <div className="flex">
                <div
                  className="h-12 w-12 rounded-full"
                  style={{ backgroundImage: `url(${item.avatar})` }}
                ></div>
                <div>{item.tenNguoiBinhLuan}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LocationComments;
