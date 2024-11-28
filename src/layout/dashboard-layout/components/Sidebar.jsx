import React, { useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MuiDrawer from "@mui/material/Drawer";
import DrawerHeader from "./DrawerHeader"; // Extracted
import TopAppBar from "./TopAppBar";
import MenuItems from "./MenuItems";
import { Typography } from "@mui/material";
import logo from "../../../assets/images/fojfit-logo.png";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": {
      ...openedMixin(theme),
      backgroundColor: "#222222", // Ensure background is applied
      color: "#fff", // Optional for better text contrast
    },
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": {
      ...closedMixin(theme),
      backgroundColor: "#222222", // Ensure background is applied
      color: "#fff", // Optional for better text contrast
    },
  }),
}));
export default function Sidebar({ mode, toggleTheme , children }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(
    () => JSON.parse(localStorage?.getItem("sidebarOpen")) ?? true
  );
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    localStorage?.setItem("sidebarOpen", JSON.stringify(open));
  }, [open]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <TopAppBar
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        mode={mode}
        toggleTheme={toggleTheme}
      />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <div className="d-flex justify-content-between align-items-center w-100">
            <div>
              <img src={logo} alt="Logo" className="" style={{height: "24px"}} />
            </div>
            <div>
              <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
          </div>
        </DrawerHeader>
        <Divider />
        <MenuItems open={open} />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
