import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import BackgroundLetterAvatars from "../../../../common/ui/BackgroundLetterAvatars";
import { Edit, Trash } from "iconsax-react";
import { BsExclamationCircle } from "react-icons/bs";

const GymMembersTable = () => {
  const users = [
    {
      name: "Arjun Verma",
      email: "arjun.verma@example.com",
      contact: "+91 9876543210",
      subscription: "6 months",
      enrolledDate: "15 Dec 2025",
      trainingType: "Regular",
      status: "Active",
    },
    {
      name: "Sita Rao",
      email: "sita.rao@example.com",
      contact: "+91 8765432109",
      subscription: "3 months",
      enrolledDate: "20 Jan 2025",
      trainingType: "Personal",
      status: "In-active",
    },
    {
      name: "Rahul Singh Mehta",
      email: "rahul.singh@example.com",
      contact: "+91 7654321098",
      subscription: "12 months",
      enrolledDate: "30 Nov 2025",
      trainingType: "Personal",
      status: "Active",
    },
    {
      name: "Neha Gupta",
      email: "neha.gupta@example.com",
      contact: "+91 6543210987",
      subscription: "12 months",
      enrolledDate: "5 Feb 2025",
      trainingType: "Regular",
      status: "In-active",
    },
    {
      name: "Amit Sharma",
      email: "amit.sharma@example.com",
      contact: "+91 5432109876",
      subscription: "6 months",
      enrolledDate: "25 Mar 2025",
      trainingType: "Regular",
      status: "Active",
    },
    {
      name: "Pooja Mehta",
      email: "pooja.mehta@example.com",
      contact: "+91 4321098765",
      subscription: "6 months",
      enrolledDate: "10 Apr 2025",
      trainingType: "Regular",
      status: "Active",
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

  const actionsBodyTemplate = () => {
    return (
      <div>
        <Edit size="20" className="me-2" color="#a4a4a4" />
        <Trash size="20" color="#a4a4a4" />
      </div>
    );
  };
  const trainingTypeBody = (rowData) => (
    <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      {rowData.trainingType}
      <BsExclamationCircle style={{ color: "#70f193" }} />
    </span>
  );

  const avatarAndNameBodyTemplate = (rowData) => {
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        <BackgroundLetterAvatars name={rowData.name} />
        <span
          style={{ marginLeft: "10px", fontWeight: "600" }}
          className="text-light"
        >
          {rowData.name}
        </span>
      </div>
    );
  };

  return (
    <div className="card">
      <DataTable
        value={users}
        rows={5}
        paginator
        rowsPerPageOptions={[5, 10, 25, 50]}
        paginatorLeft={true}
        responsiveLayout="scroll"
        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first} to {last} of {totalRecords}"
      >
        <Column header="Name" body={avatarAndNameBodyTemplate} />
        <Column field="email" header="Email" />
        <Column field="contact" header="Contact" />
        <Column field="subscription" header="Subscription" />
        <Column field="enrolledDate" header="Enrolled Date" />

        <Column
          field="trainingType"
          header="Training Type"
          body={trainingTypeBody}
        />

        <Column header="Status" body={statusBodyTemplate} />
        <Column header="Actions" body={actionsBodyTemplate} />
      </DataTable>
    </div>
  );
};

export default GymMembersTable;
