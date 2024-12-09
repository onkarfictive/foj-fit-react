import React from "react";
import SidebarWrapper from "../../layout/dashboard-layout/SidebarWrapper";
import Users from "../../features/admin-dashboard/manage-users/Users";

function ManageUsers() {
  return (
    <div>
      <SidebarWrapper>
        <Users />
      </SidebarWrapper>
    </div>
  );
}

export default ManageUsers;
