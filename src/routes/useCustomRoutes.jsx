import React from "react";
import { useRoutes } from "react-router-dom";
import HomeTemplate from '../templates/HomeTemplate'
import HomePage from '../pages/HomePage'

const useCustomRoutes = () => {
  const myRoutes = useRoutes([
    {
        path: "",
        element: <HomeTemplate />,
        children: [
          {index: true, element: <HomePage/>}
        ]
      }
  ]);
  return myRoutes
};

export default useCustomRoutes;
