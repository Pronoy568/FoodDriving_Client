import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Auth/Login";
import LandingPage from "../pages/LandingPage/LandingPage";
import Registration from "../pages/Auth/Registration";
import Dashboard from "../pages/Dashboard/Dashboard";
import DashboardLayout from "../component/layout/DashboardLayout";
import AllSupplies from "../pages/AllSupplies/AllSupplies";
import Supplies from "../pages/Dashboard/Supplies";
import CreateSupply from "../pages/Dashboard/CreateSupply";
import SingleSupply from "../pages/AllSupplies/SingleSupply";
import UpdateSupply from "../pages/Dashboard/UpdateSupply";
import Gratitude from "../pages/Gratitude/Gratitude";
import CreateTestimonial from "../pages/Dashboard/CreateTestimonial";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "/supplies",
        element: <AllSupplies />,
      },
      {
        path: "/supplies/:id",
        element: <SingleSupply />,
      },
      {
        path: "/community",
        element: <Gratitude />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/dashboard/supplies",
        element: <Supplies />,
      },
      {
        path: "/dashboard/create-supply",
        element: <CreateSupply />,
      },
      {
        path: "/dashboard/create-testimonial",
        element: <CreateTestimonial />,
      },
      {
        path: "/dashboard/updateSupplies/:id",
        element: <UpdateSupply />,
      },
    ],
  },
]);

export default router;
