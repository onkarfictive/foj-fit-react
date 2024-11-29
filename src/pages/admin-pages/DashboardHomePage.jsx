import React from "react";
import SidebarWrapper from "../../layout/dashboard-layout/SidebarWrapper";
import DashboardHome from "../../features/admin-dashboard/dashboard-home/DashboardHome";

function DashboardHomePage() {
  return (
    <div>
      <SidebarWrapper>
        <DashboardHome />
      </SidebarWrapper>
    </div>
  );
}

export default DashboardHomePage;
