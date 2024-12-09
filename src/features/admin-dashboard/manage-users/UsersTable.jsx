import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputSwitch } from "primereact/inputswitch";
import gymImage1 from "../../../assets/images/gym-image-1.png";

const UsersTable = () => {
  const [gymData, setGymData] = useState([
    {
      id: 1,
      name: "Premium Wellness Center",
      location: "Block A, Noida",
      email: "wellness@activeworld.com",
      contact: "+91 9876543210",
      duration: "6 months",
      startDate: "15 Mar 2023",
      endDate: "10 Sep 2023",
      status: "Active",
      fee: 5000,
      total: 15000,
      image: gymImage1,
    },
    {
      id:2,
      name: "Fitness Pro Studio",
      location: "Zone 3, Faridabad",
      email: "studio@fitpro.com",
      contact: "+91 9988776655",
      duration: "3 months",
      startDate: "01 Apr 2024",
      endDate: "10 Jul 2023",
      status: "Inactive",
      fee: 5000,
      total: 15000,
      image: gymImage1,
    },
    {
      id:3,
      name: "Premium Wellness Center",
      location: "Block A, Noida",
      email: "wellness@activeworld.com",
      contact: "+91 9876543210",
      duration: "6 months",
      startDate: "15 Mar 2023",
      endDate: "10 Sep 2023",
      status: "Active",
      fee: 5000,
      total: 15000,
      image: gymImage1,
    },
    {
      id:4,
      name: "Fitness Pro Studio",
      location: "Zone 3, Faridabad",
      email: "wellness@activeworld.com",

      contact: "+91 9988776655",
      duration: "3 months",
      startDate: "01 Apr 2024",
      endDate: "10 July 2023",
      status: "Inactive",
      fee: 5000,
      total: 15000,
      image: gymImage1,
    },
    {
      id:5,
      name: "Premium Wellness Center",
      location: "Block A, Noida",
      email: "wellness@activeworld.com",

      contact: "+91 9876543210",
      duration: "6 months",
      startDate: "15 Mar 2023",
      endDate: "10 Sep 2023",
      status: "Active",
      fee: 5000,
      total: 15000,
      image: gymImage1,
    },
    {
      id:6,
      name: "Fitness Pro Studio",
      location: "Zone 3, Faridabad",
      email: "wellness@activeworld.com",

      contact: "+91 9988776655",
      duration: "3 months",
      startDate: "01 Apr 2024",
      endDate: "10 July 2023",
      status: "Active",
      fee: 5000,
      total: 15000,
      image: gymImage1,
    },
    {
      id:7,
      name: "Fitness Pro Studio",
      location: "Zone 3, Faridabad",
      email: "wellness@activeworld.com",

      contact: "+91 9988776655",
      duration: "3 months",
      startDate: "01 Apr 2024",
      endDate: "10 July 2023",
      status: "Active",
      fee: 5000,
      total: 15000,
      image: gymImage1,
    },
    {
      id:8,
      name: "Fitness Pro Studio",
      location: "Zone 3, Faridabad",
      email: "wellness@activeworld.com",

      contact: "+91 9988776655",
      duration: "3 months",
      startDate: "01 Apr 2024",
      endDate: "10 July 2023",
      status: "Active",
      fee: 5000,
      total: 15000,
      image: gymImage1,
    },
  ]);

  const toggleStatus = (rowData) => {
    setGymData((prevData) =>
      prevData.map((gym) =>
        gym.id === rowData.id
          ? { ...gym, status: gym.status === "Active" ? "Inactive" : "Active" }
          : gym
      )
    );
  };

  const statusBodyTemplate = (rowData) => {
    return (
      <div className="">
      <InputSwitch
        checked={rowData.status === "Active"}
        onChange={() => toggleStatus(rowData)}
      />
      </div>
    );
  };

  const gymDetailsTemplate = (rowData) => {
    return (
      <div className="d-flex align-items-center gap-3">
        <img
          src={rowData.image}
          alt={rowData.name}
          className="rounded"
          style={{
            width: "50px",
            height: "50px",
            objectFit: "cover",
          }}
        />
        <div>
          <span className="fw-bold text-white" style={{ fontSize: "1rem" }}>
            {rowData.name}
          </span>
          <br />
          <span className="text-grey" style={{ fontSize: "0.8rem" }}>
            {rowData.location}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="gym-revenue-table">
      <DataTable value={gymData} responsiveLayout="scroll">
        <Column
          header="Gym Name"
          body={gymDetailsTemplate}
          style={{ minWidth: "250px" }}
        />
        <Column field="email" header="Email Address" />
        <Column field="contact" header="Contact" />
        <Column field="duration" header="Subscription" />
        <Column field="startDate" header="Start Date" />
        <Column field="endDate" header="End Date" />
        <Column
          field="status"
          header="Status"
          body={statusBodyTemplate}
          style={{ textAlign: "center", width: "120px" }}
        />
      </DataTable>
    </div>
  );
};

export default UsersTable;
