import { Edit, Trash, TickCircle } from "iconsax-react";
import React from "react";

function SubscriptionCard() {
  return (
    <div>
  
          <div className="card">
            <div className="card-body ">
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="text-lighter-grey mb-0">BASIC</h6>

                <div className="d-flex gap-2">
                  <Edit size="20" color="#A4A4A4" />
                  <Trash size="20" color="#A4A4A4" />
                </div>
              </div>

              <div className="text-main-green mt-3 ">
                <h4>3 Month</h4>
              </div>

              <div className="text-grey  fs-14 mb-3">
                <p className="m-0">
                  Lorem ipsum dolor sit amet consectetur. Curabitur sit sagittis
                  euismod sit
                </p>
              </div>

              <h6 className="text-lighter-grey  mt-2">PLAN INCLUDES</h6>
              <div className=" mt-2">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <TickCircle size="20" color="#70f193" variant="Bold" />
                  <p className="m-0">Client Management Tracker</p>
                </div>
                <div className="d-flex align-items-center gap-2 mb-3 ">
                  <TickCircle
                    size="20"
                    className="text-main-green"
                    variant="Bold"
                  />
                  <p className="m-0">
                    MyFitnessPal Nutrition and Habit Tracker
                  </p>
                </div>
                <div className="d-flex align-items-center gap-2 mb-3">
                  <TickCircle size="20" color="#70f193" variant="Bold" />
                  <p className="m-0">Client Dashboard</p>
                </div>
                <div className="d-flex align-items-center gap-2 mb-3">
                  <TickCircle size="20" color="#70f193" variant="Bold" />
                  <p className="m-0">3000+ video exercise library</p>
                </div>
                <div className="d-flex align-items-center gap-2 mb-3">
                  <TickCircle size="20" color="#70f193" variant="Bold" />
                  <p className="m-0">Free App Messaging</p>
                </div>
                <div className="d-flex align-items-center gap-2 mb-3">
                  <TickCircle size="20" color="#70f193" variant="Bold" />
                  <p className="m-0">Free Automated Payments</p>
                </div>

                <p className="text-lighter-grey mb-2 fs-16">Price</p>
                <h4 className="text-white ">₹5000</h4>
              </div>
            </div>
          </div>
     
    </div>
  );
}

export default SubscriptionCard;
