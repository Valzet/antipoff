import { Navigate } from "react-router-dom";
export const Protected = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <Navigate to="/signin" replace />;
  }
  return children;
};
