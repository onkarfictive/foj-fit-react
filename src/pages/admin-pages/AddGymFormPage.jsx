import React from "react";
import SidebarWrapper from "../../layout/dashboard-layout/SidebarWrapper";
import GymForm from "../../features/admin-dashboard/manage-gym-form/GymForm";


function AddGymFormPage() {
  return (
    <div>
      <SidebarWrapper>
        <GymForm />
      </SidebarWrapper>
    </div>
  );
}

export default AddGymFormPage;