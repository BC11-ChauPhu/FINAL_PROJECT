import React from "react";
import useScrollToTop from "../service/useScrollToTop";
import UserSubComponent from "./UserSubComponent";
import UserMainComponent from "./UserMainComponent";

const User = () => {
  useScrollToTop;
  const userData = JSON.parse(localStorage.getItem("user"));

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <UserSubComponent userData={userData} />
        <UserMainComponent />
      </div>
    </section>
  );
};

export default User;
