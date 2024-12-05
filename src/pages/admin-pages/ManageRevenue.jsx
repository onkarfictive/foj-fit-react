import React from "react";
import SidebarWrapper from "../../layout/dashboard-layout/SidebarWrapper";

import Revenue from "../../features/admin-dashboard/manage-revenue/Revenue";


function ManageRevenue() {
  return (
    <div>
      <SidebarWrapper>
        <Revenue/>
      </SidebarWrapper>
    </div>
  );
}

export default ManageRevenue;