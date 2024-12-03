import React from "react";

export default function CustomTabMenu({ dark="" }) {
  const items = ["Today", "Week", "Month", "Year"];
  const [activeTab, setActiveTab] = React.useState("Week");

  return (
    <div className={`custom-tabs-menu ${dark}`}>
      <div className="d-flex justify-content-evenly align-items-center border-rounded-20">
        {items.map((item, index) => (
          <p
            key={index}
            className={`fs-14  m-0 ${activeTab === item ? "active" : ""} cursor-pointer tab-menu`}
            onClick={() => setActiveTab(item)}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
