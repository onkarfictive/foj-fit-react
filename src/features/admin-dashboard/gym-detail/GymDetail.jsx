import React from "react";
import gymImage from "@/assets/images/gym-1.png";
import gymLogo from "@/assets/images/gym-one.png";
import Heading from "@/common/ui/Heading";
import GymDetailCard from "./components/GymDetailCard";
import OwnerDetailCard from "./components/OwnerDetailCard";
import GymMembersTable from "./components/GymMembersTable";

function GymDetail() {
  return (
    <div>
      <div className="row">
        <Heading title="Gym Detail"></Heading>

        <div className="row mb-3">
          <div className="col-md-7">
            <GymDetailCard />
          </div>
          <div className="col-md-5">
            <OwnerDetailCard />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="card">
                <h5 className="p-3">Gym Members</h5>
                <GymMembersTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GymDetail;
