import React, { useEffect, useState } from "react";
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
import { motion, AnimatePresence } from "framer-motion";
import GridSpinner from "../../../common/loaders/GridSpinner";

const DashboardHome = () => {
  const [date, setDate] = useState(null);
  const [loading, setLoading] = useState(true);

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup
  }, []);

  return (
    <div>
      <AnimatePresence>
        {loading ? (
          // Loader Animation
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ height: "75vh" }}
            className="d-flex justify-content-center align-items-center"
          >
            <GridSpinner loading={true} />
          </motion.div>
        ) : (
          <>
            <motion.div
              className="dashboard-home"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Header Section */}
              <motion.div
                className="row align-items-center mb-4"
                variants={itemVariants}
              >
                <div className="col-md-9">
                  <Heading title="Dashboard" subTitle="Default Dashboard" />
                </div>
                <div className="col-md-3 text-md-end">
                  <CustomTabMenu />
                </div>
              </motion.div>

              {/* Promo and Stat Cards */}
              <div className="row mb-5">
                <motion.div className="col-md-5" variants={itemVariants}>
                  <PromoCard />
                </motion.div>
                <div className="col-md-7">
                  <motion.div className="row g-3" variants={containerVariants}>
                    <motion.div className="col-md-4" variants={itemVariants}>
                      <StatCard icon={gymIcon} title="Total Gyms" />
                    </motion.div>
                    <motion.div className="col-md-4" variants={itemVariants}>
                      <StatCard icon={walletIcon} title="Wallet" />
                    </motion.div>
                    <motion.div className="col-md-4" variants={itemVariants}>
                      <StatCard icon={userIcon} title="Total Users" />
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              {/* Revenue and Recent Gyms Section */}
              <div className="row mb-5">
                <motion.div className="col-md-7" variants={itemVariants}>
                  <div className="card h-100">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h5 className="fw-500">Revenue</h5>
                        <CustomTabMenu dark="dark" />
                      </div>
                      <div className="d-flex gap-4 mb-4">
                        <div>
                          <h5 className="mb-0">₹ 1,50,250</h5>
                          <span className="badge bg-success">
                            <ArrowUp size="14" />
                            2%
                          </span>
                        </div>
                        <div>
                          <h5 className="mb-0">₹ 54</h5>
                          <span className="badge bg-success">
                            <ArrowUp size="14" />
                            8%
                          </span>
                        </div>
                      </div>
                      <RevenueChart />
                    </div>
                  </div>
                </motion.div>
                <motion.div className="col-md-5" variants={itemVariants}>
                  <RecentGym />
                </motion.div>
              </div>

              {/* Gym Enrollment Summary and Subscription Section */}
              <div className="row">
                <motion.div className="col-md-5" variants={itemVariants}>
                  <SubscriptionCard />
                </motion.div>
                <motion.div className="col-md-7" variants={itemVariants}>
                  <div className="card h-100">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h5 className="fw-500">Gym Enrollment Summary</h5>
                        <Calendar
                          value={date}
                          onChange={(e) => setDate(e.value)}
                          view="year"
                          dateFormat="yy"
                          showIcon
                          placeholder="Select Year"
                        />
                      </div>
                      <div className="d-flex gap-5 mb-3">
                        <div>
                          <h5 className="mb-0">₹ 1,50,250</h5>
                          <p className="fs-12 text-grey m-0">This Month</p>
                        </div>
                        <div>
                          <h5 className="mb-0">54</h5>
                          <p className="fs-12 text-grey m-0">This Year</p>
                        </div>
                      </div>
                      <DashboardBarChart />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DashboardHome;
