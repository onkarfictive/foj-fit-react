import React from "react";
import gymOne from "@/assets/images/gym-one.png";
import gymTwo from "@/assets/images/gym-two.png";
import gymThree from "@/assets/images/gym-three.png";
import gymFour from "@/assets/images/gym-four.png";
import { Location } from "iconsax-react";

function RecentGym() {
  const data = [
    {
      image: gymOne,
      name: "Fitness Hub",
      address: "123 Main St, City, State, ZIP",
    },
    {
      image: gymTwo,
      name: "Power House Fitness Center",
      address: "123 Main St, City, State, ZIP",
    },
    {
      image: gymThree,
      name: "Underground Fitness Gym",
      address: "123 Main St, City, State, ZIP",
    },
    {
      image: gymFour,
      name: "Limitless Training",
      address: "123 Main St, City, State, ZIP",
    },
  ];

  return (
    <div className="card h-100">
      <div className="card-body h-100">
        <h5 className="mb-4 fw-500">Recently Added Gym</h5>
        {data.map((item) => (
          <div className="d-flex align-items-center gap-3 my-3 pb-3 recent-gym-item">
            <div>
              <img src={item.image} alt=""></img>
            </div>
            <div>
              <h6>{item.name}</h6>
              <p className="text-grey fs-12 m-0">
                <Location size="16" color="#37d67a" /> {item.address}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentGym;
