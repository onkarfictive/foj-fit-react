import DashboardHomePage from "@/pages/admin-pages/DashboardHomePage";
import GymManagementPage from "../../pages/admin-pages/GymManagementPage";
import GymDetailPage from "../../pages/admin-pages/GymDetailPage";
import { Navigate } from "react-router-dom";
import AddGymFormPage from "../../pages/admin-pages/AddGymFormPage";
import ManageRevenue from "../../pages/admin-pages/ManageRevenue";
import ManageUsers from "../../pages/admin-pages/ManageUsers";
import ManageSubscriptions from "../../pages/admin-pages/ManageSubscriptions";


const routes = [
  {
    path: "/",
    element: <Navigate to={"/admin/dashboard"}/>,
    exact: true,
  },
  {
    path: "admin/dashboard",
    element: <DashboardHomePage />,
    exact: true,
  },

  {
    path: "admin/gym-management",
    element: <GymManagementPage />,
    exact: true,
  },

  {
    path: "admin/gym-management/gym-detail/:id",
    element: <GymDetailPage />,
    exact: true,
  },
  {
    path: "admin/gym-management/add-new-gym",
    element: <AddGymFormPage />,
    exact: true,
  },

  {
    path: "admin/manage-revenue",
    element: <ManageRevenue />,
    exact: true,
  },
  {
    path: "admin/manage-users",
    element: <ManageUsers />,
    exact: true,
  },

  {
    path: "admin/manage-subscriptions",
    element: <ManageSubscriptions />,
    exact: true,
  },

];

export default routes;
