import React from "react";
import { SelectButton } from "primereact/selectbutton";

const options = ["Days Availability", "Amenities"];
// const [value, setValue] = useState(options[0]);
let value = "0";

const GymDetailModal = () => {
  return (
    <div
      className="card bg-dark text-white p-4 rounded-3 w-100 h-100"
      style={{ width: "400px" }}
    >
      <div className="d-flex justify-content-between align-items-center mb-3 px-2">
        <h5 className="fw-bold">Gym Details</h5>
        
      </div>

      <p className="text-grey px-2">
        <h6 className="mb-3">Gym Description</h6>
        Lorem ipsum dolor sit amet consectetur. Curabitur sit sagittis euismod
        sit pellentesque metus feugiat. Nam orci sollicitudin feugiat a orci
        lectus augue senectus sed. Sed commodo orci praesent duis convallis diam
        egestas pretium. Lorem ipsum dolor sit amet consectetur.
      </p>
      <SelectButton className="p-2"
        value={value}
        onChange={(e) => setValue(e.value)}
        options={options}
      />
      <div className="p-2 row">
        <div className="col-6">
          <div className="bg-color py-3 px-4 mb-3 d-flex justify-content-between">
            <span className="text-dark-green  ">Monday</span>
            <span className="text-white ms-2 ">08:00 AM - 10:00 PM</span>
          </div>
        </div>
        <div className="col-6">
          <div className="bg-color py-3 px-4 mb-3 d-flex justify-content-between">
            <span className="text-dark-green">Tuesday</span>
            <span className="text-white ms-2">08:00 AM - 10:00 PM</span>
          </div>
        </div>
        <div className="col-6">
          <div className="bg-color py-3 px-4 mb-3 d-flex justify-content-between">
            <span className="text-dark-green">Wednesday</span>
            <span className="text-white ms-2">08:00 AM - 10:00 PM</span>
          </div>
        </div>
        <div className="col-6">
          <div className="bg-color py-3 px-4 mb-3 d-flex justify-content-between">
            <span className="text-dark-green">Thursday</span>
            <span className="text-white ms-2">08:00 AM - 10:00 PM</span>
          </div>
        </div>
        <div className="col-6">
          <div className="bg-color py-3 px-4 mb-3 d-flex justify-content-between">
            <span className="text-dark-green">Friday</span>
            <span className="text-white ms-2">08:00 AM - 10:00 PM</span>
          </div>
        </div>
        <div className="col-6">
          <div className="bg-color py-3 px-4 mb-3 d-flex justify-content-between">
            <span className="text-dark-green">Saturday</span>
            <span className="text-white ms-2">08:00 AM - 10:00 PM</span>
          </div>
        </div>
        <div className="col-6">
          <div className="bg-color py-3 px-4 mb-3 d-flex justify-content-between">
            <span className="text-dark-green">Sunday</span>
            <span className="text-white ms-2">08:00 AM - 10:00 PM</span>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default GymDetailModal;
