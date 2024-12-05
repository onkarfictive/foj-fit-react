import React, { useEffect } from "react";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { IoFastFoodSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { BsImage } from "react-icons/bs";
import { RiBarChartGroupedLine } from "react-icons/ri";
import { RiContactsBook3Fill } from "react-icons/ri";
import {
  AlignHorizontally,
  Bank,
  Calendar1,
  Chart21,
  HomeHashtag,
  Setting2,
  UserAdd,
} from "iconsax-react";

const MenuItems = ({ open }) => {
  const [categoryOpen, setCategoryOpen] = React.useState({});
  const location = useLocation();

  const menuItems = [
    {
      title: "Dashboard",
      icon: <HomeHashtag size="20" variant="Bulk" />,
      path: "/admin/dashboard",
      allow: true,
    },
    {
      title: "Gym Management",
      icon: <AlignHorizontally size="20" variant="Bulk" />,
      path: "/admin/gym-management",
    },
    {
      title: "Revenue",
      icon: <Chart21 size="20" variant="Bulk" />,
      path: "/admin/manage-revenue",
    },
    {
      title: "Subscriptions",
      icon: <Bank size="20" variant="Bulk" />,
      path: "/manage-customers",
    },
    {
      title: "Users",
      icon: <UserAdd size="20" variant="Bulk" />,
      path: "/manage-user",
    },
    {
      title: "Reports",
      icon: <Calendar1 size="20" variant="Bulk" />,
      path: "/banner",
    },
    {
      title: "Settings",
      icon: <Setting2 size="20" variant="Bulk" />,
      path: "/report",
    },
  ];

  useEffect(() => {
    menuItems.forEach((item, index) => {
      if (item.submenus) {
        const isSubmenuActive = item.submenus.some((submenu) =>
          location.pathname.startsWith(submenu.path)
        );

        if (isSubmenuActive) {
          setCategoryOpen((prevOpen) => ({
            ...prevOpen,
            [index]: true,
          }));
        } else {
          setCategoryOpen((prevOpen) => ({
            ...prevOpen,
            [index]: false,
          }));
        }
      }
    });
  }, [location.pathname]);

  const handleToggleSubmenu = (index) => {
    setCategoryOpen((prevOpen) => ({
      ...prevOpen,
      [index]: !prevOpen[index],
    }));
  };

  const isActive = (path) =>
    location.pathname === path || location.pathname.startsWith(path);
  const activeStyles = {
    background: "#2A372E",
    color: "#70F193",
    fontWeight: "600",
    "& .MuiListItemIcon-root": {
      color: "#70F193",
    },
    "&:hover": {
      backgroundColor: "#2A372E",
      color: "#70F193",
    },
    fontFamily: "Archivo, sans-serif",
    borderRadius: "12px",
  };

  const activeColorOnly = {
    color: "#70F193",
    fontWeight: "600",
    "& .MuiListItemIcon-root": {
      color: "#70F193",
    },
    "&:hover": {
      color: "#70F193",
    },
    fontFamily: "Archivo, sans-serif",
  };

  return (
    <>
      <List>
        {menuItems?.map((item, index) => (
          <div key={index} className="mb-2">
            <Link
              to={item.path || "#"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ListItemButton
                onClick={() =>
                  item.submenus ? handleToggleSubmenu(index) : null
                }
                sx={{
                  ...(isActive(item.path) || categoryOpen[index]
                    ? activeStyles
                    : {
                        color: "white", // White text when inactive
                        "& .MuiListItemIcon-root": {
                          color: "white", // White icon when inactive
                        },
                        fontFamily: "Archivo, sans-serif",
                        borderRadius: "12px",
                      }),
                }}
              >
                <ListItemIcon
                  sx={{
                    color: isActive(item.path) ? "#70F193" : "white",
                    fontSize: "16px",
                    minWidth: "28px",
                    maxWidth: "28px",
                    fontWeight: "600",
                    paddingLeft: !open ? "7px" : "0px",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  primaryTypographyProps={{
                    fontWeight: "500",
                    fontSize: "14px",
                  }}
                  sx={{ display: !open && "none" }}
                />
                {item.submenus ? (
                  categoryOpen[index] ? (
                    <ExpandLess sx={{ color: "rgba(1, 110, 205, 1)" }} />
                  ) : (
                    <ExpandMore sx={{ color: "#FFFFFF" }} />
                  )
                ) : null}
              </ListItemButton>
            </Link>
            {item.submenus && (
              <Collapse in={categoryOpen[index]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.submenus.map((submenu, subIndex) => (
                    <Link
                      key={subIndex}
                      to={submenu.path}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <ListItemButton
                        sx={{
                          pl: 4,
                          ...(isActive(submenu.path) ? activeColorOnly : {}),
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            color: isActive(submenu.path)
                              ? "#70F193"
                              : "#FFFFFF",
                            fontSize: "16px",
                            minWidth: "26px",
                            maxWidth: "26px",
                            fontWeight: "600",
                          }}
                        >
                          {submenu.icon}
                        </ListItemIcon>
                        <ListItemText
                          primary={submenu.title}
                          primaryTypographyProps={{
                            fontWeight: "500",
                            fontSize: "14px",
                          }}
                        />
                      </ListItemButton>
                    </Link>
                  ))}
                </List>
              </Collapse>
            )}
          </div>
        ))}
      </List>
    </>
  );
};

export default MenuItems;
