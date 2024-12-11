import React from "react";
import SidebarWrapper from "../../layout/dashboard-layout/SidebarWrapper";
import AddNewSubscription from "../../features/admin-dashboard/manage-subscription/components/AddNewSubscription";


function SubscriptionAddNewPlan() {
  return (
    <div>
      <SidebarWrapper>
        <AddNewSubscription/>
      </SidebarWrapper>
    </div>
  );
}

export default SubscriptionAddNewPlan;