import React, { useState } from "react";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";

function GymManagementTopSection() {
  const [date, setDate] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];
  return (
    <div className="row">
      <div className="col-md-3">
        <Calendar
          value={date}
          placeholder="Plan Expiry"
          onChange={(e) => setDate(e.value)}
          dateFormat="dd/mm/yy"
          className="w-100"
        />
      </div>
      <div className="col-md-3">
        <Dropdown
          value={selectedCity}
          options={cities}
          onChange={(e) => setSelectedCity(e.value)}
          optionLabel="name"
          placeholder="Select a City"
          className="w-100"
        />
      </div>
      <div className="col-md-4">
        <IconField iconPosition="left">
          <InputIcon className="pi pi-search"> </InputIcon>
          <InputText placeholder="Search" className="w-100" />
        </IconField>
      </div>
      <div className="col-md-2">
        <button className="btn btn-green">+&nbsp;Add&nbsp;New&nbsp;Gym</button>
      </div>
    </div>
  );
}

export default GymManagementTopSection;
