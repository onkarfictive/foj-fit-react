import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

function BillingDetail() {
  const tableData = [
    {
      date: "13 Feb, 2025",
      startDate: "13 Aug 23",
      endDate: "13 Nov 23",
      amount: "₹5,000",
      status: "UNPAID",
    },
    {
      date: "13 Nov, 2024",
      startDate: "13 Aug 23",
      endDate: "13 Nov 23",
      amount: "₹5,000",
      status: "PAID",
    },
    {
      date: "13 Nov, 2024",
      startDate: "13 Aug 23",
      endDate: "13 Nov 23",
      amount: "₹5,000",
      status: "PAID",
    },
    {
      date: "13 Nov, 2024",
      startDate: "13 Aug 23",
      endDate: "13 Nov 23",
      amount: "₹5,000",
      status: "PAID",
    },
  ];
  return (
    <div>
      <div className="row mb-3">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h5 className="p-2 m-0">Billing & Subscription Details</h5>
                </div>
              </div>
              <div className="row p-2">
                <div className="col-md-3">
                  <p className="m-2 mt-4 text-lighter-grey">Subscription</p>
                  <p className="m-2 fs-5  fw-400">3 Month (basic)</p>
                </div>
                <div className="col-md-3">
                  <p className="m-2 mt-4 text-lighter-grey">Start-End Date</p>
                  <p className="m-2 fs-5  fw-400">13-nov-2024 - 13-feb-2025</p>
                </div>
                <div className="col-md-3">
                  <p className="m-2 mt-4 text-lighter-grey">
                    Next Invoice Issue Date
                  </p>
                  <p className="m-2 fs-5  fw-400">13-nov-2024 - 13-feb-2025</p>
                </div>
                <div className="col-md-3">
                  <p className="m-2 mt-4 text-lighter-grey">Price to pay</p>
                  <p className="m-2 fs-5  fw-400">$5000</p>
                  <p className="m-2 text-dark-green hover-cursor  fw-400">
                    See Breakdown
                  </p>
                </div>
                <div className="col-md-12">
                  <p className="m-2 mb-4 fs-4 ">Invoices</p>
                  </div>
                <DataTable value={tableData} tableStyle={{ minWidth: "50rem" }}>
                  <Column field="date" header="Date" className="text-light fw-600"> </Column>
                  <Column field="startDate" header="Start Date"></Column>
                  <Column field="endDate" header="End Date"></Column>
                  <Column field="amount" header="Amount"></Column>
                  <Column field="status" header="Status"></Column>
                </DataTable>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BillingDetail;
