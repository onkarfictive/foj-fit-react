import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import gymLogo from "@/assets/images/gym-one.png";

function GymDetailCard() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between mb-3">
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

        <div className="row">
          <div className="col-sm-6">
            <p>
              <span
                className="text-grey"
                style={{ minWidth: "40%", display: "inline-block" }}
              >
                Phone Number
              </span>{" "}
              8950425584
            </p>
          </div>
          <div className="col-sm-6">
            <p>
              <span
                className="text-grey"
                style={{ minWidth: "40%", display: "inline-block" }}
              >
                Address
              </span>{" "}
              New Fridman, Delhi
            </p>
          </div>
          <div className="col-sm-6">
            <p>
              <span
                className="text-grey"
                style={{ minWidth: "40%", display: "inline-block" }}
              >
                Email Address
              </span>{" "}
              ashish@fictivebox.com
            </p>
          </div>
          <div className="col-sm-6">
            <p>
              <span
                className="text-grey"
                style={{ minWidth: "40%", display: "inline-block" }}
              >
                Enrolled on
              </span>{" "}
              12-nov-2022
            </p>
          </div>
          <div className="col-sm-6">
            <p>
              <span
                className="text-grey"
                style={{ minWidth: "40%", display: "inline-block" }}
              >
                No Of Trainee
              </span>{" "}
              10
            </p>
          </div>
          <div className="col-sm-6">
            <p>
              <span
                className="text-grey"
                style={{ minWidth: "40%", display: "inline-block" }}
              >
                Status
              </span>{" "}
              Active
            </p>
          </div>
          <div className="col-sm-6">
            <p>
              <span
                className="text-grey"
                style={{ minWidth: "40%", display: "inline-block" }}
              >
                No
              </span>{" "}
              110001
            </p>
          </div>
        </div>

        <div className="mt-3">
          <p
            className="text-success"
            style={{ cursor: "pointer" }}
            onClick={toggleModal}
          >
            More Details
          </p>
        </div>

        
        <Dialog
          header={null}                    
          visible={showModal}
          style={{ width: "50vw" }}
          onHide={toggleModal}
        >
          
        </Dialog>
      </div>
    </div>
  );
}

export default GymDetailCard;
