import React, { useState } from "react";
import SidebarWrapper from "@/layout/dashboard-layout/SidebarWrapper";
import Heading from "@/common/ui/Heading";
import walletIcon from "@/assets/icons/wallet-icon.png";
import userIcon from "@/assets/icons/user-icon.png";
import gymIcon from "@/assets/icons/gym-icon.png";
import StatCard from "./components/StatCard";
import PromoCard from "./components/PromoCard";
import RecentGym from "./components/RecentGym";
import CustomTabMenu from "./components/CustomTabMenu";
import RevenueChart from "./components/RevenueChart";
import DashboardBarChart from "./components/DashboardBarChart";
import { ArrowUp } from "iconsax-react";
import SubscriptionCard from "./components/Subscription";
import { Calendar } from "primereact/calendar";
import { InputIcon } from "primereact/inputicon";
import { IconField } from "primereact/iconfield";
import { InputText } from "primereact/inputtext";

function DashboardHome() {
  const [date, setDate] = useState(null);
  return (
    <div className="dashboard-home">
      <SidebarWrapper>
        <div className="row">
          <div className="col-md-9">
            <Heading title="Dashboard" subTitle="Default Dashboard" />
          </div>
          <div className="col-md-3">
            <CustomTabMenu />
          </div>
        </div>
        <div className="row">
          <div className="col-md-5">
            <PromoCard />
          </div>
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-4 h-100">
                <StatCard icon={gymIcon} title="Total Gyms" />
              </div>
              <div className="col-md-4 h-100">
                <StatCard icon={walletIcon} title="Wallet" />
              </div>
              <div className="col-md-4 h-100">
                <StatCard icon={userIcon} title="Total Users" />
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-7 h-100">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="fw-500">Revenue</h5>
                  <CustomTabMenu dark="dark" />
                </div>
                <div className="d-flex align-items-center gap-4 mb-3">
                  <div>
                    <div className="d-flex align-items-center gap-2">
                      <h5 className="m-0 py-1">₹ 1,50,250 </h5>
                      <span className="fs-14 bg-green px-2 py-1 text-dark border-rounded-20">
                        <ArrowUp size="14" />
                        2%
                      </span>
                    </div>
                    <p className="fs-12 text-grey">This month</p>
                  </div>
                  <div>
                    <div className="d-flex align-items-center gap-2">
                      <h5 className="m-0 py-1">₹ 54 </h5>
                      <span className="fs-14 bg-green px-2 py-1 text-dark border-rounded-20">
                        <ArrowUp size="14" />
                        8%
                      </span>
                    </div>
                    <p className="fs-12 text-grey">Daily Subscription</p>
                  </div>
                </div>
                <RevenueChart />
              </div>
            </div>
          </div>
          <div className="col-md-5 h-100">
            <RecentGym />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-5 h-100">
            <SubscriptionCard />
          </div>
          <div className="col-md-7 h-100">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="fw-500">Gym Enrollement Summary</h5>

                  <Calendar
                    value={date}
                    onChange={(e) => setDate(e.value)}
                    view="year"
                    dateFormat="yy"
                    showIcon={true}
                    inputClassName="custom-calendar-input"
                    placeholder="Select Year"
                  />
                </div>

                <div className="d-flex align-items-center gap-5 mb-3">
                  <div>
                    <div className="d-flex align-items-center gap-2">
                      <h5 className="m-0">₹ 1,50,250 </h5>
                    </div>
                    <p className="fs-12 text-grey">This month</p>
                  </div>
                  <div>
                    <div className="d-flex align-items-center gap-2">
                      <h5 className="m-0">54 </h5>
                    </div>
                    <p className="fs-12 text-grey">This Year</p>
                  </div>
                </div>
                <DashboardBarChart />
              </div>
            </div>
          </div>
        </div>
      </SidebarWrapper>
    </div>
  );
}

export default DashboardHome;
