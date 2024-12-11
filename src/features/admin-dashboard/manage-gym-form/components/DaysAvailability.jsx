import React from "react";
import { Divider, TextField } from "@mui/material";
import { InputSwitch } from "primereact/inputswitch";
import { useState } from "react";

const DaysAvailability = () => {
  const [boundaryWalls, setBoundaryWalls] = useState(false);
  return (
    <div className="row mb-3">
      <div className="col-md-4">
        <div>
          <h5 className="text-white fs-16 fw-600">Availability</h5>
          <h6 className="text-grey fw-normal fs-14">
            Lorem ipsum dolor sit amet consec Venenatis.
          </h6>
        </div>
      </div>

      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-4 text-grey mb-4">
                <div
                  className={`d-flex w-100 justify-content-between align-items-center custom-checkbox cursor-pointer ${
                    boundaryWalls ? "active" : ""}`}
                  onClick={() => setBoundaryWalls(!boundaryWalls)}
                >
                  <p className="m-0">Monday</p>
                  <InputSwitch
                    checked={boundaryWalls}
                    onChange={(e) => setBoundaryWalls(e.value)}
                  />
                </div>
              </div>
              <div className="col-4 text-grey mb-4">
                <div
                  className={`d-flex w-100 justify-content-between align-items-center custom-checkbox cursor-pointer ${
                    boundaryWalls ? "active" : ""}`}
                  onClick={() => setBoundaryWalls(!boundaryWalls)}
                >
                  <p className="m-0">Monday</p>
                  <InputSwitch
                    checked={boundaryWalls}
                    onChange={(e) => setBoundaryWalls(e.value)}
                  />
                </div>
              </div>
              <div className="col-4 text-grey mb-4">
                <div
                  className={`d-flex w-100 justify-content-between align-items-center custom-checkbox cursor-pointer ${
                    boundaryWalls ? "active" : ""}`}
                  onClick={() => setBoundaryWalls(!boundaryWalls)}
                >
                  <p className="m-0">Monday</p>
                  <InputSwitch
                    checked={boundaryWalls}
                    onChange={(e) => setBoundaryWalls(e.value)}
                  />
                </div>
              </div>
              <div className="col-4 text-grey mb-4">
                <div
                  className={`d-flex w-100 justify-content-between align-items-center custom-checkbox cursor-pointer ${
                    boundaryWalls ? "active" : ""}`}
                  onClick={() => setBoundaryWalls(!boundaryWalls)}
                >
                  <p className="m-0">Monday</p>
                  <InputSwitch
                    checked={boundaryWalls}
                    onChange={(e) => setBoundaryWalls(e.value)}
                  />
                </div>
              </div>
              <div className="col-4 text-grey mb-4">
                <div
                  className={`d-flex w-100 justify-content-between align-items-center custom-checkbox cursor-pointer ${
                    boundaryWalls ? "active" : ""}`}
                  onClick={() => setBoundaryWalls(!boundaryWalls)}
                >
                  <p className="m-0">Monday</p>
                  <InputSwitch
                    checked={boundaryWalls}
                    onChange={(e) => setBoundaryWalls(e.value)}
                  />
                </div>
              </div>
              <div className="col-4 text-grey mb-4">
                <div
                  className={`d-flex w-100 justify-content-between align-items-center custom-checkbox cursor-pointer ${
                    boundaryWalls ? "active" : ""}`}
                  onClick={() => setBoundaryWalls(!boundaryWalls)}
                >
                  <p className="m-0">Monday</p>
                  <InputSwitch
                    checked={boundaryWalls}
                    onChange={(e) => setBoundaryWalls(e.value)}
                  />
                </div>
              </div>
              <div className="col-4 text-grey mb-4">
                <div
                  className={`d-flex w-100 justify-content-between align-items-center custom-checkbox cursor-pointer ${
                    boundaryWalls ? "active" : ""}`}
                  onClick={() => setBoundaryWalls(!boundaryWalls)}
                >
                  <p className="m-0">Monday</p>
                  <InputSwitch
                    checked={boundaryWalls}
                    onChange={(e) => setBoundaryWalls(e.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaysAvailability;
