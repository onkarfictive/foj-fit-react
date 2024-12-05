import React from "react";
import { Divider, TextField } from "@mui/material";
import { InputSwitch } from "primereact/inputswitch";
import { useState } from "react";

const DaysAvailability = () => {
    const [checked, setChecked] = useState(false);
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
                <TextField
                  id="monday"
                  name="monday"
                  label="Monday"
                  variant="outlined"
                  fullWidth
                />
              </div>
              <div className="col-4 mb-3">
                <TextField
                  id="tuesday"
                  name="tuesday"
                  label="Tuesday"
                  variant="outlined"
                  fullWidth
                />
              </div>
              <div className="col-4 text-grey mb-4">
                <TextField
                  id="wednesday"
                  name="wednesday"
                  label="Wednesday"
                  variant="outlined"
                  fullWidth
                />
              </div>
              <div className="col-4 mb-3">
                <TextField
                  id="thursday"
                  name="thursday"
                  label="Thursday"
                  variant="outlined"
                  fullWidth
                />
              </div>
              <div className="col-6 text-grey mb-3">
                <TextField
                  id="noOfTrainers"
                  name="noOfTrainers"
                  label="No. of Trainers"
                  variant="outlined"
                  fullWidth
                />
              </div>
              <div className="col-6 mb-3">
                <TextField
                  id="subscription"
                  name="subscription"
                  label="Subscription"
                  variant="outlined"
                  fullWidth
                />
              </div>
              <div className="col-6 text-grey mb-3">
                <TextField
                  id="startDate"
                  name="startDate"
                  label="Start Date"
                  variant="outlined"
                  fullWidth
                />
              </div>
              <div className="col-6 mb-3">
                <TextField
                  id="status"
                  name="status"
                  label="Status"
                  variant="outlined"
                  fullWidth
                />
              </div>
              <div className="col-12 text-grey mb-3">
                <TextField
                  id="gymDescription"
                  name="gymDescription"
                  label="Gym Description"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                />
              </div>
              <div className="col-12 text-grey mb-2">
                <h5 className=" fs-12" style={{ color: "text-grey" }}>Location Details</h5>
                </div>
              <div className="col-6 text-grey mb-3">
                <TextField
                  id="state"
                  name="state"
                  label="State"
                  variant="outlined"
                  fullWidth
                  multiline
                  
                />
              </div>
              <div className="col-6 text-grey mb-3">
                <TextField
                  id="city"
                  name="city"
                  label="City"
                  variant="outlined"
                  fullWidth
                  multiline
                  
                />
              </div>
              <div className="col-12 text-grey mb-3">
                <TextField
                  id="address"
                  name="address"
                  label="Full Address"
                  variant="outlined"
                  fullWidth
                  multiline
                  
                />
              </div>

              <Divider className="my-4"/>

              <div className="col-6 text-grey mb-3">
                <TextField
                  id="gymapproved"
                  name="gymapproved"
                  label="Gym is LOREM Approved"
                  variant="outlined"
                  fullWidth
                  multiline
                  
                />
              </div>
              <div className="col-6 text-grey mb-3">
                <TextField
                  id="priceNegotiable"
                  name="address"
                  label="Price is Negotiable"
                  variant="outlined"
                  fullWidth
                  multiline
                  
                />
              </div>
              <div className="col-6 text-grey mb-3 ">
                <TextField
                  id="boundaryWalls"
                  name="boundaryWalls"
                  label="Property has Boundary Walls"
                  variant="outlined"
                  
                  fullWidth
                  multiline
                  
                />
                <div>
                <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
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
