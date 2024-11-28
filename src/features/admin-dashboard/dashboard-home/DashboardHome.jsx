import React from "react";
import SidebarWrapper from "../../../layout/dashboard-layout/SidebarWrapper";
import Heading from "../../../common/ui/Heading";
import dashboardMainImage from "../../../assets/images/dashboard-main.png";
import walletIcon from "../../../assets/icons/wallet-icon.png";
import userIcon from "../../../assets/icons/user-icon.png";
import gymIcon from "../../../assets/icons/gym-icon.png";
import StatCard from "./components/StatCard";
import womanImage from "../../../assets/images/Woman.png";
import PromoCard from "./components/PromoCard";
import BasicDemo from "./components/TabMenu";
import RecentGym from "./components/RecentGym";

function DashboardHome() {
  return (
    <SidebarWrapper>
      <div className="row">
        <div className="col-md-9">
          <Heading title="Dashboard" subTitle="Default Dashboard" />
        </div>
        <div className="col-md-3">
          <BasicDemo />
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
        <div className="col-md-7"></div>
        <div className="col-md-5">
          <RecentGym />
        </div>
      </div>
    </SidebarWrapper>
  );
}

export default DashboardHome;
