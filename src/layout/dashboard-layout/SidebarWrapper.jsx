import { createTheme, ThemeProvider } from "@mui/material";
import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";

function SidebarWrapper({ children }) {
  const [mode, setMode] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

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
    localStorage.setItem("theme", mode);
    const themeClass = mode === "dark" ? "vela-green" : "saga-green";
    document.body.classList.remove("vela-green", "saga-green", "light", "dark");
    document.body.classList.add(themeClass);
    if (mode === "dark") {
      document.body.classList.add("dark");
    }
    localStorage.setItem("theme", mode);
    const themeLink = document.getElementById("theme-link");
    themeLink.href = `https://cdn.jsdelivr.net/npm/primereact/resources/themes/${themeClass}/theme.css`;
  }, [mode]);

  console.log("Mode on Wrapper", mode);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeProvider theme={theme}>
      <link
        id="theme-link"
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/primereact/resources/themes/saga-green/theme.css"
      />
      <Sidebar mode={mode} toggleTheme={toggleTheme}>
        {children}
      </Sidebar>
    </ThemeProvider>
  );
}

export default SidebarWrapper;
