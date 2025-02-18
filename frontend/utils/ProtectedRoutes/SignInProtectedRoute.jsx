import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const SignInProtectedRoute = ({ children }) => {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser ? children : <Navigate to="/login" />;
};

export default SignInProtectedRoute;
