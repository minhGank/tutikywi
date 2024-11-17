import Home from "./pages/Home";
import Login from "./pages/Login.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import RootLayout from "./pages/RootLayout.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Seller from "./pages/Seller.jsx";
import SellerProfile from "./pages/SellerProfile.jsx";
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "seller",
        element: <Seller />,
      },
      {
        path: "seller/profile",
        element: <SellerProfile />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
