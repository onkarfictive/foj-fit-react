import React from "react";
import graphIcon from "@/assets/icons/graph-icon.png";

function StatCard({ icon, title="Gym" }) {
  return (
    <div className="card border- border-green-500">
      <div className="card-body">
        <div>
          <img src={icon} alt="" className="block mb-2" />
          <h6>{title}</h6>
        </div>

        <div className="d-flex justify-content-between align-items-end">
          <h5>120</h5>
          <img src={graphIcon} alt="" className="block" />
        </div>
      </div>
    </div>
  );
}

export default StatCard;
