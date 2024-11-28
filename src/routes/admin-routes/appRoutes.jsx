import DashboardHome from "../../features/admin-dashboard/dashboard-home/DashboardHome";
import Sidebar from "../../layout/dashboard-layout/components/Sidebar";
import SidebarWrapper from "../../layout/dashboard-layout/SidebarWrapper";

const routes = [
  {
    path: "/",
    element:  <DashboardHome />,
    exact: true,
  },
  {
    path: "/dashboard",
    element: <DashboardHome  />,
    exact: true,
  },
  {
    path: "/meals",
    element: <SidebarWrapper />,
    exact: true,
  },
];

export default routes;