import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const loggedIn = localStorage.getItem("isLoggedIn");

  if (loggedIn === "true") {
    return children;
  } else return <Navigate to={"/"} replace={true} />;
};
export default PrivateRoute;
