import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import AllBookings from "../pages/AllBookings";
import NewBooking from "../pages/NewBooking";
import Rooms from "../pages/Rooms";
import Cost from "../pages/Cost";
import CancelBooking from "../pages/CancelBooking";
import CheckOut from "../pages/CheckOut";
import SignUp from "../pages/SignUp";
import PrivateRoute from "./privateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <LogIn />,
      },
    ],
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/home",
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: "/all-bookings",
    element: (
      <PrivateRoute>
        <AllBookings />
      </PrivateRoute>
    ),
  },
  {
    path: "/new-booking",
    element: (
      <PrivateRoute>
        <NewBooking />
      </PrivateRoute>
    ),
  },
  {
    path: "/rooms",
    element: (
      <PrivateRoute>
        <Rooms />
      </PrivateRoute>
    ),
  },
  {
    path: "/cost",
    element: (
      <PrivateRoute>
        <Cost />
      </PrivateRoute>
    ),
  },
  {
    path: "/cancel-booking",
    element: (
      <PrivateRoute>
        <CancelBooking />
      </PrivateRoute>
    ),
  },
  {
    path: "/check-out",
    element: (
      <PrivateRoute>
        <CheckOut />
      </PrivateRoute>
    ),
  },

  {
    path: "*",
    element: <App />,
  },
]);

export default routes;
