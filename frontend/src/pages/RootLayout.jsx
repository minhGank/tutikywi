import { Outlet } from "react-router-dom";
import MainNavigationBar from "../components/RootLayOut/MainNavigationBar";

const RootLayout = () => {
  return (
    <>
      <MainNavigationBar show={false} />
      <Outlet />
    </>
  );
};

export default RootLayout;
