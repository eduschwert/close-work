import { Routes, Route, Navigate } from "react-router-dom";
import {
  ClientRoutes,
  DontProtectedRoutes,
  ProtectedRoutes,
  WorkerRoutes,
} from "../components/RoutesRules";
import { ServiceProvider } from "../context/ServicesContext";
import { Dashboard } from "../pages/dashboard";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { MoreInfo } from "../pages/moreInfo";
import { Register } from "../pages/register";

export const RoutesMain = () => {
  return (
    <>
      <Routes>
        <Route element={<DontProtectedRoutes />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route
          element={
            <ServiceProvider>
              <ProtectedRoutes />
            </ServiceProvider>
          }
        >
          <Route path="/more_info/:serviceId" element={<MoreInfo />} />

          <Route element={<ClientRoutes />}>
            <Route path="/home" element={<Home />} />
          </Route>

          <Route element={<WorkerRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
};
