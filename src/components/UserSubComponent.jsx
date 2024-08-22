import React from "react";
import defaultUser from "../assets/img/user.jpg";

const UserSubComponent = ({ userData }) => {
  console.log(userData);
  return (
    <div className="flex flex-col items-center rounded-xl border border-gray-300 py-6 shadow-lg">
      {/* AVAVTAR */}
      <div className="flex flex-col items-center">
        <div className="h-36 w-36 rounded-full border border-gray-300">
          <img
            className="h-full w-full rounded-full"
            src={userData.avatar ? userData.avatar : defaultUser}
            alt="User Avatar"
          />
        </div>
        <div className="text-center underline">Update avatar</div>
      </div>
      {/* INFO */}
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-semibold">{userData.name}</h1>
      </div>
    </div>
  );
};

export default UserSubComponent;
