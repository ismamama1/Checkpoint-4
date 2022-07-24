import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import ScrollToTop from "@services/ScrollToTop";
import { createTheme, ThemeProvider } from "@mui/material";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({
  palette: {
    primary: {
      main: "#24262E",
    },
    secondary: {
      main: "#84F877",
    },
  },
  typography: {
    fontFamily: ["Hind", "sans-serif"].join(","),
  },
});

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ScrollToTop />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
