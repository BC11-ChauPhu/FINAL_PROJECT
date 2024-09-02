import React from "react";
import useScrollToTop from "../service/useScrollToTop";
import UserSubComponent from "./UserSubComponent";
import UserMainComponent from "./UserMainComponent";

const User = () => {
  useScrollToTop;
  const userData = JSON.parse(localStorage.getItem("user"));

  return (
    <section className="mt-[62px] py-20">
      <div className="container mx-auto flex flex-col gap-6 px-6 md:flex-row">
        <UserSubComponent userData={userData} />
        <UserMainComponent userData={userData} />
      </div>
    </section>
  );
};

export default User;
