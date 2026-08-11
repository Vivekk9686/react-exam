import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const isLoggedIn = localStorage.getItem("login");

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default PrivateRoute;