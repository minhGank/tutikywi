import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const SellerSetUpProtectedRoute = ({ children }) => {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser?.sellerSetUp ? (
    children
  ) : (
    <Navigate to="/seller_onboarding/personal_info" />
  );
};

export default SellerSetUpProtectedRoute;
