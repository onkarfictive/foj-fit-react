import React from "react";
import SidebarWrapper from "../../layout/dashboard-layout/SidebarWrapper";
import Subscription from "../../features/admin-dashboard/manage-subscription/Subscription";


function ManageSubscriptions() {
  return (
    <div>
      <SidebarWrapper>
        <Subscription/>
      </SidebarWrapper>
    </div>
  );
}

export default ManageSubscriptions;