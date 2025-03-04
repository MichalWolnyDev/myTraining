import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./styles/index.css";
import Home from "./app/Home";
import AuthLayout from "./app/layouts/AuthLayout";
import Login from "./app/views/auth/Login";
import Register from "./app/views/auth/Register";
import { createTheme, MantineProvider } from "@mantine/core";
import Dashboard from "./app/views/Dashboard";

const theme = createTheme({
 fontFamily: 'Montserrat, sans-serif',
  defaultRadius: 'md'
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>
);
