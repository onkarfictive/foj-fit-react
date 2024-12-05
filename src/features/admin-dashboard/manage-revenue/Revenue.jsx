import React from "react";
import CustomTabMenu from "../dashboard-home/components/CustomTabMenu";
import Heading from "../../../common/ui/Heading";
import RevenueLineChart from "../dashboard-home/components/RevenueChart";
import RevenueTable from "./components/RevenueTable";

function Revenue() {
  return (
    <div>
      <div className="row mb-4">
        <div className="col-md-9">
          <Heading title="Revenue" />
        </div>
        <div className="col-md-3 text-md-end">
          <CustomTabMenu />
        </div>
      </div>

      <div className="row ">
        <div className="col-md-4">
          <div className="card mb-3">
            <div className="card-body">
              <h4 className="fs-14  mb-0">Sales Revenue</h4>
              <p className="fs-12 text-grey">
                In last 30 days revenue from subscription.
              </p>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h5 className=" text-white">₹25,000</h5>
                  <p className="fs-12 text-grey mb-0">This Year</p>
                </div>
                <div className="col-md-6">
                  <h5 className=" text-white">₹15000</h5>
                  <p className="fs-12 text-grey mb-0">This Month</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card mb-3">
                <div className="card-body">
                  <h6 className="fs-12  mb-0">Active Subscriptions</h6>
                </div>
                <div className="card-body">
                  <h3 className="fs-14  mb-0">120</h3>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mb-3">
                <div className="card-body">
                  <h6 className="fs-12  mb-0 ">Average Subscriptions</h6>
                </div>
                <div className="card-body">
                  <h3 className="fs-14  mb-0">120</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <RevenueLineChart height={"245px"} />
            </div>
          </div>
        </div>
        <div className="card px-0">
          <div className="p-3">
            <h5 className="">Subscription Revenue</h5>
          </div>
          <RevenueTable />
        </div>
      </div>
    </div>
  );
}

export default Revenue;
