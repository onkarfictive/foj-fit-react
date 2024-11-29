import React from "react";
import gymImage from "@/assets/images/gym-1.png";
import gymLogo from "@/assets/images/gym-one.png";
import { Location } from "iconsax-react";
import { mainGreen } from "@/utils/constant-variable";
import { Link } from "react-router-dom";

const GymCard = ({  }) => {
  return (
    <div className="card gym-card">
      <div className="card-body">
        <div>
          <img src={gymImage} alt="" className="img-fluid mb-2" />
        </div>
        <div className="d-flex gap-2 align-items-center mb-3">
          <img
            src={gymLogo}
            alt=""
            className="img-fluid border-rounded-50"
            width={50}
            height={50}
          ></img>
          <div>
            <Link to={`/admin/gym-management/gym-detail/1`}>
              <p className="m-0 fw-500 fs-14">Power House Fitness Center</p>
            </Link>
            <span className="fs-12 text-grey">
              <Location size="14" color={mainGreen} className="me-1" />
              New Fridman, Delhi
            </span>
          </div>
        </div>
        <div>
          <p className="d-flex align-items-center mb-2 fs-14">
            <span className="text-grey" style={{ minWidth: "40%" }}>
              ID
            </span>{" "}
            123456
          </p>
          <p className="d-flex align-items-center mb-2 fs-14">
            <span className="text-grey" style={{ minWidth: "40%" }}>
              Member
            </span>{" "}
            63
          </p>
          <p className="d-flex align-items-center mb-2 fs-14">
            <span className="text-grey" style={{ minWidth: "40%" }}>
              Enolled On
            </span>{" "}
            12 nov 2024
          </p>
          <p className="d-flex align-items-center mb-2 fs-14">
            <span className="text-grey" style={{ minWidth: "40%" }}>
              Owner
            </span>{" "}
            Ashish Sachdeva
          </p>
          <p className="d-flex align-items-center mb-2 fs-14">
            <span className="text-grey" style={{ minWidth: "40%" }}>
              Contact No
            </span>{" "}
            8950425584
          </p>
          <p className="d-flex align-items-center mb-2 fs-14">
            <span className="text-grey" style={{ minWidth: "40%" }}>
              Subscription
            </span>{" "}
            12 nov 2024
          </p>
        </div>
        <div className="expiry-badge">
          <p className="w-100 text-center m-0">Plan Expires on 6 Nov 2024</p>
        </div>
      </div>
    </div>
  );
};

export default GymCard;
