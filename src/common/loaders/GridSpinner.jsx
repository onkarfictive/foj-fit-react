import React from "react";
import { GridLoader, HashLoader, PuffLoader } from "react-spinners";

function GridSpinner({ loading = true }) {
 return <PuffLoader color={"#70f193"} loading={true} size={50} />;
}

export default GridSpinner;
