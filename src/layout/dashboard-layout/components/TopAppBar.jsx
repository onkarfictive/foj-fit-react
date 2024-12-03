import React from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, Switch } from "@mui/material";
import { HambergerMenu } from "iconsax-react";
import { InputSwitch } from "primereact/inputswitch";
import { deepPurple, green } from "@mui/material/colors";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "mode",
})(({ theme, open, mode }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: mode === "dark" ? "#222222" : "#ffffff",
  color: mode === "dark" ? "#ffffff" : "#000000",
  boxShadow: "none",
  transition: theme.transitions.create(
    ["width", "margin", "background-color"],
    {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }
  ),
  ...(open && {
    marginLeft: 240, // Match the `drawerWidth`
    width: `calc(100% - 240px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const TopAppBar = ({ open, handleDrawerOpen, mode, toggleTheme }) => (
  <AppBar position="fixed" open={open} mode={mode}>
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{ marginRight: 5, ...(open && { display: "none" }) }}
      >
        <HambergerMenu size="32" variant="Bulk" />
      </IconButton>
      <div className="w-100 d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <h6 className="m-0">
            Welcome Back{" "}
            <span className="bg-green text-black p-1 px-3 ms-1 fw-600 border-rounded-20">
              Piyush!
            </span>
          </h6>
        </div>
        <div className="d-flex align-items-center gap-3">
          <InputSwitch checked={mode === "dark"} onChange={toggleTheme} />
          <Avatar sx={{ bgcolor: green[300] }}></Avatar>
        </div>
      </div>
    </Toolbar>
  </AppBar>
);

export default TopAppBar;
