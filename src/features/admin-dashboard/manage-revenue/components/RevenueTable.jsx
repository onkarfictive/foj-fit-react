import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import gymImage1 from "../../../../assets/images/gym-image-1.png";
import gymImage2 from "../../../../assets/images/gym-image-2.png";

const GymRevenueTable = () => {
  const gymData = [
    {
      name: "Premium Wellness Center",
      location: "Block A, Noida",
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
      name: "Fitness Pro Studio",
      location: "Zone 3, Faridabad",
      contact: "+91 9988776655",
      duration: "3 months",
      startDate: "01 Apr 2024",
      endDate: "10 July 2023",
      status: "Inactive",
      fee: 5000,
      total: 15000,
      image: gymImage2,
    },
    {
      name: "Premium Wellness Center",
      location: "Block A, Noida",
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
      name: "Fitness Pro Studio",
      location: "Zone 3, Faridabad",
      contact: "+91 9988776655",
      duration: "3 months",
      startDate: "01 Apr 2024",
      endDate: "10 July 2023",
      status: "Active",
      fee: 5000,
      total: 15000,
      image: gymImage2,
    },
    {
      name: "Fitness Pro Studio",
      location: "Zone 3, Faridabad",
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
      name: "Fitness Pro Studio",
      location: "Zone 3, Faridabad",
      contact: "+91 9988776655",
      duration: "3 months",
      startDate: "01 Apr 2024",
      endDate: "10 July 2023",
      status: "Active",
      fee: 5000,
      total: 15000,
      image: gymImage2,
    },
  ];

  const statusBodyTemplate = (rowData) => {
    const badgeClass =
      rowData.status === "Active" ? "success-tag" : "danger-tag";
    return (
      <span
        className={`p-tag ${badgeClass}`}
        style={{ textTransform: "capitalize" }}
      >
        {rowData.status}
      </span>
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
          <span className="fw-bold " style={{ fontSize: "1rem" }}>
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
        <Column field="contact" header="Contact Number" />
        <Column field="duration" header="Duration" />
        <Column field="startDate" header="Start Date" />
        <Column field="endDate" header="End Date" />
        <Column field="status" header="Status" body={statusBodyTemplate} />
        <Column field="fee" header="Amount" />
        <Column field="total" header="Total Revenue" />
      </DataTable>
    </div>
  );
};

export default GymRevenueTable;
