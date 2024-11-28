import React from "react";

function SubscriptionCard() {
  const plans = [
    { type: "BASIC", price: "₹5,000", duration: "3 Month" },
    { type: "STANDARD", price: "₹10,000", duration: "6 Month" },
    { type: "PROFESSIONAL", price: "₹15,000", duration: "12 Month" },
  ];

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="mb-4">Current Subscriptions</h5>

        {plans.map((plan, index) => (
          <div
            key={index}
            className="d-flex justify-content-between align-items-center px-3 mb-3 subs-card"
            style={{height:"8.7rem"}}
          >
            <div className="d-flex flex-column justify-content-between" style={{height:"70%"}}>
              <h6
                className="text-uppercase 
                m-0"
                style={{ letterSpacing: "1px" }}
              >
                {plan.type}
              </h6>
              <p className="m-0">{plan.duration}</p>
            </div>

            <div className="d-flex flex-column gap-3 align-items-center">
               <h4 className="m-0">{plan.price}</h4>
               <p className="m-0 main-green-badge fs-12">30-Days Free Trail</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubscriptionCard;
