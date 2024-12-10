import React, { useState } from "react";
import Heading from "../../../common/ui/Heading";
import UsersTable from "./UsersTable";
import { Dropdown } from "primereact/dropdown";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";

function Users() {
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "Status 1", code: "NY" },
    { name: "Status 2", code: "RM" },
    { name: "Status 3", code: "LDN" },
    { name: "Status 4", code: "IST" },
    { name: "Status 5", code: "PRS" },
  ];
  return (
    <div>
      <div className="row mb-4">
        <div className="col-md-9">
          <Heading title="Users" />
        </div>
        <div className="col-md-3 text-md-end">
          <button className="btn btn-green">
            +&nbsp;Add&nbsp;New&nbsp;User
          </button>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="row align-items-center mb-3">
            <div className="col-md-5">
              <h5 className="p-2 m-0">Users Listing</h5>
            </div>

            <div className="col-md-7 ">
              <div className="row">
                <div className="col-md-3  ">
                  <div className="">
                    <Dropdown
                      
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.value)}
                      options={cities}
                      optionLabel="name"
                      placeholder="Status"
                      className="w-100"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="">
                    <Dropdown
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.value)}
                      options={cities}
                      optionLabel="name"
                      placeholder="Subscription"
                      className="w-100 "

                      
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <IconField iconPosition="left">
                      <InputIcon className="pi pi-search"> </InputIcon>
                      <InputText placeholder="Search" className="w-100" />
                    </IconField>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <UsersTable />
        </div>
      </div>
    </div>
  );
}

export default Users;
