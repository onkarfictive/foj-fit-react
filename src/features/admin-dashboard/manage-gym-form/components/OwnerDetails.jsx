import React, { useState } from "react";
import { Divider, TextField } from "@mui/material";
import { InputSwitch } from "primereact/inputswitch";

const OwnerDetails = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="row mb-3">
      
      <div className="col-md-4 ">
        <div>
          <h5 className="text-white fs-16 fw-600">Owner</h5>
          <h6 className="text-grey fw-normal fs-14">
            Provide the basic details about your gym below.
          </h6>
        </div>
      </div>

      
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <div className="row">

            <div className="col-md-12 mb-4">
            <h5 className="mb-3 ">Owner Details</h5>
            </div>
            
              <div className="col-md-6 mb-4 text-grey">
                <TextField
                  id="ownerName"
                  name="ownerName"
                  label="Owner Name"
                  variant="outlined"
                  fullWidth
                />
              </div>

              <div className="col-md-6 mb-4 text-grey">
                <TextField
                  id="phoneNumber"
                  name="phoneNumber"
                  label="Phone Number"
                  variant="outlined"
                  fullWidth
                />
              </div>

              
              <div className="col-md-12 mb-4 text-grey">
                <TextField
                  id="emailAddress"
                  name="emailAddress"
                  label="Email Address"
                  variant="outlined"
                  fullWidth
                />
              </div>

              
              
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerDetails;
