import React from "react";
import { SelectButton } from "primereact/selectbutton";

const options = ["Off", "On"];
// const [value, setValue] = useState(options[0]);
let value  = "0"

const GymDetailModal = () => {
  return (
    <div
      className="card bg-dark text-white p-4 rounded-3 w-100 h-100"
      style={{ width: "400px" }}
    >
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-bold">Gym Details</h5>
        <button
          className="btn-close btn-close-white"
          aria-label="Close"
        ></button>
      </div>

      <p className="text-grey">
        <h6 className="mb-3">Gym Description</h6>
        Lorem ipsum dolor sit amet consectetur. Curabitur sit sagittis euismod
        sit pellentesque metus feugiat. Nam orci sollicitudin feugiat a orci
        lectus augue senectus sed. Sed commodo orci praesent duis convallis diam
        egestas pretium. Lorem ipsum dolor sit amet consectetur.
      </p>
      <SelectButton value={value} onChange={(e) => setValue(e.value)} options={options} />
      <div className="nav nav-pills mb-3"></div>

      <div>
        {[
          { day: "Monday", time: "08:00 AM - 10:00 PM" },
          { day: "Tuesday", time: "08:00 AM - 10:00 PM" },
          { day: "Wednesday", time: "08:00 AM - 10:00 PM" },
          { day: "Thursday", time: "08:00 AM - 10:00 PM" },
          { day: "Friday", time: "Closed" },
          { day: "Saturday", time: "08:00 AM - 10:00 PM" },
          { day: "Sunday", time: "Closed" },
        ].map((slot, index) => (
          <div
            key={index}
            className={`d-flex justify-content-between p-2 rounded ${
              slot.time === "Closed"
                ? "bg-secondary text-muted"
                : "bg-dark border border-secondary"
            }`}
          >
            <span>{slot.day}</span>
            <span>{slot.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GymDetailModal;
