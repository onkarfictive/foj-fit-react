import React, { useState } from "react";
import gymImage from "@/assets/images/gym-1.png";
import gymLogo from "@/assets/images/gym-one.png";
import Heading from "@/common/ui/Heading";
import GymDetailCard from "./components/GymDetailCard";
import OwnerDetailCard from "./components/OwnerDetailCard";
import GymMembersTable from "./components/GymMembersTable";
import { Dropdown } from "primereact/dropdown";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";

function GymDetail() {
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];
  return (
    <div className="add-new-gym">
      <div className="row">
        <Heading title="Gym Detail" />

        <div className="row mb-3">
          <div className="col-md-7">
            <GymDetailCard />
          </div>
          <div className="col-md-5">
            <OwnerDetailCard />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="row align-items-center mb-3">
                  <div className="col-md-4">
                    <h5 className="p-2 m-0">Gym Members</h5>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-md-3">
                        <Dropdown
                          value={selectedCity}
                          onChange={(e) => setSelectedCity(e.value)}
                          options={cities}
                          className="w-100"
                          
                          placeholder="Subscription"
                          
                        />
                      </div>
                      <div className="col-md-3">
                        <Dropdown
                          value={selectedCity}
                          onChange={(e) => setSelectedCity(e.value)}
                          options={cities}
                          className="w-100"
                          
                          placeholder="Training"
                        />
                      </div>
                      <div className="col-md-3">
                        <Dropdown
                          value={selectedCity}
                          onChange={(e) => setSelectedCity(e.value)}                  
                          options={cities}                       
                          className="w-100"                                             
                          
                          placeholder="Status"
                        />
                      </div>
                      <div className="col-md-3">
                        <button className="btn btn-green w-100">Add Members</button>
                      </div>
                    </div>
                  </div>
                </div>
                <GymMembersTable />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GymDetail;