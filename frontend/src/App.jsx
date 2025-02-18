import Home from "./pages/buyer/Home.jsx";
import Login from "./pages/Login.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import RootLayout from "./pages/RootLayout.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Seller from "./pages/seller/Seller.jsx";
import SellerProfile from "./pages/seller/SellerProfile.jsx";
const queryClient = new QueryClient();
import SignInProtectedRoute from "../utils/ProtectedRoutes/SignInProtectedRoute.jsx";
import SellerSetUpProtectedRoute from "../utils/ProtectedRoutes/SellerSetUpProtectedRoute.jsx";
import UpdatePersonalInfo from "./pages/seller/onboarding/UpdatePersonalInfo.jsx";
import UpdateProfessionalInfo from "./pages/seller/onboarding/UpdateProfessionalInfo.jsx";
import ScrollTop from "../utils/ScrollTop.jsx";
import UpdateAccountSecurity from "./pages/seller/onboarding/UpdateAccountSecurity.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/seller_onboarding",
    element: (
      <ScrollTop>
        <Outlet />
      </ScrollTop>
    ),
    children: [
      {
        path: "personal_info",
        element: <UpdatePersonalInfo />,
      },
      {
        path: "professional_info",
        element: <UpdateProfessionalInfo />,
      },
      {
        path: "account_security",
        element: <UpdateAccountSecurity />,
      },
    ],
  },
  {
    path: "/",
    element: (
      <ScrollTop>
        <RootLayout />
      </ScrollTop>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "seller",
        element: (
          <SignInProtectedRoute>
            <SellerSetUpProtectedRoute>
              <Outlet />
            </SellerSetUpProtectedRoute>
          </SignInProtectedRoute>
        ),
        children: [
          {
            index: true,
            element: <Seller />,
          },
          {
            path: "profile",
            element: <SellerProfile />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  );
}

export default App;
