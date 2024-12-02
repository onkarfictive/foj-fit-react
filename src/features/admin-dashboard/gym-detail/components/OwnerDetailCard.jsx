import React from "react";

function OwnerDetailCard() {
  return (
    <div className="card h-100">
      <div className="card-body">
        <h5 className="mb-3">Owner Detail</h5>
        <p>
          <span
            className="text-grey"
            style={{ minWidth: "40%", display: "inline-block" }}
          >
            Name
          </span>{" "}
          John Doe
        </p>
        <p>
          <span
            className="text-grey"
            style={{ minWidth: "40%", display: "inline-block" }}
          >
            Email Address
          </span>{" "}
          john.doe@example.com
        </p>
        <p>
          <span
            className="text-grey"
            style={{ minWidth: "40%", display: "inline-block" }}
          >
            Phone Number
          </span>{" "}
          9876543210
        </p>
      </div>
    </div>
  );
}

export default OwnerDetailCard;
