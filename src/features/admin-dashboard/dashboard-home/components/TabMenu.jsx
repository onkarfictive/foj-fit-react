import React from "react";
import { TabMenu } from "primereact/tabmenu";

export default function BasicDemo() {
  const items = ["Today", "Week", "Month", "Year"];
  const [activeTab, setActiveTab] = React.useState("Week");

  return (
    <div className="custom-tabs-menu">
      <div className="d-flex justify-content-evenly align-items-center  border-rounded-20">
        {items.map((item, index) => (
          <p
            key={index}
            className={`fs-14 text-grey m-0 py-3 ${activeTab === item ? "active" : ""} cursor-pointer tab-menu`}
            onClick={() => setActiveTab(item)}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
