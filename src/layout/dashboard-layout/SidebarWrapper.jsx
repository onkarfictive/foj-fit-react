import { createTheme, ThemeProvider } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./components/Sidebar";
import { toggleTheme } from "../../redux/themeSlice";

function SidebarWrapper({ children }) {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode === "dark" ? "dark" : "light",
          primary: {
            main: "#70F193",
          },
        },
        typography: {
          fontFamily: "Archivo, sans-serif",
        },
      }),
    [mode]
  );

  useEffect(() => {
    const themeClass = mode === "dark" ? "vela-green" : "saga-green";
    document.body.classList.remove("vela-green", "saga-green", "light", "dark");
    document.body.classList.add(themeClass);
    if (mode === "dark") {
      document.body.classList.add("dark");
    }
    const themeLink = document.getElementById("theme-link");
    themeLink.href = `https://cdn.jsdelivr.net/npm/primereact/resources/themes/${themeClass}/theme.css`;
  }, [mode]);

  const toggleThemeHandler = () => {
    dispatch(toggleTheme());
  };

  return (
    <ThemeProvider theme={theme}>
      <link
        id="theme-link"
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/primereact/resources/themes/saga-green/theme.css"
      />
      <Sidebar mode={mode} toggleTheme={toggleThemeHandler}>
        {children}
      </Sidebar>
    </ThemeProvider>
  );
}

export default SidebarWrapper;
