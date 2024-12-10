import React, { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import CustomTabMenu from "../dashboard-home/components/CustomTabMenu";
import Heading from "../../../common/ui/Heading";
import RevenueLineChart from "../dashboard-home/components/RevenueChart";
import RevenueTable from "./components/RevenueTable";
import { Dropdown } from "primereact/dropdown";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";

function Revenue() {
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  // Animation Variants for Cards and Rows
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }, // Increased stagger time
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const tableVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }, // Stagger rows animation
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="revenue-container"
    >
      <motion.div
        className="row mb-4"
        variants={cardVariants}
        transition={{ duration: 1 }} // Increased duration time for transition
      >
        <div className="col-md-9">
          <Heading title="Revenue" />
        </div>
        <div className="col-md-3 text-md-end">
          <CustomTabMenu />
        </div>
      </motion.div>

      <motion.div
        className="row"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="col-md-4" variants={cardVariants}>
          <div className="card mb-3">
            <div className="card-body">
              <h4 className="fs-14 mb-0">Sales Revenue</h4>
              <p className="fs-12 text-grey">
                In last 30 days revenue from subscription.
              </p>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h5 className="">₹25,000</h5>
                  <p className="fs-12 text-grey mb-0">This Year</p>
                </div>
                <div className="col-md-6">
                  <h5 className="">₹15000</h5>
                  <p className="fs-12 text-grey mb-0">This Month</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <motion.div
                className="card mb-3"
                variants={cardVariants}
                transition={{ duration: 1 }} // Increased duration time for transition
              >
                <div className="card-body">
                  <h6 className="fs-12 mb-0">Active Subscriptions</h6>
                </div>
                <div className="card-body">
                  <h3 className="fs-14 mb-0">120</h3>
                </div>
              </motion.div>
            </div>
            <div className="col-md-6">
              <motion.div
                className="card mb-3"
                variants={cardVariants}
                transition={{ duration: 1 }} // Increased duration time for transition
              >
                <div className="card-body">
                  <h6 className="fs-12 mb-0">Average Subscriptions</h6>
                </div>
                <div className="card-body">
                  <h3 className="fs-14 mb-0">120</h3>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div className="col-md-8" variants={cardVariants}>
          <div className="card">
            <div className="card-body">
              <RevenueLineChart height={"245px"} />
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div className="card" variants={cardVariants}>
        <div className="card-body">
          <div className="row align-items-center mb-3">
            <div className="col-md-6">
              <h5 className="p-2 m-0">Subscription Revenue</h5>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-3">
                  <Dropdown
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.value)}
                    options={cities}
                    optionLabel="name"
                    placeholder="Subscription"
                  />
                </div>
                <div className="col-md-6">
                  <IconField iconPosition="left">
                    <InputIcon className="pi pi-search"></InputIcon>
                    <InputText placeholder="Search" className="w-100" />
                  </IconField>
                </div>
                <div className="col-md-3">
                  <button className="btn btn-green w-100">Download</button>
                </div>
              </div>
            </div>
          </div>
          {/* Animated RevenueTable with Framer Motion */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={tableVariants} // Apply table-level animation
          >
            <RevenueTable />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Revenue;
