import React from "react";
import { useRoutes } from "react-router-dom";
import HomeTemplate from "../templates/HomeTemplate";
import HomePage from "../pages/HomePage";
import SignInPage from "../pages/SignInPage";
import RegisterPage from "../pages/RegisterPage";

const useCustomRoutes = () => {
  const myRoutes = useRoutes([
    {
      path: "",
      element: <HomeTemplate />,
      children: [{ index: true, element: <HomePage /> }],
    },
    {
      path: "/sign-in",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
  ]);
  return myRoutes;
};

export default useCustomRoutes;
