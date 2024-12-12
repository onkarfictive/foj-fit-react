import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

function GymAmenities() {
  const allAmenitiesData = [
    {
      name: "Locker Rooms",
      icon: "https://flb-public.s3.ap-south-1.amazonaws.com/Drop-Bulk-32px%282%29.svg",
    },
    {
      name: "Showers",
      icon: "https://flb-public.s3.ap-south-1.amazonaws.com/Flash-Bulk-32px%281%29.svg",
    },
    {
      name: "Parking",
      icon: "https://flb-public.s3.ap-south-1.amazonaws.com/Security-Bulk-32px%281%29.svg",
    },
    {
      name: "Sauna/Steam Room",
      icon: "https://flb-public.s3.ap-south-1.amazonaws.com/CloudFog-Bulk-32px%281%29.svg",
    },
    {
      name: "Climbing wall",
      icon: "https://flb-public.s3.ap-south-1.amazonaws.com/Trash-Bulk-32px%281%29.svg",
    },
    {
      name: "Wi-Fi Access",
      icon: "https://flb-public.s3.ap-south-1.amazonaws.com/EmojiHappy-Bulk-32px%281%29.svg",
    },
    {
      name: "Swimming Pool",
      icon: "https://flb-public.s3.ap-south-1.amazonaws.com/Tree-Bulk-32px%282%29.svg",
    },
    {
      name: "Meditation",
      icon: "https://flb-public.s3.ap-south-1.amazonaws.com/Driving-Bulk-32px%281%29.svg",
    },
    {
      name: "Cafe",
      icon: "https://flb-public.s3.ap-south-1.amazonaws.com/House2-Bulk-32px%281%29.svg",
    },
    {
        name: "New Item",
        icon: "https://flb-public.s3.ap-south-1.amazonaws.com/House2-Bulk-32px%281%29.svg",
      },

  ];
  return (
    <div className="row mb-3">
      <div className="col-md-4 ">
        <div>
          <h5 className="text-white fs-16 fw-600">Choose Gym Amenities</h5>
          <h6 className="text-grey fw-normal fs-14">
            Provide the basic details about your gym below.
          </h6>
        </div>
      </div>

      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <div className="row">
              {allAmenitiesData.map((amenity, index) => (
                <div key={index} className="col-sm-6 col-md-4 ">
                  <div className={`switch-container active-switch mb-4`}>
                    <img src={amenity.icon} alt="Logo"></img>
                    <FormControlLabel
                      control={<Checkbox style={{ visibility: "hidden" }} />}
                      label={amenity.name}
                      labelPlacement="start"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GymAmenities;
