import React from "react";
import gymLogo from "@/assets/images/gym-one.png";

function GymDetailCard() {
  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-3">
        <img
            src={gymLogo}
            alt=""
            className="img-fluid border-rounded-50"
            width={50}
            height={50}
          />
          <p className="m-0">Power House Fitness Center</p>
        </div>
  
          <p className="main-green-badge fs-14 m-0">ID : 12345</p>
        </div>
      </div>
      <p>
        <span className="text-grey" style={{ minWidth: "40%" }}>
          Phone Number
        </span>{" "}
        8950425584
      </p>
      <p>
        <span className="text-grey" style={{ minWidth: "40%" }}>
          Email Address
        </span>{" "}
        Ashish@fictivebox.com
      </p>
      <p>
        <span className="text-grey" style={{ minWidth: "40%" }}>
          No.of Trainee
        </span>{" "}
        70
      </p>

      <p>
        <span className="text-grey" style={{ minWidth: "40%" }}>
          Address
        </span>{" "}
        New Fridman, Delhi
      </p>
      <p>
        <span className="text-grey" style={{ minWidth: "40%" }}>
          Enrolled on
        </span>{" "}
        12-Nov-2022
      </p>
      <p>
        <span className="text-grey" style={{ minWidth: "40%" }}>
          Status
        </span>{" "}
        Active
      </p>
      <p>
        <span className="text-grey" style={{ minWidth: "40%" }}>
          Pincode
        </span>{" "}
        110001
      </p>
    </div>
  );
}

export default GymDetailCard;
