import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { selectCurrentUser } from "../redux/features/auth/authSlice";
import { useAppSelector } from "../redux/hooks";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const user = useAppSelector(selectCurrentUser);

  if (!user) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
