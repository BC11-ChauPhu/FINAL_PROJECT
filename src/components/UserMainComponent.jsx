import React from "react";

const UserMainComponent = ({ userData }) => {
  return (
    <div>
      <div className="text-center">
        <div>
          <h1 className="text-3xl font-semibold">Hi, I am {userData.name}</h1>
        </div>
      </div>
    </div>
  );
};

export default UserMainComponent;
