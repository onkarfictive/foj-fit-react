import React from "react";
import CustomTabMenu from "../dashboard-home/components/CustomTabMenu";
import Heading from "../../../common/ui/Heading";
import SubscriptionCard from "./components/SubscriptionCard";
import { useNavigate } from "react-router-dom";

function Subscription() {
  const navigate = useNavigate();

  const handleAddNewPlan = () => {
    navigate("/admin/manage-subscriptions/add-new-plan");
  };
  return (
    <div>
      <div className="row mb-4">
        <div className="col-md-9">
          <Heading title="Subscription" />
        </div>
        <div className="col-md-3 text-md-end">
          <button className="btn btn-green" onClick={handleAddNewPlan}>
            <span className="fs-14 ">+</span> Add New Plan
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <SubscriptionCard />
        </div>
        <div className="col-md-4">
          <SubscriptionCard />
        </div>
        <div className="col-md-4">
          <SubscriptionCard />
        </div>
      </div>
    </div>
  );
}

export default Subscription;
