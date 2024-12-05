import React from "react";
import { TabView, TabPanel } from "primereact/tabview";
import { FileUpload } from "@mui/icons-material";
import SelectFileUpload from "../../../../common/SelectFileUpload";

function UploadGallery() {
  return (
    <div className="row mb-3">
      <div className="col-md-4">
        <div>
          <h5 className="text-white fs-16 fw-600">Uploads</h5>
          <h6 className="text-grey fw-normal fs-14">
            Provide files and images to complete your submission.
          </h6>
        </div>
      </div>

      <div className="col-md-8">
        <div className="card">
          <TabView>
            <TabPanel header="Feature">
              <SelectFileUpload />
            </TabPanel>
            <TabPanel header="Gallery">
            <SelectFileUpload />
            </TabPanel>
            <TabPanel header="GymLogo">
            <SelectFileUpload />
            </TabPanel>
          </TabView>
        </div>
      </div>
    </div>
  );
}

export default UploadGallery;
