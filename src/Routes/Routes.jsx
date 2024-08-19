import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Login from "../Auth/Login/Login";
import SignUp from "../Auth/SignUp/SignUp";
import Layouts from "../Layouts/Layouts";
import Home from "../components/Home/Home";
import Vendors from "../components/Vendors/Vendors";
import Menu from "../components/Menu/Menu";
import Carts from "../components/Carts/Carts";
import Buyers from "./Buyers";
import PrivateRoute from "./PrivateRoute";
import VendorsRoute from "./VendorsRoute";
import Vendor from "../pages/VendorsPage/Vendor";

const Routes = createHashRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path:"lami",
    element: <PrivateRoute />,
    children: [
        {
          path:"buyer",
          element:<Buyers/>,
          children: [
            {
              path: "home",
              element: <Home />,
            },
            {
              path: "vendors",
              element: <Vendors />,
            },
            {
              path:"menu/:vendorId",
              element:<Menu/>
            },
            {
              path:"cart",
              element:<Carts/>
            }
          ]
        },
        {
          path:"vendor",
          element:<VendorsRoute/>,
          children:[
            {
              path:"vendorpage",
              element:<Vendor/>
            }
          ]
        }
    ],
  },
]);

export default Routes;
