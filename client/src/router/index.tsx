/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import GuestLayout from "../layout/GuestLayout";
import LoginPage from "../pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // children: [
    //   {
    //     path: "/",
    //     element: <MainLayout />,
    //   },
    // ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },

    ],
  },
]);

export default router;