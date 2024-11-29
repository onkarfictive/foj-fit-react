import React, { useState } from "react";
import Heading from "@/common/ui/Heading";
import GymManagementTopSection from "./components/GymManagementTopSection";
import GymCard from "./components/GymCard";
import PrimePagination from "@/common/ui/PrimePagination";

function GymManagement() {
  return (
    
    <div className="admin-gym-management">
      <div className="row mb-4">
        <div className="col-md-3">
          <Heading title="Gym Management" />
        </div>
        <div className="col-md-9">
          <GymManagementTopSection />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-3 mb-3">
          <GymCard />
        </div>
        <div className="col-md-3">
          <GymCard />
        </div>
        <div className="col-md-3">
          <GymCard />
        </div>
        <div className="col-md-3">
          <GymCard />
        </div>
        <div className="col-md-3">
          <GymCard />
        </div>
        <div className="col-md-3">
          <GymCard />
        </div>
        <div className="col-md-3">
          <GymCard />
        </div>
        <div className="col-md-3">
          <GymCard />
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <PrimePagination />
      </div>
    </div>
  );
}

export default GymManagement;
