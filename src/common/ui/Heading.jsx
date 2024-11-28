import React from "react";

function Heading({ title = "Dashboard", subTitle = "" }) {
  return (
    <div className="mb-1">
      <h3 className="fw-600 mb-2 text-2xl">{title}</h3>
      <p>
        Dashboard /{" "}
        <span className="text-main-green fw-500">{subTitle || title}</span>
      </p>
    </div>
  );
}

export default Heading;
