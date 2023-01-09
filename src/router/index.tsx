import { Navigate, Route, Routes } from "react-router-dom";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
import { Dashboard } from "../pages/dashboard";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { MoreInfo } from "../pages/moreInfo";
import { Register } from "../pages/register";

export const RoutesApp = () => {
  return (
    <>
      <Routes>
        <Route path="/home" index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/more_infos" element={<MoreInfo />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};
